let users = [
  {
    user: "Marcus",
    age: 18,
  },
  {
    user: "Lucas",
    age: 18,
  }
]
 
module.exports = {
  async index(req, res){
    return res.json(users)
  },
  async store(req, res){
    const { name, age } = req.body;
 
    users.push({name, age});
 
    return res.json(users);
  }
} 