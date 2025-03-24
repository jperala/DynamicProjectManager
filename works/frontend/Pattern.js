let text ="";
let n;
function generate()
{
    n=document.getElementById("user_input").value;
}
{
for(let i=0;i<=n;i++)
{
    for(let j=0;j<i;j++)
    {
    text+="* ";    
    }
    text+="<br>";
}

console.log(text.toUpperCase)
document.getElementById("user_input").innerHTML=text;
}
