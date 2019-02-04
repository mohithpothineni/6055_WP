//json file in .catalog.json


//global json
var json_data;
//global jsobject
var jsobject;


//gets the data from json
//setup an AJAX request for jsonfile

function get_json(filename) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json_data = this.responseText;
    }
  };
  xhttp.open("GET", filename, false);
  xhttp.send();
}

//changes json to js object
function json_to_object(jsonobj) {
    jsobject=JSON.parse(jsonobj);   
}

function delete_(id) {
    
    var ele = document.getElementById(id)
    ele.style.setProperty("display","none");

    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json_data = this.responseText;
    }
  };
  xhttp.open("GET", "/delete/"+id, false);
  xhttp.send();   

}

function ajaxndreloader(indexx) {
    var title = document.getElementById("i"+indexx).value;
    var des = document.getElementById("j"+indexx).value;
    var quantity = document.getElementById("k"+indexx).value;

    if (title == "") {
        title = jsobject.products[indexx].title;
    }

    if (des == "") {
        des = jsobject.products[indexx].description;
    }

    if (quantity == "") {
        quantity = jsobject.products[indexx].quantity;
    }
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json_data = this.responseText;
    }
  };
  xhttp.open("GET", "/edit/"+indexx+"-"+title+"-"+des+"-"+quantity, false);
  xhttp.send();
  location.reload();
} 




function form_generator(indexx) {
    var elem_ = document.getElementById(indexx);
    var f = document.createElement("form");
    f.setAttribute("id","f"+indexx);
    f.style.setProperty("display","none")


    var i = document.createElement("input"); //input element, text
    i.setAttribute('type',"text");
    i.setAttribute('name',"title");
    i.setAttribute('value',"title")
    i.setAttribute("id","i"+indexx)

    var j = document.createElement("input"); //input element, text
    j.setAttribute('type',"text");
    j.setAttribute('name',"description");
    j.setAttribute('value',"description")
    j.setAttribute("id","j"+indexx)
    
    var k = document.createElement("input"); //input element, text
    k.setAttribute('type',"text");
    k.setAttribute('name',"quantity");
    k.setAttribute("id","k"+indexx)
    k.setAttribute('value',"quantity")

    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"button");
    s.setAttribute('value',"Submit");
    s.addEventListener("click",()=>{ajaxndreloader(indexx)})

    f.appendChild(i);
    f.appendChild(document.createElement("br"));
    f.appendChild(j);
    f.appendChild(document.createElement("br"));
    f.appendChild(k);
    f.appendChild(document.createElement("br"));
    f.appendChild(s);

    elem_.appendChild(f)

}



function edit_(indexx) {
    var elel = document.getElementById("f"+indexx);
    elel.style.setProperty("display","");
    
}





function helper_generator(container,arr_,indexx) {
    if (arr_ == "") {
        return;
    }
    var div = document.createElement("div");
    div.class="container";
    div.id = indexx;


    var img = document.createElement('img');
    img.src = arr_.image;
    img.alt = "image not found";
    div.appendChild(img);
 
    var p_title = document.createElement('p');
    p_title.innerHTML = arr_.title;
    div.appendChild(p_title);

    var p_description = document.createElement('p');
    p_description.innerHTML = arr_.description;
    div.appendChild(p_description);

    var p_quantity = document.createElement('p');
    p_quantity.innerHTML = "Quantity: " + arr_.quantity;
    div.appendChild(p_quantity);


    var btn_edit = document.createElement("BUTTON");
    var t_edit = document.createTextNode("edit");
    btn_edit.appendChild(t_edit);
    btn_edit.addEventListener("click",()=>{edit_(indexx)});
    div.appendChild(btn_edit);


    var btn_delete = document.createElement("BUTTON");
    var t_delete = document.createTextNode("delete");
    btn_delete.appendChild(t_delete);
    btn_delete.addEventListener("click",()=>{delete_(indexx)});
    div.appendChild(btn_delete);

    var br = document.createElement("br");
    container.appendChild(br);
    container.appendChild(div);

    form_generator(indexx);
    
}




//generates the elements to the given container
function generate_elements(displayer) {
    get_json('catalog.json')
    //console.log(json_data);
    json_to_object(json_data);


    for (var i = 0 ; i< jsobject.products.length;i++) {
        console.log(jsobject.products[i])
        helper_generator(displayer,jsobject.products[i],i)
    }



}


//main invoked function
function display(main) {

    var ele = document.getElementById(main);
    //calling a generator
    generate_elements(ele);
}

