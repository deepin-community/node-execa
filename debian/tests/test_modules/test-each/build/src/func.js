"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.callFuncs=exports.normalizeFunc=void 0;


const normalizeFunc=function(input){
if(typeof input!=="function"){
return input;
}

const value=wrapFunc(input);
return[{value}];
};exports.normalizeFunc=normalizeFunc;
















const callFuncs=function({index,indexes,values,titles}){


const info={index,indexes};
const valuesA=values.reduce(callFunc.bind(null,info),[]);
return{index,indexes,values:valuesA,titles};
};exports.callFuncs=callFuncs;


const callFunc=function(info,previousValues,value,valueIndex,values){
if(!isInputFunc(value)){
return[...previousValues,value];
}

const inputFunc=unwrapFunc(value);


const nextValues=values.slice(valueIndex).map(unwrapValue);
const valueA=inputFunc(info,...previousValues,...nextValues);

return[...previousValues,valueA];
};



const funcSymbol=Symbol("function");

const isInputFunc=function(value){
return(
value!==undefined&&value!==null&&value[funcSymbol]!==undefined);

};

const wrapFunc=function(value){
return{[funcSymbol]:value};
};

const unwrapFunc=function(value){
return value[funcSymbol];
};

const unwrapValue=function(value){
if(isInputFunc(value)){
return unwrapFunc(value);
}

return value;
};
//# sourceMappingURL=func.js.map