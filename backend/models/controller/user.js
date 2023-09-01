const db = require("../Entity")
const User = db.USER

const create_user = async (req, res) => {

    try {
        if (req.body.username && req.body.mailid && req.body.password) {
            const { username, mailid, password } = req.body
            console.log("req body", req.body)

            await User.create({
                username: username,
                mailid: mailid,
                password: password,
            });
            // console.log("before")
            res.send({ statusCode: 200, message: 'response success' })
            // console.log("after")
        }
        else {
            res.send("Response failed to add to DB")
        }
    } catch (error) {
        res.send({ statusCode: 400, message: 'username or mail id already exists' })

    }


}

const login = async (req, res) => {
    try {
        // console.log("maild id from frontend",req.body.mailid)
        if (req.body.mailid && req.body.password) {
           
            const { mailid, password } = req.body
            const fetched = await User.findOne({
                where: {
                    mailid: mailid,
                    password: password
                }
            });
            console.log("After db")
            // console.log(fetched.username)
            if (fetched === null) {
                console.log("fetch null")
                res.send({ statusCode: 400, message: "Data Unavailable in DB" })
            }
            else {
                console.log("data fetched")
                res.send({ statusCode: 200, message: 'response success' })
            }
        }
        else {
            res.send({ statusCode: 400, message: "Data not fetched" })
        }
    } catch (error) {
        res.send({ statusCode: 400, message: 'Error at  data' })

    }


}
const profile = async (req, res) => {
    try {
       
        debugger;
        if (req.body) {
            const { mailid } = req.body
            const data = await User.findOne({
                where: {
                    mailid: mailid
                }

            });
            console.log(data.username)
            if (data === null) {
               
                res.send({ statusCode: 400, message: "Data Unavailable in DB" })}
            else {
                    
                    res.send({ statusCode: 200, message: 'response success' ,username:data.username,mail:data.mailid})
            }
        }
        else {
            res.send({ statusCode: 400, message: "Data not fetched" })
        }
    }catch (error) {
        res.send({ statusCode: 400, message: 'Error at  data' })
    }
}



module.exports = {

    create_user,
    login,
    profile,


};