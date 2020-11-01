const calculateRectangle = (square, rectangle) => {

	const difference = square / rectangle.x;

    if(difference <= 1) return false;

    const item = {
      x: rectangle.x * difference,
			y: parseFloat(rectangle.y * difference).toFixed(2)
		}
		
		return item;
}

const addMessage = (element, message, isError) => {
	const errorClass = 'message--error';
	isError ? element.classList.add(errorClass) : element.classList.remove(errorClass)
	element.innerHTML = message;
}

export { calculateRectangle, addMessage }