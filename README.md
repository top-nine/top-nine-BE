# top-nine-BE API

## Base URL: https://top-nine.herokuapp.com/

---

##Endpoints

### GET /home

    -returns logged in user along with their top nine items

### GET /home/:id

    -returns a single item for a logged in user

### GET /users

    -returns an array of users

### GET /users/:id

    -returns a single user by id

### GET /users/:id/top-nine

    -returns a list top nine items saved by user

### POST /auth/register

    -input:
        -name -Required
        -email -Required
        -password -Required

    -returns success message

### POST /auth/login

    -input:
        -email -Required
        -password -Required

    -returns a token

### POST /home/add-top-nine

    -input:
        -title -Required
        -description -Required
        -image_url

    -returns id of added item

### PUT /home/:id/edit-top-nine

    -input:
        -title -Required
        -description -Required
        -image_url

    -returns id of updated item

### DELETE /home/:id/delete-top-nine

    -input:
        -id -Require (id of the item)

    -returns confirmation that the item has been deleted
