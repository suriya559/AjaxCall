package com.mphasis.application.pojo;

import java.util.Date;

import javax.persistence.*;


@Entity
@Table(name="employee")
public class DataPojo {
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private long id;
	 private String name;
	 private String address;
	 private String date;
	 private String phonenumber;
	 
	 public DataPojo() {
		 
	 }
	 


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	

	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	@Override
	public String toString() {
		return "DataPojo [id=" + id + ", name=" + name + " date=" +date+", address=" + address + ", phonenumber="
				+ phonenumber + "]";
	}
	
	 
}