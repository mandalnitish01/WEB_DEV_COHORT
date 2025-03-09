const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.buttons button');
        
        let currentInput = '';
        let operator = '';
        let firstOperand = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.innerText;
                
                if (!isNaN(value) || value === '.') {
                    currentInput += value;
                    display.value = currentInput;
                } else if (value === 'AC') {
                    currentInput = '';
                    firstOperand = '';
                    operator = '';
                    display.value = '0';
                } else if (value === '√') {
                    if (currentInput) {
                        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                        display.value = currentInput;
                    }
                } else if (value === '%') {
                    if (currentInput) {
                        currentInput = (parseFloat(currentInput) / 100).toString();
                        display.value = currentInput;
                    }
                } else if (value === '=') {
                    if (firstOperand && operator && currentInput) {
                        try {
                            currentInput = eval(`${firstOperand} ${operator} ${currentInput}`).toString();
                            display.value = currentInput;
                        } catch (error) {
                            display.value = 'Error';
                        }
                        firstOperand = '';
                        operator = '';
                    }
                } else {
                    if (currentInput) {
                        firstOperand = currentInput;
                        operator = value;
                        currentInput = '';
                    }
                }
            });
        });