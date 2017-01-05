package coursemanager;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@RequestMapping(value="/courses")
public class CourseManagerController {
    
    @RequestMapping(value="", method=RequestMethod.GET)
    public String list() {
        return "course list";
    }


    @RequestMapping(value="/add", method=RequestMethod.POST)
    public String add() {
        return "Adding a course";
    }
    
}
