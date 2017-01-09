package coursemanager.web;

import static coursemanager.configuration.Configuration.CORS_DOMAIN;
import coursemanager.domain.Course;
import coursemanager.domain.Teacher;
import coursemanager.services.CourseService;
import coursemanager.services.TeacherService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Component;
 
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;


@Component
@CrossOrigin(origins=CORS_DOMAIN)
@Path("/courses")
public class CourseManagerController {
    
    // Show list of all courses
    @GET
    @Produces(MediaType.APPLICATION_JSON)
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
    @GET
    @Path("/count")
    @Produces(MediaType.APPLICATION_JSON)
    public HashMap<String, Object> count(){
        CourseService courseService = new CourseService();
        Integer numberOfCourses = courseService.getNumberOfCourses();
        HashMap<String, Object> response = new HashMap<>();
        response.put("pageSize", CourseService.PAGE_SIZE);
        response.put("numberOfCourses", numberOfCourses);
        response.put("numberOfPages", (int)Math.ceil(1.0*numberOfCourses/CourseService.PAGE_SIZE));
        return response;
    }

    // Show one course
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Course view(@PathParam("id") Integer id) {
        CourseService courseService = new CourseService();
        Course course = courseService.getCourseById(id);
        return course;
    }

    // Delete course
    @POST
    @Path("/{id}/delete")
    @Produces(MediaType.APPLICATION_JSON)
    public Course delete(@PathParam("id") Integer id, HttpServletResponse response) {
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
    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Course add(
            //@RequestBody final Course course,
            @RequestBody Map<String, Object> payload
    ) {
        Course course = createCourseFromMap(payload);
        
        TeacherService teacherService = new TeacherService();
        Teacher courseTeacher = teacherService.getTeacherById((Integer)payload.get("teacher"));
        
        course.setTeacher(courseTeacher);
        
        CourseService courseService = new CourseService();
        return courseService.saveCourse(course);
    }
    
    /**
     * Create a couse from a map.
     * NOTE: this course will have a null Teacher.
     * I'm sure there is a better way to do this, but I have not found it.
     */
    private static Course createCourseFromMap(Map<String, Object> map){
        String isActiveString = (String)map.get("isActive");
        Boolean isActive = isActiveString.equals("true") || isActiveString.equals("1");
        Course course = new Course();
        course.set(
                (String)map.get("title"),
                (String)map.get("description"),
                (Integer)map.get("numberOfHours"),
                (String)map.get("level"),
                isActive);
        return course;
    }
    
}
