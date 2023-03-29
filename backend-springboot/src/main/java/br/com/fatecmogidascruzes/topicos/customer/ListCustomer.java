package br.com.fatecmogidascruzes.topicos.customer;

import java.util.List;

public class ListCustomer {

    private CustomerRepository customerRepository;

    public ListCustomer(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> execute() {
        return customerRepository.findAll();
    }

}