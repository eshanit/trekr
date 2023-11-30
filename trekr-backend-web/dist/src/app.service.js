"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
class AppService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(AppService.name);
    }
    getHello() {
        this.logger.log(this.configService.get('APP_NAME'));
        return 'Hello  World!';
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map