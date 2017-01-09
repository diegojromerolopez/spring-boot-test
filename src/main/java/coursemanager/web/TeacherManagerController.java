package coursemanager.web;

import static coursemanager.configuration.Configuration.CORS_DOMAIN;
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
//import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
 
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Component
@CrossOrigin(origins=CORS_DOMAIN)
@Path("/teachers")
public class TeacherManagerController {
    
    // Show list of all teachers
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Teacher> list() {
        TeacherService teacherService = new TeacherService();
        List<Teacher> teachers = teacherService.getAllTeachers();
        return teachers;
    }
    
    /*
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
    }*/
    
}
