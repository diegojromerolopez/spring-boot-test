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
    
    public void insertCourse(Course course)
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            CourseMapper courseMapper = sqlSession.getMapper(CourseMapper.class);
            courseMapper.insertCourse(course);
            sqlSession.commit();
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
            return courseMapper.getCourseById(id);
        } finally
        {
            sqlSession.close();
        }
    }
 
    public List<Course> getAllCourses(String titleSort, Integer pageNumber)
    {
        int pageSize = 10;
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            int offset = (pageNumber-1) * pageSize;
            RowBounds rowBounds = new RowBounds(offset, pageSize);
            CourseMapper courseMapper = sqlSession.getMapper(CourseMapper.class);
            return courseMapper.getAllCourses(titleSort, rowBounds);
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
