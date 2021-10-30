module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        name: {
            type: Sequelize.STRING
        },
        studentId: {
            type: Sequelize.STRING
        },
        dept: {
            type: Sequelize.STRING
        }
    });

    return Student
};