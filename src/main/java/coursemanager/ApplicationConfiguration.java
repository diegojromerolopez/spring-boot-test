/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package coursemanager;

import coursemanager.domain.Course;
import coursemanager.web.CourseManagerController;
import coursemanager.web.IndexController;
import coursemanager.web.TeacherManagerController;
import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;


@Component
@ApplicationPath("")
public class ApplicationConfiguration extends ResourceConfig {
    public ApplicationConfiguration() {
        register(CourseManagerController.class);
        register(Course.class);
        register(TeacherManagerController.class);
        register(IndexController.class);
    }
}
