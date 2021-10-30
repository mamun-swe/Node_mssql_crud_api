const express = require("express")
const StudentRouter = express.Router()
const StudentController = require("../controllers/student.controller")

StudentRouter.get("/", StudentController.Index)

module.exports = { StudentRouter }