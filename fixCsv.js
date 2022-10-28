/**
 * Fixes the original csv so the coordinates can be used for google maps.
 * IMPORTANT: When using the original csv, edit the first line by removing the parenthesis and . in long and lat
 *            (e.g. { "Latitude (deg.)" } --> { Latitute (deg.) })
 */
const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

CSVToJSON().fromFile("./cneos_fireball_data.csv").then(source => {
    let arrLength = source.length;
    for (let i =0; i < arrLength; i++){
        if (source[i]["Latitude (deg)"] === ""){
            source.splice(i, 1);
            arrLength--;
            i--;
        }
    }

    //removes N and S from coordinates, adds - to S; also removes entries with empty coordinates
    for (let i =0; i < source.length; i++){
        if (source[i]["Latitude (deg)"].includes('N')){
            let size = source[i]["Latitude (deg)"].length
            let finalString = source[i]["Latitude (deg)"].substring(0, size - 1)
            source[i]["Latitude (deg)"] = finalString;
        }
        else if (source[i]["Latitude (deg)"].includes('S')) {
            let size = source[i]["Latitude (deg)"].length
            let finalString = "-" + source[i]["Latitude (deg)"].substring(0, size - 1);
            source[i]["Latitude (deg)"] = finalString;
        }
    }

    //removes E and W from coordinates, adds - to W; also removes entries with empty coordinates
    for (let i =0; i < source.length; i++){
        if (source[i]["Longitude (deg)"].includes('E')){
            let size = source[i]["Longitude (deg)"].length
            let finalString = source[i]["Longitude (deg)"].substring(0, size - 1)
            source[i]["Longitude (deg)"] = finalString;
        }
        else if (source[i]["Longitude (deg)"].includes('W')) {
            let size = source[i]["Longitude (deg)"].length
            let finalString = "-" + source[i]["Longitude (deg)"].substring(0, size - 1);
            source[i]["Longitude (deg)"] = finalString;
        }
        /*if (source[i]["Longitude (deg)"] === ""){
            source.splice(i, 1);
        }*/
    }

    //console.log(source);
    //console.log(source.length);
    const csv = JSONToCSV(source, { fields: ["Peak Brightness Date/Time (UT)","Latitude (deg)","Longitude (deg)","Altitude (km)","Velocity (km/s)","vx","vy","vz","Total Radiated Energy (J)","Calculated Total Impact Energy (kt)"] });
    FileSystem.writeFileSync("./fixedCoordinates.csv", csv);
});