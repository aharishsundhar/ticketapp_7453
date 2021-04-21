import * as mongoose from 'mongoose';
import MainTicketModel from '../models/MainTicket';
import { CustomLogger } from '../config/Logger'


export class MainTicketDao {
    private MainTicket = MainTicketModel;
    constructor() { }
public GpCreate(MainTicketData, callback){
new CustomLogger().showLogger('info', 'Enter into MainTicketDao.ts: GpCreate')
let temp = new MainTicketModel(MainTicketData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from MainTicketDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(MainTicketData, callback){
new CustomLogger().showLogger('info', 'Enter into MainTicketDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(MainTicketData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.MainTicket.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from MainTicketDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(MainTicketId, callback){
new CustomLogger().showLogger('info', 'Enter into MainTicketDao.ts: GpDelete')

this.MainTicket.findByIdAndRemove(MainTicketId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from MainTicketDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(MainTicketId, callback){
new CustomLogger().showLogger('info', 'Enter into MainTicketDao.ts: GpGetNounById')

this.MainTicket.findById(MainTicketId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from MainTicketDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(MainTicketData, callback){
new CustomLogger().showLogger('info', 'Enter into MainTicketDao.ts: GpUpdate')

this.MainTicket.findOneAndUpdate({ _id: MainTicketData._id }, MainTicketData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from MainTicketDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(MainTicketData, callback){
new CustomLogger().showLogger('info', 'Enter into MainTicketDao.ts: GpSearchForUpdate')

this.MainTicket.findOneAndUpdate({ _id: MainTicketData._id }, MainTicketData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from MainTicketDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into MainTicketDao.ts: GpGetAllValues')

this.MainTicket.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from MainTicketDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}


}