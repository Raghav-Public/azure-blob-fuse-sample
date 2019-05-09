var fs = require("fs");

for(var i=0; i<50; i++) {
    var data = "File written at " + Date.now();
    fs.writeFileSync("/mycontainer/" + i+".txt", data, (err) => {
        if(err) {
            console.log(err);
        }
        console.log("File " + i +".txt written");
    });
}