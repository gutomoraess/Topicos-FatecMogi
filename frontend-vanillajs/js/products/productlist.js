const productBody = document.getElementById('tableBody')

async function getProducts() {
    try {
        const response = await fetch(`http://localhost:8080/products`)
        const products = await response.json()
        
        if(products.length == 0) {
            productBody.innerHTML = `<tr><td colspan="5">No products found</td></tr>`
        } else {
            for(const product of products) {
                productBody.innerHTML = productBody.innerHTML + `<tr>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.unitprice}</td>
                    <td>${product.quantity}</td>
                    <td>${product.perishable}</td>
                </tr>`
            }
            productBody.innerHTML = productBody.innerHTML + `<tr><td colspan="5">${products.length} product(s) found.</td></tr>`
        }
        
    } catch(error) {
        console.error(error)
    }
}

getProducts()