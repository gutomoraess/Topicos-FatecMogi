const deleteButtons = document.querySelectorAll('#deletecustomer');

deleteButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const itin = button.dataset.itin;
        console.log(itin);
        const confirmed = confirm('Are you sure you want to delete this customer?');

        if (confirmed) {
            try {
                const deleted = await deleteCustomer(itin);

                if (deleted) {
                    const row = button.closest('tr');
                    row.remove();
                    alert('Customer deleted successfully');
                } else {
                    alert('Failed to delete customer');
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred while deleting the customer');
            }
        }
    });
});

async function deleteCustomer(itin) {
    try {
        const response = await fetch(`http://localhost:8080/customers/${itin}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch(error) {
        console.error(error);
        return false;
    }
}