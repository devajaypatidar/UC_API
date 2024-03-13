
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const {createUser,getAllUsers,getUser,updateUser,deleteUser} = require('./controller/userController');

const app = express();
const PORT = 8000;


app.use(bodyParser.json());


app.post('/api/user',createUser);

app.get('/api/user', getAllUsers);

app.get('/api/user/:id',getUser);

app.put('/api/user/:id',updateUser );

app.delete('/api/user/:id',deleteUser );


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
