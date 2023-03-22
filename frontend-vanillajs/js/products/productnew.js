const form = document.getElementById("form")
const name = document.getElementById("name")
const description = document.getElementById("description")
const unitprice = document.getElementById("unitprice")
const quantity = document.getElementById("quantity")
const perishable = document.getElementById("perishable")
const save = document.getElementById("save")

save.addEventListener('click', postProducts)

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
        window.location = "productlist.html"

    } catch (error) {
        console.error(error)
    }
}