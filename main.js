const obj={
    name:"Aman", 
    age:18, 
    add:{
        city:"Lugo", 
        state:"Galicia", 
        landmark:{
            shop:"Arenal", 
            grocery:"Brisas"
        }
    }
}


function getCopiedObj(source){
    const targetObj={};
    const keys=Object.keys(source);
    console.log(keys);
    for(let key of keys){
        if(typeof source[key]==="object"){
           //console.log("[",key,"]");
            targetObj[key]=getCopiedObj(source[key]);
        }
        else{
            targetObj[key]=source[key];
        }
    }
    return targetObj;
}

const copiedObj=getCopiedObj(obj);

//const copiedObj={ ...obj, add:{...obj.add, landmark:{...obj.add.landmark}}};//Spread Option

copiedObj.name="Sergio";
copiedObj.age=50;
copiedObj.add.city="Itaparica";
copiedObj.add.state="Bahia";
copiedObj.add.landmark.grocery="Padaria da Ilha";
copiedObj.add.landmark.shop="Mar Grande"; 


console.log(obj);
console.log(copiedObj);