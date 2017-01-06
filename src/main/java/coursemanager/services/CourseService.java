package coursemanager.services;

import coursemanager.connector.MyBatisUtil;
import coursemanager.domain.Course;
import coursemanager.mappers.CourseMapper;
import java.util.List;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

/**
 *
 * @author diegoj
 */
public class CourseService {
    
    private final int PAGE_SIZE = 10;
    
    public Course saveCourse(Course course)
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            System.out.println("saveCourse");
            System.out.println(course.getTeacher());
            
            CourseMapper courseMapper = sqlSession.getMapper(CourseMapper.class);
            courseMapper.saveCourse(course);

            sqlSession.commit();
            return course;
        } finally
        {
            sqlSession.close();
        }
    }
 
    public Course getCourseById(Integer id)
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            CourseMapper courseMapper = sqlSession.getMapper(CourseMapper.class);
            System.out.println(id);
            Course course = courseMapper.getCourseById(id);
            System.out.println(course);
            return course;
        } finally
        {
            sqlSession.close();
        }
    }
 
    public List<Course> getAllCourses(String titleSort, Integer pageNumber)
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            int offset = (pageNumber-1) * PAGE_SIZE;
            RowBounds rowBounds = new RowBounds(offset, PAGE_SIZE);
            CourseMapper courseMapper = sqlSession.getMapper(CourseMapper.class);
            return courseMapper.getAllCourses(titleSort, rowBounds);
        } finally
        {
            sqlSession.close();
        }
    }
    
    public Integer getNumberOfCourses()
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            CourseMapper courseMapper = sqlSession.getMapper(CourseMapper.class);
            return courseMapper.getNumberOfCourses();
        } finally
        {
            sqlSession.close();
        }
    }
 
    public void deleteCourse(Integer id)
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            CourseMapper courseMapper = sqlSession.getMapper(CourseMapper.class);
            courseMapper.deleteCourse(id);
            sqlSession.commit();
        } finally
        {
            sqlSession.close();
        }
 
    }    
}
