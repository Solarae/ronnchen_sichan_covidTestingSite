const express = require('express')
const router = express.Router()

const Test = require('../../models/Test')

//@route    GET api/tests
//@desc     Get All Tests In Test
router.get('/', (req, res) => {
    Test.find()
        .then(tests => res.json(tests) )
})

//@route    POST api/tests
//@desc     Add test to Test
router.post('/', (req, res) => {
    const newTest = new Test({
        testBarcode: req.body.testBarcode,
        poolBarcode: req.body.poolBarcode,
        employeeID: req.body.employeeID
    })
    newTest.save().then(test => res.json(test))
});

//@route    Delete api/tests/id
//@desc     Delete a test from Test
router.delete('/:id', (req, res) => {
    Well.findById(req.params.id)
        .then(test => test.remove().then(() => res.json({success : true})))
        .catch(error => res.status(404).json({success : false}))
})

module.exports = router