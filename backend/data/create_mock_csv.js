const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const config = require("./config.js");

/**
 * Creates mock json file to CSV format
 *
 * Run: node create_mock_csv.js output.csv
 **/

var file = process.argv[2];
if (!file) {
  console.error("no output file specified");
  process.exit(1);
}
console.log("outputting to file: '%s'", file);

console.log("writing headers");
// write header sections
const csvWriter = createCsvWriter({
  path: file,
  header: config.map((c) => {
    return {
      id: c.csvField,
      title: c.csvField,
    };
  }),
});

// write each row
let nRows = 100;
console.log("writing %d rows", nRows);
let records = [];
for (var i = 0; i < nRows; i++) {
  let record = {};
  config.forEach((col) => (record[col.csvField] = col.generateRandom()));
  records.push(record);
}

console.log("writing to file");
// save to file
csvWriter
  .writeRecords(records)
  .then(() => console.log("The CSV file was written successfully"));
