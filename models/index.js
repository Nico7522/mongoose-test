const mongoose = require("mongoose");

const db = {
  start: async () => {
    try {
      await mongoose.connect(
        "mongodb://127.0.0.1:27017/threadsDB"
        // "mongodb+srv://nicolas:nico@nicolas.yw93vvh.mongodb.net/threadsDB"
      );

    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },
};

module.exports = db;
