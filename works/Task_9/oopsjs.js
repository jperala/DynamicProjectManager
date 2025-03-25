const Person ={
    names:"jeevan",
    country:"India",
    education:"Masters Degree",
    description:function()
    {
        return "The person name is "+this.name+". He is from "+this.country+". He have completed his "+this.education+" from AUM";
    }
};
function show()
{
    for(i=0;i<strArr.length;i++)
    {
    document.getElementById("div2").innerHTML=person.description();
    }
}
let strArr=[];
function insert()
{
   // event.preventDefault(); 
    let n = document.getElementById("name").value;
    person.names=n;
    let c = document.getElementById("country").value;
    person.country=c;
    let e = document.getElementById("education").value;
    let new_person = new Person(names,country,education);
    person.education=e;
    strArr.push(new_person);
     //first get the value from the html
    //next update the existing object copy
}