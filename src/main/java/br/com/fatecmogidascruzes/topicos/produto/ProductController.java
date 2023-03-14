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

    @GetMapping("/{id}")
    public Optional<Product> findById(@PathVariable Long id) {
        return productRepository.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()) {
            productRepository.delete(product.get());
        }
    }

    @PutMapping("/{id}")
    public void updateById(@PathVariable("id") Long id, @RequestBody Product product) {
        Optional<Product> opDatabaseProduct = productRepository.findById(id);
        if(opDatabaseProduct.isPresent()) {
            Product databaseProduct = opDatabaseProduct.get();
            databaseProduct.setName(product.getName());
            databaseProduct.setDescription(product.getDescription());
            databaseProduct.setUnitaryprice(product.getUnitaryprice());
            databaseProduct.setQuantity(product.getQuantity());
            databaseProduct.setPerishable(product.getPerishable());
            productRepository.save(databaseProduct);
        }
    }

}
