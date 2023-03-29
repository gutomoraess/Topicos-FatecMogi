package br.com.fatecmogidascruzes.topicos.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping
    public void create(@RequestBody Customer customer) {
        new SaveCustomer(customerRepository).execute(customer);
    }

    @GetMapping
    public List<CustomerPM> getAll() {
        return new ListCustomer(customerRepository)
                .execute()
                .stream()
                .map(CustomerPM::new)
                .collect(Collectors.toList());
    }

    @GetMapping("/{itin}")
    public Optional<Customer> getByItin(@PathVariable String itin) {
        // TODO: add use case
        return customerRepository.findByItin(itin);
    }

    @DeleteMapping("/{itin}")
    public void deleteByItin(@PathVariable String itin) {
        new DeleteCustomer(customerRepository).execute(itin);
    }

    @PutMapping("/{itin}")
    public void updateByItin(@PathVariable String itin,
                             @RequestBody Customer customer) {
        new UpdateCustomer(customerRepository).execute(customer);
    }

}
