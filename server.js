const path = require("path")
const express = require("express")
const fs = require("fs")

const app = express()
var PORT = process.env.PORT || 3000

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`)
})