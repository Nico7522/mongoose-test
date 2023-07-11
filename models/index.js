const mongoose = require("mongoose");
const { URL, LOCAL_URL } = process.env


const db = {
  start: async () => {
    try {
      await mongoose.connect(
        LOCAL_URL
        // "URL"
      );

    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },
};

module.exports = db;
