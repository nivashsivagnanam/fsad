const express = require('express')
const app = express()
const port =process.env.PORT || 5000;
const cors = require('cors');
//password:nivashbook name bookstore

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//mongodb config mongodb+srv://bookstore:<db_password>@cluster0.oonm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const { MongoClient, ServerApiVersion ,ObjectId } = require('mongodb');
const uri = "mongodb+srv://bookstore:nivashbook@cluster0.oonm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.connect();
    //create a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");
    //insert abook to db:post the book(method)
    app.post("/uploadbook", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    })
    //create a login method
    app.post('/login', async (req, res) => {
      const { email, password } = req.body;
    
      try {
        // Mock user authentication
        const user = await client.db("BookInventory").collection("users").findOne({ email });
    
        if (user && user.password === password) { // Replace with proper password hashing in production
          res.send({ success: true, token: 'mock-jwt-token' });
        } else {
          res.send({ success: false, message: 'Invalid email or password' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Server error' });
      }
    });
    // create signup method
    app.post('/signup', async (req, res) => {
      const { email, password } = req.body;
    
      try {
        const existingUser = await client.db("BookInventory").collection("users").findOne({ email });
    
        if (existingUser) {
          return res.send({ success: false, message: 'User already exists' });
        }
    
        const result = await client.db("BookInventory").collection("users").insertOne({ email, password });
        res.send({ success: true, result });
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Server error' });
      }
    });
    
    //get all books
    // app.get("/all-books", async (req, res) => {
    //   const books = await bookCollections.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // })
    //find by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category }
      }
      const books = await bookCollections.find(query);
      const result = await books.toArray();
      res.send(result);
      
    })//
    //update a book method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
          $set: {
              ...updateBookData
          }
      }
      const options = { upsert: true };

      // update now
      const result = await bookCollections.updateOne(filter, updatedDoc, options);
      res.send(result);
  })


  // delete a item from db
  app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
  })


  // get a single book data
  app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result)
  })
  //search book by title or author
  app.get("/search-books", async (req, res) => {
    const text = req.query.text;
    const filter = {
      $or: [
        { title: { $regex: text, $options: "i" } },
        { author: { $regex: text, $options: "i" } },
      ],
    };
    const result = await bookCollections.find(filter).toArray();
    res.send(result || []);
  });
   
  
    // Send a ping to confirm a successful connectionS
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})