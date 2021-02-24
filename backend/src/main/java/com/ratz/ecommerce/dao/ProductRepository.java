package com.ratz.ecommerce.dao;

import com.ratz.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {


    //behind the scenes spring will execute SELECT * FROM product where category_id=?
    //Spring Data REST automatically expose endpoint
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

}
