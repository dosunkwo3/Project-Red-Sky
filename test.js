//prints out the cvs as js 2d array to copy and paste
const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");



CSVToJSON().fromFile("./fixedCoordinates.csv").then(source => { //this is an async function, source is array made from csv
    console.log("[");
    for (let i =0; i < source.length; i++){
    //for (let i = 0; i < 10; i++) {
        let time = source[i]["Peak Brightness Date/Time (UT)"];
        let lat = source[i]["Latitude (deg)"];
        let lng = source[i]["Longitude (deg)"];
        let alt = source[i]["Altitude (km)"];
        let vel = source[i]["Velocity (km/s)"];
        let vx = source[i]["vx"];
        let vy = source[i]["vy"];
        let vz = source[i]["vz"];
        let totRad = source[i]["Total Radiated Energy (J)"];
        let impactEng = source[i]["Calculated Total Impact Energy (kt)"];
        console.log("['" + time + "', " 
                   + "'" + lat + "', "
                   + "'" + lng + "', "
                   + "'" + alt + "', "
                   + "'" + vel + "', "
                   + "'" + vx + "', "
                   + "'" + vy + "', "
                   + "'" + vz + "', "
                   + "'" + totRad + "', "
                   + "'" + impactEng + "'],"
                   );
    
    }
    
    console.log("]");

    
    
    
});



