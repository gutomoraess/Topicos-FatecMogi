package br.com.fatecmogidascruzes.topicos.customer;

public class CustomerPM {

    private String itin;
    private String name;
    private String phone;
    private String email;

    public CustomerPM(Customer customer) {
        setItin(customer.getItin());
        setName(customer.getName());
        setPhone(customer.getPhone());
        setEmail(customer.getEmail());
    }

    public String getItin() {
        return itin;
    }

    public void setItin(String itin) {
        this.itin = itin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}