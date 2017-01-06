# spring-boot-test

Java [Spring Boot](https://projects.spring.io/spring-boot/) experiments integrating it with other frameworks and tests.

Do not use in production! Only use it for learning purposes!

# Installation

Copy [src/main/resources/jdbc.example.properties](https://github.com/diegojromerolopez/spring-boot-test/blob/master/src/main/resources/jdbc.example.properties) to **src/main/resources/jdbc.properties** and overwrite the username
and password of your database:

````
jdbc.driverClassName=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/springboottest
jdbc.username=<username>
jdbc.password=<password>
````

This app is configured to work with a **MySQL database** with the name **springboottest**.
If it is not your case, you should change the driver and include the your connector in the
[pom.xml](https://github.com/diegojromerolopez/spring-boot-test/blob/master/pom.xml) file and install
it with maven.

#  Creating the database
There is a small example database in [springboottest.sql](https://github.com/diegojromerolopez/spring-boot-test/blob/master/src/main/resources/db/springboottest.sql).

Import that in your DBMS.

# Running the application

There is a [small script](https://github.com/diegojromerolopez/spring-boot-test/blob/master/run.sh) that checks if all maven dependencies are satisfied and runs the application.

Once you run this script, you would see the web app in your local address **http://localhost:8080**.

# Models

## Teacher

A teacher is a person that gives a course. He/She has a first name and last name.

## Course

Courses have a title, a description, a number of hours, a level (basic, intermediate or advanced) and can be actived or disabled.

Thus, courses are given by one (and only one) teacher.

# REST URLs

## /courses
Return the list of active courses

## /courses/add
Adds a new course. Needs a POST with a JSON body. The format of the JSON is the following:
````json
{
    "title": "<course title>"
    "description": "<course description>",
    "numberOfHours": <number of hours>,
    "level": "<level, must be 'basic', 'intermediate' or 'advanced'>",
    "isActive": "<true or false>",
    "teacher": <teacher_id>
}
 ````
In the directory rest_example_calls are two scripts, [rest_example_calls/add_course.sh](https://github.com/diegojromerolopez/spring-boot-test/blob/master/rest_example_calls/add_course.sh) is one of them and lets you add a new course to teacher with id 2 (change it if teacher with id = 2 does not exist in your database).

## /courses/{id}
Return the courses with id={id}

## /courses/{id}/delete
Deletes the course with id={id}. This action uses the POST method.

Take a look to the [rest_example_calls/delete_course.sh](https://github.com/diegojromerolopez/spring-boot-test/blob/master/rest_example_calls/delete_course.sh) script. It takes the id of the course you want to delete as a parameter and calls to deletion URL.

## /teachers
Return the list of teachers

## /teachers/{id}
Return the teacher with id={id}

# Other dependencies
I've uploaded the Javascript dependencies using npm so you don't have to worry about that.

# Comments about this project?
This project tries to give a panoramic view of Java Spring Boot and accepts suggestions or even PR.