const { Threads } = require("../models/thread")


const ThreadService = {

    addThread: async (newThread) => {
        const thread = await Threads.create(newThread)
       
        return thread
    }
}

module.exports = ThreadService