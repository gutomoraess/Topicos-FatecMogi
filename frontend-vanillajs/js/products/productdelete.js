const deleteButtons = document.querySelectorAll('#deleteproduct');

async function deleteProduct(id) {
    const confirmed = confirm('Are you sure you want to delete this customer?');
    if (confirmed) {
        try {
            const response = await fetch(`http://localhost:8080/products/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Product deleted successfully');
                location.reload();
                return true;
            } else {
                alert('Failed to delete product');
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}