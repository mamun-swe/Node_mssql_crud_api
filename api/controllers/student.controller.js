const db = require("../models")
const Student = db.students
const Op = db.Sequelize.Op

// Index of students
const Index = async (req, res, next) => {
    try {
        const results = await Student.findAll()



        res.status(200).json({
            status: true,
            message: "This is student controller."
        })
    } catch (error) {
        if (error) next(error)
    }
}


module.exports = {
    Index
}