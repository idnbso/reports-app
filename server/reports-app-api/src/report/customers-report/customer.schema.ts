import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  birthDate: Date;

  @Prop()
  location: string;

  @Prop()
  totalAmount: number;

  @Prop()
  createdAt: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
