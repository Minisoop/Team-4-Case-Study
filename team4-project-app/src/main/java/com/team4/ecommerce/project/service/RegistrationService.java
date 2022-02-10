package com.team4.ecommerce.project.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team4.ecommerce.project.entities.User;
import com.team4.ecommerce.project.repository.RegistrationRepository;



@Service
public class RegistrationService {
	 
	Logger logger = LoggerFactory.getLogger(RegistrationService.class);
	
	@Autowired 
	private  RegistrationRepository registationRespository;
 
	 public User saveUser(User registration) {
		 logger.info("Registering new User " + registration.getFname() + " " + registration.getLname());
		 return  registationRespository.save(registration);
	 }

     public User  fetchUserByEmailId(String email) { 
    	 logger.info("Fetching user by email");
    	 return registationRespository.findByEmailId(email);
     }

     // Checking combination Method For  Email and password
     public User  fetchUserByEmailIdAndPassword(String email,String password) { 
    	 logger.info("Fetching user by email and password");
    	 return registationRespository.findByEmailIdAndPassword(email,password);
	 }

     public List<User> getAllUsers(){
    	 logger.info("Fetching all users");
    	 return this.registationRespository.findAll();
    }
     
     public Optional<User> getUserById(int id){
    	 logger.info("Fetching user by id: " + id);
        return this.registationRespository.findById(id);
    }

     public String deleteUserById(int id){
    	logger.info("Deleting user by id: " + id);
    	// User user = this.registationRespository.getById(id);
    	registationRespository.deleteById(id);
    	return "User has been deleted";
    }
   
}
