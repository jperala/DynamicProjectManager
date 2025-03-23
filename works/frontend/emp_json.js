const text1='["Ford","bee","ceee","deee"]';

let emp_Obj={
    "employees":[
        {"firstName":"Jeevan","lastName":"Rao"},
        {"firstName":"G1","lastName":"Rao"},
        {"firstName":"Mr","lastName":"Rao"}
    ]
}
let  text =JSON.stringify(emp_Obj);
console.log(text);

const arr=JSON.parse(text1);
console.log(arr[1]);