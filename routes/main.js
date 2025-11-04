// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "Drinktopia",
                productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                shopLocations: [
                    {
                        name: "Camden Town", 
                        address: "64 Zoo Lane, London, NW1 3SB", 
                        manager: "John Smith"
                    },
                    {
                        name: "Peckham Rye", 
                        address: "10 New Street, London, SE15 5RD", 
                        manager: "Jack Knight"
                    },
                    {
                        name: "Dalston", 
                        address: "50 Kings Avenue, London, E8 1FG", 
                        manager: "Sarah Johnson"
                    },
                    {
                        name: "Wood Green",
                        address: "21 Lordship Lane, London, N22 4AN",
                        manager: "Lisa Simpson"
                    }
                ]
            };

// Handle the main routes
router.get('/', (req, res) => {
    res.render('index.ejs', shopData);
});

router.get('/about', (req, res) => {
    res.render('about.ejs', shopData);
});

router.get('/search', (req, res) => {
    res.render('search.ejs', shopData);
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get('/register', (req, res) => {
    res.render('register.ejs', shopData);
});

router.post('/registered', (req, res) => {
    res.send("Hello " + req.body.first + " " + req.body.last + " you are now registered! We will send an email to you at " + req.body.email);
});

router.get('/survey', (req, res) => {
    res.render('survey.ejs', shopData);
});

router.post('/survey-result', (req, res) => {
    res.render('survey-result.ejs', {shop: shopData, survey: req.body});
});

// Export the router object so index.js can access it
module.exports = router;
