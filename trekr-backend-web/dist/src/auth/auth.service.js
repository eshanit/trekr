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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, users) {
        this.prisma = prisma;
        this.users = users;
        this.hashData = (data) => {
            return bcrypt.hash(data, 10);
        };
    }
    async signup(dto) {
        const hash = await this.hashData(dto.password);
        const newUser = await this.prisma.user.create({
            data: {
                firstname: dto.firstname,
                lastname: dto.lastname,
                email: dto.email,
                password: hash,
            },
        });
        return true;
    }
    async signin(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            }
        });
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
    async signout(req, res, next) {
        console.log(req);
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            res.clearCookie('session');
            res.redirect('/');
        });
        return {
            msg: 'your session has been destroyed'
        };
    }
    async validateUser(email, pass) {
        console.log(email, pass);
        const user = await this.users.findOne(email);
        const isMatch = await bcrypt.compare(pass, user.password);
        if (user && isMatch) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map