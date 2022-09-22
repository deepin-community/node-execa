"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.unwrapIndexes=exports.wrapIndexes=void 0;

const wrapIndexes=function(inputs){
return inputs.map(wrapIndex);
};exports.wrapIndexes=wrapIndexes;

const wrapIndex=function({value,title},index){
return{index,value,title};
};


const unwrapIndexes=function(loop,index){
const indexes=loop.map(unwrapIndex);
const values=loop.map(unpackValue);
const titles=loop.map(unpackTitle);
return{index,indexes,values,titles};
};exports.unwrapIndexes=unwrapIndexes;

const unwrapIndex=function({index}){
return index;
};

const unpackValue=function({value}){
return value;
};

const unpackTitle=function({title}){
return title;
};
//# sourceMappingURL=indexes.js.map