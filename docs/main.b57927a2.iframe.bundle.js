(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{212:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return inline_YocoInline})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useYocoPopUp_useYocoPopUp}));__webpack_require__(284),__webpack_require__(5),__webpack_require__(8),__webpack_require__(54),__webpack_require__(7),__webpack_require__(285),__webpack_require__(17),__webpack_require__(14),__webpack_require__(10),__webpack_require__(13),__webpack_require__(12),__webpack_require__(6),__webpack_require__(25);var react=__webpack_require__(0);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useSdk_useSdk=function useSdk(publicKey){var _useState2=_slicedToArray(Object(react.useState)(),2),yoco=_useState2[0],setYoco=_useState2[1],initSdk=function initSdk(){setYoco(new window.YocoSDK({publicKey:publicKey||"pk_test_ed3c54a6gOol69qa7f45"}))};return Object(react.useEffect)((function(){window.YocoSDK?initSdk():function addScript(onLoad){var script=document.createElement("script");script.src="https://js.yoco.com/sdk/v1/yoco-sdk-web.js",script.async=!0,script.onload=onLoad,document.head.appendChild(script)}((function(){return initSdk()}))}),[]),yoco};try{useSdk_useSdk.displayName="useSdk",useSdk_useSdk.__docgenInfo={description:"",displayName:"useSdk",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useSdk.tsx#useSdk"]={docgenInfo:useSdk_useSdk.__docgenInfo,name:"useSdk",path:"src/useSdk.tsx#useSdk"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__(98);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function inline_slicedToArray(arr,i){return function inline_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function inline_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function inline_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return inline_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return inline_arrayLikeToArray(o,minLen)}(arr,i)||function inline_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function inline_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var inline_YocoInline=function YocoInline(_ref){var amountInCents=_ref.amountInCents,currency=_ref.currency,description=_ref.description,customer=_ref.customer,metadata=_ref.metadata,publicKey=_ref.publicKey,_ref$showErrors=_ref.showErrors,showErrors=void 0===_ref$showErrors||_ref$showErrors,submitButtonText=_ref.submitButtonText,_ref$showSubmitButton=_ref.showSubmitButton,showSubmitButton=void 0!==_ref$showSubmitButton&&_ref$showSubmitButton,_ref$onError=_ref.onError,onError=void 0===_ref$onError?function(){}:_ref$onError,_ref$onReady=_ref.onReady,onReady=void 0===_ref$onReady?function(){}:_ref$onReady,_ref$onResult=_ref.onResult,onResult=void 0===_ref$onResult?function(){}:_ref$onResult,_ref$onSubmit=_ref.onSubmit,onSubmit=void 0===_ref$onSubmit?function(){}:_ref$onSubmit,divRef=Object(react.useRef)(null),_useState2=inline_slicedToArray(Object(react.useState)(),2),inline=_useState2[0],setInline=_useState2[1],_useState4=inline_slicedToArray(Object(react.useState)(!1),2),ready=_useState4[0],setReady=_useState4[1],sdk=useSdk_useSdk(publicKey);Object(react.useEffect)((function(){if(sdk&&!ready){var options={currency:currency,amountInCents:amountInCents,showErrors:showErrors};description&&(options.description=description),metadata&&(options.metadata=metadata),customer&&(options.customer=customer),showSubmitButton&&(options.showSubmitButton=showSubmitButton),submitButtonText&&(options.submitButtonText=submitButtonText);var inlineInstance=sdk.inline(options);inlineInstance.on("ready",(function(){onReady()})),null!=divRef.current&&(inlineInstance.mount(divRef.current),setInline(inlineInstance),setReady(!0))}}));var handleSubmit=function(){var _ref2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(e){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(e.preventDefault(),onSubmit(),inline){_context.next=4;break}return _context.abrupt("return");case 4:inline.createToken().then((function(result){onResult(result)})).catch((function(error){onError(error)}));case 5:case"end":return _context.stop()}}),_callee)})));return function handleSubmit(_x){return _ref2.apply(this,arguments)}}();return Object(jsx_runtime.jsx)("form",{method:"POST",onSubmit:handleSubmit,children:Object(jsx_runtime.jsx)("div",{ref:divRef})})};inline_YocoInline.displayName="YocoInline";try{inline_YocoInline.displayName="YocoInline",inline_YocoInline.__docgenInfo={description:"",displayName:"YocoInline",props:{currency:{defaultValue:null,description:"",name:"currency",required:!0,type:{name:"enum",value:[{value:'"ZAR"'},{value:'"MUR"'}]}},publicKey:{defaultValue:null,description:"",name:"publicKey",required:!1,type:{name:"string"}},showSubmitButton:{defaultValue:{value:"false"},description:"",name:"showSubmitButton",required:!1,type:{name:"boolean"}},submitButtonText:{defaultValue:null,description:"",name:"submitButtonText",required:!1,type:{name:"string"}},onReady:{defaultValue:{value:"() => {}"},description:"",name:"onReady",required:!1,type:{name:"(() => void)"}},onSubmit:{defaultValue:{value:"() => {}"},description:"",name:"onSubmit",required:!1,type:{name:"(() => void)"}},onResult:{defaultValue:{value:"() => {}"},description:"",name:"onResult",required:!1,type:{name:"((result: YocoSDKResult) => void)"}},onError:{defaultValue:{value:"() => {}"},description:"",name:"onError",required:!1,type:{name:"((error?: Error) => void)"}},amountInCents:{defaultValue:null,description:"",name:"amountInCents",required:!0,type:{name:"number"}},customer:{defaultValue:null,description:"",name:"customer",required:!1,type:{name:"Customer"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"object"}},showErrors:{defaultValue:{value:"true"},description:"",name:"showErrors",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/inline.tsx#YocoInline"]={docgenInfo:inline_YocoInline.__docgenInfo,name:"YocoInline",path:"src/inline.tsx#YocoInline"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(16);function useYocoPopUp_slicedToArray(arr,i){return function useYocoPopUp_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useYocoPopUp_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useYocoPopUp_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useYocoPopUp_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useYocoPopUp_arrayLikeToArray(o,minLen)}(arr,i)||function useYocoPopUp_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useYocoPopUp_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useYocoPopUp_useYocoPopUp=function useYocoPopUp(publicKey){var _useState2=useYocoPopUp_slicedToArray(Object(react.useState)(),2),result=_useState2[0],setResult=_useState2[1],yoco=useSdk_useSdk(publicKey);return{ready:!!yoco,result:result,showPopUp:function showPopUp(params){yoco&&yoco.showPopup(Object.assign({},params,{callback:function callback(result){setResult(result)}}))}}};try{useYocoPopUp_useYocoPopUp.displayName="useYocoPopUp",useYocoPopUp_useYocoPopUp.__docgenInfo={description:"",displayName:"useYocoPopUp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/useYocoPopUp.tsx#useYocoPopUp"]={docgenInfo:useYocoPopUp_useYocoPopUp.__docgenInfo,name:"useYocoPopUp",path:"src/useYocoPopUp.tsx#useYocoPopUp"})}catch(__react_docgen_typescript_loader_error){}try{YocoInline.displayName="YocoInline",YocoInline.__docgenInfo={description:"",displayName:"YocoInline",props:{currency:{defaultValue:null,description:"",name:"currency",required:!0,type:{name:"enum",value:[{value:'"ZAR"'},{value:'"MUR"'}]}},publicKey:{defaultValue:null,description:"",name:"publicKey",required:!1,type:{name:"string"}},showSubmitButton:{defaultValue:{value:"false"},description:"",name:"showSubmitButton",required:!1,type:{name:"boolean"}},submitButtonText:{defaultValue:null,description:"",name:"submitButtonText",required:!1,type:{name:"string"}},onReady:{defaultValue:{value:"() => {}"},description:"",name:"onReady",required:!1,type:{name:"(() => void)"}},onSubmit:{defaultValue:{value:"() => {}"},description:"",name:"onSubmit",required:!1,type:{name:"(() => void)"}},onResult:{defaultValue:{value:"() => {}"},description:"",name:"onResult",required:!1,type:{name:"((result: YocoSDKResult) => void)"}},onError:{defaultValue:{value:"() => {}"},description:"",name:"onError",required:!1,type:{name:"((error?: Error) => void)"}},amountInCents:{defaultValue:null,description:"",name:"amountInCents",required:!0,type:{name:"number"}},customer:{defaultValue:null,description:"",name:"customer",required:!1,type:{name:"Customer"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"object"}},showErrors:{defaultValue:{value:"true"},description:"",name:"showErrors",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#YocoInline"]={docgenInfo:YocoInline.__docgenInfo,name:"YocoInline",path:"src/index.tsx#YocoInline"})}catch(__react_docgen_typescript_loader_error){}try{useYocoPopUp.displayName="useYocoPopUp",useYocoPopUp.__docgenInfo={description:"",displayName:"useYocoPopUp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#useYocoPopUp"]={docgenInfo:useYocoPopUp.__docgenInfo,name:"useYocoPopUp",path:"src/index.tsx#useYocoPopUp"})}catch(__react_docgen_typescript_loader_error){}},284:function(module,exports){},476:function(module,exports,__webpack_require__){__webpack_require__(477),__webpack_require__(637),__webpack_require__(638),__webpack_require__(845),__webpack_require__(846),__webpack_require__(851),__webpack_require__(852),__webpack_require__(850),__webpack_require__(847),__webpack_require__(853),__webpack_require__(848),__webpack_require__(849),__webpack_require__(854),module.exports=__webpack_require__(836)},544:function(module,exports){},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(342)},836:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(342).configure)([__webpack_require__(837)],module,!1)}).call(this,__webpack_require__(193)(module))},837:function(module,exports,__webpack_require__){var map={"./Hook.stories.tsx":838,"./Inline.stories.tsx":844};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=837},838:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(430),__webpack_require__(16);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(212),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(840),__webpack_require__(98));__webpack_exports__.default={title:"useYocoPopUp"};var Template=function Template(args){var yocoPopUp=Object(_src__WEBPACK_IMPORTED_MODULE_3__.b)(),ready=yocoPopUp.ready,result=yocoPopUp.result,showPopUp=yocoPopUp.showPopUp;return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){if(result){var message=result.id||result.error;console.log(message),alert(message)}}),[result]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{disabled:!ready,onClick:function onClick(){return showPopUp({currency:"ZAR",amountInCents:2799,name:"Your Store or Product",description:"Awesome description",onCancel:function onCancel(){return console.log("canceled")}})},children:"Pay"})})};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const yocoPopUp = useYocoPopUp();\n  const { ready, result, showPopUp } = yocoPopUp;\n\n  useEffect(() => {\n    if (result) {\n      const message = result.id || result.error;\n      console.log(message);\n      alert(message);\n    }\n  }, [result]);\n\n  return (\n    <div className=\"container\">\n      <button\n        disabled={!ready}\n        onClick={() =>\n          showPopUp({\n            currency: 'ZAR',\n            amountInCents: 2799,\n            name: 'Your Store or Product',\n            description: 'Awesome description',\n            onCancel: () => console.log('canceled'),\n          })\n        }\n      >\n        Pay\n      </button>\n    </div>\n  );\n}"}},Default.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Hook.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"stories/Hook.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},840:function(module,exports,__webpack_require__){var api=__webpack_require__(841),content=__webpack_require__(842);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},842:function(module,exports,__webpack_require__){(exports=__webpack_require__(843)(!1)).push([module.i,".container {\n  width: 20rem;\n}\nbutton {\n  height: 48px;\n  color: #ffffff;\n  border-radius: 3px;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n  background: #37a2e0;\n  margin: 18px auto 0 auto;\n  border-width: 0;\n  width: 100%;\n  display: block;\n  transition: 0.75s cubic-bezier(0.41, 1.44, 0.47, 1);\n  cursor: pointer;\n  outline: none;\n}\n",""]),module.exports=exports},844:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(430),__webpack_require__(16),__webpack_require__(0);var _src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(212),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(98);__webpack_exports__.default={title:"YocoInline"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{currency:"ZAR",amountInCents:200,showSubmitButton:!0,onReady:function onReady(){return console.log("form ready")},onSubmit:function onSubmit(){return console.log("submited")},onResult:function onResult(result){var message=result.id||result.error.message;console.log(message),alert(message)},onError:function onError(error){console.log(error),alert(error)}})})};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const onResult = (result) => {\n    const message = result.id || result.error.message;\n    console.log(message);\n    alert(message);\n  };\n\n  const onError = (error) => {\n    console.log(error);\n    alert(error);\n  };\n\n  return (\n    <div className=\"container\">\n      <YocoInline\n        currency=\"ZAR\"\n        amountInCents={200}\n        showSubmitButton\n        onReady={() => console.log('form ready')}\n        onSubmit={() => console.log('submited')}\n        onResult={onResult}\n        onError={onError}\n      />\n    </div>\n  );\n}"}},Default.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Inline.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"stories/Inline.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(47),__webpack_require__(422),__webpack_require__(833),__webpack_require__(45),__webpack_require__(834),__webpack_require__(835),__webpack_require__(421);var client_api=__webpack_require__(861),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on.*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[476,2,3]]]);