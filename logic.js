//Log details to side window

//Income
// var log_income = document.getElementById('log_container');
var btn_income = document.getElementById('btn_income');
var income_name = document.getElementById('income_name');
var income_amt = document.getElementById('income_amt');
var period_income = document.getElementById('period_income')


var expense_name = document.getElementById('expense_name');
var expense_amt = document.getElementById('expense_amt');
var period_expense = document.getElementById('period_expense');
var btn_expense = document.getElementById('btn_expense');


var reset_income = document.getElementById('reset_income');
var reset_expense = document.getElementById('reset_expense');

var expense_chart = document.getElementById('expense_chart');
var income_chart = document.getElementById('income_chart');

var client_submit = document.getElementById('client_submit');


var total_inc = document.getElementById('total_inc');
var arr_inc = [];
var arr_exp = [];


btn_income.addEventListener('click', print_income);
btn_expense.addEventListener('click', print_expense);
reset_income.addEventListener('click', reset_income_detail);
reset_expense.addEventListener('click', reset_expense_detail);


client_submit.addEventListener('click', update_date_name)
    //client name adn date update
function update_date_name() {
    // document.getElementById('expense-data').hidden = true;

    var name = document.getElementById('client_name').value;
    var date = document.getElementById('month').value;
    date = date + ", " + document.getElementById('year').value;

    document.getElementById('name').innerHTML = name;
    document.getElementById('date').innerHTML = date;
}




//addition of total amount:
btn_income.addEventListener('click', push_total_income);
//addition of total expense:
btn_expense.addEventListener('click', push_total_expense)


function print_income() {
    console.log("check")
    var div = document.createElement('div');
    div.textContent = "Income Source: " + income_name.value + " Duration: " + period_income.value + ", Amount: " + income_amt.value;
    income_chart.appendChild(div)
}

function print_expense() {
    console.log("expense print")
    var div = document.createElement('div');
    div.textContent = "Expense Source: " + expense_name.value + " Duration: " + period_expense.value + ", Amount: " + expense_amt.value;
    // expense_chart.insertBefore(div, total_exp);
    expense_chart.appendChild(div)
}

function reset_expense_detail() {
    console.log("check")
    expense_name.value = "";
    expense_amt.value = "";
    period_expense = "Select Duration"
}

function reset_income_detail() {
    console.log("reset")
    income_name.value = "";
    income_amt.value = "";
    period_income = "Select Duration"
}


function push_total_income() {
    var amt = income_amt.value;
    arr_inc.push(amt);
    console.log(arr_inc)
    var income = 0;
    for (var i = 0; i < arr_inc.length; i++) {
        income = income + Number(arr_inc[i]);
    }
    var total_income = document.getElementById('total_income');
    total_income.innerHTML = income;
    remaining_amount();
}

function push_total_expense() {
    var amt = expense_amt.value;
    arr_exp.push(amt);
    console.log(arr_exp)
    var expense = 0;
    for (var i = 0; i < arr_exp.length; i++) {
        expense = expense + Number(arr_exp[i]);
    }
    var total_expense = document.getElementById('total_expense');
    total_expense.innerHTML = expense;
    remaining_amount();
}

//calculate remaining amount
function remaining_amount() {
    var income = Number(document.getElementById('total_income').innerHTML);
    var expense = Number(document.getElementById('total_expense').innerHTML);
    console.log(income)
    remaining_balance = income - expense;
    document.getElementById('remaining_balance').innerHTML = remaining_balance;

    var message = document.getElementById('message');

    //checking remaining balance
    if (remaining_balance < 2000) {
        message.innerHTML = 'Your balance is below 2000, reduce your expenses'
    } else if (remaining_balance >= 2000 && remaining_balance <= 5000) {
        message.innerHTML = 'Your balance is below 4000, NEED TO SAVE MORE'
    } else {
        message.innerHTML = 'Remaining balance is above permissible limit'
    }
}