"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const dist_1 = require("@nestjs/config/dist");
let TeamsService = class TeamsService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    create(createTeamDto) {
        return this.httpService
            .post(`${this.configService.get('COUCH_DB_URL')}/ad101_teams`, createTeamDto, {
            auth: {
                username: this.configService.get('COUCH_DB_USER'),
                password: this.configService.get('COUCH_DB_PSWD'),
            },
        })
            .pipe((0, rxjs_1.map)((response) => {
            return response.data;
        }));
    }
    findAll() {
        return this.httpService
            .get(`${this.configService.get('COUCH_DB_URL')}/ad101_teams/_all_docs?include_docs=true`, {
            auth: {
                username: this.configService.get('COUCH_DB_USER'),
                password: this.configService.get('COUCH_DB_PSWD'),
            },
        })
            .pipe((0, rxjs_1.map)((response) => {
            const vm = [];
            for (var i = 0; i < response.data.rows.length; i++) {
                vm.push(response.data.rows[i].doc);
            }
            let newArray = vm.filter(function (el) {
                return el.name != undefined;
            });
            return newArray;
        }));
    }
    findOne(id) {
        return this.httpService
            .get(`${this.configService.get('COUCH_DB_URL')}/ad101_teams/${id}`, {
            auth: {
                username: this.configService.get('COUCH_DB_USER'),
                password: this.configService.get('COUCH_DB_PSWD'),
            },
        })
            .pipe((0, rxjs_1.map)((response) => response.data));
    }
    update(id, updateTeamDto) {
        return this.httpService
            .put(`${this.configService.get('COUCH_DB_URL')}/ad101_teams/${id}`, updateTeamDto, {
            auth: {
                username: this.configService.get('COUCH_DB_USER'),
                password: this.configService.get('COUCH_DB_PSWD'),
            },
        })
            .pipe((0, rxjs_1.map)((response) => {
            return response.data;
        }));
    }
    remove(id) {
        return `This action removes a #${id} team`;
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        dist_1.ConfigService])
], TeamsService);
//# sourceMappingURL=teams.service.js.map