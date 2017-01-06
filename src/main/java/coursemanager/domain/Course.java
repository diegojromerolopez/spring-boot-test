package coursemanager.domain;

import java.util.Map;

/**
 *
 * @author diegoj
 */
public class Course {

	private Long id;

	private String title;
        
        private String description;
        
        private Integer numberOfHours;
        
        private String level;

	private Boolean isActive;
        
        private Teacher teacher;

        public Course(String title, String description, Integer numberOfHours, String level, Boolean isActive){
            this.title = title;
            this.description = description;
            this.numberOfHours = numberOfHours;
            this.level = level;
            this.isActive = isActive;
        }
        
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return this.title;
	}
        
        public String getDescription() {
		return this.description;
	}
        
        public Integer getNumberOfHours() {
		return this.numberOfHours;
	}
        
        public String getLevel() {
		return this.level;
	}
        
        public Boolean isActive() {
		return this.isActive;
	}
        
        public void setTeacher(Teacher teacher){
            this.teacher = teacher;
        }
        
        public Teacher getTeacher() {
		return this.teacher;
	}

	@Override
	public String toString() {
		return getId() + "," + getTitle();
	}    
}
