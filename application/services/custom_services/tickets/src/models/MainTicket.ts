
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MainTicketSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   groups: String,
   types: { type: Schema.Types.String, ref: 'types' },
   severity: String
})

const MainTicketModel = mongoose.model('MainTicket', MainTicketSchema, 'MainTicket');
export default MainTicketModel;
