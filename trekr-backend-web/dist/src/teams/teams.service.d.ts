import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Team } from './entities/team.entity';
import { ConfigService } from '@nestjs/config/dist';
export declare class TeamsService {
    private readonly httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    create(createTeamDto: CreateTeamDto): Observable<any>;
    findAll(): Observable<AxiosResponse<Team[]> | any>;
    findOne(id: string): Observable<AxiosResponse<Team[]> | any>;
    update(id: string, updateTeamDto: UpdateTeamDto): Observable<any>;
    remove(id: number): string;
    findTeamMembersByName(teamName: string): Observable<any>;
}
