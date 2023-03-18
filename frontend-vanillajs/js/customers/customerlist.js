const customerBody = document.getElementById('tableBody')

async function getCustomers() {
    try {
        const response = await fetch(`http://localhost:8080/customers`)
        const customers = await response.json()
        
        if(customers.length == 0) {
            customerBody.innerHTML = `<tr><td colspan="5">No customers found</td></tr>`
        } else {
            for(const customer of customers) {
                customerBody.innerHTML = customerBody.innerHTML + `<tr>
                    <td>${customer.name}</td>
                    <td>${customer.itin}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.email}</td>
                    <td class="text-center"><a href="../../html/customers/customeredit.html?itin=${customer.itin}"><img src="../../images/pencil.png" width="22px" align="center"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" id="deletecustomer" data-itin="${customer.itin}" onclick="deleteCustomer(${customer.itin})"><img src="../../images/delete.png" width="22px" align="center"></a>
                </tr>`
            }
            customerBody.innerHTML = customerBody.innerHTML + `<tr><td colspan="5" style="border-top: 2px solid black; border-bottom: 2px solid black; font-weight: bold;">${customers.length} customer(s) found.</td></tr>`
        }
        
    } catch(error) {
        console.error(error)
    }
}

getCustomers()