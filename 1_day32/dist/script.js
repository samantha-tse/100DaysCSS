const minusElement = document.getElementsByClassName('minus')[0];
const numberElement = document.getElementsByClassName('number')[0];
const plusElement = document.getElementsByClassName('plus')[0];

let lastOp = "";

minusElement.addEventListener('click', function() {
    let currentValue = parseInt(numberElement.textContent);
    if (!isNaN(currentValue)) {
        numberElement.style.animation = 'fadeOut 0.3s ease-out';
        numberElement.style.transform = (lastOp === 'minus' ? 'scale(0.6)' : 'scale(1.4)');
				lastOp = "minus";
        numberElement.addEventListener('animationend', function() {
        		numberElement.textContent = currentValue - 1;
            numberElement.style.animation = '';
            numberElement.style.transition = 'transform 0.3s ease-in-out';
            numberElement.style.transform = 'scale(1.0)';
        });
    }
});

plusElement.addEventListener('click', function() {
    let currentValue = parseInt(numberElement.textContent);
    if (!isNaN(currentValue)) {
        numberElement.style.animation = 'fadeOut 0.3s ease-out';
        numberElement.style.transform = (lastOp === 'plus' ? 'scale(1.4)' : 'scale(0.6)');
				lastOp = "plus";
        numberElement.addEventListener('animationend', function() {
        		numberElement.textContent = currentValue + 1;
            numberElement.style.animation = '';
            numberElement.style.transition = 'transform 0.3s ease-in-out';
            numberElement.style.transform = 'scale(1.0)';
        });
    }
});