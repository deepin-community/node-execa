"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.fixDuplicates=void 0;


const fixDuplicates=function(input){
if(typeof input==="function"){
return input;
}

return input.map(fixDuplicate);
};exports.fixDuplicates=fixDuplicates;

const fixDuplicate=function(param,index,params){
const duplicateParams=params.filter(
paramA=>paramA.title===param.title);


if(duplicateParams.length===1){
return param;
}

const duplicateCounter=duplicateParams.findIndex(
paramA=>paramA===param);

const title=`${param.title} (${duplicateCounter})`;
return{value:param.value,title};
};
//# sourceMappingURL=duplicate.js.map