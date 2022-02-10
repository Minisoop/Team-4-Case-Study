package com.team4.ecommerce.project.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team4.ecommerce.project.entities.User;

public interface RegistrationRepository extends JpaRepository<User, Integer>{

	public User findByEmailId(String email);

	public User findByEmailIdAndPassword(String email,String password);

	//public User findAll(String first_name, String last_name, String email, Long contact, Date dOB, String password);	
}
