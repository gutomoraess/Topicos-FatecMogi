const form = document.getElementById("form")
const itin = document.getElementById("itin")
const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const save = document.getElementById("save")

save.addEventListener('click', (event) =>{
    event.preventDefault();
    const isValid = validateFields();
    if (isValid){
        checkItin();
    }
});

async function checkItin() {
    try {
        const response = await fetch(`http://localhost:8080/customers/${itin.value}`);
        if (response.ok) {
            const data = await response.json();
            if (data != null) {
                alert("ITIN number already exists. Please enter a different ITIN number");
            } else {
                postCustomers();
            }
        } else {
            alert("Error checking ITIN number");
        }
    } catch(error) {
        console.error(error)
    }
}

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
        alert("Customer created successfully");
        window.location = "customerlist.html"
        
    } catch(error) {
        console.error(error)
    }
}

function validateFields(){
    const nameValue = name.value.trim();
    const itinValue = itin.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if (nameValue.length === 0) {
        alert("Name field is required");
        return false;
    }

    if (itinValue.length === 0) {
        alert("ITIN field is required");
        return false;
    }

    const itinRegex = /^[0-9]{9}$/;

    if (!itinRegex.test(itinValue)) {
        alert("Invalid ITIN format. Please enter a 9-digit number");
        return false;
    }

    if (phoneValue.length === 0) {
        alert("Phone field is required");
        return false;
    }

    if (emailValue.length === 0) {
        alert("Email field is required");
        return false;
    }

    return true;
}