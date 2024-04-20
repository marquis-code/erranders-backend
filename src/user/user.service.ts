import { Injectable, forwardRef, Inject, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './model/user.model';
import { AuthService } from '../auth/auth.service';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  logger: Logger;
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @Inject(forwardRef(() => AuthService))
    private AuthService: AuthService,
  ) {
    this.logger = new Logger(UserService.name);
  }

  async findOne(query: any): Promise<any> {
    return await this.userModel.findOne(query).select('+password');
  }

  async create(user: any): Promise<any> {
    this.logger.log('Creating user.');

    const hashedPassword = await this.AuthService.getHashedPassword(
      user.password,
    );
    user.password = hashedPassword;
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneAndUpdate(query: any, payload: any): Promise<User> {
    this.logger.log('Updating User.');
    return this.userModel.findOneAndUpdate(query, payload, {
      new: true,
      upsert: true,
    });
  }

  async findOneAndRemove(query: any): Promise<any> {
    return this.userModel.findOneAndRemove(query);
  }
}
