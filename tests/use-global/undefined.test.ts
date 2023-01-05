import GlobalStateManager from '../../src/global-state-manager';
import useGlobal from '../../src/use-global';
import REACT_HOOKS_ERROR from '../../src/utils/react-hooks-error';
import DispatchFunction from '../../types/dispatch-function';
import Dispatchers from '../../types/dispatchers';
import { GlobalTuple } from '../../types/use-global';
import HookTest from '../utils/hook-test';
import { G, INITIAL_REDUCERS, INITIAL_STATE, R } from '../utils/initial';
import { hasHooks } from '../utils/react-version';



type P = [ ];

// T for Tuple
type T = GlobalTuple<G>;



const STATE_CHANGE: Partial<G> = {
  x: true,
};

const NEW_STATE: G = {
  ...INITIAL_STATE,
  ...STATE_CHANGE,
};



describe('useGlobal()', (): void => {

  let globalStateManager: GlobalStateManager<G, R>;
  beforeEach((): void => {
    globalStateManager =
      new GlobalStateManager(INITIAL_STATE, INITIAL_REDUCERS);
  });



  // If Hooks are not supported,
  if (!hasHooks) {
    it('should require Hooks', (): void => {
      expect((): void => {
        useGlobal(globalStateManager);
      }).toThrowError(REACT_HOOKS_ERROR);
    });
    return;
  }



  let testUseGlobal: HookTest<P, T>;
  beforeEach((): void => {
    testUseGlobal =
      new HookTest(
        (): T => useGlobal(globalStateManager),
      );
  });



  it('should return a tuple', (): void => {
    testUseGlobal.render();
    expect(testUseGlobal.value).toBeInstanceOf(Array);
    expect(testUseGlobal.value).toHaveLength(2);
    expect(testUseGlobal.value[0]).toEqual(INITIAL_STATE);
    expect(testUseGlobal.value[1]).toBeInstanceOf(Function);
    expect(testUseGlobal.value[1]).toHaveLength(2);
  });



  describe('value', (): void => {

    it(
      'should subscribe to related state changes',
      async (): Promise<void> => {
        expect(testUseGlobal.renders).toBe(0);
        testUseGlobal.render();
        const [ global, setGlobal ]: T = testUseGlobal.value;
        expect(testUseGlobal.renders).toBe(1);
        global.x;
        await setGlobal(STATE_CHANGE);
        expect(testUseGlobal.renders).toBe(3);
      }
    );

    it(
      'should not subscribe to unrelated state changes',
      async (): Promise<void> => {
        expect(testUseGlobal.renders).toBe(0);
        testUseGlobal.render();
        const [ global, setGlobal ]: T = testUseGlobal.value;
        expect(testUseGlobal.renders).toBe(1);
        global.y;
        await setGlobal(STATE_CHANGE);
        expect(testUseGlobal.renders).toBe(1);
      }
    );

    it('should update with state changes', async (): Promise<void> => {

      // Arrange
      testUseGlobal.render();
      const [ global, setGlobal ] = testUseGlobal.value;
      expect(global).toEqual(INITIAL_STATE);
      expect(global).not.toEqual(NEW_STATE);

      // Act
      await setGlobal(STATE_CHANGE);

      // Assert
      const [ newGlobal ] = testUseGlobal.value;
      expect(newGlobal).toEqual(NEW_STATE);
    });
  });



  describe('setter', (): void => {

    it('should maintain reference across renders', async (): Promise<void> => {
      testUseGlobal.render();
      const [ , setGlobal ]: T = testUseGlobal.value;
      await setGlobal(STATE_CHANGE);
      const [ , setGlobal2 ]: T = testUseGlobal.value;
      expect(setGlobal).toBe(setGlobal2);
    });

    describe('with callback', (): void => {
      const CALLBACK: jest.Mock<void, [ G, DispatchFunction<G> & Dispatchers<G, R> ]> = jest.fn();

      it(
        'should return a Promise of the new global state',
        async (): Promise<void> => {
          testUseGlobal.render();
          const [ , setGlobal ]: T = testUseGlobal.value;
          let set: Promise<G>;
          set = setGlobal(STATE_CHANGE, CALLBACK);
          expect(set).toBeInstanceOf(Promise);
          let value: G;
          value = await set;
          expect(value).toEqual(NEW_STATE);
        }
      );

      it('should update the state', async (): Promise<void> => {
        testUseGlobal.render();
        const [ , setGlobal ]: T = testUseGlobal.value;
        await setGlobal(STATE_CHANGE, CALLBACK);
        expect(globalStateManager.state).toEqual(NEW_STATE);
      });

      it('should execute the callback', async (): Promise<void> => {
        testUseGlobal.render();
        const [ , setGlobal ]: T = testUseGlobal.value;
        await setGlobal(STATE_CHANGE, CALLBACK);
        expect(CALLBACK).toHaveBeenCalledTimes(1);
        expect(CALLBACK).toHaveBeenCalledWith(
          NEW_STATE,
          expect.anything(),
          STATE_CHANGE,
        );
        expect(CALLBACK.mock.calls[0][1].toString())
          .toBe(globalStateManager.dispatcherMap.toString());
      });
    });

    describe('without callback', (): void => {

      it(
        'should return a Promise of the new global state',
        async (): Promise<void> => {
          testUseGlobal.render();
          const [ , setGlobal ]: T = testUseGlobal.value;
          let set: Promise<G>;
          set = setGlobal(STATE_CHANGE);
          expect(set).toBeInstanceOf(Promise);
          let value: G;
          value = await set;
          expect(value).toEqual(NEW_STATE);
        }
      );

      it('should update the state', async (): Promise<void> => {
        testUseGlobal.render();
        const [ , setGlobal ]: T = testUseGlobal.value;
        await setGlobal(STATE_CHANGE);
        expect(globalStateManager.state).toEqual(NEW_STATE);
      });
    });
  });

});
