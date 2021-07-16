

var query;

function ip_address() {
    
  query=document.getElementById('ip').value;

     var settings ={
    "async": true,
    "crossDomain": true,
    "url": `http://ip-api.com/json/${query}`,
    "method": "GET"
     };

 

  $.ajax(settings).done(function (response) {
    console.log(response);

    
    $("#item_regionName").append(response.regionName);
    $("#item_country").append(response.country);
    $("#item_timezone").append(response.region);
    $("#item_city").append(response.city);
    $("#item_zip").append(response.zip);
  });
};