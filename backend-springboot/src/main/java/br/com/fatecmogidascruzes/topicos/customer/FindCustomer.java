package br.com.fatecmogidascruzes.topicos.customer;

import java.util.Optional;

public class FindCustomer {

    private CustomerRepository customerRepository;

    public FindCustomer(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Optional<Customer> execute(String itin) {
        return customerRepository.findByItin(itin);
    }

}