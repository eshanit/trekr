import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config/dist';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.httpService
    .post(
      `${this.configService.get('COUCH_DB_URL')}/ad101_users`,
      createUserDto,
      {
        auth: {
          username: this.configService.get('COUCH_DB_USER'),
          password: this.configService.get('COUCH_DB_PSWD'),
        },
      },
    )
    .pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

  findAll(): Observable<AxiosResponse<User[]> | any> {
    return this.httpService
      .get(
        `${this.configService.get(
          'COUCH_DB_URL',
        )}/ad101_users/_all_docs?include_docs=true`,
        {
          auth: {
            username: this.configService.get('COUCH_DB_USER'),
            password: this.configService.get('COUCH_DB_PSWD'),
          },
        },
      )
      .pipe(
        map((response) => {
          const vm:any[] = [];

          for (var i = 0; i < response.data.rows.length; i++) {
            vm.push(response.data.rows[i].doc);
          }

          let newArray = vm.filter(function (el) {
            return el.firstname != undefined;
          });

          return newArray;
        }),
      );
  }

  async findOne(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findCDBUser(userId: string) {
    return this.httpService
    .get(`${this.configService.get('COUCH_DB_URL')}/ad101_users/${userId}`, {
      auth: {
          username: this.configService.get('COUCH_DB_USER'),
          password: this.configService.get('COUCH_DB_PSWD'),
      },
    })
    .pipe(map(
      (response) => {
        console.log(response.data)
       return  response.data
      })
      );
      
  }

  ///

  updateCDBUser(userId: string, updateUserDto: UpdateUserDto) {
    return this.httpService
    .put(
      `${this.configService.get('COUCH_DB_URL')}/ad101_users/${userId}`,
      updateUserDto,
      {
        auth: {
          username: this.configService.get('COUCH_DB_USER'),
          password: this.configService.get('COUCH_DB_PSWD'),
        },
      },
    )
    .pipe(
      map((response) => {
        return response.data;
      }),
    );
  }

}
