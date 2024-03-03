const express = require('express')
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use('/lab6', express.static(path.join(__dirname, 'public')));

const PORT = 5500

app.post("/submit-answers", (req, res) => {
    console.log("Request received")


    let answers = req.body

    if (answers.hasOwnProperty('answers')) {
        answers = answers['answers']
    }
    else {
        res.status(400).send("Bad Request")
    }

    if (!fs.existsSync('./data/db.json')) {
        try {
            fs.writeFileSync('./data/db.json', '');
        } catch (err) {
            console.error(err);
        }
    }

    fs.readFile('./data/db.json', { encoding: 'utf-8' }, (err, data) => {
        let dataset = data ? JSON.parse(data) : {}
        let nameComment = ['', '']

        answers.forEach(element => {
            if (element['name'] === 'name') {
                nameComment[0] = element['value']
            }
            else if (element['name'] === 'comments') {
                nameComment[1] = element['value']
            }
            else {
                if (!dataset.hasOwnProperty(element['name'])) {
                    dataset[element['name']] = {}
                }

                if (!dataset[element['name']].hasOwnProperty(element['value'])) {
                    dataset[element['name']][element['value']] = 1
                }
                else {
                    dataset[element['name']][element['value']] += 1
                }
            }
        });
        if (!dataset.hasOwnProperty('nameAndComment')) {
            dataset['nameAndComment'] = []
        }
        dataset['nameAndComment'] = [...dataset['nameAndComment'], nameComment]
        fs.writeFile('./data/db.json', JSON.stringify(dataset, null, 4), () => {
            if (err) {
                throw err
            }
        })
    })
    res.status(200).send("Submitted Form");
})

app.listen(PORT, '127.0.0.1', () =>
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
);

