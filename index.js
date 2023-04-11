const App = require("./App")

App.createUser('igoradelino@gmail.com' , 'Igor Adelino')
App.createUser('igoradelino@hotmail.com' , 'Igor Gomes')
App.createUser('igoradelino@outlook.com' , 'Igor Lopes')

App.deposit('igoradelino@gmail.com', 100)

App.transfer('igoradelino@gmail.com', 'igoradelino@outlook.com', 20)

App.changeLoanFee(10)
App.takeLoan('igoradelino@hotmail.com', 2000, 24)

console.log(App.findUser('igoradelino@gmail.com').account)
console.log(App.findUser('igoradelino@hotmail.com').account.loans[0].installments)
console.log(App.findUser('igoradelino@outlook.com').account)