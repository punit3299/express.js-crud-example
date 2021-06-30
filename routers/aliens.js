const express = require('express');
const Alien = require('../schemas/Alien');
const router = express.Router();

// Find alien by name using query param

router.get('/find', async (req, res) => {
    try {
        let alien = await Alien.findOne({name:req.query.name})
        res.json(alien)
    } catch (error) {
        res.send('Error occured, ' + error)
    }
})

// Find all aliens

router.get('/', async (req, res) => {
    try {
        let aliens = await Alien.find();
        res.json(aliens)
    } catch (error) {
        res.send('Error occured, ' + error)
    }
})

// Find alien by Id

router.get('/:id', async (req, res) => {
    try {
        let alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (error) {
        res.send('Error occured' + error)
    }
})

// Add an alien

router.post('/', async (req, res) => {

    let alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        active: req.body.active
    });

    await alien.save((err, data) => {
        res.json(data)
    })
})

// Delete an alien by Id

router.delete('/:id', async (req, res) => {
    try {
        let alien = await Alien.findByIdAndDelete(req.params.id);
        res.send("Alien Deleted")
    } catch (error) {
        res.send('Error occured' + error)
    }
})

// Update status of alien by id

router.patch('/:id', async (req, res) => {
    try {
        let alien = await Alien.findById(req.params.id);
        alien.active = req.body.active;
        await alien.save((err, data) => {
            res.json(data)
        })
    } catch (error) {
        res.send('Error occured' + error)
    }
})

module.exports = router;