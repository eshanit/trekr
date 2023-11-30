import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(private prisma: PrismaService, private users: UsersService) {}

  hashData = (data: string) => {
    return bcrypt.hash(data, 10);
  }

  async signup(dto: AuthDto) {
    
    const hash = await this.hashData(dto.password)

    const newUser = await this.prisma.user.create({
      data: {
        firstname: dto.firstname,
        lastname: dto.lastname,
        email: dto.email,
        password: hash,
      },
    });

    return true

  }

  async signin(dto: AuthDto): Promise<any> {
   const user = await this.prisma.user.findUnique({
    where: {
      email: dto.email,
    }
   })

   if (!user) {
    throw new Error('User not found');
   }

   const isMatch = await bcrypt.compare(dto.password, user.password);

   if (!isMatch) {
    throw new Error('Invalid password');
   }

   return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email
   };

  }

  async signout(req: any, res: any, next: any): Promise<any> {
    console.log(req)
    req.logout(function(err: any) {
      if (err) { return next(err); }
      res.clearCookie('session')
      res.redirect('/');
    })

 // clean up!


    return {
      msg: 'your session has been destroyed'
    }
  }

  async validateUser(email: string, pass: string): Promise<any> {
   console.log(email,pass)
    const user = await this.users.findOne(email);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}


