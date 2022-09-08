let errors = [];
let currentTotal = 83.05;

function submitExpense() {
    if(validateForm()) {
        addExpense();
    } else {
        alert("Fix yo shit homie");
    }
}

function addExpense() {
    // Create new table row element and all the variables that will go in it
    let newRow = document.createElement('tr');
    let newDate = document.getElementById('expenseDate').value;
    let newExpense = document.getElementById('expenseName').value;
    let newCost = document.getElementById('expenseCost').value;
    let newCategory = document.getElementById('expenseCategory').value;
    let newPerson = document.getElementById('expenseUser').value;
    let newMethod = document.getElementById('expenseMethod').value;

    newRow.innerHTML = `<th scope="row">${newDate}</th><td>${newExpense}</td><td>${newCost}</td><td>${newCategory}</td>
                        <td>${newPerson}</td><td>${newMethod}</td>`;
    
    document.getElementById('tableBody').append(newRow);
    currentTotal = currentTotal + parseInt(newCost);
    console.log(currentTotal);
    document.getElementById('total').innerText = '$' + currentTotal;
}

function validateForm() {
    errors = [];
    const inputs = document.querySelectorAll('input');

    //Check for valid inputs on all input types
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === '') {
            console.log(inputs[i].name);
            errors.push(inputs[i].name);
        }
    }

    //Check that cost is a number


    if(errors.length > 0) {
        return false;
    } else {
        return true;
    }
}