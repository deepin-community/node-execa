"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.validateInputs=exports.parseInputs=void 0;var _repeat=require("./repeat.js");


const parseInputs=function(inputs){
const inputsA=inputs.slice(0,-1);
const callback=inputs[inputs.length-1];

validateInputs(inputsA);

if(typeof callback!=="function"){
throw new TypeError("Last argument must be a function");
}

return[inputsA,callback];
};exports.parseInputs=parseInputs;

const validateInputs=function(inputs){
inputs.forEach(validateInput);
};exports.validateInputs=validateInputs;

const validateInput=function(input){
if(
!Array.isArray(input)&&
!(0,_repeat.isRepeat)(input)&&
typeof input!=="function")
{
throw new TypeError(
`Argument must be an array, a positive integer or a function: ${input}`);

}
};
//# sourceMappingURL=input.js.map