package spring.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.backend.models.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
	
}

