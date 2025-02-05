// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
  switch (scale) {
        case "F": {
          return ((value - 32) * 5) / 9 + "°C";
        }
        case "C":
        {
          return (value * 9)/5 + 32 + "°F";
        }
        default:
        return "Invalid Scale"
      }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { value, scale } = JSON.parse(input);
    const result = convertTemperature(value, scale);
    process.stdout.write(JSON.stringify(result));
  });