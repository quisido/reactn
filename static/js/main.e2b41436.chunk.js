(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";var r=n(1),a=n(21),o=n(40),l=n(15),c=n(24),u=n(41),i=n(43),s=n(9),f=n(44),p=n(45),d=n(46),h=n(12),b=n(25),y=n(27),m=n(28);e.exports=Object.assign(i.default,r,{addCallback:o.default.bind(null,s.default),addReducer:l.default.bind(null,s.default),addReducers:c.default.bind(null,s.default),Component:a.ReactNComponent,createProvider:u.default,default:i.default,getGlobal:f.default.bind(null,s.default),PureComponent:a.ReactNPureComponent,removeCallback:p.default.bind(null,s.default),resetGlobal:d.default.bind(null,s.default),setGlobal:h.default.bind(null,s.default),useDispatch:b.default.bind(null,null),useGlobal:y.default.bind(null,null),withGlobal:m.default.bind(null,null)})},,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22);t.default=new r.default},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(9);t.default=r.createContext(a.default)},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function l(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(l,c)}u((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(c){o=[6,c],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n,o){var l=this;return void 0===o&&(o=null),null===o?t.set(n):t.set(n).then(function(n){return r(l,void 0,void 0,function(){return a(this,function(r){switch(r.label){case 0:return[4,e(t,o(n,t.dispatchers))];case 1:return r.sent(),[2,n]}})})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),a=n(9),o=n(12),l=function(){return r.default._currentValue2||a.default};t.ReactNComponentWillUnmount=function(e){l().removePropertyListener(e._globalCallback)},t.ReactNComponentWillUpdate=function(e){l().removePropertyListener(e._globalCallback)},t.ReactNDispatch=function(){return l().dispatchers},t.ReactNGlobalCallback=function(e){e.updater.enqueueForceUpdate(e,null,"forceUpdate")},t.ReactNGlobal=function(e,t){return void 0===t&&(t=l()),t.spyState(e._globalCallback)},t.ReactNSetGlobal=function(e,t,n,r){return void 0===r&&(r=l()),o.default(r,e,t)}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return e.addReducer(t,n)}},,,,,,function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),c=n(13),u=function(e){!function(e){if(Object.prototype.hasOwnProperty.call(e,"componentWillUnmount")){var t=e.componentWillUnmount;return e.componentWillUnmount=function(){c.ReactNComponentWillUnmount(e),t()},!0}return!1}(e)&&function(e){var t=Object.getPrototypeOf(e);!!Object.prototype.hasOwnProperty.call(t,"componentWillUnmount")&&(e.componentWillUnmount=function(){c.ReactNComponentWillUnmount(e),t.componentWillUnmount.bind(e)()})}(e),!function(e){if(Object.prototype.hasOwnProperty.call(e,"componentWillUpdate")){var t=e.componentWillUpdate;return e.componentWillUpdate=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];c.ReactNComponentWillUpdate(e),t.apply(void 0,o(n))},!0}return!1}(e)&&function(e){var t=Object.getPrototypeOf(e);!!Object.prototype.hasOwnProperty.call(t,"componentWillUpdate")&&(e.componentWillUpdate=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];c.ReactNComponentWillUpdate(e),t.componentWillUpdate.bind(e).apply(void 0,o(n))})}(e)},i=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r._globalCallback=r._globalCallback.bind(r),u(r),r}return r(t,e),Object.defineProperty(t.prototype,"dispatch",{get:function(){return c.ReactNDispatch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"global",{get:function(){return c.ReactNGlobal(this)},enumerable:!0,configurable:!0}),t.prototype.setGlobal=function(e,t){return void 0===t&&(t=null),c.ReactNSetGlobal(e,t,!0)},t.prototype._globalCallback=function(){return c.ReactNGlobalCallback(this)},t}(l.Component);t.ReactNComponent=i;var s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r._globalCallback=r._globalCallback.bind(r),u(r),r}return r(t,e),Object.defineProperty(t.prototype,"dispatch",{get:function(){return c.ReactNDispatch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"global",{get:function(){return c.ReactNGlobal(this)},enumerable:!0,configurable:!0}),t.prototype.setGlobal=function(e,t){return void 0===t&&(t=null),c.ReactNSetGlobal(e,t,!0)},t.prototype._globalCallback=function(){return c.ReactNGlobalCallback(this)},t}(l.PureComponent);t.ReactNPureComponent=s},function(e,t,n){"use strict";var r=this&&this.__values||function(e){var t="function"===typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(37),c=n(38),u=function(e){return Object.assign(Object.create(null),e)};t.INVALID_NEW_GLOBAL_STATE=new Error("ReactN global state must be a function, null, object, or Promise.");var i=function(){function e(e,t){void 0===e&&(e=Object.create(null)),void 0===t&&(t=Object.create(null)),this._callbacks=new Set,this._dispatchers=Object.create(null),this._propertyListeners=new Map,this._queue=new Map,this._reduxEnhancedStore=null,this._initialReducers=u(t),this._initialState=u(e),this._state=u(e),this._reduxEnhancedStore=c.createReduxEnhancedStore(this),this.addReducers(t)}return e.prototype.addCallback=function(e){var t=this;return this._callbacks.add(e),function(){return t.removeCallback(e)}},e.prototype.addPropertyListener=function(e,t){this.propertyListeners.has(e)?this.propertyListeners.get(e).add(t):this.propertyListeners.set(e,new Set([t]))},e.prototype.addReducer=function(e,t){var n=this;return this._dispatchers[e]=this.createDispatcher(t,e),function(){return n.removeDispatcher(e)}},e.prototype.addReducers=function(e){var t,n;try{for(var o=r(Object.entries(e)),l=o.next();!l.done;l=o.next()){var c=a(l.value,2),u=c[0],i=c[1];this.addReducer(u,i)}}catch(s){t={error:s}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},e.prototype.clearQueue=function(){return this.queue.clear()},e.prototype.createDispatcher=function(e,t){var n=this;return void 0===t&&(t="UNKNOWN_ACTION"),function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return n.reduxDispatch({args:r,type:t}),n.set(e.apply(void 0,o([n.state,n.dispatchers],r)))}},Object.defineProperty(e.prototype,"dispatchers",{get:function(){return u(this._dispatchers)},enumerable:!0,configurable:!0}),e.prototype.enqueue=function(e,t){this._queue.set(e,t)},e.prototype.flush=function(){var e,t,n,o,l,c,u,i,s=new Set;try{for(var f=r(this.queue.entries()),p=f.next();!p.done;p=f.next()){var d=a(p.value,2),h=d[0],b=d[1];if(this._state[h]=b,this.propertyListeners.has(h))try{for(var y=r(this.propertyListeners.get(h)),m=y.next();!m.done;m=y.next()){var v=m.value;s.add(v)}}catch(C){n={error:C}}finally{try{m&&!m.done&&(o=y.return)&&o.call(y)}finally{if(n)throw n.error}}}}catch(j){e={error:j}}finally{try{p&&!p.done&&(t=f.return)&&t.call(f)}finally{if(e)throw e.error}}this.clearQueue();try{for(var _=r(s),g=_.next();!g.done;g=_.next()){(v=g.value)()}}catch(P){l={error:P}}finally{try{g&&!g.done&&(c=_.return)&&c.call(_)}finally{if(l)throw l.error}}try{for(var E=r(this._callbacks),O=E.next();!O.done;O=E.next()){var w=O.value;this.set(w(this.state,this.dispatchers))}}catch(R){u={error:R}}finally{try{O&&!O.done&&(i=E.return)&&i.call(E)}finally{if(u)throw u.error}}},e.prototype.getDispatcher=function(e){if(this.hasDispatcher(e))return this._dispatchers[e];throw new Error("Cannot return unknown ReactN reducer `"+e+"`.")},e.prototype.hasCallback=function(e){return this._callbacks.has(e)},e.prototype.hasPropertyListener=function(e){var t,n,a,o;try{for(var l=r(this.propertyListeners.values()),c=l.next();!c.done;c=l.next()){var u=c.value;try{for(var i=r(u),s=i.next();!s.done;s=i.next()){if(s.value===e)return!0}}catch(f){a={error:f}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(a)throw a.error}}}}catch(p){t={error:p}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return!1},e.prototype.hasDispatcher=function(e){return Object.prototype.hasOwnProperty.call(this._dispatchers,e)},Object.defineProperty(e.prototype,"queue",{get:function(){return this._queue},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"propertyListeners",{get:function(){return this._propertyListeners},enumerable:!0,configurable:!0}),e.prototype.reduxDispatch=function(e){var t=this.reduxEnhancedStore;return!!t&&(t.dispatch(e),!0)},Object.defineProperty(e.prototype,"reduxEnhancedStore",{get:function(){return this._reduxEnhancedStore},enumerable:!0,configurable:!0}),e.prototype.removeCallback=function(e){return this._callbacks.delete(e)},e.prototype.removeDispatcher=function(e){return!!this.hasDispatcher(e)&&(delete this._dispatchers[e],!0)},e.prototype.removePropertyListener=function(e){var t,n,a=!1;try{for(var o=r(this.propertyListeners.values()),l=o.next();!l.done;l=o.next()){var c=l.value;a=a||c.delete(e)}}catch(u){t={error:u}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return a},e.prototype.reset=function(){this._callbacks.clear(),this._dispatchers=Object.create(null),this._propertyListeners.clear(),this._queue.clear(),this.addReducers(this._initialReducers),this._state=u(this._initialState),this._reduxEnhancedStore=c.createReduxEnhancedStore(this)},e.prototype.set=function(e){if(null===e||"undefined"===typeof e)return Promise.resolve(this.state);if(e instanceof Promise)return this.setPromise(e);if("function"===typeof e)return this.setFunction(e);if(this.reduxDispatch({stateChange:e,type:"STATE_CHANGE"}),"object"===typeof e)return this.setObject(e);throw t.INVALID_NEW_GLOBAL_STATE},e.prototype.setFunction=function(e){return this.set(e(this.state))},e.prototype.setObject=function(e){var t,n,a=Object.keys(e);try{for(var o=r(a),l=o.next();!l.done;l=o.next()){var c=l.value,u=e[c];this.enqueue(c,u)}}catch(i){t={error:i}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return this.flush(),Promise.resolve(this.state)},e.prototype.setPromise=function(e){var t=this;return e.then(function(e){return t.set(e)})},e.prototype.spyState=function(e){var t=this;return l.default(this._state,function(n){t.addPropertyListener(n,e)})},Object.defineProperty(e.prototype,"state",{get:function(){return u(this._state)},enumerable:!0,configurable:!0}),e}();t.default=i},,function(e,t,n){"use strict";var r=this&&this.__values||function(e){var t="function"===typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l};Object.defineProperty(t,"__esModule",{value:!0});var o=n(15);t.default=function(e,t){var n,l,c=new Set;try{for(var u=r(Object.entries(t)),i=u.next();!i.done;i=u.next()){var s=a(i.value,2),f=s[0],p=s[1];c.add(o.default(e,f,p))}}catch(d){n={error:d}}finally{try{i&&!i.done&&(l=u.return)&&l.call(u)}finally{if(n)throw n.error}}return function(){var e,t,n=!0;try{for(var a=r(c),o=a.next();!o.done;o=a.next()){var l=o.value;n=n&&l()}}catch(u){e={error:u}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(11),o=n(9),l=n(26);t.default=function(e,t){if(!r.useContext)throw l.default;var n=e||r.useContext(a.default)||o.default;return"function"===typeof t?n.createDispatcher(t):n.getDispatcher(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Error("The installed version of React does not support Hooks, which are required for useGlobal.")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(42),o=n(11),l=n(9),c=n(12),u=n(26);t.default=function(e,t){if(!r.useContext)throw u.default;var n=e||r.useContext(o.default)||l.default,i=a.default(),s=function(){n.removePropertyListener(i)};if("undefined"===typeof t)return r.useEffect(function(){return s}),[n.spyState(i),function(e,t){return void 0===t&&(t=null),c.default(n,e,t)}];return r.useEffect(function(){return n.addPropertyListener(t,i),s}),[n.state[t],function(e,r){void 0===r&&(r=null);var a=Object.create(null);return a[t]=e,c.default(n,a,r)}]}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=n(21),c=n(11),u=n(9),i=n(13),s=function(e){return"string"===typeof e?e:e.displayName||e.name},f=!1,p=!1,d=!1;t.default=function(e,t,n){return void 0===e&&(e=null),void 0===t&&(t=function(e){return e}),void 0===n&&(n=function(){return null}),function(h){var b;return(b=function(l){function c(){var t=null!==l&&l.apply(this,arguments)||this;return t.setGlobal=function(n,r){return void 0===r&&(r=null),i.ReactNSetGlobal(n,r,!f&&!p&&!d,e||t.context||u.default)},t}return r(c,l),Object.defineProperty(c.prototype,"global",{get:function(){return i.ReactNGlobal(this,e||this.context||u.default)},enumerable:!0,configurable:!0}),c.prototype.render=function(){var e=a({},this.props,t(this.global,this.props),n(this.setGlobal,this.props));return o.createElement(h,e)},c}(l.ReactNComponent)).contextType=c.default,b.displayName=s(h)+"-ReactN",b}}},,,,,,,function(e,t,n){e.exports=n(66)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Object.keys(e).reduce(function(n,r){return Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){return t(r),e[r]}}),n},Object.create(null))}},function(e,t,n){"use strict";this&&this.__assign;Object.defineProperty(t,"__esModule",{value:!0});t.createReduxEnhancedStore=function(e){try{return null}catch(t){return null}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.addCallback(t)}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n(11),l=n(15),c=n(24),u=n(22),i=n(12),s=n(25),f=n(27),p=n(28);t.default=function(e,t){void 0===e&&(e=Object.create(null)),void 0===t&&(t=Object.create(null));var n=new u.default(e,t);return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.addCallback=function(e){return n.addCallback(e)},t.addReducer=function(e,t){return l.default(n,e,t)},t.addReducers=function(e){return c.default(n,e)},Object.defineProperty(t,"dispatch",{get:function(){return n.dispatchers},enumerable:!0,configurable:!0}),t.getDispatch=function(){return n.dispatchers},t.getGlobal=function(){return n.state},Object.defineProperty(t,"global",{get:function(){return n.state},enumerable:!0,configurable:!0}),t.removeCallback=function(e){return n.removeCallback(e)},t.reset=function(){return n.reset()},t.setGlobal=function(e,t){return void 0===t&&(t=null),i.default(n,e,t)},t.useDispatch=function(e){return s.default(n,e)},t.useGlobal=function(e){return f.default(n,e)},t.withGlobal=function(e,t){return void 0===e&&(e=function(e){return e}),void 0===t&&(t=function(){return null}),p.default(n,e,t)},t.prototype.render=function(){return a.createElement(o.default.Provider,{value:n},this.props.children)},t}(a.Component)}},,function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(13),c=!1,u=!1,i=!1,s=function(e){return"string"===typeof e?e:e.displayName||e.name};t.default=function(e){return function(t){function n(e,n){var r=t.call(this,e,n)||this;return r._globalCallback=r._globalCallback.bind(r),r}return r(n,t),n.prototype.componentWillUnmount=function(){l.ReactNComponentWillUnmount(this),t.prototype.componentWillUnmount&&t.prototype.componentWillUnmount.call(this)},n.prototype.componentWillUpdate=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];l.ReactNComponentWillUpdate(this),t.prototype.componentWillUpdate&&t.prototype.componentWillUpdate.apply(this,o(e))},Object.defineProperty(n.prototype,"dispatch",{get:function(){return l.ReactNDispatch()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"global",{get:function(){return l.ReactNGlobal(this)},enumerable:!0,configurable:!0}),n.prototype.setGlobal=function(e,t){return void 0===t&&(t=null),l.ReactNSetGlobal(e,t,!c&&!u&&!i)},n.prototype._globalCallback=function(){return l.ReactNGlobalCallback(this)},n.displayName=s(e)+"-ReactN",n}(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.state}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.removeCallback(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.reset()}},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(31),l=n.n(o),c=n(7),u=n(8);function i(){return Object(r.useDispatch)("setColor")("#61DAFB"),a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"ReactN")," ","is a global state management solution for"," ",a.a.createElement("strong",null,"ReactJS"),".")}function s(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Use ",a.a.createElement("code",null,"addCallback")," to execute a function whenever the state changes. The return value of the callback will update the global state, so be sure to only return ",a.a.createElement("code",null,"undefined")," or"," ",a.a.createElement("code",null,"null")," if you do not want the global state to change. Be aware that always returning a new state value will result in an infinite loop, as the new global state will trigger the very same callback."),a.a.createElement("p",null,"The only parameter is the callback function."),"EXAMPLE1",a.a.createElement("p",null,"The return value of ",a.a.createElement("code",null,"addCallback")," is a function that, when executed, removes the callback."),"EXAMPLE2")}function f(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Use ",a.a.createElement("code",null,"addReducer")," to add a reducer to your global state."),a.a.createElement("p",null,"The first parameter is the name of your reducer. You will access your reducer by this name: ",a.a.createElement("code",null,"this.global.reducerName")," or",a.a.createElement("code",null,"useGlobalReducer('reducerName')"),"."),a.a.createElement("p",null,"The second parameter is the reducer function. The reducer function that you write has two parameters: first, the global state; second, the value passed to the reducer. The reducer function that you use has one parameter: the value to pass to the reducer."),"EXAMPLE1",a.a.createElement("p",null,"For a class component, the analogous method is"," ",a.a.createElement("code",null,"this.global.increment(value)"),"."))}function p(){return a.a.createElement("p",null,"Coming soon...")}function d(){return a.a.createElement("p",null,"Coming soon...")}function h(){return a.a.createElement("p",null,"Coming soon...")}function b(){return a.a.createElement("p",null,"Coming soon...")}function y(){return a.a.createElement("p",null,"Coming soon...")}function m(){return a.a.createElement("p",null,"Coming soon...")}function v(){return a.a.createElement("p",null,"Coming soon...")}function _(){return a.a.createElement("p",null,"Coming soon...")}function g(){return a.a.createElement("p",null,"Coming soon...")}function E(){return Object(r.useDispatch)("setColor")("#FF0000"),a.a.createElement(a.a.Fragment,null,a.a.createElement("code",null,"yarn add reactn"))}n(50);var O=n(6),w=(n(51),n(52),"M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"),C="#202020",j="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z",P=69;function R(){var e=Object(r.useGlobal)("color"),t=Object(O.a)(e,1)[0];return a.a.createElement("a",{className:"app-header-github-banner",href:"https://github.com/CharlesStover/reactn",rel:"nofollower nofollower noopener",target:"_blank",title:"ReactN on GitHub"},a.a.createElement("svg",{fill:C,height:P,width:P,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250 250"},a.a.createElement("path",{className:"app-header-github-banner-background",d:"M0 0l115 115h15l12 27 108 108V0z",style:{fill:t}}),a.a.createElement("path",{className:"app-header-github-banner-arm",d:w}),a.a.createElement("path",{d:j})))}n(53);var x="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3 c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9 c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6 c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11 c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6 c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4 c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6 c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5 c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2 c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8 c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9 c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3 c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9 c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7 c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9 C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6 c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1 c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6 C644,312.2,621.1,332.1,585.7,347.1z",N=300/267,k=426.15,G=135.475,S=(585.3-267)/2/2,M=570.95;function D(e){var t=e.className,n={fill:e.fill};return a.a.createElement("svg",{className:t,enableBackground:"new "+"".concat(G," ").concat(S," ").concat(M," ").concat(k),height:"1em",version:"1.1",viewBox:"".concat(G," ").concat(S," ").concat(M," ").concat(k),width:"".concat(N,"em"),x:"0px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",y:"0px"},a.a.createElement("g",null,a.a.createElement("circle",{cx:"420.9",cy:"296.5",r:"45.7",style:n}),a.a.createElement("path",{d:x,style:n}),a.a.createElement("polygon",{points:"320.8,78.4 320.8,78.4 320.8,78.4",style:n}),a.a.createElement("polygon",{points:"520.5,78.1 520.5,78.1 520.5,78.1",style:n})))}function U(){var e=Object(r.useGlobal)("color"),t=Object(O.a)(e,1)[0];return a.a.createElement("header",{className:"app-header",style:{backgroundColor:t}},a.a.createElement("div",null,a.a.createElement("h1",null,a.a.createElement(c.b,{title:"ReactN Documentation",to:"/"},"React",a.a.createElement(D,{className:"app-header-react-logo",fill:t}),"N"))),a.a.createElement(R,null))}n(62);var L=n(34),W=n.n(L),A=(n(64),"app-navigation-list-item"),T="".concat(A," ").concat(A,"-selected"),z="".concat(A," ").concat(A,"-unselected"),F=function(e){return Object.prototype.hasOwnProperty.call(e,"pages")},I=function(e,t){return e.reduce(function(e,n){var r=Object(O.a)(n,1)[0];return e||t.substring(1)===r},!1)};function q(e){var t=Object(r.useGlobal)(),n=Object(O.a)(t,1)[0],o=W()().location;if(F(e)){var l=I(e.pages,o.pathname);return a.a.createElement("li",{className:l?T:z},a.a.createElement("strong",null,a.a.createElement(c.b,{title:"".concat(e.pages[0][1]," - ReactN Documentation"),to:"/".concat(e.pages[0][0])},e.children)),a.a.createElement("ul",null,e.pages.map(function(e){var t=Object(O.a)(e,2),r=t[0],l=t[1];return o.pathname.substring(1)===r?a.a.createElement("li",{className:T,key:r,style:{color:n.color}},"\u2b9e ",l):a.a.createElement("li",{className:z,key:r},a.a.createElement(c.b,{key:r,title:"".concat(l," - ReactN Documentation"),to:"/".concat(r)},l))})))}return o.pathname.substring(1)===e.to?a.a.createElement("li",{className:T},a.a.createElement("strong",{style:{color:n.color}},"\u2b9e ",e.children)):a.a.createElement("li",{className:z},a.a.createElement("strong",null,a.a.createElement(c.b,{title:"".concat(e.children," - ReactN Documentation"),to:"/".concat(e.to)},e.children)))}var B={API:[["addCallback","addCallback"],["addReducer","addReducer"],["createProvider","createProvider"],["getGlobal","getGlobal"],["removeCallback","removeCallback"],["resetGlobal","resetGlobal"],["setGlobal","setGlobal"],["useGlobal","useGlobal"],["useGlobalReducer","useGlobalReducer"],["withGlobal","withGlobal"]],EXAMPLES:[["async-example","Asynchronous"],["counter-example","Counter"],["shopping-cart-example","Shopping Cart"],["todo-example","TODO"]],GETTING_STARTED:[["install","Installation"]]};function X(){var e=Object(r.useGlobal)("color"),t=Object(O.a)(e,1)[0];return a.a.createElement("nav",{className:"app-navigation",style:{backgroundColor:t}},a.a.createElement("ul",null,a.a.createElement(q,{to:""},"About"),a.a.createElement(q,{pages:B.GETTING_STARTED},"Getting Started"),a.a.createElement(q,{pages:B.API},"API"),a.a.createElement(q,{pages:B.EXAMPLES},"Examples"),a.a.createElement(q,{to:"support"},"Support")))}n(65);Object(r.setGlobal)({color:"#61DAFB"}),Object(r.addReducers)({setColor:function(e,t,n){if(n!==e.color)return{color:n}}}),l.a.render(a.a.createElement(c.a,null,a.a.createElement(function(){return a.a.createElement("div",{className:"app"},a.a.createElement(U,null),a.a.createElement("div",null,a.a.createElement("main",null,a.a.createElement(u.Switch,null,a.a.createElement(u.Route,{component:E,path:"/install"}),a.a.createElement(u.Route,{component:s,path:"/addCallback"}),a.a.createElement(u.Route,{component:f,path:"/addReducer"}),a.a.createElement(u.Route,{component:p,path:"/createProvider"}),a.a.createElement(u.Route,{component:d,path:"/getGlobal"}),a.a.createElement(u.Route,{component:h,path:"/removeCallback"}),a.a.createElement(u.Route,{component:b,path:"/resetGlobal"}),a.a.createElement(u.Route,{component:y,path:"/setGlobal"}),a.a.createElement(u.Route,{component:m,path:"/useDispatch"}),a.a.createElement(u.Route,{component:v,path:"/useGlobal"}),a.a.createElement(u.Route,{component:_,path:"/withGlobal"}),a.a.createElement(u.Route,{component:g,path:"/support"}),a.a.createElement(u.Route,{component:i}))),a.a.createElement(X,null)))},null)),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.e2b41436.chunk.js.map