
# INTRODUCTION:

Welcome to the README.md for Fantasy Nexus. This readme will be very basic but will cover the main topics of how to clone and run this app as well as a general 
overview of the purpose of the app and its structure.

To start Fantasy Nexus is a pet project that I am working on primarily for the I.O.D. course but afterwards for myself and those others who are interested in a different perspective on enhancing the game experience when it comes to playing Dungeons and Dragons. The concept model for Fantasy Nexus is "How can I make this app feel less like a tool and more like a part of the story?" When we were giving freedom to choose our capstone projects concept I was at the time having issues with other apps on the market that just didn't feel good to use. Sure they were efficient at what they did but none of them really FEEL like they are part of the game. To me personally using most of the other apps feels more like picking up a dictionary to check that your scrabble partner isn't cheating and that just wasn't what I am wanting when I am playing something story driven like the Role playing table top that I have fallen in love with. D&D is about sharing time with friends and going to the extremes with your imagination and even though you will at times need that hard information to validate that rules are being followed a LOT of D&D is about the flashy encounters and quickly being able to get to exactly what you need. There is also a HUGE amount of optionality for players to pursue so I am aiming at this app expanding over time to be pretty robust and packed with features that will not only make players more engaged but also make dm's lives easier as they run the games. For now please feel free to clone the repo to your local storage, create a new branch to add in features of your own, and have fun adventuring!!


## Required Software:
App uses a mixture of several dependencies and will require a few things installed before hand
- node/nodemon
- mySQL/MySQL workbench (or appropriate local database if you choose to mod the code a bit.)
- bash or another tool like it to run your terminal commands from.

## How to Clone:
To clone to local files (using git bash)
- enter into your terminal and navigate to your install location of choice
- type in git clone https://github.com/BrandonKS337/Capstone.git 
- Once files have pulled into your local directory you should see the following folder structure
    ``` Client folder </br> Server folder</> resources.md ```
- These 3 are your main directories and you will need to branch into both Client and servers separately to install/run app

## Setting Up:
Installing Dependencies:
- Cd into either the client folder or the server folder. 
- Once verified inside the folder type `npm i` This should install all of the dependencies for the folder you have dove into. 
- type cd `../<other directory name>` obviously replacing the element placeholder name and that will take you into the other directory. once again run `npm i` and install the dependencies for that folder as well.
- create a .env file and fill out the following information to match your MySQL database information

```
PORT = <8000 as example>
DB_NAME = yourdatabasehere
DB_USER= root
DB_PASSWORD= YourPasswordHere
DB_HOST= localhost or 127.0.0.1 (or whatever works for you)
DB_PORT =3306
```

- completing the `npm i` and .env files will allow you to auto populate the server with the needed tables and allow you access.
- if desired please uncomment out lines 23 & 24 of the server.js file located in the Server directory and it will auto fill in the tables with basic data so that you immediately have database elements to work with! (comment back out when the files have seeded however as if left active may cause issues)

For clarification when you run the dependencies you should see the following.
-Client Side:
    ```
    "@types/react": "^18.0.37",
        "@types/react-dom": "^18.0.11",
        "@vitejs/plugin-react": "^4.0.0",
        "eslint": "^8.38.0",
        "eslint-plugin-react": "^7.32.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.3.4",
        "vite": "^4.3.9",
    ```
-Server Side:
    ```
        "bcrypt": "^5.1.1",
        "cors": "^2.8.5",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "mysql2": "^3.4.5",
        "sequelize": "^6.32.1"
    ```


## Running the App:
As mentioned in order to run the app you will need both files launched so open up two seperate terminals and navigate into both the server and client folders at the same time. To start each up run the following:
 - Client:

