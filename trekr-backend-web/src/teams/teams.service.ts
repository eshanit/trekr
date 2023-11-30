import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Team } from './entities/team.entity';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class TeamsService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  create(createTeamDto: CreateTeamDto) {
    return this.httpService
      .post(
        `${this.configService.get('COUCH_DB_URL')}/ad101_teams`,
        createTeamDto,
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

  findAll(): Observable<AxiosResponse<Team[]> | any> {
    return this.httpService
      .get(
        `${this.configService.get(
          'COUCH_DB_URL',
        )}/ad101_teams/_all_docs?include_docs=true`,
        {
          auth: {
            username: this.configService.get('COUCH_DB_USER'),
            password: this.configService.get('COUCH_DB_PSWD'),
          },
        },
      )
      .pipe(
        map((response) => {
          const vm = [];

          for (var i = 0; i < response.data.rows.length; i++) {
            vm.push(response.data.rows[i].doc);
          }

          let newArray = vm.filter(function (el) {
            return el.name != undefined;
          });

          return newArray;
        }),
      );
  }

  findOne(id: string): Observable<AxiosResponse<Team[]> | any> {
    return this.httpService
    .get(`${this.configService.get('COUCH_DB_URL')}/ad101_teams/${id}`, {
      auth: {
          username: this.configService.get('COUCH_DB_USER'),
          password: this.configService.get('COUCH_DB_PSWD'),
      },
    })
    .pipe(map((response) => response.data));
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    return this.httpService
    .put(
      `${this.configService.get('COUCH_DB_URL')}/ad101_teams/${id}`,
      updateTeamDto,
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

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
