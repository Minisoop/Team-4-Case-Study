package com.team4.ecommerce.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.team4.ecommerce.project.entities.ProductCategory;

@CrossOrigin(origins = "http://localhost:4200")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}

