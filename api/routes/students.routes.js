const express = require("express")
const StudentRouter = express.Router()
const StudentController = require("../controllers/student.controller")

StudentRouter.get("/", StudentController.Index)
StudentRouter.post("/", StudentController.Store)
StudentRouter.get("/:id", StudentController.Show)
StudentRouter.put("/:id", StudentController.Update)
StudentRouter.delete("/:id", StudentController.Destroy)

module.exports = { StudentRouter }