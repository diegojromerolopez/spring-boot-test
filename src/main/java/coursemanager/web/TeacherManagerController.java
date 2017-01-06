package coursemanager.web;

import coursemanager.domain.Course;
import coursemanager.domain.Teacher;
import coursemanager.mappers.CourseMapper;
import coursemanager.services.CourseService;
import coursemanager.services.TeacherService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(value="/teachers")
public class TeacherManagerController {
    
    // Show list of all teachers
    @RequestMapping(value="", method=RequestMethod.GET)
    public List<Teacher> list() {
        TeacherService teacherService = new TeacherService();
        List<Teacher> teachers = teacherService.getAllTeachers();
        return teachers;
    }
    
    // Show one teacher
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Teacher view(@PathVariable("id") Integer id) {
        TeacherService teacherService = new TeacherService();
        Teacher teacher = teacherService.getTeacherById(id);
        return teacher;
    }
    
    // Show one teacher and his/her courses
    @RequestMapping(value="/{id}/courses", method=RequestMethod.GET)
    public Teacher viewCourses(@PathVariable("id") Integer id) {
        TeacherService teacherService = new TeacherService();
        Teacher teacher = teacherService.getTeacherCourses(id);
        return teacher;
    }
    
}
