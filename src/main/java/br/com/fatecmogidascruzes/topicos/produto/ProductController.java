package br.com.fatecmogidascruzes.topicos.produto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public void create(@RequestBody Product product) {
        productRepository.save(product);
    }

    @GetMapping
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @GetMapping("/{name}")
    public Optional<Product> getByName(@PathVariable String name) {
        return productRepository.findByName(name);
    }

    @DeleteMapping("/{name}")
    public void deleteByName(@PathVariable String name) {
        Optional<Product> product = productRepository.findByName(name);
        if(product.isPresent()) {
            productRepository.delete(product.get());
        }
    }

    @PutMapping("/{name}")
    public void updateByName(@PathVariable String name,
                             @RequestBody Product product) {
        Optional<Product> opDatabaseProduct = productRepository.findByName(name);
        if(opDatabaseProduct.isPresent()) {
            Product databaseProduct = opDatabaseProduct.get();
            databaseProduct.setName(product.getName());
            databaseProduct.setDescription(product.getDescription());
            databaseProduct.setUnitprice(product.getUnitprice());
            productRepository.save(databaseProduct);
        }
    }

}
