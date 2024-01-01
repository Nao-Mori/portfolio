
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = 'json';
    var text = "4001167824078"
    var url = "http://opengtindb.org/?ean="+text+"&cmd=query&queryid=764680002361624657905"
    var response = xmlHttp.open("GET",url,true);
    console.log(response)
    console.log(response)
    console.log(extract)