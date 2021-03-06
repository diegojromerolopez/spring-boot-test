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
Returns the list of active courses. This list is paginated whith the following GET parameters:

- **order**: orders the course list according to the course title. It can be "ASC" or "DESC". Optional. "ASC" by default.
- **page**: selects the page of the course list. It must be an integer. Optional. 1 by default. Selecting a non-existant page returns an empty list.

For example:

````json
[
    {"id":79,"title":"Brainfuck","description":"An esoteric useless language","numberOfHours":100,"level":"basic","teacher":{"id":1,"firstName":"Alfredo","lastName":"Domínguez","fullName":"Alfredo Domínguez"},"active":true},
    {"id":5,"title":"C#","description":"Microsoft main language","numberOfHours":33,"level":"basic","teacher":{"id":1,"firstName":"Alfredo","lastName":"Domínguez","fullName":"Alfredo Domínguez"},"active":true},
    {"id":6,"title":"C++","description":"Not forgottern language","numberOfHours":56,"level":"intermediate","teacher":{"id":1,"firstName":"Alfredo","lastName":"Domínguez","fullName":"Alfredo Domínguez"},"active":true},
    // ...
]
````

For example:



## /courses/count

Returns the total number of courses, the page size and the number of pages that are in the database.

For example:

````json
{"numberOfPages": 9, "pageSize": 10, "numberOfCourses": 90}
````

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
Returns the course with id={id}

````json
{
    "id": 5,
    "title": "C#",
    "description": "A Microsoft language",
    "numberOfHours": 33,
    "level": "basic",
    "teacher": {
        "id": 1,
        "firstName": "Alfredo",
        "lastName": "Domínguez",
        "fullName": "Alfredo Domínguez"
    },
    "active": true
}
````

## /courses/{id}/delete
Deletes the course with id={id}. This action uses the POST method.

Take a look to the [rest_example_calls/delete_course.sh](https://github.com/diegojromerolopez/spring-boot-test/blob/master/rest_example_calls/delete_course.sh) script. It takes the id of the course you want to delete as a parameter and calls to deletion URL.

## /teachers
Return the list of teachers

## /teachers/{id}
Return the teacher with id={id}

# Angular app
There is a small Angular (>=2.x) application that makes some calls to the API.

To see it in action, execute the script [run_client.sh](https://github.com/diegojromerolopez/spring-boot-test/blob/master/run_client.sh).
This script checks the NPM dependencies and creates a sever on port 3000 (default NodeJS port).

This app acts as an interface of the REST API showed earlier.

Note you must have java server running on **htttp://localhost:8080** to test the AngularApp.

Don't worry about CORS, this Java application only accepts requests from **htttp://localhost:3080**.

# Other dependencies
I've uploaded the Javascript dependencies using npm so you don't have to worry about that.

# Comments about this project?
This project tries to give a panoramic view of Java Spring Boot and accepts suggestions or even PR.