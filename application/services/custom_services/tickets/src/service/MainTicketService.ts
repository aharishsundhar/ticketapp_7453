import { Request, Response } from 'express';
import {MainTicketDao} from '../dao/MainTicketDao';
import { CustomLogger } from '../config/Logger'
let MainTicket = new MainTicketDao();

export class MainTicketService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MainTicketService.ts: GpCreate')
     const  MainTicketData = req.body;
     MainTicket.GpCreate(MainTicketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MainTicketService.ts: GpCreate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MainTicketService.ts: GpSearch')
     const  MainTicketData = req.query;
     MainTicket.GpSearch(MainTicketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MainTicketService.ts: GpSearch')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MainTicketService.ts: GpDelete')
     const  MainTicketId = req.params.id;
     MainTicket.GpDelete(MainTicketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MainTicketService.ts: GpDelete')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MainTicketService.ts: GpGetNounById')
     const  MainTicketId = req.params.id;
     MainTicket.GpGetNounById(MainTicketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MainTicketService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MainTicketService.ts: GpUpdate')
     const  MainTicketData = req.body;
     MainTicket.GpUpdate(MainTicketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MainTicketService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MainTicketService.ts: GpSearchForUpdate')
     const  MainTicketData = req.body;
     MainTicket.GpSearchForUpdate(MainTicketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MainTicketService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MainTicketService.ts: GpGetAllValues')
     
     MainTicket.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from MainTicketService.ts: GpGetAllValues')
         callback(response);
         });
    }


}