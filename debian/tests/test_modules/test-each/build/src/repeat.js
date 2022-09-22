"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.isRepeat=exports.addRepeat=void 0;

const addRepeat=function(input){
if(!isRepeat(input)){
return input;
}

return Array.from({length:input},getRepeatIndex);
};exports.addRepeat=addRepeat;

const isRepeat=function(input){
return Number.isInteger(input)&&input>=0;
};exports.isRepeat=isRepeat;

const getRepeatIndex=function(value,index){
return index;
};
//# sourceMappingURL=repeat.js.map