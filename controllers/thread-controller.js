const ThreadService = require("../services/thread-service");


const ThreadController = {
  addThread: async (req, res) => {
    const newThread = req.body;

    const thread = await ThreadService.addThread(newThread);
    if (thread) {
      console.log(thread);
      res.sendStatus(201);
    } else {
      res.sendStatus(404);
    }
  },
};

module.exports = ThreadController;
