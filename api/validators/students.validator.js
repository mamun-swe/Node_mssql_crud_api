
// Store validator
const Store = data => {
    let errors = {}

    if (!data.studentId) errors.studentId = "Student ID is required."
    if (!data.name) errors.name = "Name is required."
    if (!data.dept) errors.dept = "Dept. is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

// Update validator
const Update = data => {
    let errors = {}

    if (!data.name) errors.name = "Name is required."
    if (!data.dept) errors.dept = "Dept. is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

module.exports = {
    Store,
    Update
}