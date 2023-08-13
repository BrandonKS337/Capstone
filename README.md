Exercise 3

Try creating an express application for a blog website using Sequelize. You can refer to Module 8 for the logical/physical models

Requirements
- Your system should have a proper MVC structure
- The system should be able to create users
- The users should be able to create multiple posts (posts should be very basic, title/desc/img)
- other users should be able to like the posts and comment on them

copy and pasted this code into previous exercise to just update both files for sequelize requirement.



Video reference: Wed July 5 Recording 2
reference 26 min in for dbConnect and npm run server @32 min
*** IMPORTANT. SWAPPING FROM mongodb TO MYsql FOR THIS ***


COPIED from exercise 2
postman checks
User - GET users
http://localhost:8000/api/users


/////////// USERS ////////////////
User - POST schema example
http://localhost:8000/api/users/createUser
{
"firstName": "John",
"lastName": "JingleHiemerSchmit",
"emailId": "johnJS@email.com",
"password": "123456"
}

USER - PUT aka Update Schema
http://localhost:8000/api/users/2
{
"firstName": "23",
"lastName": "23",
"emailId": "emai3l@email",
"password": "123456"
}

USER - DELETE aka.....delete user
http://localhost:8000/api/users/2


/////////////////// POSTS ////////////////////
to create Posts - POST schema
http://localhost:8000/api/users/createPost
{
"title": "random lorem output text",
"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, incidunt molestiae? Deserunt?",
"content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita libero, quaerat inventore corrupti laudantium omnis perferendis debitis voluptates velit pariatur cumque quia magnam consectetur beatae iusto dolorum, ut ipsa explicabo nisi. Nam impedit inventore quod libero vitae. Beatae quis, quibusdam nam ipsa itaque ad. Natus autem aspernatur labore delectus nihil blanditiis commodi, quod iste accusamus et nobis nulla voluptas necessitatibus reprehenderit illo."
}

check posts or users for changes
- http://localhost:8000/api/posts
-http://localhost:8000/api/users

Likes - PUT method
- example: http://localhost:8000/api/posts/64d094358e8ee55d5a90c8b2/like
- change Headers if needed: may need to add key:Content-Type and value: application/json....MAY need to
- Body: none.
- SEND IT

Comments - POST method
- example: http://localhost:8000/api/posts/64d094358e8ee55d5a90c8b2/comment
- change Headers if needed: may need to add key:Content-Type and value: application/json....MAY need to
- example body
{
  "text": "Easily Best post ever. Glad it only took 10hours to figure out how to comment on it!!!!!!"
}
- SEND IT



////////////////////////// AUTH STUFF //////////////////////////
AUTH - login route
localhost:8080/api/auth/login


Auth - Signup 
localhost:8080/api/auth/signup


/////////////////////// HEROES STUFF /////////////////////

*** GET Heroes ***
http://localhost:8000/api/heroes

*** GET Hero by ID ***
http://localhost:8000/api/heroes/<ID#>

*** CREATE HEROES***
http://localhost:8000/api/heroes/create
{
"title": "Im the same post new title",
"first_name": "Second post",
"last_name": "New content",
"race": "gnome",
"class": "bard"
}

*** Update Hero ***
PUT METHOD  http://localhost:8000/api/heroes/<ID#>
{ //change this data to something else
"first_name": "Kenny",
"last_name": "Macormic",
"race": "human",
"class": "bowling ball"
}

*** Delete Hero ***
DELETE METHOD http://localhost:8000/api/heroes/<ID#>


/// Attempt To add "Default" users/heroes use force true and async in conjunction with Bulk insert///
https://devdotcode.com/how-to-use-sequelize-async-await-to-interact-with-mysql-database-in-node-js/

https://stackoverflow.com/questions/29461908/how-to-do-bulk-insert-using-sequelize-and-node-js


*** Updating the foreign keys // character_id & encounter_ids ***

PUT -character_id referenced under users table
http://localhost:8000/api/users/character/<character_id being changed>
// test
1. GET and either http://localhost:8000/api/users/character
OR http://localhost:8000/api/users/character/<character_id being changed> either will show data you would need to just scroll to it if you grab all.



http://localhost:8000/api/users/encounter/<encounters_id being changed>
POST - http://localhost:8000/api/encounters/create creates encounters
{
    
      "encounter_name": "Terry Vs the Goblins",
      "dm_id": 1,
      "encounter_description": "four brave adventurers all fight to open a bottle. alas failed",
      "updatedAt": "2023-08-13T03:18:10.861Z",
      "createdAt": "2023-08-13T03:18:10.861Z"
    
}
///// use a GET-http://localhost:8000/api/users/ to verify changes








///todos: look into trillo for todo list
