package spring.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "History")
public class HistoryTask {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "taskName")
	private String taskName;

	@Column(name = "completedBy")
	private String completedBy;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "difficulty")
	private double difficulty;

    @Column(name = "completionDate")
    private String completionDate;
    
    @Column(name = "groupCode")
	private String groupCode;
    
    @Column(name = "completed")
    private boolean completed = false;
	
    //constructors
	public HistoryTask() {
		
	}
	
	public HistoryTask(String taskName, String completedBy, String description, double difficulty, String completionDate, String groupCode, boolean completed) {
		this.taskName = taskName;
		this.completedBy = completedBy;
		this.description = description;
		this.difficulty = difficulty;
        this.completionDate = completionDate;
        this.groupCode = groupCode;
        this.completed = completed;
	}
	
	public HistoryTask(Task x) {
		this.taskName = x.getTaskName();
		this.completedBy = x.getCompletedBy();
		this.description = x.getDescription();
		this.difficulty = x.getDifficulty();
		this.completionDate = x.getCompletionDate();
		this.groupCode = x.getGroupCode();
		this.completed = x.isCompleted();
	}
	
	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getCompletedBy() {
		return completedBy;
	}
	public void setCompletedBy(String completedBy) {
		this.completedBy = completedBy;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
    public double getDifficulty() {
        return this.difficulty;
    }
    public void setDifficulty(double difficulty) {
        this.difficulty = difficulty;
    }

    public String getCompletionDate() {
        return completionDate;
    }
    public void setCompletionDate(String completionDate) {
        this.completionDate = completionDate;
    }
    
    public String getGroupCode() {
        return this.groupCode;
    }
    public void setGroupCode(String groupCode) {
        this.groupCode = groupCode;
    }

}