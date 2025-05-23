function invertedMountain(n) {
    let pattern = '';
       for(let i = n;i>=1;i--){
         for(let j = 1;j<= i;j++){
             pattern += '*'; 
         }
         pattern += '\n';
       }
       return pattern;
   }
   
   // You just need to implement the invertedMountain function
   const readline = require('readline');
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
   });
   
   rl.on('line', (input) => {
     const n = parseInt(input.trim(), 10);  // Get the number input
     const result = invertedMountain(n);  // Call our function
     process.stdout.write(result);  // Output the result
   });
   