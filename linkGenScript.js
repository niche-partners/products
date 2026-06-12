const prodIds = `abc
				 bdj`; //product ids
const prodIdsArr = prodIds.split('\n');
let prodIdsStr = ``;
prodIdsArr.forEach(function(ele){
	prodIdsStr += `"https://www.amazon.sa/d/${ele}",\n`;
});
console.log(`const links = [\n${prodIdsStr}];`);