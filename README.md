# FANTASY FOOTBALL
A web based application for playing Fantasy Football League made in MERN stack.

## Environment Setup and Installation
1. Install NodeJS and MongoDB Compass:
   * https://nodejs.org/en/download/
   * https://www.mongodb.com/docs/compass/current/install/

2. Clone the repository
```git
cd <INSTALLATION_PATH>
git clone https://github.com/UjjawalKhadanga/FantasyFootball.git
cd ./FantasyFootball
```


3. Install the Node Modules for the server
```git
cd ./server
npm install
```

4. Install the Node Modules for the client
```git
cd ../client
npm install
```
5. Setup Environment Variables in server environment
```
cd ../server
mkdir var
cd ./var
touch .env
```
6. Add the following fields in the .env file
* MONGODB_URI = "mongodb://localhost:27017/FantasyFootball"
* JWT_SECRET = "<AnyRandomStringforJWTSigning>"
* SALT_ROUND = 12


## Run the Application
1. Open 2 terminals:
* In the client folder :
```git
cd ./client
npm start
```
* In the server folder :

```git
cd ./server
npm start
```
---
