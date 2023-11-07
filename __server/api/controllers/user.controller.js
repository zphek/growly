const {signIn, createUser, getUsers, getUser} = require("../services/user.services");
const jwt = require("jsonwebtoken");

class controllers{
    async auth(req, res){
        const {token} = req.cookies;

        if(token){
            jwt.verify(token, "DiePheeyiameimei8Yee", (err, {data: user})=>{
                if(err){
                    res.status(403).json({message: 'Authorization fail.', auth: false});
                    return;
                }
    
                res.json({                    
                    user,
                    auth: true
                });
                
            });

            return;
        }

        res.json({
            message: "You are not logged."
        });
    }

    async signIn(req, res){
        let {username, password} = req.body;

        let data = await signIn(username, password)

        if(data.userExist){
            console.log("inicio sesion");
            const token = jwt.sign({data: data.user}, "DiePheeyiameimei8Yee", {expiresIn: '2h'});
            
            res.cookie("token", token, {
                httpOnly: true, 
                secure: true
            })
        }

        res.json(data);
    }

    signOut(req, res){
        res.clearCookie("token");
        res.json({
            message: "Cookie eliminada!"
        });
    }

    create(req, res){
        let {username, email, password} = req.body;

        if(!(username && email && password)){
            res.json({message: "Error, missing to fill in a field.", error: true});
            return;
        }

        createUser(username, email, password)
        .then(data=>{
            res.json(data);
        })
    }

    getUsers(req, res){
        getUsers().then(data=>{
            res.json(data);
        })
    }
}

module.exports = new controllers;