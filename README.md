# BAG Country visit
Hi, I am Janvier, I worked I would like to show you off my project that   fetches data from __getcountriesapi__ then use those data to set visit places. you can click on [demo](https://janvier-bag-countries.netlify.app/)

## List of screens
 - Signup
 - Signin
- My list
- Visited
- To visit
- Country to visit
## List of backend endpoints
| Route Name| Method | Endpoint | Description|
| ------ | ------ |---|---|
| Signup | POST |jz-bag.herokuapp.com/api/v1/signup|As a traverller I sould be able to add my personal information so that I can choose places to visit and checkoff my list
| Signin | POST | jz-bag.herokuapp.com/api/v1/signin| User should be able to login so that he can view dashboard
| Add country | POST| jz-bag.herokuapp.com/api/v1/add/country | User should be able to add country to his/ her trips list 
| Update country | PUT |jz-bag.herokuapp.com/api/v1/update/country| User should able to check off viisted places 
| Delete country |  PUT|jz-bag.herokuapp.com/api/v1/delete/country| User should be able to remove place from his/her list

## Tools
- Mongodb
- NodeJS,
- Express,
- HTML,
- CSS
- SCSS
- HEROKU
- Netlify
- Jest&Enzymes
- Vscode
- Postman

## features
- Signin 
- Add country
- Delete country
- Check country as visited 
## Installation guide and test with remote server
1. Clone this repository firstly then follow these instructions below open localhost:3000  
```
cd bag-countries/
npm install
npm start
npm  test 
```
## Running with local server

On the condition that you want to test react App with local server headover to `src/util/index.js`and change this line `export const BACKEND_API_ROUTE ='https://jz-bag.herokuapp.com/api/v1'` route to `export const BACKEND_API_ROUTE ='localhost:4010/api/v1'` then 
in terminal run these commands
```
cd bag-countries/ && npm install
cd server/ && npm install
npm start 
cd ..
npm start
npm  test 
```
**Thank you for reviewing this project**
`Developed by Janvier`
