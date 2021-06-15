const mongoose= require('mongoose');

const dbURI = 'mongodb+srv://gaurav-cluster:cluster@619@mycluster.nov7s.mongodb.net/nodeAuth?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

  