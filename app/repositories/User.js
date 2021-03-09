// const User = require('../models/User');

class UserRepository {
    // constructor(model){
    //     this.model = model;
    // }

    // create(newUser){
    //     const user = new User(newUser);
    //     return user.save();
    // }

    // findAll(){
    //     return this.model.find();
    // }

    // findById(id) {
    //     return this.model.findById(id);
    //   }
    
        
    // deleteById(id) {
    //     return this.model.findByIdAndDelete(id);
    // }
    

    // updateById(id, object) {
    //     const query = { _id: id };
    //     return this.model.findOneAndUpdate(query, { $set: { firstname: object.firstname, lastname: object.lastname } });
    // }
}

module.exports = new UserRepository();