package com.team4.ecommerce.project.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.ecommerce.project.entities.Product;
import com.team4.ecommerce.project.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired 
	private ProductRepository productRepository;
	
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}

	public Optional<Product> getProductById(long id) {
		return productRepository.findById(id);
	}
	
	public List<Product> getProductsByCategoryId(long id){
		//There must be a better way to do this
		List<Product> allProducts = productRepository.findAll();
		List<Product> specificProducts = new ArrayList<Product>();
		for (Product product : allProducts) {
			if(product.getCategory() == id) {
				specificProducts.add(product);
			}
		}
		return specificProducts;
	}
	
	public List<Product> getProductsBySearch(String query){
		//There must be a better way to do this
		List<Product> allProducts = productRepository.findAll();
		List<Product> specificProducts = new ArrayList<Product>();
		for (Product product : allProducts) {
			if(product.getName().contains(query) || product.getDescription().contains(query)) {
				specificProducts.add(product);
			}
		}
		return specificProducts;
	}
}
