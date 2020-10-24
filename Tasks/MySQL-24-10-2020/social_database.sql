create database social_db;
use social_db;

create table profile_status(status varchar(100), user_id INT(100));
create table user_profile(user_id INT(100), user_name varchar(100));
create table friends(user_id INT(100), friend_id INT(100));
create table comments(comment varchar(100), post_id INT(100), commenter_id INT(100));
create table likes(post_id INT(100), liker_id INT(100));
create table user_login_details(user_id INT(100), user_mail varchar(100), password varchar(100));
create table posts(post_id INT(100), user_id INT(100));

INSERT INTO user_login_details values(1, 'abc@gmail.com', 'abc');
INSERT INTO user_login_details values(2, 'wer@gmail.com', '123');
INSERT INTO user_login_details values(3, 'mji@gmail.com', 'q3e');
INSERT INTO user_login_details values(4, 'olk@gmail.com', 'rt5');
INSERT INTO user_login_details values(5, 'poy@gmail.com', 'ki8');
INSERT INTO user_login_details values(6, 'iuy@gmail.com', 'p09');
INSERT INTO user_login_details values(7, 'mki@gamil.com', 'mju');


INSERT INTO user_profile values(1, "abc");
INSERT INTO user_profile values(2, "wer");
INSERT INTO user_profile values(3, "mji");
INSERT INTO user_profile values(4, "olk");
INSERT INTO user_profile values(5, "poy");
INSERT INTO user_profile values(6, "iuy");
INSERT INTO user_profile values(7, "mki");


INSERT INTO profile_status values('ACTIVE', 1);
INSERT INTO profile_status  values('ACTIVE', 2);
INSERT INTO profile_status values('ACTIVE', 3);
INSERT INTO profile_status values('NOT ACTIVE', 4);
INSERT INTO profile_status values('ACTIVE', 5);
INSERT INTO profile_status values('NOT ACTIVE', 6);
INSERT INTO profile_status values('ACTIVE', 7);

INSERT INTO friends values(1, 2);
INSERT INTO friends values(2, 1);
INSERT INTO friends values(1, 3);
INSERT INTO friends values(3, 1);
INSERT INTO friends values(3, 2);
INSERT INTO friends values(2, 3);
INSERT INTO friends values(3, 4);
INSERT INTO friends values(4, 3);


INSERT INTO posts values(1, 3);
INSERT INTO posts values(2, 1);
INSERT INTO posts values(3, 3);
INSERT INTO posts values(4, 2);
INSERT INTO posts values(5, 4);
INSERT INTO posts values(6, 5);
INSERT INTO posts values(7, 5);
INSERT INTO posts values(8, 5);

INSERT INTO likes values(1, 2);
INSERT INTO likes values(1, 4);
INSERT INTO likes values(1, 1);
INSERT INTO likes values(2, 3);
INSERT INTO likes values(3, 1);
INSERT INTO likes values(3, 4);
INSERT INTO likes values(5, 2);
INSERT INTO likes values(5, 1);


INSERT INTO comments values('congrats', 2, 3);
INSERT INTO comments values('Good', 4, 3);
INSERT INTO comments values('Great', 5, 3);
INSERT INTO comments values('Nice work', 6, 3);
INSERT INTO comments values('Superb', 7, 3);
INSERT INTO comments values('Beautiful', 8, 3);
INSERT INTO comments values('Thanks', 2, 1);
INSERT INTO comments values('Great Job', 1, 2);
INSERT INTO comments values('congrats', 1, 2);
INSERT INTO comments values('congrats', 4, 3);
INSERT INTO comments values('congrats', 1, 4);



-- Queries

-- Friend table list which are matched with user profile id
 SELECT * from friends f inner join user_profile u on f.friend_id = u.user_id;
 
-- Display all the posts of user id 5
SELECT * from posts where user_id = 5;


-- Query that matches with "%gmail%"
SELECT * from user_login_details where user_mail like '%gmail%';

-- Limit the display data from comments table 5 which belongs to user 3
SELECT * from comments where commenter_id=3 limit 5;

-- Combine profile_status, user_profile and user_login_details and display matching records
SELECT * from profile_status p inner join user_profile up on p.user_id = up.user_id inner join user_login_details ul on up.user_id = ul.user_id; 





