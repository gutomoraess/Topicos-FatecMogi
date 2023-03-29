const form = document.getElementById("form")
const name = document.getElementById("name")
const description = document.getElementById("description")
const unitprice = document.getElementById("unitprice")
const quantity = document.getElementById("quantity")
const perishable = document.getElementById("perishable")
const save = document.getElementById("save")

save.addEventListener('click', (event) => {
    event.preventDefault();
    const isValid = validateFields();
    if (isValid) {
        postProducts();
    }
});

async function postProducts() {
    try {
        if (perishable.checked) {
            perishable.value = 'true';
        } else {
            perishable.value = 'false';
        }
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                description: description.value,
                unitprice: unitprice.value,
                quantity: quantity.value,
                perishable: perishable.value
            })
        })
        alert("Product created successfully!");
        window.location = "productlist.html"

    } catch (error) {
        console.error(error)
    }
}

function validateFields() {
    const nameValue = name.value.trim();
    const descriptionValue = description.value.trim();
    const unitpriceValue = unitprice.value.trim();
    const quantityValue = quantity.value.trim();

    if (nameValue.length === 0) {
        alert("Name field is required");
        return false;
    }

    if (descriptionValue.length === 0) {
        alert("Description field is required");
        return false;
    }

    if (unitpriceValue.length === 0) {
        alert("Unit price field is required");
        return false;
    }

    if (quantityValue.length === 0) {
        alert("Quantity field is required");
        return false;
    }

    return true;
}