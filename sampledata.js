
const fs = require("fs")

const data = [
  { id: 1, name: "Abel Kassu", role: "Developer" },
  { id: 2, name: "Abel Birhanu", role: "Designer" },
  { id: 3, name: "Sara Mekonen", role: "Manager" },
]

fs.writeFileSync("data.json", JSON.stringify(data, null, 2))
console.log("✅ Sample data created successfully!")