package br.com.fatecmogidascruzes.topicos.cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping
    public void create(@RequestBody Customer customer) {
        customerRepository.save(customer);
    }

    @GetMapping
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @GetMapping("/{itin}")
    public Optional<Customer> getByItin(@PathVariable String itin) {
        return customerRepository.findByItin(itin);
    }

    @DeleteMapping("/{itin}")
    public void deleteByItin(@PathVariable String itin) {
        Optional<Customer> customer = customerRepository.findByItin(itin);
        if(customer.isPresent()) {
            customerRepository.delete(customer.get());
        }
    }

    @PutMapping("/{itin}")
    public void updateByItin(@PathVariable String itin,
                             @RequestBody Customer customer) {
        Optional<Customer> opDatabaseCustomer = customerRepository.findByItin(itin);
        if(opDatabaseCustomer.isPresent()) {
            Customer databaseCustomer = opDatabaseCustomer.get();
            databaseCustomer.setName(customer.getName());
            databaseCustomer.setEmail(customer.getEmail());
            databaseCustomer.setPhone(customer.getPhone());
            customerRepository.save(databaseCustomer);
        }
    }

}
