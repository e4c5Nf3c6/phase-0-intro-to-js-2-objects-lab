const employee = {
    name: "Sherlock Holmes",
    address: "221B Baker Street",
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    return {...employeeObject, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject
}

function deleteFromEmployeeByKey(employeeObject, key) {
    let copyOfEmployeeObject = {...employeeObject};
    delete copyOfEmployeeObject[key];
    return copyOfEmployeeObject
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject
}
