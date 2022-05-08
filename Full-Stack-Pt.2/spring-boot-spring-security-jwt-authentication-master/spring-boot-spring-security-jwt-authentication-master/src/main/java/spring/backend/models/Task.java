package spring.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tasks")
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "taskName")
	private String taskName;

	@Column(name = "completedBy")
	private String completedBy;
	
	@Column(name = "assignedBy")
	private String assignedBy;
	
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
	public Task() {
		
	}
	
	public Task(String taskName, String completedBy, String assignedBy, String description, double difficulty, String completionDate, String groupCode, boolean completed) {
		super();
		this.taskName = taskName;
		this.completedBy = completedBy;
		this.assignedBy = assignedBy;
		this.description = description;
		this.difficulty = difficulty;
        	this.completionDate = completionDate;
        	this.groupCode = groupCode;
        	this.completed = completed;
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
	
	public String getAssignedBy() {
		return assignedBy;
	}
	public void setAssignedBy(String assignedBy) {
		this.assignedBy = assignedBy;
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
