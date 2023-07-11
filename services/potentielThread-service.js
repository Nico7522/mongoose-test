const { PotentielThread } = require("../models/potentiel-thread");

const PotentielThreadService = {
  addPotentielThread: async (newThread) => {
    const thread = await PotentielThread.create(newThread);

    return thread;
  },
};

module.exports = PotentielThreadService;
