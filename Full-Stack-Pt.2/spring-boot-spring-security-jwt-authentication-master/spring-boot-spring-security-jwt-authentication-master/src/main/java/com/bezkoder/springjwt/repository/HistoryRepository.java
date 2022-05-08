package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.HistoryTask;
import com.bezkoder.springjwt.models.Task;

@Repository
public interface HistoryRepository extends JpaRepository<HistoryTask, Long>{
	
}
