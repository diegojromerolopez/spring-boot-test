/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package coursemanager.mappers;

import coursemanager.domain.Course;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

/**
 *
 * @author diegoj
 */
@Mapper
public interface CourseMapper {

        public Course getCourseById(Integer id);
        
        public void insertCourse(Course course);
    
	List<Course> getAllCourses(String titleSort, RowBounds rowbounds);
        
        public void deleteCourse(Integer id);

}
