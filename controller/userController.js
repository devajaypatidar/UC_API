const User = require('../model/userModel');

const createUser = async (req, res) => {
    try {
      const newUser = req.body;
      const createdUser = await User.create(newUser);
      res.status(201).json(createdUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  const getAllUsers = async (req, res) => {
    try {
      const allUser = await User.find();
      res.json(allUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  const getUser = async (req,res)=>{
    
    try{
        const id = req.params.id;
        const user = await User.findOne({ id: id });
        // console.log(user);
        res.status(200).json({ user: user});
    }catch{
        res.status(500).json({error: err.message});
    }
}

const updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUser = req.body;
      const result = await User.findOneAndUpdate({ id: id }, updatedUser);
      
      res.status(200).json({ result: result});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      await User.findOneAndDelete({id: id});
      res.status(202).json({ message:"Document is successfuly deleted"});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  module.exports = {createUser,getAllUsers,getUser,updateUser,deleteUser};