package coursemanager.domain;

/**
 *
 * @author diegoj
 */
public class Course {

	private Long id;

	public String title;
        
        public String description;
        
        public String number_of_hours;
        
        public String level;

	public Boolean is_active;

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return this.title;
	}

	@Override
	public String toString() {
		return getId() + "," + getName();
	}    
}
