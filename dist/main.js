"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("./constant/config");
const constant_1 = require("./constant/constant");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./core/exception/exception.filter");
const request_interceptor_1 = require("./core/interceptor/request.interceptor");
const response_interceptor_1 = require("./core/interceptor/response.interceptor");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(constant_1.GLOBALPREFIX);
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter);
    app.useGlobalInterceptors(new request_interceptor_1.RequestInterceptor, new response_interceptor_1.TransformInterceptor);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
        validationError: { target: false, value: false },
    }));
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.enableCors();
    await app.listen(config_1.PORT, () => {
        common_1.Logger.log('Listening at http://localhost:' + config_1.PORT + '/' + constant_1.GLOBALPREFIX);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map