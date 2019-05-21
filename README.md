# top-nine-BE API

## Base URL: https://top-nine.herokuapp.com/

---

##Endpoints

### GET /home

    -returns logged in user along with their top nine items

### GET /users

    -returns a list of users

### GET /users/:id

    -returns a single user by id

### GET /users/:id/top-nine

    -returns a list top nine items saved by user

### POST /auth/register

    -returns id of registered user

### POST /auth/login

    -returns a token

### POST /home/add-top-nine

    -returns id of added item

### PUT /home/:id/edit-top-nine

    -returns id of updated item

### DELETE /home/:id/delete-top-nine

    -returns confirmation that the item has been deleted
