import express from 'express'

class HomeController {
    main(req: express.Request, res: express.Response) {
        return res.json("Vala zé");
    }
}

export default new HomeController();