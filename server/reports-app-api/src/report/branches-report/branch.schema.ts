import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BranchDocument = HydratedDocument<Branch>;

@Schema()
export class Branch {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  totalAmount: number;

  @Prop()
  createdAt: Date;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
