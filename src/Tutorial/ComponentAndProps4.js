//Props are Read-Only
//Input not change after run
function sum(a, b) {
    return a + b;
}

//Input change after run
function withdraw(account, amount) {
    account.total -= amount;
}