const form = document.getElementById("form")
const itin = document.getElementById("itin")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const save = document.getElementById("save")

save.addEventListener('click', postCustomers)

async function postCustomers() {
    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                itin: itin.value,
                name: name.value,
                phone: phone.value,
                email: email.value
            })
        })
        window.location = "customerlist.html"
        
    } catch(error) {
        console.error(error)
    }
}