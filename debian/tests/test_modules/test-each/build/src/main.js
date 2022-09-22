"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.iterable=exports.each=void 0;var _bigCartesian=_interopRequireDefault(require("big-cartesian"));

var _duplicate=require("./duplicate.js");
var _func=require("./func.js");
var _indexes=require("./indexes.js");
var _input=require("./input.js");
var _repeat=require("./repeat.js");
var _title=require("./title.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}




const each=function(...inputs){
const[inputsA,func]=(0,_input.parseInputs)(inputs);

const inputsB=inputsA.map(normalizeInput);


for(const[info,...values]of forEachLoop(inputsB)){






func(info,...values);
}
};exports.each=each;


const iterable=function*(...inputs){
(0,_input.validateInputs)(inputs);

const inputsA=inputs.map(normalizeInput);

yield*forEachLoop(inputsA);
};exports.iterable=iterable;

const normalizeInput=function(input){
const inputA=(0,_repeat.addRepeat)(input);
const inputB=(0,_title.addTitles)(inputA);
const inputC=(0,_duplicate.fixDuplicates)(inputB);
const inputD=(0,_func.normalizeFunc)(inputC);
const inputE=(0,_indexes.wrapIndexes)(inputD);
return inputE;
};




const forEachLoop=function*(inputs){

let index=-1;


for(const loop of(0,_bigCartesian.default)(inputs)){

index+=1;

const{values,...info}=normalizeLoop(loop,index);
yield[info,...values];
}
};

const normalizeLoop=function(loop,index){
const loopA=(0,_indexes.unwrapIndexes)(loop,index);
const loopB=(0,_func.callFuncs)(loopA);
const loopC=(0,_title.joinTitles)(loopB);
return loopC;
};
//# sourceMappingURL=main.js.map