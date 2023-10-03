function calculatePrice () {
    let price = document.getElementById("price");
    let drinkSize = document.getElementsByName("Size");
    let select = document.getElementById("DrinkSelect").value;

    for (let dSize of drinkSize){
        if (dSize.checked) {
            size = dSize.value
        }
    }

    if (select == "Bubble milktea"){
        switch (size) {
            case "Small":
                price.innerHTML = 25;
                break;
            case "Medium":
                price.innerHTML = 29;
                break;
            case "Large":
                price.innerHTML = 34;
                break;
            default :
                price.innerHTML = 0;
        }
    } else if (select == "Iced latte") {
        switch (size) {
            case "Small":
                price.innerHTML = 24;
                break;
            case "Medium":
                price.innerHTML = 27;
                break;
            case "Large":
                price.innerHTML = 30;
                break;
            default :
                price.innerHTML = 0;
        }
    } else if (select == "Tea") {
        switch (size) {
            case "Small":
                price.innerHTML = 20;
                break;
            case "Medium":
                price.innerHTML = 23;
                break;
            case "Large":
                price.innerHTML = 25;
                break;
            default :
                price.innerHTML = 0;
        }
    } else {
        alert ("Please select a drink first.")
    }           
}

function validateForm() {
    let name = document.getElementById("Name").value.trim();
    let select = document.getElementById("DrinkSelect").value;
    let drinkSize = document.getElementsByName("Size");
    let drinkIce = document.getElementsByName("Ice");
    let drinkSweetness = document.getElementsByName("Sweetness");

    for (let dSize of drinkSize){
        if (dSize.checked) {
            size = dSize.value
        }
    }

    for (let dIce of drinkIce){
        if (dIce.checked) {
            ice = dIce.value
        }
    }

    for (let dSweetness of drinkSweetness){
        if (dSweetness.checked) {
            sweetness = dSweetness.value
        }
    }

    if (name === "") {
        alert ("Please enter your name.")
        return false;
    } 

    if (select == "Please Select") {
        alert("Please select a drink first.");
        return false;
    }

    return true;
}

function placeOrder(event){
    event.preventDefault()

    if (!validateForm()) {
        return;
    }

    let name = document.getElementById("Name").value.trim();
    let select = document.getElementById("DrinkSelect").value;
    let drinkSize = document.getElementsByName("Size");
    let drinkIce = document.getElementsByName("Ice");
    let drinkSweetness = document.getElementsByName("Sweetness");

    for (let dSize of drinkSize){
        if (dSize.checked) {
            size = dSize.value
        }
    };

    for (let dIce of drinkIce){
        if (dIce.checked) {
            ice = dIce.value
        }
    };

    for (let dSweetness of drinkSweetness){
        if (dSweetness.checked) {
            sweetness = dSweetness.value
        }
    };

    var orderData = [name, select, size, ice, sweetness];

    localStorage.setItem("orders", JSON.stringify(orderData));

    alert ("Order placed successfully! Thank you for your order.");

    // document.getElementById("order-form").reset();
    document.getElementById("price").textContent = "0";
}