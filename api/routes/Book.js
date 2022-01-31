const Book = require("../models/Book");
const VirtualShelf = require("../models/VirtualShelf");
var express = require("express");
const app = require("..");
var router = express.Router();


//GET METHOD for all the books
router.get("/books", async (req, res) => {
    try {
        let books = await Book.findAll()
        res.status(200).json(books)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

//GET METHOD BY USING SUBRESOURCE
router.get("/virtualShelves/:id/books", async (req, res) => {
    try {
        let virtualShelf = await VirtualShelf.findByPk(req.params.id, { include: [Book] })
        if (virtualShelf) {
            res.status(200).json(virtualShelf)
        }
        else {
            res.status(404).json({ message: "Not Found" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

//POST METHOD BY USING SUBRESOURCE
router.post("/virtualShelves/:id/books", async (req, res) => {
    try {
        let virtualShelf = await VirtualShelf.findByPk(req.params.id)
        if (virtualShelf) {
            let book = new Book(req.body)
            book.ShelfID = virtualShelf.id
            await book.save()
            res.status(201).json({ message: "Created" })
        }
        else {
            res.status(404).json({ message: "Not Found" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

router.post("/books", async (req, res, next) => {
    try {
        await Book.create(req.body);
        res.status(201).json({ message: "Book Created!" });
    } catch (err) {
        next(err);
    }
});

//PUT METHOD
router.put("/books/:id", async (req, res) => {
    try {
        let book = await Book.findByPk(req.params.id)
        if (book) {
            await book.update(req.body)
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

//get method2
router.get("/virtualShelves/:id/books", async (req, res, next) => {
    try {
        const books = await Book.findAll({ where: { ShelfID: `${req.params.id}` } })
        if (books) {
            return res.status(200).json(books);
        } else {
            return res.status(404).json({ message: "Not found!" })
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
});

// //put method
router.put("/virtualShelves/:id/books/:bID", async (req, res, next) => {
    try {
        const { Title, Genre, Url } = req.body;
        const virtualShelf = await VirtualShelf.findByPk(req.params.id);
        if (virtualShelf) {
            const book = await Book.findByPk(req.params.bID, { where: { ShelfID: `${virtualShelf.ShelfID}` } })
            if (book) {
                await Book.update({ Title: Title, Genre: Genre, Url: Url }, { where: { BookID: book.BookID } })
            }
            return res.status(200).json({ message: "Successfully updated the book!" });
        }

    }
    catch (err) {
        console.log(err);
        next(err);

    }
})
//delete method
router.delete("/virtualShelves/:id/books/:bID", async (req, res, next) => {
    try {
        const virtualShelf = await VirtualShelf.findByPk(req.params.id);
        if (virtualShelf) {
            const book = await Book.findByPk(req.params.bID, { where: { BookID: `${book.BookID}` } })
            if (book) {
                await Book.destroy({ where: { BookID: book.BookID } })
            }
            return res.status(200).json({ message: "Successfully deleted the book!" });
        }
    }
    catch (err) {
        console.log(err);
        next(err);

    }
})

//FILTERING
router.get("/books/filtered", async (req, res) => {
    const query = {
        where: {}
    }
    if (req.query.Genre) {
        query.where.Genre = {
            [Op.like]: '%${req.query.Genre]%'
        }
    }
    if (req.query.Title) {
        query.where.Title = {
            [Op.like]: '%${req.query.Title]%'
        }
    }
    try {
        let books = await Book.findAll(query)
        res.status(200).json(books)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }

})


module.exports = router;