import { expect } from 'chai';
import defaultGlobalStateManager from './default-global-state-manager';
import GlobalStateManager from './global-state-manager';

describe('Default GlobalStateManager', (): void => {

  it('should be a GlobalStateManager', (): void => {
    expect(defaultGlobalStateManager).to.be.instanceOf(GlobalStateManager);
  });

  it('should have an empty state', (): void => {
    expect(defaultGlobalStateManager.state).to.deep.equal({});
  });

  it('should not have dispatchers', (): void => {
    expect(defaultGlobalStateManager.dispatchers).to.deep.equal({});
  });
});
