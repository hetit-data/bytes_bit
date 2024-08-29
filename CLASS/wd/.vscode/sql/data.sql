Create table sec(id int primary key auto_increment not null,
name varchar,
mobile bigint unique key,
email varchar(50) unique key
);
//primary key must be one in table and can not be null
//unique key must be many in table and can be null

INSERT INTO SEC (NAME,MOBILE,EMAIL) VALUES
("HELLO",545454454,"V@GMAIL.COM"),
("HELLO2",5454544534,"V1@GMAIL.COM"),
("HELLO3",54545445324,"V2@GMAIL.COM");

ALTER TABLE SEC ADD COLUMN CITY VARCHAR(20);
UPDATE SEC SET CITY="RAJKOT" WHERE ID=3;
--//SEC TABLE
