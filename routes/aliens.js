const express = require('express');

const router = express.Router();
const Aliens = require('../model/alien.js')


router.get('/', async (req, res) =>{
    try {
        const aliens = await Aliens.find()
        res.json(aliens)
        
    } catch (error) {

        res.send('Error: ' + error.message)

        
    }
    
})


router.get('/:id', async (req, res) =>{
    try {
        const aliens = await Aliens.findById(req.params.id)
        res.json(aliens)
        
    } catch (error) {

        res.send('Error: ' + error.message)

        
    }
    
})

router.patch('/:id', async (req, res) =>{
    try {
        const aliens = await Aliens.findById(req.params.id)
        aliens.sub = req.body.sub
        const a1 = await aliens.save()
        res.json(a1)
        
    } catch (error) {

        res.send('Error: ' + error.message)

        
    }
    
})

router.delete('/:id', async (req, res) =>{
    try {
        const aliens = await Aliens.findById(req.params.id)
          aliens.remove()
          res.json('Successfully removed Alien from the database')
        
        
    } catch (error) {

        res.send('Error: ' + error.message)

        
    }
    
})


router.post('/', async(req, res) =>{
    const  alien =  new Aliens({
        name:req.body.name,
        tech: req.body.tech,
        sub : req.body.sub
})
   try {
       const a1 = await alien.save()
       res.json(a1)
       
   } catch (error) {
       res.send('Error:' + error.message)
       
   }
})

module.exports = router