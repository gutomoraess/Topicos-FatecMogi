const deleteButtons = document.querySelectorAll('#deletecustomer');

async function deleteCustomer(itin) {
    const confirmed = confirm('Are you sure you want to delete this customer?');
    if (confirmed) {
        try {
            const response = await fetch(`http://localhost:8080/customers/${itin}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Customer deleted successfully');
                location.reload();
                return true;
            } else {
                alert('Failed to delete customer');
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}