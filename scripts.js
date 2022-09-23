let errors = [];
let currentTotal = 0;
const regex = /[+-]?\d+(\.\d+)?/g;

let expenses = [
    {
        date: '2022-09-20',
        expense: 'Frys',
        cost: '83.05',
        category: 'Groceries',
        person: 'Miguel',
        method: 'Credit Card'
    },
    {
        date: '2022-09-21',
        expense: 'Starbucks',
        cost: '5.05',
        category: 'Food-Out',
        person: 'Miguel',
        method: 'Credit Card'
    },
]

//Function to submit the expense
function submitExpense() {
    if(validateForm()) {
        createExpense();
    } else {
        alert("Fix yo shit homie");
    }
}

//Function to create the new expense
function createExpense() {
    let newDate = document.getElementById('expenseDate').value;
    let newExpense = document.getElementById('expenseName').value;
    let newCost = document.getElementById('expenseCost').value;
    let newCategory = document.getElementById('expenseCategory').value;
    let newPerson = document.getElementById('expenseUser').value;
    let newMethod = document.getElementById('expenseMethod').value;

    let theExpense = {
        date: newDate,
        expense: newExpense,
        cost: newCost,
        category: newCategory,
        person: newPerson,
        method: newMethod
    }

    addExpense(theExpense);
    clearForm();
}

//Function to clear the form once the expense has been added
function clearForm() {
    document.getElementById('expenseDate').value = '';
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseCost').value = '';
    document.getElementById('expenseCategory').value = '';
    document.getElementById('expenseUser').value = '';
    document.getElementById('expenseMethod').value ='';
}

//Function to add the new expense to the table
function addExpense(item) {
    // Create new table row element and all the variables that will go in it
    let newRow = document.createElement('tr');
    let theDate = new Date(item.date);

    newRow.innerHTML = `<th scope="row">${theDate.toLocaleDateString()}</th><td>${item.expense}</td><td>$${item.cost}</td><td>${item.category}</td>
                        <td>${item.person}</td><td>${item.method}</td>`;
    
    document.getElementById('tableBody').append(newRow);
    currentTotal = currentTotal + parseFloat(item.cost);
    console.log(currentTotal);
    document.getElementById('total').innerText = '$' + currentTotal;
}

//Function to validate the form for inputing an expense
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

//Page on load functions and event listeners
function loadingFunction() {
    expenses.forEach(element => {
        addExpense(element);
    });
}