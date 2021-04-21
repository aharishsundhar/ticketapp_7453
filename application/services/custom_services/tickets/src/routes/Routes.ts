import { Request, Response, NextFunction } from "express";
import { MainTicketController } from '../controller/MainTicketController';


export class Routes {
    private MainTicket: MainTicketController = new MainTicketController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/MainTicket').post(this.MainTicket.GpCreate);
app.route('/MainTicket/get/search').get(this.MainTicket.GpSearch);
app.route('/MainTicket/:id').delete(this.MainTicket.GpDelete);
app.route('/MainTicket/:id').get(this.MainTicket.GpGetNounById);
app.route('/MainTicket').put(this.MainTicket.GpUpdate);
app.route('/MainTicket/get/update').put(this.MainTicket.GpSearchForUpdate);
app.route('/MainTicket').get(this.MainTicket.GpGetAllValues);
     }

}