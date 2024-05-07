const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("User List")
})

router.get("/new", (req, res)=>{
    res.send("New User Form")
})

router.post('/', (req,res)=>{
    console.log(req.body)
    res.send("Create User")
})

router.get("/:id", (req, res)=>{
/* router.get("/:userId") ... ... {
        req.params.userId
    } */
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})

router.put("/:id", (req, res)=>{
/* router.get("/:userId") ... ... {
        req.params.userId
    } */
    req.params.id
    res.send(`Update User With ID ${req.params.id}`)
})
router.delete("/:id", (req, res)=>{
/* router.get("/:userId") ... ... {
        req.params.userId
    } */
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})


/* 

In express, we can create another way of routing.

router
    .route("/:id") <- TEM QUE SER SEMPRE DEFINIDO QUAL A ROUTE A SER USADA.
    .get("/:id", (req, res)=>{
        req.params.id
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put(":id", (req, res)=>{
        req.params.id
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete(":id", (req, res)=>{
        req.params.id
        res.send(`Delete User With ID ${req.params.id}`)
    })
        
*/

module.exports = router