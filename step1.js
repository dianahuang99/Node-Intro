const fs = require("fs");

cat = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(data);
  });
};

cat(process.argv[2]);
