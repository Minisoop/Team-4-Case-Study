package com.team4.ecommerce.project.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team4.ecommerce.project.entities.User;
import com.team4.ecommerce.project.service.RegistrationService;

@RestController

//@RequestMapping(value = "/Registration")
public class RegistrationController {
	
	@Autowired 
	private RegistrationService service;
	
	 @GetMapping("/users")
	    public List<User> getAllUsers(){
	        return this.service.getAllUsers();
	    }
	 
	    @GetMapping("/users/{id}")
	    public Optional<User> getUserById(@PathVariable(value = "id") int id){
	        return service.getUserById(id);
	    }
	
	@PostMapping("/registerUser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registation(@RequestBody User registration)throws Exception {
		String tempEmail=registration.getEmailId();
			if(tempEmail!=null && "".equals(tempEmail)) {
				User regobject =service.fetchUserByEmailId(tempEmail);
			if(regobject!=null) {}
			throw new Exception("User with"+ tempEmail + "User is already exist");
			}
			
	     	User regObject =null;
	     	regObject=service.saveUser(registration);
	     	 return regObject;
	}
		
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public User LoginUser(@RequestBody User registration)throws  Exception {
		String Email=registration.getEmailId();
		String Password=registration.getPassword();
		User regObject =null;
		if(Email!=null && Password !=null) {
			regObject =service.fetchUserByEmailIdAndPassword(Email, Password);
		}
		if(regObject ==null) {
			throw new Exception("You Enter Invaild Credentials");
		}
		return regObject;
	}
	
	@DeleteMapping("/users/{id}")
	public String deleteUserById(@PathVariable("id") int id){
	return this.service.deleteUserById(id);
	}
}