``` npm run dev ```

 - Server:
 ```npm run server```

 The client will kick the react app into gear and allow you to access the app frontend via the IP you set up in your env file. Most likely if left simple you will have set it up so that the local stuff works so you can navigate to http://localhost:5173 to pull it up. If using something like VSCode and gitbash just control left click the local host http address that pops up and it will auto run the internet browser you have set default pulling the page up for you.

 The server side so long as you have your .env file set up properly and mySQL installed will work without need to change much else auto running data for you through the use of sequelize. You may run into issues if there is an issue fetching data from the backend however so if something bugs out please check your terminal to verify the server is still running properly. On first running npm run server you will be able to verify what port you are running on by the console logged message that will populate towards the top of the incoming terminal data. Don't be alarmed if you see a lot of text come through because that is simply sequelize validating table status on the database side. It runs naturally every time something server folder side is changed and saved.

 At this point you should be active on the site and able to create yourself a new account!!! feel free to do so or feel free to use the seeded accounts aswell. the encrypted password for each of those is 12345. If you feel the need to delete them simply remove or comment them out from the seeds folder located in the server directory and that will keep them from auto populating if you ever need to push the seeds through again in the future.


 ## POSTMAN TESTING:
 If you are attempting to test or utilize the routes please feel free to use the following examples below. All routes are set up inside the server.js/routes folder/and controllers folder. If using VSCODE please feel free to control left click specific routes or functions and it will automatically take you to the relevant documents.

USER:
 - Create: POST method
    ```
    {
    "firstName": "Alpha",
    "lastName": "Omega",
    "username": "Lil Bundie",
    "email": "firstUser2@email.com",
    "password": "12345"
    }
    ```
- Read: GET method
    ```
    http://localhost:8000/api/users
    ```
- Update: PUT method
    :id=targeted user.id
    ```
    http://localhost:8000/api/users/:id  
    ```
- Delete: DELETE method
        :id=targeted user.id
    ```
    
    http://localhost:8000/api/users/:id     
    ```


This same pattern can be used with the following endpoints:
    /api/classes
    /api/encounter
    /api/equipment
    /api/heroes
    /api/monsters
    /api/party
    /api/posts
    /api/races
    /api/sessions
    /api/spells
    /api/users
    /api/weapons

    For authorization and password protection use these routes to has passwords when creating or updating users

    /api/auth/signup
    /api/auth/updatePassword
    /api/auth/loginUserByEmail
    /api/auth/loginUserByUsername


To access all of the database schema please refer to the models folder located in the Server directory. This will allow you to manipulate how the mySql database creates the tables themselves.



## Citations:

Express server reference:
```https://expressjs.com/en/api.html```

character image resources

one source
https://www.pinterest.com/drgoecke/

Johnny Beansprout:
```https://i.pinimg.com/1200x/51/56/c9/5156c904faec587f35f130f2ce37058d.jpg```
Eldric Fireblade:
```https://i.pinimg.com/originals/d5/23/26/d523266cdfcf3bf6d0d4d891fcf44af2.jpg```
Sylvia Moonshadow:
```https://i.pinimg.com/564x/b6/79/3b/b6793b6d1bb2ad2e42d8439d1cdc8edb.jpg```
AuroraSwiftstrike:
``https://i.pinimg.com/564x/3f/67/76/3f67769e67a1d58c0c9c216d5b552ee2.jpg``
Galen Stormrider:
``https://femto.scrolller.com/gnome-wizard-by-tom-mcgrath-754jtexgzq-540x766.jpg``
Lyra Nightshade:
``https://i.pinimg.com/564x/98/95/09/989509e1db19e44f2f5efda9e27090c3.jpg``
Aria Moonshadow:
```https://i.pinimg.com/564x/74/27/15/742715af22ea62a85027a36e509c10ce.jpg```
Thorgar Stonefist:
``https://i.pinimg.com/originals/c8/fc/d3/c8fcd3c1fa3da0638199f226519155b0.png``
Liliana Whisperwind:
``https://i.pinimg.com/736x/f9/c3/8d/f9c38d2baacf8902bfa1d60c72aaec7e.jpg``
Maelor Stormweaver:
``https://cdnb.artstation.com/p/assets/images/images/028/071/797/large/gaston-s-garcia-b7d176d2-a3c4-4a48-95b8-113ab5ed246a.jpg?1593418830``
Seraph Ligbearer:
``https://i.etsystatic.com/43204365/r/il/a2ca06/4989636283/il_fullxfull.4989636283_mary.jpg``
Glimwich sparkspinner
``https://i.pinimg.com/originals/f7/71/a0/f771a020b772dbb6c4db5fda3c35a9d5.png``