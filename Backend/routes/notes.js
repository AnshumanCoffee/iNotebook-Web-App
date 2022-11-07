const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    obj = {
        avenger2: 'Thor',
        number: 69
    }
    res.json (obj)
})

module.exports = router