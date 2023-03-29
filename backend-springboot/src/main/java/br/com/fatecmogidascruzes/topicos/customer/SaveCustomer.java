package br.com.fatecmogidascruzes.topicos.customer;

public class SaveCustomer {

    private CustomerRepository customerRepository;

    public SaveCustomer(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void execute(Customer customer) {
        customerRepository.save(customer);
    }

}