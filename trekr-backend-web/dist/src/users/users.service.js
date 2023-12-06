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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const dist_1 = require("@nestjs/config/dist");
const prisma_service_1 = require("../../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma, httpService, configService) {
        this.prisma = prisma;
        this.httpService = httpService;
        this.configService = configService;
    }
    create(createUserDto) {
        return this.httpService
            .post(`${this.configService.get('COUCH_DB_URL')}/ad101_users`, createUserDto, {
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
            .get(`${this.configService.get('COUCH_DB_URL')}/ad101_users/_all_docs?include_docs=true`, {
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
                return el.firstname != undefined;
            });
            newArray.forEach(user => {
                if (user.teams.length > 0) {
                    user.teamName = user.teams[0].name;
                }
            });
            return newArray;
        }));
    }
    async findOne(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async findCDBUser(userId) {
        return this.httpService
            .get(`${this.configService.get('COUCH_DB_URL')}/ad101_users/${userId}`, {
            auth: {
                username: this.configService.get('COUCH_DB_USER'),
                password: this.configService.get('COUCH_DB_PSWD'),
            },
        })
            .pipe((0, rxjs_1.map)((response) => {
            console.log(response.data);
            return response.data;
        }));
    }
    updateCDBUser(userId, updateUserDto) {
        return this.httpService
            .put(`${this.configService.get('COUCH_DB_URL')}/ad101_users/${userId}`, updateUserDto, {
            auth: {
                username: this.configService.get('COUCH_DB_USER'),
                password: this.configService.get('COUCH_DB_PSWD'),
            },
        })
            .pipe((0, rxjs_1.map)((response) => {
            return response.data;
        }));
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        axios_1.HttpService,
        dist_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map