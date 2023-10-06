# Install dependencies
npm i

# RUN

npm run dev

# STEPS

1. create user with username and password http://localhost:3000/api/v1/user/create 
1. login user with username and password http://localhost:3000/api/v1/user/login
1. copy token if success at step 1 or 2. 
1. add token to request headers
1. find all routes in the /src/routes/routes.js