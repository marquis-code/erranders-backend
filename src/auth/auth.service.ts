import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const query = { email: email };
    const user = await this.UserService.findOne(query);
    if (!user) throw new NotFoundException(‘Email Does not exist’);
    const isMatched = await this.comparePasswords(pass, user.password);
    if (!isMatched) throw new UnauthorizedException(‘Invalid Password’);
    return user;
    }
    //compare password
    async comparePasswords(
    password: string,
    hashedPassword: string
    ): Promise<any> {
    return bcrypt
    .compare(password, hashedPassword)
    .then((isMatch) => {
    if (isMatch) return true;
    return false;
    })
    .catch((err) => err);
    }

    async getHashedPassword(password: string): Promise<any> {
      return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
      reject(err);
      }
      resolve(hash);
      });
      });
      }

      //auth.controller.ts
async login(@Request() req): Promise<any> {
  try {
  //...//
  } catch (error) {
  throw error;
  }
  }
}
