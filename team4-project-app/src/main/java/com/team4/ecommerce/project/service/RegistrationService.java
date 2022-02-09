package com.team4.ecommerce.project.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.team4.ecommerce.project.entities.User;
import com.team4.ecommerce.project.repository.RegistrationRepository;



@Service
public class RegistrationService {
	 
	@Autowired 
 private  RegistrationRepository registationRespository;
 
	 public User saveUser(User registration) {
		 return  registationRespository.save(registration);
	 }

         public User  fetchUserByEmailId(String email) { 
		 return registationRespository.findByEmailId(email);}
	


       // Checking combination Method For  Email and password
         public User  fetchUserByEmailIdAndPassword(String email,String password) { 
		 return registationRespository.findByEmailIdAndPassword(email,password);
		 }
         
        

         public List<User> getAllUsers(){
 	        return this.registationRespository.findAll();
 	    }
         
         public Optional<User> getUserById(int id){
 	        return this.registationRespository.findById(id);
 	    }

         public String deleteUserById(int id){
        	// User user = this.registationRespository.getById(id);
        	 registationRespository.deleteById(id);
        	 return "User has been deleted";
        	 }


 	 
}

