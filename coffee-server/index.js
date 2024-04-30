const express = require('express')
const app = express()
require('dotenv').config() ;
const port = process.env.PORT || 5000
const cors = require('cors')
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');


//middleware

app.use(cors())
app.use(express.json())


 const uri= 

const uri ='mongodb+srv://shafayettuhin00:v7hnbtQS01fmBes7@tuhin.ht62nni.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();


    const database = client.db("coffeeUsersDB");
    const user = database.collection("myCoffeeUser");


    app.get('/user' , async(req, res) => {
      const result = await user.find({}).toArray();
      res.send(result)
    })

    app.get('/user/:id' , async(req, res) => {
      const id = req.params.id ;
      const result = await user.findOne({_id :new ObjectId(id)})
      res.send(result)
    })

    app.post('/user' , async(req, res) => {
      const newUser =  req.body;
      console.log(newUser) 
      const result = await user.insertOne(newUser);
      res.send(result)
    })

  
    app.delete('/user/:id' , async (req, res) => {
      const id = req.params.id ;
      const result = await user.deleteOne({_id :new ObjectId(id)})
      res.send(result)
    })

   app.put('/user/:id' , async (req, res) =>{
     const id = req.params.id ;
     const newUser =  req.body;
     const result = await user.updateOne({_id :new ObjectId(id)},{$set : newUser})
     res.send(result)
   })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Server Is Running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
