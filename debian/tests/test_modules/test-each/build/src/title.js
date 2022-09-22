"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.joinTitles=exports.addTitles=void 0;var _isPlainObj=_interopRequireDefault(require("is-plain-obj"));
var _prettyFormat=_interopRequireWildcard(require("pretty-format"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}





const addTitles=function(input){
if(typeof input==="function"){
return input;
}

return input.map(addTitle);
};exports.addTitles=addTitles;

const addTitle=function(value){
const title=getTitle(value);
return{value,title};
};



const joinTitles=function({index,indexes,values,titles}){
const titlesA=titles.map((paramTitle,valueIndex)=>
addFuncTitle(paramTitle,values[valueIndex]));

const title=titlesA.join(" ");
return{title,titles:titlesA,index,indexes,values};
};exports.joinTitles=joinTitles;

const addFuncTitle=function(title,value){
if(title!==undefined){
return title;
}

return getTitle(value);
};



const getTitle=function(value){
if(hasTitle(value)){
return value.title;
}

const title=serialize(value);

const titleA=truncateTitle(title);
return titleA;
};


const hasTitle=function(value){
return(
(0,_isPlainObj.default)(value)&&
typeof value.title==="string"&&
value.title.trim()!=="");

};









const serialize=function(value){
const title=(0,_prettyFormat.default)(value,PRETTY_FORMAT_OPTS);
const titleA=ESCAPE_SEQUENCES.reduce(escapeSequence,title);
return titleA;
};

const PRETTY_FORMAT_OPTS={
min:true,
maxDepth:2,
plugins:[
_prettyFormat.plugins.DOMElement,
_prettyFormat.plugins.DOMCollection,
_prettyFormat.plugins.ReactElement,
_prettyFormat.plugins.Immutable,
_prettyFormat.plugins.ConvertAnsi]};




const escapeSequence=function(title,[regExp,replacement]){
return title.replace(regExp,replacement);
};

const ESCAPE_SEQUENCES=[
[/\n/gu,"\\n"],
[/\r/gu,"\\r"],
[/\f/gu,"\\f"],
[/\v/gu,"\\v"]];



const truncateTitle=function(title){
if(title.length<=MAX_TITLE_SIZE){
return title;
}

const start=title.slice(0,TRUNCATE_START_LENGTH);
const end=title.slice(title.length-TRUNCATE_END_LENGTH);
return`${start}${ELLIPSIS}${end}`;
};

const MAX_TITLE_SIZE=120;
const ELLIPSIS="...";
const TRUNCATE_START_LENGTH=Math.ceil((MAX_TITLE_SIZE-ELLIPSIS.length)/2);
const TRUNCATE_END_LENGTH=Math.floor((MAX_TITLE_SIZE-ELLIPSIS.length)/2);
//# sourceMappingURL=title.js.map