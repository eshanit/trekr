"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./http-exception.filter");
const passport = require("passport");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:3000'],
        credentials: true
    });
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(session({
        secret: 'ahoy-captain',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 600000
        }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map