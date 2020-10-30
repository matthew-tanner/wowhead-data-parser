const fs = require("fs");
var colors = require("colors");

// set the input and output files
const jsonData = require("./input.json");
const outFile = "objects.json";

var dataTable = [];
var dataCount = 0;
var fileCount = 0;
var herbCount = 0;
var oreCount = 0;

// you can modify the console color themes
colors.setTheme({
    info: "green",
    help: "cyan",
    warn: "yellow",
    success: "blue",
    error: "red",
});

colors.enable();


// this is a boilerplate loop for grabbing herb / ore items from the input file
// Note this is done with classic.wowhead data and can be modified to any item type ID for retail or classic
for (var i in jsonData) {
    fileCount++;
    if (jsonData[i].type == -3) {
        name = "[ " + jsonData[i].name + " ]";
        id = "[ " + jsonData[i].id + "  ]";
        console.log("[ Found Herb ]".info + name + id);
        item = jsonData[i];
        dataTable.push({
            name: item.name,
            id: item.id,
        });
        dataCount++;
        herbCount++;
    } else if (jsonData[i].type == -4) {
        name = "[ " + jsonData[i].name + " ]";
        id = "[ " + jsonData[i].id + " ]";
        console.log("[ Found Ore  ]".warn + name + id);
        item = jsonData[i];
        dataTable.push({
            name: item.name,
            id: item.id,
        });
        dataCount++;
        oreCount++;
    }
}

fs.writeFile(outFile, JSON.stringify(dataTable, 0, 2), function (err) {});
console.log("Total : ".success, dataCount);
