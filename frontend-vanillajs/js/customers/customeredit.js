const form = document.getElementById("form")
const itin = document.getElementById("itin")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const save = document.getElementById("save")

const urlParams = new URLSearchParams(window.location.search);
const getItin = urlParams.get('itin');

async function populateForm(getItin) {
    try {
        const response = await fetch(`http://localhost:8080/customers/${getItin}`)
        const customer = await response.json()

        document.getElementById('name').value = customer.name
        document.getElementById('itin').value = customer.itin
        document.getElementById('phone').value = customer.phone
        document.getElementById('email').value = customer.email

        document.getElementById('save').onclick = async function () {
            const updatedCustomer = {
                name: document.getElementById('name').value,
                itin: document.getElementById('itin').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value
            }

            const itinRegex = /^[0-9]{9}$/;
            if (!itinRegex.test(updatedCustomer.itin)) {
                alert("Invalid ITIN format. Please enter a 9-digit number");
                return;
            }

            const success = await editCustomer(getItin, updatedCustomer)

            if (success) {
                alert('Customer updated successfully')
                window.location.href = 'customerlist.html'
            } else {
                alert('Failed to update customer')
            }
        }

    } catch (error) {
        console.error(error)
    }
}

populateForm(getItin);

async function editCustomer(itin, customer) {
    try {
        const response = await fetch(`http://localhost:8080/customers/${itin}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })

        if (response.ok) {
            console.log(`Customer with ITIN ${itin} updated successfully`)
            return true
        } else {
            console.log(`Failed to update customer with ITIN ${itin}`)
            return false
        }

    } catch (error) {
        console.error(error)
        return false
    }
}