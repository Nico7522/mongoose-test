const FarmThreadService = require("../services/farmThread-service");




const FarmThreadController = {

    getFarmThread: async (req,res) => {
        const allFarmThread = await FarmThreadService.getFarmThread()
        res.json(allFarmThread)
    },
    addFarmThread: async (req,res) => {
     
        const thread = await FarmThreadService.addFarmThread(req.body)
        res.sendStatus(200);
    }
}

module.exports = FarmThreadController