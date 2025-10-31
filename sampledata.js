
const fs = require("fs")

const data = [
  { id: 1, name: "Abel Kassu", role: "Developer", location: "Addis Ababa", email: "abel@example.com" },
  { id: 2, name: "Tewodros Birhanu", role: "Designer", location: "Addis Ababa", email: "tewodros@example.com" },
  { id: 3, name: "Sara Mekonen", role: "Manager", location: "Hawassa", email: "sara@example.com" },
  { id: 4, name: "Nahom Bekele", role: "Tester", location: "Adama", email: "nahom@example.com" },
  { id: 5, name: "Hanna Alemu", role: "Frontend Engineer", location: "Mekelle", email: "hanna@example.com" },
  { id: 6, name: "Yonatan Fekadu", role: "Backend Engineer", location: "Bahir Dar", email: "yonatan@example.com" },
  { id: 7, name: "Selamawit Girma", role: "Project Manager", location: "Dire Dawa", email: "selamawit@example.com" },
]

fs.writeFileSync("data.json", JSON.stringify(data, null, 2))
console.log("✅ Sample data created successfully!")