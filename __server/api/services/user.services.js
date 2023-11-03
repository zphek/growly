const users = require("../models/user.model");

class controllers {
    async authUser(user, password) {
        try {
            const userInstance = await users.findOne({
                where: {
                    username: user,
                    passw: password
                }
            });

            let data = {userExist: false, error: true};

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

    async createUser(usern, email, password) {
    try {
        const user = await users.create({
            id: null,
            username: usern,
            passw: password,
            user_class: 'USER',
            email: email
        });

        return {
            user: user,
            error: false
        };
    } catch (err) {
        console.log(err);
        return {
            message: "Choose other username or email.",
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

module.exports = new controllers();
