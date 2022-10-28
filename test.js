const fs = require("fs");
const csv = require('csvtojson'); //npm i csvtojson
const { Parser } = require('json2csv'); //npm i json2csv

(async () => {
    //load the fireballs using cneos_fireball_data.csv
    const fireballs = await csv().fromFile("cneos_fireball_data.csv");
    
    //show fireballs
    //console.log(fireballs[1]["Latitude (deg)"]/*['Latitude (deg.)']*/);

    /*
    let count = 0;
    let emptyCount = 0;
    for (let i =0; i < fireballs.length; i++){
        if (fireballs[i]["Latitude (deg)"].includes('N')){
            //console.log(fireballs[i]["Latitude (deg)"]);
            count++;
        }
        if (fireballs[i]["Latitude (deg)"] === ""){
            emptyCount++;
        }
    }
    console.log(count);
    console.log(emptyCount);
    */



    //remove a fireball (we can write any other kind of filters here)
    //fireballs.splice(1, 1); //removes a single entry at index 1

    //save the new fireballs to filtered_results.csv
    //const fireballsInCsv = new Parser({ fields: ["Peak Brightness Date/Time (UT)","Latitude (deg.)","Longitude (deg.)","Altitude (km)","Velocity (km/s)","vx","vy","vz","Total Radiated Energy (J)","Calculated Total Impact Energy (kt)"] }).parse(fireballs);
    //fs.writeFileSync("filtered_results.csv", fireballsInCsv);
})();