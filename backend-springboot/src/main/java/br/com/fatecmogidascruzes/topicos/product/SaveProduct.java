package br.com.fatecmogidascruzes.topicos.product;

public class SaveProduct {

    private ProductRepository productRepository;

    public SaveProduct(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void execute(Product product) {
        productRepository.save(product);
    }

}