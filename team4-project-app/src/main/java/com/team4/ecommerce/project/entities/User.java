package com.team4.ecommerce.project.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
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

	public int getId() {
		return id;
	}

	public void setId(int  id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Registation [id=" + id + ", fname=" + fname + ", lname=" + lname + ", emailId=" + emailId + ", contact="
				+ contact + ", birthDate=" + birthDate + ", password=" + password + "]";
	}

	
	
}