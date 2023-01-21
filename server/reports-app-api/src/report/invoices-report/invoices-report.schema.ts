import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InvoiceDocument = HydratedDocument<Invoice>;

@Schema()
export class Invoice {
  @Prop()
  amount: number;

  @Prop()
  currency: string;

  @Prop()
  createdAt: Date;

  @Prop()
  modifiedAt: Date;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
