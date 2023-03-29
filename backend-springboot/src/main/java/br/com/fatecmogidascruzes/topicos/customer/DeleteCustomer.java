package br.com.fatecmogidascruzes.topicos.customer;

import java.util.Optional;

public class DeleteCustomer {
    private CustomerRepository customerRepository;

    public DeleteCustomer(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void execute(String itin) {
        Optional<Customer> customer = customerRepository.findByItin(itin);
        if (customer.isPresent()) {
            customerRepository.delete(customer.get());
        }
    }
}