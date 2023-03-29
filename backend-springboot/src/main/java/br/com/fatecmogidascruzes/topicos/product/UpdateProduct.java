package br.com.fatecmogidascruzes.topicos.product;

import java.util.Optional;

public class UpdateProduct {

    private ProductRepository productRepository;

    public UpdateProduct(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void execute(Product product) {
        Optional<Product> opDatabaseProduct = productRepository.findById(product.getId());
        if(opDatabaseProduct.isPresent()) {
            Product databaseProduct = opDatabaseProduct.get();
            databaseProduct.setName(product.getName());
            databaseProduct.setDescription(product.getDescription());
            databaseProduct.setUnitprice(product.getUnitprice());
            databaseProduct.setQuantity(product.getQuantity());
            databaseProduct.setPerishable(product.getPerishable());
            productRepository.save(databaseProduct);
        }
    }
}
