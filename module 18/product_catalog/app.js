var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{res.sendFile(__dirname+'/public/index.html')})

app.get('/delete/:id',(req,res)=>{res.send("asked for delete")
    
    var json_data;
    
    fs.readFile(__dirname + '/public/catalog.json', (err, data) => {
    if (err) throw err;
        json_data = data;

    var jsobject=JSON.parse(json_data);
    jsobject.products[req.params.id] = "";
    json_data = JSON.stringify(jsobject)
    
    fs.writeFile(__dirname + '/public/catalog.json', json_data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    });
    });

})



app.get("/edit/:id-:title-:description-:quantity",(req,res)=>{
    //console.log(req.params);
    res.send("edit command requested");
    var json_data;
    reqs = req.params;

    fs.readFile(__dirname + '/public/catalog.json', (err, data) => {
    if (err) throw err;
    json_data = data;
    var jsobject=JSON.parse(json_data);
    jsobject.products[reqs.id].title = reqs.title;
    jsobject.products[reqs.id].description = reqs.description;
    jsobject.products[reqs.id].quantity = reqs.quantity;
    
    json_data = JSON.stringify(jsobject)
    //console.log(json_data);
    fs.writeFile(__dirname + '/public/catalog.json', json_data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    });
    });
})



app.listen(8080,'127.0.0.1',()=>{console.log('listening at 8080')})



