const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const PORT = 5500

app.post("/lab6/analyze-results", (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})

app.listen(PORT, '127.0.0.1', () =>
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
);

