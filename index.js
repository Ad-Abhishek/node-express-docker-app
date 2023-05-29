const express = require("express")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

const cars = [
    {
        id: 1,
        name: "Audi",
    },
    {
        id: 2,
        name: "Mercedes",
    },
    {
        id: 4,
        name: "Volvo",
    },
];

app.get('/api', (req, res) => {
    try {
        res.status(200).json(cars)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
})


app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
