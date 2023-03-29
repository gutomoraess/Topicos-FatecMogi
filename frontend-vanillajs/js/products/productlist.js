const productBody = document.getElementById('tableBody')

async function getProducts() {
    try {
        const response = await fetch(`http://localhost:8080/products`)
        const products = await response.json()
        let right = "";

        if (products.length == 0) {
            productBody.innerHTML = `<tr><td id="found" colspan="7">No products found</td></tr>`
        } else {
            for (const product of products) {
                if (product.perishable === "true") {
                    right = '<img  alt="TRUE" title="TRUE" src="../../images/checkmark.png" width="22px" align="center">'
                } else {
                    right = '<img  alt="FALSE" title="FALSE" src="../../images/x.png" width="22px" align="center">'
                }

                productBody.innerHTML = productBody.innerHTML + `<tr id="trlines">
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td class="text-center">${product.unitprice}</td>
                    <td class="text-center">${product.quantity}</td>
                    <td class="text-center">` + right + `</td>
                    <td class="text-center"><a href="../../html/products/productedit.html?id=${product.id}"><img  alt="Edit this product" title="Edit this product" src="../../images/pencil.png" width="22px" align="center"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" id="deleteproduct" data-id="${product.id}" onclick="deleteProduct(${product.id})"><img  alt="Delete this product" title="Delete this product" src="../../images/delete.png" width="22px" align="center"></a>
                </tr>`
            }
            productBody.innerHTML = productBody.innerHTML + `<tr><td id="found" colspan="7">${products.length} product(s) found.</td></tr>`
        }

    } catch (error) {
        console.error(error)
    }
}

getProducts()