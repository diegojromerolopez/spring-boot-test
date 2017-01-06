package coursemanager.mappers;

import coursemanager.domain.Teacher;
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
public interface TeacherMapper {
    
        public Teacher getTeacherById(Integer id);
        
        public Teacher getTeacherCourses(Integer id);
    
	public List<Teacher> getAllTeachers();

}
