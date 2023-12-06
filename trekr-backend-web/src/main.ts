import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from  './http-exception.filter';
import * as passport from 'passport';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['http://localhost:3000','http://localhost:3001'],
    credentials: true
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: 'ahoy-captain',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600000
      }
    }),
  );


  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(8000);
}
bootstrap();
