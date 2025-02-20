const fileSystem = require("fs");
fileSystem.writeFile("./welcome.txt", "Hello Node", (error) => {
  if (error) {
    return console.log(error);
  }
});

const data = fileSystem.readFileSync("./welcome.txt", { encoding: "utf8" });
console.log(data);
