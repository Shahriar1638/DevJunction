const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174','https://simple-project-2-687f2.web.app'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uwwtyq1.mongodb.net/?retryWrites=true&w=majority`;
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

    // ------> Recieve Data from server <------//
    const categoryCollection = client.db("DevJunctionDB").collection("Maincategory");
    const jobsCollection = client.db("DevJunctionDB").collection("Subcategory");
    const biddersCollection = client.db("DevJunctionDB").collection("bidders2");

  // ------> JWT auth api <------//
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '1h'
      });
      res.cookie('token', token, {
              httpOnly: true,
              secure: false, 
          })
          .send({ success: true })
    })


  // ------> Job data apis started <------//

    //Getting job category Data from server
    app.get('/category', async(req,res) => {
      const getCategory = categoryCollection.find();
      const result = await getCategory.toArray();
      res.send(result);
    });

    //Getting job sub category Data from server
    app.get('/jobs', async(req,res) => {
      const result = await jobsCollection.find().toArray();
      res.send(result);
    });

    // Post My job
    app.post('/jobs', async(req,res) => {
      const newJob = req.body
      console.log("new job:  ",newJob)
      const result = await jobsCollection.insertOne(newJob);
      res.send(result);
    });

    //Getting job sub category Data from server by email
    app.get('/myjobs', async(req,res) => {
      console.log("Current email",req.query.email);
      console.log("Token: ", req.cookies.token)
      let query = {};
      if (req.query?.email) {
          query = { buyerEmail: req.query.email }
      }
      const result = await jobsCollection.find(query).toArray();
      res.send(result);
    });

    
    //get job by id
    app.get('/jobs/:id', async(req,res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // ------> BID data apis started <------//

    //get bid requests by email
    app.get('/bidrequest', async(req,res) => {
      let query = {};
      if (req.query?.email) {
          query = { buyerEmail: req.query.email }
      }
      const result = await biddersCollection.find(query).toArray();
      res.send(result);
    });
    
    //Getting bidders info from server
    app.get('/bids', async(req,res) => {
      let query = {};
      if (req.query?.id) {
          query = { id: req.query.id }
      }
      const result = await biddersCollection.find(query).toArray();
      res.send(result);
    });

    //get bid by id
    app.get('/bids/:id', async(req,res) => {
      const id = req.params.id;
      const query = {id: id}
      const result = await biddersCollection.findOne(query);
      res.send(result);
    });
    
    //patch a bid
    app.patch('/bids', async(req,res) => {
      const id = req.query.id;
      const info = req.body;
      const filter = { id: id };
      const updateDoc = {
        $push: {
          sellersInfo: info
        },
      };
      const result = await biddersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    //Publish Bids in server
    app.post('/bids', async(req,res) => {
      const newBid = req.body
      console.log("new Bids ",newBid)
      const result = await biddersCollection.insertOne(newBid);
      res.send(result);
    });

    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
   }
}
run().catch(console.dir);


app.get('/',(req, res)=>{
    res.send('Mango management server is running')
})

app.listen(port, ()=>{
    console.log(`Server Running in Port: ${port}`)
})