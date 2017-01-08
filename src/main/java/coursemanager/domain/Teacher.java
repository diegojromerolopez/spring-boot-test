/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package coursemanager.domain;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author diegoj
 */
public class Teacher {
   	private Long id;

	private String firstName;
        
        private String lastName; 
        
        private List<Course> courses = new ArrayList<Course>();
        
        public Long getId() {
		return this.id;
	}
        
        public String getFirstName(){
            return firstName;
        }
        
        public String getLastName(){
            return lastName;
        }
        
        public String getFullName(){
            return firstName+" "+lastName;
        }
        
        List<Course> getCourses(){
            return courses;
        }
        
        @Override
	public String toString() {
		return getFullName();
	}    
}
