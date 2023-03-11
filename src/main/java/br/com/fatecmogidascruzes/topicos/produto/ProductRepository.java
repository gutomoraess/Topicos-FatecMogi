package br.com.fatecmogidascruzes.topicos.produto;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ProductRepository
    extends JpaRepository<Product, Long>    {
        Optional<Product> findByName(String name);
}
