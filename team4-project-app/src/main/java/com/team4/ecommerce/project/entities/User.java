package com.team4.ecommerce.project.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
public class User {

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)  
	private  int id;
	
	@Column(name="first_name")
	private String fname;
	
	@Column(name="last_name")
	private String lname;
	
	@Column(name="email_id")
	private String emailId;
	
	@Column(name="mobile_number")
	private Long contact;
	
	@Column(name="birthdate")
	private Date birthDate;
	
	private String password;
	
	public User() {}

	public User(int id, String fname, String lname, String emailId, Long contact, Date birthDate,
			String password) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.emailId = emailId;
		this.contact = contact;
		this.birthDate = birthDate;
		this.password = password;
	}

	@Override
	public String toString() {
		return "Registation [id=" + id + ", fname=" + fname + ", lname=" + lname + ", emailId=" + emailId + ", contact="
				+ contact + ", birthDate=" + birthDate + ", password=" + password + "]";
	}

	
	
}