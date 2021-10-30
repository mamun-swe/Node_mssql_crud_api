const db = require("../models")
const Student = db.students
const Op = db.Sequelize.Op
const Validator = require("../validators/students.validator")

// Index of students
const Index = async (req, res, next) => {
    try {
        // const results = await Student.findAll({
        //     limit: 1,
        //     offset: 1,
        //     where: {}
        // })

        const results = await Student.findAll()

        res.status(200).json({
            status: true,
            data: results
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Store new student
const Store = async (req, res, next) => {
    try {
        const { name, studentId, dept } = req.body

        // validate check
        const validate = await Validator.Store(req.body)
        if (!validate.isValid) return res.status(422).json(validate.errors)

        // Check unique student
        const isExist = await Student.findOne({ where: { studentId } })
        if (isExist) {
            return res.status(409).json({
                status: false,
                message: "Student already exist."
            })
        }

        // new student object
        const newStudent = {
            name,
            studentId,
            dept
        }

        // create new student
        const isCreateStudent = await Student.create(newStudent)
        if (!isCreateStudent) {
            return res.status(501).json({
                status: false,
                message: "Failed to create student."
            })
        }

        res.status(201).json({
            status: true,
            message: "Successfully student created."
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Show specific student
const Show = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await Student.findByPk(id)

        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Update specific student
const Update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, dept } = req.body

        // validate check
        const validate = await Validator.Update(req.body)
        if (!validate.isValid) return res.status(422).json(validate.errors)

        const isUpdateAccount = await Student.update(
            { name, dept },
            { where: { id } }
        )

        if (!isUpdateAccount) {
            return res.status(501).json({
                status: false,
                message: "Failed to update."
            })
        }

        res.status(201).json({
            status: true,
            message: "Successfully student updated."
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Destroy specific student
const Destroy = async (req, res, next) => {
    try {
        const { id } = req.params

        const isDestroyed = await Student.destroy({ where: { id } })
        if (!isDestroyed) {
            return res.status(501).json({
                status: false,
                message: "Failed to delete student."
            })
        }

        res.status(200).json({
            status: true,
            message: "Successfully student deleted."
        })
    } catch (error) {
        if (error) next(error)
    }
}

module.exports = {
    Index,
    Store,
    Show,
    Update,
    Destroy
}