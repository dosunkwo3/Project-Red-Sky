//unfinished/non-working
const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");


var arrOfCoords = [];//array used for coordinate markers

CSVToJSON().fromFile("./fixedCoordinates.csv").then(source => { //this is an async function, source is array made from csv
    for (let i =0; i < source.length; i++){
        let lat = source[i]["Latitude (deg)"];
        let lng = source[i]["Longitude (deg)"];
        let coords = [lat, lng];
        //console.log(coords);
        arrOfCoords.push([coords[0], coords[1]]);
        //console.log(arrOfCoords[i]);
    }


    console.log(arrOfCoords); // <---- This will print the array right
    
    /*function initMap() {//this doesn't work
        const myLatLng = { lat: 0, lng: 0 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: myLatLng,
        });
      
        for (let i = 0; i < arrOfCoords.length; i++){
            var titleStr = "Marker " + i;
            new google.maps.Marker({
                postion: { lat : parseFloat(arrOfCoords[i][0]), lng: parseFloat(arrOfCoords[i][1])},
                map,
                title: titleStr,
            })
        }
    }*/
      
    //window.initMap = initMap;
});//closing braces for csvtojson

console.log(aarOfCoords); //this will not print the array since its outside the function, nothing is stored there

