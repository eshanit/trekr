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
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const rxjs_1 = require("rxjs");
let TodosService = class TodosService {
    constructor(users) {
        this.users = users;
    }
    create(createTodoDto) {
        return 'This action adds a new todo';
    }
    findAll() {
        return `This action returns all todos`;
    }
    findOne(id) {
        return `This action returns a #${id} todo`;
    }
    update(id, updateTodoDto) {
        return `This action updates a #${id} todo`;
    }
    remove(id) {
        return `This action removes a #${id} todo`;
    }
    async findTodosForUser(userId) {
        const userTodos = (await this.users.findCDBUser(userId)).pipe((0, rxjs_1.map)(user => {
            return user.todos;
        }));
        return userTodos;
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], TodosService);
//# sourceMappingURL=todos.service.js.map