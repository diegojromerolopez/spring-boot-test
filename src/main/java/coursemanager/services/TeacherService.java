package coursemanager.services;

import coursemanager.connector.MyBatisUtil;
import coursemanager.domain.Course;
import coursemanager.domain.Teacher;
import coursemanager.mappers.CourseMapper;
import coursemanager.mappers.TeacherMapper;
import java.util.List;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Component;

/**
 *
 * @author diegoj
 */
@Component
public class TeacherService {
 
    public Teacher getTeacherById(Integer id)
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            TeacherMapper teacherMapper = sqlSession.getMapper(TeacherMapper.class);
            return teacherMapper.getTeacherById(id);
        } finally
        {
            sqlSession.close();
        }
    }

    public Teacher getTeacherCourses(Integer id)
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            TeacherMapper teacherMapper = sqlSession.getMapper(TeacherMapper.class);
            return teacherMapper.getTeacherCourses(id);
        } finally
        {
            sqlSession.close();
        }
    }    
    
    public List<Teacher> getAllTeachers()
    {
        SqlSession sqlSession = MyBatisUtil.getSqlSessionFactory().openSession();
        try
        {
            TeacherMapper teacherMapper = sqlSession.getMapper(TeacherMapper.class);
            return teacherMapper.getAllTeachers();
        } finally
        {
            sqlSession.close();
        }
    }
    
}
