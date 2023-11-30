import { Controller, Post, Get, Body, Request, Res, Next, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.auth.guards';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }

  
  @Get('signout')
  @HttpCode(HttpStatus.OK)
  signout(@Request() req, @Res() res: Response, @Next() next) {
    return this.authService.signout(req, res, next);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  @HttpCode(HttpStatus.OK)
  profile(@Body() dto: AuthDto) {
    return {
      msq: 'You are authenticated',
      user: dto,
    };
  }
}
