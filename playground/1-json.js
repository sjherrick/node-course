const fs = require('fs')

const jsonData = fs.readFileSync('1-json.json')
const data = JSON.parse(jsonData.toString())

data.name = "Steve"
data.age = 31

const returnData = JSON.stringify(data)
fs.writeFileSync('1-json.json', returnData)