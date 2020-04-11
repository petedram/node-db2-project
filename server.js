const express = require("express");

const db = require("./data/dbConfig");

const server = express();

server.use(express.json());

module.exports = server;

server.get('/', (req, res) => {
    db('cars')
        .then(account => {
            if (account) {
                res.status(200).json({ data: account });
            } else {
                res.status(400).json({ message: "account not found" })
            }
        })
        .catch(error => {
        res.status(500).json({ message: "sorry, ran into an error" });
        });
})

server.post('/', (req, res) => {
    console.log ('post', req.body)
    const postData = req.body;
    db('cars')
        .insert(postData)
        .then(car => {
            if (car) {
                res.status(201).json({ date: car});
            } else {
                res.status(400).json({ message: "response from server is undefined" })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "failed", err });
        });
});

