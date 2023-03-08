const employee = {
    name: "Sherlock Holmes",
    streetAddress: "221B Baker Street",
};

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    return {
        ...employeeObject,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject;
};
function deleteFromEmployeeByKey(employeeObject, key) {
    const newEmployee = {...employeeObject};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject;
};
