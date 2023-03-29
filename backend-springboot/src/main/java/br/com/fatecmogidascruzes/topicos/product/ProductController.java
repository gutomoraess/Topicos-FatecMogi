package br.com.fatecmogidascruzes.topicos.product;

import br.com.fatecmogidascruzes.topicos.customer.CustomerPM;
import br.com.fatecmogidascruzes.topicos.customer.DeleteCustomer;
import br.com.fatecmogidascruzes.topicos.customer.ListCustomer;
import br.com.fatecmogidascruzes.topicos.customer.SaveCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public void create(@RequestBody Product product) {
        new SaveProduct(productRepository).execute(product);
    }

    @GetMapping
    public List<ProductPM> getAll() {
        return new ListProduct(productRepository)
                .execute()
                .stream()
                .map(ProductPM::new)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public Optional<Product> findById(@PathVariable Long id) {
        // TODO: add use case
        return productRepository.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        new DeleteProduct(productRepository).execute(id);
    }

    @PutMapping("/{id}")
    public void updateById(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        new UpdateProduct(productRepository).execute(product);
    }

}