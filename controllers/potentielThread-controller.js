const PotentielThreadService = require("../services/potentielThread-service");



const PotentielThreadController = {
    addPotentielThread: async (req,res) => {
     
        const user = await PotentielThreadService.addPotentielThread(req.body)
        res.sendStatus(200);
    }
}

module.exports = PotentielThreadController