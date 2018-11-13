var path = require("path")
console.log(path.resolve())
console.log("------------------")
module.exports = {
    entry: {
        entry1: './src/pages/index/index.js',
        // entry2:'./src/pages/alert/index.js',
    },
    output: {
        path: path.resolve() + "/dist",
        filename: "bundle.js"
    }
}