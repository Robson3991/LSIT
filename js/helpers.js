const calculateRectangle = (square, rectangle) => {

	const difference = square / rectangle.x;
	const round = (element) => parseFloat(element).toFixed(2).replace(/[.,]00$/, "")

    if(difference <= 1) return false;

    const item = {
      x: round(rectangle.x * difference),
			y: round(rectangle.y * difference)
		}
		
		return item;
}

const addMessage = (element, message, isError) => {
	const errorClass = 'message--error';
	isError ? element.classList.add(errorClass) : element.classList.remove(errorClass)
	element.innerHTML = message;
}

export { calculateRectangle, addMessage }