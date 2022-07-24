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

const axios = require("axios");

webCat = async (url) => {
  res = await axios.get(url);
  console.log(res.data);
};

if (process.argv[2].includes(".txt")) {
  cat(process.argv[2]);
} else if (process.argv[2].includes(".com")) {
  webCat(process.argv[2]);
}
