var list = document.getElementById("list");

function additem(){


    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item")
    var val = document.getElementById("MyInput");  
    var txt = document.createTextNode(val.value);
    li.appendChild(txt);

    if(val.value === ''){
        alert("Cannot add empty list");
    }
    else{
        document.getElementById("list").appendChild(li);
        document.getElementById("MyInput").value = "";
    }

    

    //crate delete button

    var div = document.createElement("div");
    div.setAttribute("class","btn-group");
    var del_btn = document.createElement("button");
    var del_text = document.createTextNode("Delete");
    del_btn.setAttribute("class","delbtn btn btn-primary");
    del_btn.setAttribute("onclick","delbtn(this)"); //set this to get the whole element of button
      
    del_btn.appendChild(del_text);
    div.appendChild(del_btn);
    li.appendChild(div);

    //create edit button 

    var ed_btn = document.createElement("button");
    var ed_text = document.createTextNode("Edit");
    ed_btn.setAttribute("class","delbtn btn btn-primary");
    ed_btn.setAttribute("onclick","edbtn(this)"); //set this to get the whole element of button
  
    ed_btn.appendChild(ed_text);
    div.appendChild(ed_btn);
    li.appendChild(div);

    //create done button

    var d_btn = document.createElement("button");
    var d_text = document.createTextNode("Done");
    d_btn.setAttribute("class","delbtn btn btn-primary");
    d_btn.setAttribute("onclick","dbtn(this)");

    d_btn.appendChild(d_text);
    div.appendChild(d_btn);
    li.appendChild(div);

    list.appendChild(li);

}

function delbtn(ele){

   var pa =  ele.parentElement; //parentnode is for get the parent element of current element
   pa.parentNode.remove();

}

function delall(){

    list.innerHTML = "";
}

function edbtn(e){

//var val = e.parentNode.childNodes[0];
var pa = e.parentElement;
var val = pa.parentNode.firstChild;

var edt_val = prompt("Edit Text" , val.nodeValue);
val.nodeValue = edt_val;

}

function dbtn(e){

    //var val = e.parentNode.childNodes[0];
    var pa = e.parentElement;
    var val = pa.parentNode.firstChild;

    pa.parentNode.classList.add("done");
    
    }