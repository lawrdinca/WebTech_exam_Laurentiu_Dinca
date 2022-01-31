const VirtualShelf = require("../models/VirtualShelf");
const Book = require("../models/Book");
var express = require("express");
const app = require("..");
var router = express.Router();

// GET METHOD over all Virtual Shelves
router.get("/virtualShelves", async (req, res) => {
    try {
        let virtualShelves = await VirtualShelf.findAll()
        res.status(200).json(virtualShelves)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

//POST METHOD on a virtualShelf
router.post("/virtualShelves", async (req, res) => {
    try {
        await VirtualShelf.create(req.body)
        res.status(201).json({ message: "Shelf Created!" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

//PUT METHOD on virtualShelf
router.put("/virtualShelves/:id", async (req, res) => {
    try {
        let virtualShelf = await VirtualShelf.findByPk(req.params.id)
        if (virtualShelf) {
            await virtualShelf.update(req.body)
            res.status(201).json({ message: "OK" })
        }
        else {
            res.status(404).json({ message: "Not Found" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

//DELETE METHOD on a virtualShelf
router.delete("/virtualShelves/:id", async (req, res) => {
    try {
        let virtualShelf = await VirtualShelf.findByPk(req.params.id)
        if (virtualShelf) {
            await virtualShelf.destroy()
            res.status(204).json({ message: "No Content" })
        }
        else {
            res.status(404).json({ message: "Not Found" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

//FILTERING
router.get("/virtualShelves/filtered", async (req, res) => {
    const query = {
        where: {}
    }

    if (req.query.date) {
        query.where.date = {
            [Op.like]: '%${req.query.date]%'
        }
    }
    if (req.query.description) {
        query.where.description = { [Op.like]: '%$[req.query.descrition]$' }
    }
    try {
        let books = await Book.findAll(query)
        res.status(200).json(books)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

//PAGINATION
router.get("/virtualShelves/paginated", async (req, res) => {
    let limit = 1;
    countPagination = 0;
    try {
        VirtualShelf.findAndCountAll({
            limit: limit,
            offset: countPagination,
        }).then(function (result) {
            res.status(202).json(result.rows);
            countPagination += limit;
        });
    } catch (err) {
        console.warn(err);
        res.status(500).json({ message: "Error!" });
    }
});

module.exports = router;
