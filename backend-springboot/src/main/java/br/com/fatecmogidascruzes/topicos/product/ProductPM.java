package br.com.fatecmogidascruzes.topicos.product;

import br.com.fatecmogidascruzes.topicos.customer.Customer;

public class ProductPM {

    private String id;
    private String name;
    private String description;
    private String unitprice;
    private String quantity;
    private String perishable;

    public ProductPM(Product product) {
        setId(product.getId().toString());
        setName(product.getName());
        setDescription(product.getDescription());
        setUnitprice(product.getUnitprice().toString());
        setQuantity(product.getQuantity().toString());
        setPerishable(product.getPerishable().toString());
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnitprice() {
        return unitprice;
    }

    public void setUnitprice(String unitprice) {
        this.unitprice = unitprice;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getPerishable() {
        return perishable;
    }

    public void setPerishable(String perishable) {
        this.perishable = perishable;
    }
}