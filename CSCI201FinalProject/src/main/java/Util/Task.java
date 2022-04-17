package Util;

public class Task {
	private String taskName;
	private String completedBy;
	private double difficulty;
	private String completionDate;
	
	public String getTaskName() {
		return this.taskName;
	}
	public void setTaskName(String name) {
		this.taskName = name;
	}
	
	public String getCompletedBy() {
		return this.completedBy;
	}
	public void setCompletedBy(String name) {
		this.completedBy = name;
	}
	
	public double getDifficulty() {
		return this.difficulty;
	}
	public void setDifficulty(double diff) {
		this.difficulty = diff;
	}
	
	public String getCompletionDate() {
		return this.completionDate;
	}
	public void setCompletionDate(String date) {
		completionDate = date;
	}

}
