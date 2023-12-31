const users = require("../models/user.model");

class services {
    async signIn(user, password) {
        try {
            let where = {
                passw: password
            }

            if(user.includes("@")){
                where.email = user;
            } else {
                where.username = user;
            }

            const userInstance = await users.findOne({
                where
            });

            let data = {userExist: false, error: false};

            if(userInstance){
                data.userExist = true;
                data.error = false;
                data.user = userInstance;
            }

            return data;            
        } catch (error) {
            return {userExist: false, error: true};
        }
    }

    async createUser(usern, email, password, userclass) {
    try {
        const user = await users.create({
            id: null,
            username: usern,
            passw: password,
            user_class: userclass,
            email: email
        });

        return {
            user: user,
            error: false
        };
    } catch (err) {
        console.log(err);
        return {
            message: "Choose other name or email.",
            error: true
        };
    }
}

    async getUsers(){
        try {
            const userInstances = await users.findAll();
            return userInstances;
        } catch (error) {
            throw new Error("Error al obtener usuarios: " + error.message);
        }
    }
}

module.exports = new services();
