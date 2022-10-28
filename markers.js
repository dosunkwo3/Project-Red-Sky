//unfinished/non-working
const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

var arrOfCoords = [];

CSVToJSON().fromFile("./fixedCoordinates.csv").then(source => {
    for (let i =0; i < source.length; i++){
        let lat = source[i]["Latitude (deg)"];
        let lng = source[i]["Longitude (deg)"];
        let coords = [lat, lng];
        //console.log(coords);
        arrOfCoords.push([coords[0], coords[1]]);
        console.log(arrOfCoords[i]);
    }
    //console.log(arrOfCoords);
    

    /*function initMap() {
        const myLatLng = { lat: 0, lng: 0 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: myLatLng,
        });
      
        for (let i = 0; i < arrOfCoords.length; i++){
            new google.maps.Marker({
                postion: { lat : arrOfCoords[i][0], lng: arrOfCoords[i][1]},
                map,
                title: "Marker " + i,
            })
        }
    }
      
    window.initMap = initMap;*/
});

//console.log(aarOfCoords);

