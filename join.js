//Join
//joining two or more tables
//1. normal/natural join : join each row to other(second) row
//2. equi join : join on equality condition
//3. Left join : join at left row
//4. Right join : Join to right row

//employe
//----------
//empno name salary deptno
//100 amit 9000 10
//101 aman 12000 11

//department
//----------
//deptno dname loc
//10 acc chd
//11 acc umb

//1.	SELECT *from employee, department
//2.	SELECT *from employee, department where employee.deptno=department.deptno
//3. 	SELECT name from employee, department where employee.deptno=department.deptno
//4. 	SELECT name from employee, department where employee.deptno=department.deptno and dname='acc'
//5.	SELECT ename,pname,dname from employee,department,project where employee.deptno=department.deptno and employee.eno=project.eno;
//6.	SELECT *from employee where eno in(select eno from project group by eno having count(*)>2)
//7.	SELECT *from employee where eno in (select eno )
//8.	SELECT *from employee where salary>(select salary from employee where ename='anil'
//9.	SELECT ename, dname from employee, project, department where employee.eno=project.eno and employee.deptno=department.deptno and (pname='sales' or pname='marketing')
//10.	list the ename, dname, pname of all the employess who are earnong between 5000-9000
//10-A.	SELECT ename, dname, pname from employee, department, project where employee.deptno=department.deptno and employee.eno=project.eno and employee.salary>5000 and employee.salary<9000
 
 //------------------------
 //album,singer,song
 // CREATE DATABASE Music
 //CREATE TABLE album(albumno int(20), alname VARCHAR(255), singer VARCHAR(255), totalsong int(20), year int(4))
 //INSERT INTO album(albumno, alname, singer, totalsong, year) VALUES(1, 'Raja Rani', 'Mika Singh', 15, 2012))
 //CREATE TABLE singer(siname VARCHAR(255), loc VARCHAR(20))
 //INSERT INTO singer(siname, loc) VALUES('Mika Singh', "Punjab"))
 //CREATE TABLE song(soname VARCHAR(255), lang VARCHAR(20),  genre VARCHAR(255), siname VARCHAR(255) singer VARCHAR(255))
 //INSERT INTO song(soname, lang, genre, singer) VALUES('Dil Di Galla', "Punjabi", 'Romance' 'Mika Singh'))
 
 //	SELECT *from album,singer,song
 // SELECT *from album,singer where album.singer=singer.siname
 // SELECT *from album,singer where album.singer=song.singer
 // SELECT *from album,singer,song where album.singer=singer.siname and album.singer=song.singer
 // SELECT *from album,singer,song where album.singer=singer.siname and singer.loc="Punjab"
 // SELECT *from album,singer,song where album.singer=song.singer and genre="Romance"
 // SELECT *from album,singer,song where album.singer=singer.siname and singer.siname=song.singer and singer.loc="Punjab" and song.genre="Romance"
 // SELECT *from album,song where singer="Mika Singh"
 //-------------------------

 
 
 
 

