package com.team4.ecommerce.project;

import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.team4.ecommerce.project.entities.Product;
import com.team4.ecommerce.project.service.ProductService;

@SpringBootTest
class Team4ProjectAppApplicationTests {

	@Autowired
	private ProductService productService;
	
	@Test
	void contextLoads() {
	}
	
	@Test
	void testGetProducts() {
		List<Product> productList = productService.getAllProducts();
		assertNotNull(productList);
	}

}
