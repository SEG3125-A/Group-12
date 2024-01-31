
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp


document.getElementById("minInput").addEventListener("change", e => {
	populateListProductChoices('dietSelect', 'displayProduct', leftSlider.value,);
});
document.getElementById("maxInput").addEventListener("change", e => {
	var minPrice = document.getElementById("minInput");
	populateListProductChoices('dietSelect', 'displayProduct', minPrice.value, rightSlider.value);
});

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, minPrice=0, maxPrice=0) {
	var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var organic = document.getElementById("organicSelect");

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(products, s1.value, organic.value, minPrice, maxPrice);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {
		var divContainer = document.createElement("div");

		var groceryImageContainer = document.createElement("div");
		groceryImageContainer.className = "groceryImageContainer"


		divContainer.className = "checkboxGrocery"
		var groceryImage = document.createElement("img");
		groceryImage.src = optionArray[i]['imgSrc']
		groceryImage.alt = optionArray[i]['name']
		groceryImage.className = "groceryImageClass"
		groceryImageContainer.appendChild(groceryImage)

		divContainer.appendChild(groceryImageContainer)

		var productName = optionArray[i].name;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		divContainer.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(`$${(Math.round(optionArray[i]['price'] * 100) / 100).toFixed(2)} - ${productName}`));
		divContainer.appendChild(label);
		s2.appendChild(divContainer)
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : <br>";
	para.className = "finalprice"
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(`$${(Math.round(getProductPriceByName(ele[i].value) * 100) / 100).toFixed(2)} - ${ele[i].value}`));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode(`Total Price is $${(Math.round(getTotalPrice(chosenProducts) * 100) / 100).toFixed(2)}`));

}

function fillSliderColour(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function getLeftRightInputs(leftPointer, rightPointer) {
	const left = parseInt(leftPointer.value, 10);
	const right = parseInt(rightPointer.value, 10);
	return [left, right];
}

function controlRightInput(leftSlider, minInput, maxInput, controlSlider) {
    const [left, right] = getLeftRightInputs(minInput, maxInput);
    fillSliderColour(minInput, maxInput, '#FFFFFF', '#CF9FFF', controlSlider);
    if (left > right) {
        leftSlider.value = right;
        minInput.value = right;
    } else {
        leftSlider.value = left;
    }
}
    
function controlLeftInput(rightSlider, minInput, maxInput, controlSlider) {
    const [left, right] = getLeftRightInputs(minInput, maxInput);
    fillSliderColour(minInput, maxInput, '#FFFFFF', '#CF9FFF', controlSlider);
    setToggleAccessible(maxInput);
    if (right <= left) {
        rightSlider.value = right;
        maxInput.value = right;
    } else {
        maxInput.value = left;
    }
}

function controLeftSlider(leftSlider, rightSlider, minInput) {
  const [left, right] = getLeftRightInputs(leftSlider, rightSlider);
  fillSliderColour(leftSlider, rightSlider, '#FFFFFF', '#CF9FFF', rightSlider);
  if (left > right) {
    leftSlider.value = right;
    minInput.value = right;
  } else {
    minInput.value = left;
  }
}

function controlRightSlider(leftSlider, rightSlider, maxInput) {
  const [left, right] = getLeftRightInputs(leftSlider, rightSlider);
  fillSliderColour(leftSlider, rightSlider, '#FFFFFF', '#CF9FFF', rightSlider);
  setToggleAccessible(rightSlider);
  if (left <= right) {
    rightSlider.value = right;
    maxInput.value = right;
  } else {
    maxInput.value = left;
    rightSlider.value = left;
  }
}

function setToggleAccessible(currentTarget) {
  const rightSlider = document.querySelector('#rightSlider');
  if (Number(currentTarget.value) <= 0 ) {
    rightSlider.style.zIndex = 2;
  } else {
    rightSlider.style.zIndex = 0;
  }
}

const leftSlider = document.querySelector('#leftSlider');
const rightSlider = document.querySelector('#rightSlider');
const minInput = document.querySelector('#minInput');
const maxInput = document.querySelector('#maxInput');
fillSliderColour(leftSlider, rightSlider, '#FFFFFF', '#CF9FFF', rightSlider);
setToggleAccessible(rightSlider);

leftSlider.oninput = () => controLeftSlider(leftSlider, rightSlider, minInput);
rightSlider.oninput = () => controlRightSlider(leftSlider, rightSlider, maxInput);
minInput.oninput = () => controlRightInput(leftSlider, minInput, maxInput, rightSlider);
maxInput.oninput = () => controlLeftInput(rightSlider, minInput, maxInput, rightSlider);