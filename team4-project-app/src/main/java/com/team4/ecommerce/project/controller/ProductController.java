package com.team4.ecommerce.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.team4.ecommerce.project.entities.Product;
import com.team4.ecommerce.project.service.ProductService;

@RestController
//@RequestMapping("product-list")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping("/api/products")
	public List<Product> getProducts(){
		return this.productService.getAllProducts();
	}
	
	@GetMapping("/api/products/{id}")
	public Optional<Product> getProductById(@PathVariable(value = "id") long id){
		return this.productService.getProductById(id);
	}
	
	@GetMapping("/api/products/category/{id}")
	public List<Product> getProductsByCategoryId(@PathVariable(value = "id") long id){
		return this.productService.getProductsByCategoryId(id);
	}
}


