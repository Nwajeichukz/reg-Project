const db = require('../data-repo/DB')


exports.signup = async (req, res) => {
  const {email, gsm, password} =  req.body;

  console.log(req.body);
  if(db.exists(email)){
    return res.status(400).json({message:"User with email already exists"});
  }

  const savedUser = db.save({email, gsm, password});
  
  res.status(200).json({
    status: 'success',
    message:"user with email "+savedUser.email +" saved successfully"
  });
}

exports.login = async(req, res) => {
  const {email, password} = req.body;
  const user = db.findOne(email);
  if(user == null || user == undefined){
    return res.status(400).json({message:"User not found"});
  }

  if(password !== user.password)
  return res.status(400).json({message:"invalid username/password combination"});


  res.status(200).json({
    status: 'success',
    message: 'login is a success'
  });
}

exports.getId = async (req, res) => {
  const id = req.params.id;
try{
const user = db.findById(id);
// console.log('found user', user);

  res.status(200).json({
    status: 'success',
    data:user
  });

}catch(e){
  res.status(400).json({
    status: e.message,
  });
}
}

exports.getAllUser = async (req, res) => {
  const user = db.findAll(req.params);
  console.log('find all user', user)

  res.status(200).json({
    status: 'success',
    data: user,
  })
}