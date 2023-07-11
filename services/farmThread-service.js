const { FarmThread } = require("../models/farm-thread");


const FarmThreadService = {
  getFarmThread: async () => {
    const allFarmThread = await FarmThread.find();
    return allFarmThread
  },
  addFarmThread: async (newThread) => {
    const thread = await FarmThread.create(newThread);

    return thread;
  },
};

module.exports = FarmThreadService;