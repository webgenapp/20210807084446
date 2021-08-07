const express = require('express')
const router = express.Router()

const coffeesRouter = require('./coffees')
router.use('/coffees', coffeesRouter)

module.exports = router
