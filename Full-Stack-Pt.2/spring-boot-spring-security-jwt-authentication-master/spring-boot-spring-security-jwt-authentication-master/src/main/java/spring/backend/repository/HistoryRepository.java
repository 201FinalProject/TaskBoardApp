package spring.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.backend.models.HistoryTask;

@Repository
public interface HistoryRepository extends JpaRepository<HistoryTask, Long>{
	
}
