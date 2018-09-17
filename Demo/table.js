
var data=[
    {sno:1,name:"Vinodh",city:"Chennai"}
]


function filltab(obj)
{
    var temp=document.getElementById("tbody").innerHTML;
    
    var code="<tr>";
    code+="<td>"+obj.sno+"</td>";
    code+="<td>"+obj.name+"</td>";
    code+="<td>"+obj.city+"</td>";
    code+="</tr>";
    temp+=code;
    
    document.getElementById("tbody").innerHTML=temp;
}

filltab(data[0]);

function validateAndStore(){

    let block1=document.getElementById("form").getElementsByTagName("tr")[0].getElementsByTagName("td")[1];
    let block2=document.getElementById("form").getElementsByTagName("tr")[1].getElementsByTagName("td")[1];
    let block3=document.getElementById("form").getElementsByTagName("tr")[2].getElementsByTagName("td")[1];
    
      errors=[];
    
    let sno=document.forms[0].sno.value;
    let name=document.forms[0].name.value;
    let city=document.forms[0].city.value;
    
    block1.textContent="";
    block2.textContent="";
    block3.textContent="";
    
    if(sno==undefined)
        errors.push("Please enter sno");
    else if(sno<=0)
        errors.push("please enter a value > 0")
    
    
    if(name==undefined || name.length==0)
        errors.push("Please enter name");
    
    if(city==undefined || city.length==0)
        errors.push("please enter city");
    
    if(errors.length>0)
        {
            block1.textContent=errors[0]?errors[0]:"";
            block2.textContent=errors[1]?errors[1]:"";
            block3.textContent=errors[2]?errors[2]:"";
            
        }
    else
        filltab({sno:sno,name:name,city:city});
}