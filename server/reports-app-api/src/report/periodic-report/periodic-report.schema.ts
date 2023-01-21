import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PeriodicDocument = HydratedDocument<Periodic>;

@Schema()
export class Periodic {
  @Prop()
  date: Date;

  @Prop()
  amount: number;

  @Prop()
  totalAmount: number;

  @Prop()
  createdAt: Date;
}

export const PeriodicSchema = SchemaFactory.createForClass(Periodic);
