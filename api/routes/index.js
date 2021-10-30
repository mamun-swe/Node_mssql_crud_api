const express = require("express")
const router = express.Router()
const { StudentRouter } = require("./students.routes")

router.use("/student", StudentRouter)

module.exports = router