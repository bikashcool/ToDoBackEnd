const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Established"))
    .catch((error) => {
      console.log("Issue in DB Connection");
      console.log(error.message);
      process.exit(1); // Exit the process with an error code (1)
    });
}

module.exports = dbConnect;