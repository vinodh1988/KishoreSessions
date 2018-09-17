var temp=[]
var data=[]

function addTemp(ref){
    
    x=document.getElementById("content").value;
    
    temp.push(x);
    
    var code="<ul>"
    for(i in temp)
        {
            code+="<li onclick='move(this)'>"+temp[i]+"</li>"
        }
    code+="</ul>"
    document.getElementById("demo").innerHTML=code;
}


function move(ref){
    
    data.push(ref.textContent)
    
     var code="<ul>"
    for(i in data)
        {
            code+="<li>"+data[i]+"</li>"
        }
    code+="</ul>"
    document.getElementById("moved").innerHTML=code;
}