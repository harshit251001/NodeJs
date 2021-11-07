const express = require('express');

const router = express.Router();

//----------USERS------------//
let users = [
    { user_id: 1, user_name: "Manthan Shukla", user_password: "123", total_orders: 5, image: "random_url_1" },
    { user_id: 2, user_name: "Rohit Shukla", user_password: "123", total_orders: 5, image: "random_url_2" },
    { user_id: 3, user_name: "Mohit Shukla", user_password: "123", total_orders: 5, image: "random_url_3" },
    { user_id: 4, user_name: "Rahul Shukla", user_password: "123", total_orders: 5, image: "random_url_4" }
];

//----------ROUTES-----------
// 1. /details
// 2. /update
// 3. /image
// 4. /insert
// 5. /delete

// To get user by ID
router.get('/details/:id', async (req, res) => {
    const { id } = req.params;
    const user = users.filter((item) => {
        if (item.user_id == id) 
            return item;
    })
    res.status(200).send(user)
})

// To update user by ID
router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { payload } = req.body;
    users.map((item) => {
        if (item.user_id == id) {
            item.user_name = payload.user_name;
            item.user_password = payload.user_password;
            item.total_orders = payload.total_orders;
            return;
        }
    })
    res.status(200).send(users);
})

//To get user image by ID
router.get('/image/:id', async (req, res) => {
    const { id } = req.params;
    const user = users.filter((item) => {
        if (item.user_id == id) {
            return item;
        }
    })
    res.status(200).send(user)
})

//To insert a user 
router.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { payload } = req.body;
    const newUser = {
        user_id: id,
        user_name: payload.user_name,
        user_password: payload.user_password,
        image: payload.image
    }
    users.push(newUser);
    res.status(200).send(users)
})

//To delete a user by ID 
router.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const updatedUsers = users.filter((item) =>  { return item.id != id })
    users = updatedUsers;
    res.status(200).send(users)
})

module.exports =  router