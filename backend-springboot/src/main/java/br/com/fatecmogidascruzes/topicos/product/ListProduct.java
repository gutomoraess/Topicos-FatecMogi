package br.com.fatecmogidascruzes.topicos.product;

import java.util.List;

public class ListProduct {

    private ProductRepository productRepository;

    public ListProduct(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> execute() {
        return productRepository.findAll();
    }

}