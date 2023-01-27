
let express = require("express")
const app = express()


// middleware function 1
app.use( (req, res, next) => {
    console.log(`\n ${new Date()} - ${req.method} request for ${req.url}`)
    next() // pass control to the next handler
})

// middleware function 2
app.use(express.static("../static"))

app.listen(8081, () => {
    console.log("  Serving static on port 8081...")
})