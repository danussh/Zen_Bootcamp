create database guvi_db;
use guvi_db;

create table mentors(mentor_id integer, mentor_name varchar(100));
create table student_activated_courses(user_id integer, course_id integer);
create table courses(course_id integer, course_name varchar(100), course_details varchar(100));
create table users(user_id integer, user_name varchar(100), college varchar(100), working_status varchar(100), mentor_id integer);
create table codekata(problem_id integer, category varchar(100), difficulty varchar(100), user_id integer, submission_status varchar(100));
create table attendance(class_data varchar(100), user_id integer, status varchar(100));
create table topics(topic_id integer, topic_name varchar(100), user_id integer);
create table tasks(task_id integer, task_name varchar(100), details varchar(100), user_id integer);
create table company_drives(drive_id integer, company_name varchar(100), user_id integer, status varchar(100));

INSERT INTO mentors values(1, 'John Doe');
INSERT INTO mentors values(2, 'John Doe1');
INSERT INTO mentors values(3, 'John Doe2');
INSERT INTO mentors values(4, 'John Doe3');
INSERT INTO mentors values(5, 'John Doe4');

INSERT INTO courses values(1, 'Basic JS', 'Learn java script');
INSERT INTO courses values(2, 'Advanced JS', 'Learn advanced java script');
INSERT INTO courses values(3, 'Python', 'Learn python');
INSERT INTO courses values(4, 'React JS', 'Learn ReactJS');
INSERT INTO courses values(5, 'Node JS', 'Learn node JS');

INSERT INTO users values(1, 'Unknown', 'UVC', 'Working', 1);
INSERT INTO users values(2, 'Unknown1', 'UVC', 'Working', 5);
INSERT INTO users values(3, 'Unknown2', 'UVC', 'Student', 4);
INSERT INTO users values(4, 'Unknown3', 'UVC', 'Working', 3);
INSERT INTO users values(5, 'Unknown5', 'UVC', 'Working', null);

INSERT INTO codekata values(1, 'Arrays', 'Easy', 1, 'Success');
INSERT INTO codekata values(1, 'Arrays', 'Easy', 2, 'Success');
INSERT INTO codekata values(1, 'Arrays', 'Easy', 3, 'Success');
INSERT INTO codekata values(2, 'Arrays', 'Medium', 1, 'Success');
INSERT INTO codekata values(2, 'Arrays', 'Medium', 4, 'Success');
INSERT INTO codekata values(3, 'Linked List', 'Easy', 1, 'Success');


INSERT INTO company_drives values(1, 'Xyz', 1, 'Selected');
INSERT INTO company_drives values(1, 'Xyz', 2, 'Not Selected');
INSERT INTO company_drives values(1, 'Xyz', 3, 'Not Selected');
INSERT INTO company_drives values(2, 'Xyz', 2, 'Selected');
INSERT INTO company_drives values(2, 'Xyz', 3, 'Not Selected');
INSERT INTO company_drives values(2, 'Xyz', 4, 'Not Selected');
INSERT INTO company_drives values(3, 'Xyz', 3, 'Selected');
INSERT INTO company_drives values(3, 'Xyz', 4, 'Selected');
INSERT INTO company_drives values(3, 'Xyz', 5, 'Selected');
INSERT INTO company_drives values(4, 'Xyz', 5, 'Not Selected');

INSERT INTO topics values(1, 'JavaScript', 1);
INSERT INTO topics values(1, 'JavaScript', 2);
INSERT INTO topics values(2, 'Python', 1);
INSERT INTO topics values(3, 'React', 1);
INSERT INTO topics values(2, 'Python', 3);
INSERT INTO topics values(1, 'JavaScript', 4);
INSERT INTO topics values(2, 'Python', 5);

INSERT INTO student_activated_courses values(1, 1);
INSERT INTO student_activated_courses values(1, 2);
INSERT INTO student_activated_courses values(1, 3);
INSERT INTO student_activated_courses values(2, 2);
INSERT INTO student_activated_courses values(2, 3);
INSERT INTO student_activated_courses values(2, 4);
INSERT INTO student_activated_courses values(3, 4);
INSERT INTO student_activated_courses values(3, 5);
INSERT INTO student_activated_courses values(3, 1);
INSERT INTO student_activated_courses values(4, 4);
INSERT INTO student_activated_courses values(4, 5);

INSERT INTO tasks values(1, 'Create html page', 'use HTML and do the page', 1);
INSERT INTO tasks values(1, 'Create html page', 'use HTML and do the page', 2);
INSERT INTO tasks values(1, 'Create html page', 'use HTML and do the page', 3);
INSERT INTO tasks values(2, 'Create webpage', 'use HTML and do the page', 2);
INSERT INTO tasks values(2, 'Create webpage', 'use HTML and do the page', 3);
INSERT INTO tasks values(2, 'Create webpage', 'use HTML and do the page', 4);

INSERT INTO attendance values('25-10-2020', 1 , 'present');
INSERT INTO attendance values('25-10-2020', 2 , 'present');
INSERT INTO attendance values('25-10-2020', 3 , 'present');
INSERT INTO attendance values('25-10-2020', 4 , 'absent');
INSERT INTO attendance values('25-10-2020', 5 , 'present');
INSERT INTO attendance values('26-10-2020', 1 , 'present');
INSERT INTO attendance values('26-10-2020', 2 , 'present');
INSERT INTO attendance values('26-10-2020', 3 , 'absent');

-- Queries

-- Get the numberof problems solved by users
SELECT u.user_id, count(*) from users u inner join codekata c on u.user_id = c.user_id group by u.user_id;
 
-- Display the number of company drives attended by the user
SELECT u.user_id, count(*) from users u inner join company_drives c on u.user_id = c.user_id group by u.user_id;

-- Combine and display student_activated_courses and courses for a specific user grouping them based on course
SELECT s.course_id, count(*) from student_activated_courses s inner join courses c on s.course_id = c.course_id group by s.course_id;

-- List all the mentors
SELECT * from mentors;

-- List the number of students that are assigned for a mentor
SELECT * from users where mentor_id is not null; 





