// You are building a vault that requires three mathematical calculations to generate the three codes in a combination. Use the JavaScript console or the script block within an HTML page to create three variables. Each variable will be the result of each calculation (three in total). The combination of the lock is 10 - 40 - 39. You must use three different arithmetic operators that will generate each individual number, then display the combination on the HTML page, or in an alert popup.

//Steps
// 1. Create calculation to generate 10
// 2. Capture as a variable
// 3. Create calculation to generate 40
// 4. Capture as a variable
// 5. Create calculation to generate 39
// 6. Capture as a variable
// 7. Create an alert in javascript that shows all three variables in the correct order

const var1 = 5 * 2;
console.log(var1);
//expected behavior: generates the number 10

const var2 = 20 + 20;
console.log(var2);
//expected behavior: generates the number 40

const var3 = 40 - 1
console.log(var3)
//expected behavior: generates the number 39 

alert(`You have recieved this message because you have been chosen to open important vault. Here is the secret combination: ${var1} - ${var2} - ${var3}`)
//expected behavior: spits out the phrase, with the combination of 10 - 40 - 39