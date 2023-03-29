package br.com.fatecmogidascruzes.topicos.product;

import java.util.Optional;

public class FindProduct {

    private ProductRepository productRepository;

    public FindProduct(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Optional<Product> execute(Long id) {
        return productRepository.findById(id);
    }

}