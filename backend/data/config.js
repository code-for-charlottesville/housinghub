/**
 * Mappings between CSV field and
 **/

let randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
let randInt = (max) => Math.ceil(Math.random() * max);
let randBool = () => (randInt(2) === 1 ? "y" : "n");

let config = [
  {
    csvField: "Primary Locality",
    generateRandom: () =>
      randFromArr(["Charlottesville", "Greene", "Albamarle", "Nelson"]),
  },
  {
    csvField: "Name of Property (if multi-unit complex)",
    generateRandom: () =>
      randBool() === "y" ? "David's Building Complex" : "",
  },
  {
    csvField: "Address",
    generateRandom: () => `${randInt(1000)} Main Street`,
  },
  {
    csvField: "Unit or Apt. #",
    generateRandom: () => (randBool() === "y" ? randInt(10) : ""),
  },
  {
    csvField: "Zip Code",
    generateRandom: () => `2290${randInt(9)}`,
  },
  {
    csvField: "Active (Y/N/?)",
    generateRandom: () => randBool(),
  },
  {
    csvField: "Last Contact Date)",
    generateRandom: () => `10/${randInt(30)}/2019`,
  },
  {
    csvField: "Contacted By (email)",
    generateRandom: () => `user${randInt(15)}@gmail.com`,
  },
  {
    csvField: "Contact method",
    generateRandom: () => `${randFromArr(["email", "phone", "in-person"])}`,
  },
  {
    csvField: "Available rentals at contact date? (Y/N)",
    generateRandom: () => randBool(),
  },
  {
    csvField: "Potential Month Available",
    generateRandom: () => `${randInt(12)}`,
  },
  {
    csvField: "Year Available",
    generateRandom: () => `202${randInt(3)}`,
  },
  {
    csvField: "Additional Notes",
    generateRandom: () => "Lorem ipsum",
  },
  {
    csvField: "Name of Primary Contact",
    generateRandom: () => `landlord${randInt(15)}@gmail.com`,
  },
  {
    csvField: "Housing Type",
    generateRandom: () => randFromArr(["apartment", "condo", "house"]),
  },
  {
    csvField: "0BR/Eff",
    generateRandom: () => `${randBool()}`,
  },
  {
    csvField: "1BR",
    generateRandom: () => `${randBool()}`,
  },
  {
    csvField: "2BR",
    generateRandom: () => `${randBool()}`,
  },
  {
    csvField: "3BR",
    generateRandom: () => `${randBool()}`,
  },
  {
    csvField: "Bath (priv or shared)",
    generateRandom: () => "priv",
  },
  {
    csvField: "Bath (#)",
    generateRandom: () => `${randInt(4)}`,
  },
  {
    csvField: "Floor (#)",
    generateRandom: () => `${randInt(15)}`,
  },
  {
    csvField: "Role of Primary Contact",
    generateRandom: () => "landlord",
  },
  {
    csvField: "Primary Contact Phone",
    generateRandom: () => `434-${randInt(900) + 99}-${randInt(9000) + 999}`,
  },
  {
    csvField: "Alternate Phone",
    generateRandom: () => `434-${randInt(900) + 99}-${randInt(9000) + 999}`,
  },
  {
    csvField: "Primary Contact Email",
    generateRandom: () => `landlord${randInt(15)}@gmail.com`,
  },
  {
    csvField: "Wheelchair accessible? (Y/N)",
    generateRandom: () => randBool(),
  },
  {
    csvField: "On or near bus line? (Y/N)",
    generateRandom: () => randBool(),
  },
  {
    csvField: "School District",
    generateRandom: () =>
      randFromArr(["albamarle", "green", "monticello", "Charlottesville"]),
  },
  {
    csvField: "Credit Screening Company Used (Name)",
    generateRandom: () => `credit screening company ${randInt(3)}`,
  },
  {
    csvField: "Background Screening Company Used (Name)",
    generateRandom: () => `background screening company ${randInt(3)}`,
  },
  {
    csvField: "Application Fee ($)",
    generateRandom: () => `${randInt(100)}`,
  },
  {
    csvField: "Deposit ($)",
    generateRandom: () => `${randInt(1200)}`,
  },
  {
    csvField: "Last Month Rent Required?",
    generateRandom: () => randBool(),
  },
  {
    csvField: "Monthly Rent ($)",
    generateRandom: () => `${randInt(600) + 400}`,
  },
  {
    csvField: "HCV accepted (Y/N)",
    generateRandom: () => randBool(),
  },
  {
    csvField: "CSRAP voucher accepted (Y/N)",
    generateRandom: () => randBool(),
  },
  {
    csvField: "History of rejection based on criminal history? (Y/N)",
    generateRandom: () => randBool(),
  },
  {
    csvField: "Listing Date",
    generateRandom: () => `10/${randInt(30)}/2019`,
  },
  {
    csvField: "Where Listed",
    generateRandom: () => randFromArr(["apartments.com", "zillow", ""]),
  },
];

module.exports = config;
