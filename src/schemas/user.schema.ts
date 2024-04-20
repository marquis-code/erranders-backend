import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ required: false })
  verified?: boolean;

  @Prop({ required: true })
  userType: 'deliveryAgent' | 'storeAgent' | 'studentEntrepreneur';
}

export const UserSchema = SchemaFactory.createForClass(User);
