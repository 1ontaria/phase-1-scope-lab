var customerName = 'bob'

var upperCaseCustomerName = function () {
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'not Ontaria'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jarius'
    return leastFavoriteCustomer
}