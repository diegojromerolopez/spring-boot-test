package coursemanager.domain;

/**
 *
 * @author diegoj
 */
public class Course {

	private Long id;

	private String title;
        
        private String description;
        
        private String numberOfHours;
        
        private String level;

	private Boolean isActive;
        
        private Teacher teacher;

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
        
        public String getNumberOfHours() {
		return this.numberOfHours;
	}
        
        public String getLevel() {
		return this.level;
	}
        
        public Boolean isActive() {
		return this.isActive;
	}
        
        public Teacher getTeacher() {
		return this.teacher;
	}

	@Override
	public String toString() {
		return getId() + "," + getTitle();
	}    
}
