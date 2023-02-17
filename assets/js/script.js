var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;
var subtrair = document.getElementById("subtrair")
var adicionar = document.getElementById('adicionar')




subtrair.addEventListener('click', () => {
	currentNumber = currentNumber - 1;
	if (currentNumber < 0) { currentNumberWrapper.style = "color: red" }
	else { currentNumberWrapper.style = "color: black" }
	if (currentNumber >= "-10") { currentNumberWrapper.innerHTML = currentNumber }

})
adicionar.addEventListener('click', () => {
	currentNumber = currentNumber + 1;
	if (currentNumber >= 0) { currentNumberWrapper.style = "color: black" }
	if (currentNumber <= 10) { currentNumberWrapper.innerHTML = currentNumber }
})


