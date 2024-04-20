import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: true, required: true, lowercase: true })
  email: string;

  @Prop({ required: true, selected: false })
  password: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ required: false })
  verified?: boolean;

  @Prop({ required: true })
  userType: 'deliveryAgent' | 'storeAgent' | 'studentEntrepreneur';
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
