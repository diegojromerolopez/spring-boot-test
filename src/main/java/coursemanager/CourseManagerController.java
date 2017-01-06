package coursemanager;

import coursemanager.domain.Course;
import coursemanager.mappers.CourseMapper;
import coursemanager.services.CourseService;
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
@RequestMapping(value="/courses")
public class CourseManagerController {
    
    // Show list of all courses
    @RequestMapping(value="", method=RequestMethod.GET)
    public List<Course> list(
            @RequestParam(value="order", required=false, defaultValue="ASC") String titleSort,
            @RequestParam(value="page", required=false, defaultValue="1") Integer page
    ) {
        // Checking titleSort valid values
        titleSort = titleSort.toUpperCase();
        if(!titleSort.equals("ASC") && !titleSort.endsWith("DESC")){
            titleSort = "ASC";
        }

        CourseService courseService = new CourseService();
        List<Course> courses = courseService.getAllCourses(titleSort, page);
        return courses;
    }
    
    // Show list of all courses
    @RequestMapping(value="/count", method=RequestMethod.GET)
    public Integer count(){
        CourseService courseService = new CourseService();
        Integer number_of_courses = courseService.getNumberOfCourses();
        return number_of_courses;
    }

    // Show one course
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Course view(@PathVariable("id") Integer id) {
        System.out.println("view");
        System.out.println(id);
        CourseService courseService = new CourseService();
        Course course = courseService.getCourseById(id);
        System.out.println(course);
        return course;
    }

    // Delete course
    @RequestMapping(value="/{id}/delete", method=RequestMethod.POST)
    public Course delete(@PathVariable("id") Integer id, HttpServletResponse response) {
        CourseService courseService = new CourseService();
        Course deleted_course = courseService.getCourseById(id);
        try{
            courseService.deleteCourse(id);
        } catch(Exception e){
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
        return deleted_course;
    }
    
    // Add a new course
    @RequestMapping(
            value="/add", method=RequestMethod.POST,
            //consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE, 
            produces = {MediaType.APPLICATION_ATOM_XML_VALUE, MediaType.APPLICATION_JSON_VALUE}
    )
    public Course add(@RequestBody final Course course,  HttpServletResponse response) {
        CourseService courseService = new CourseService();
        return courseService.saveCourse(course);
        /*
        try{
            return courseService.saveCourse(course);
        } catch(Exception e){
            System.out.println("Exception");
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return null;
        }*/
    }
    
}
