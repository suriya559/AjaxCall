package com.mphasis.application.repository;





import org.springframework.data.jpa.repository.JpaRepository;

import com.mphasis.application.pojo.DataPojo;

public interface DataRepository extends JpaRepository<DataPojo, Long> {

	public void deleteByPhonenumber(long phonenumber);

	

}
