const form = document.getElementById("form")
const name = document.getElementById("name")
const description = document.getElementById("description")
const unitprice = document.getElementById("unitprice")
const quantity = document.getElementById("quantity")
const perishable = document.getElementById("perishable")
const save = document.getElementById("save")

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const responseurl = `http://localhost:8080/products/${productId}`;

async function populateForm() {
    try {
        const response = await fetch(responseurl)
        const product = await response.json()

        document.getElementById('name').value = product.name
        document.getElementById('description').value = product.description
        document.getElementById('unitprice').value = product.unitprice
        document.getElementById('quantity').value = product.quantity
        document.getElementById('perishable').checked = product.perishable

        document.getElementById('save').onclick = async function () {
            const updatedProduct = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                unitprice: document.getElementById('unitprice').value,
                quantity: document.getElementById('quantity').value,
                perishable: document.getElementById('perishable').checked
            }

            const success = await editProduct(updatedProduct)

            if (success) {
                alert('Product updated successfully')
                window.location.href = 'productlist.html'
            } else {
                alert('Failed to update product')
            }
        }

    } catch (error) {
        console.error(error)
    }
}

populateForm();

async function editProduct(updatedProduct) {
    try {
        const response = await fetch(responseurl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })

        if (response.ok) {
            console.log(`Product with ID ${productId} updated successfully`)
            return true
        } else {
            console.log(`Failed to update product with ID ${productId}`)
            return false
        }

    } catch (error) {
        console.error(error)
        return false
    }
}