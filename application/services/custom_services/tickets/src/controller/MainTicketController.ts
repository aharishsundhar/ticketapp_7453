import { Request, Response } from 'express';
import { MainTicketService } from '../service/MainTicketService';
import { CustomLogger } from '../config/Logger'
let MainTicket = new MainTicketService();

export class MainTicketController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
MainTicket.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MainTicketController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MainTicketController.ts: GpCreate');
    })}
public GpSearch(req: Request, res: Response) {
MainTicket.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MainTicketController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MainTicketController.ts: GpSearch');
    })}
public GpDelete(req: Request, res: Response) {
MainTicket.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MainTicketController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MainTicketController.ts: GpDelete');
    })}
public GpGetNounById(req: Request, res: Response) {
MainTicket.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MainTicketController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MainTicketController.ts: GpGetNounById');
    })}
public GpUpdate(req: Request, res: Response) {
MainTicket.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MainTicketController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MainTicketController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
MainTicket.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MainTicketController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MainTicketController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
MainTicket.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MainTicketController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MainTicketController.ts: GpGetAllValues');
    })}


}