

default_key = "robinson";
comments=[];
names=[]

function checkinputs(nameid,commentid,keyid,commnetboxid,errorbox_id) {
    //clear_error_msg(errorbox_id);
    ele_n = document.getElementById(nameid);
    ele_c = document.getElementById(commentid);
    ele_key = document.getElementById(keyid);
    
    if (ele_n.value!="" && ele_c.value!="" && ele_key.value==default_key) {
        comments.unshift(ele_c.value);
        names.unshift(ele_n.value);
        
    
    
    //display comment to comment box

    ele_comments = document.getElementById(commnetboxid);
    var para = document.createElement("p");
    var h6 = document.createElement("h6");
    var h5 = document.createElement("h5");
    var div = document.createElement("br");
    var name_node = document.createTextNode("-"+names[0]);
    var comment_node = document.createTextNode(comments[0]);
    
    
    h5.appendChild(comment_node);
    para.appendChild(h5);
    para.appendChild(div);
    h6.appendChild(name_node);
    para.appendChild(h6);
    
    para.appendChild(div);
    
    
    ele_comments.insertBefore(para,ele_comments.firstChild);
    
    
    //clear form
    ele_n.value="";
    ele_c.value="";
    ele_key.value="";
    
    } 
    
    else if (ele_n.value=="" && ele_c.value=="" && ele_key.value!=default_key) {
        error_func(errorbox_id,"invalid operation empty form")
    }
    
    
    
    
    else if (ele_n.value=="" && ele_c.value==""){
        error_func(errorbox_id,"enter name and comment")
    }
    
    else if (ele_n.value==""){
        error_func(errorbox_id,"enter name")
    }
    
    
    else if (ele_c.value==""){
        error_func(errorbox_id,"enter comment")
    }
    
    else {
        error_func(errorbox_id,"invalid password")
    }
    
    
}


function error_func(errorbox_id,message) {
        p =document.getElementById(errorbox_id);
        p.innerHTML=message;
}

function clear_error_msg(errorbox_id) {
    p =document.getElementById(errorbox_id);
    p.innerHTML="";

}



