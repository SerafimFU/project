import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ChangeDateDto, CreateUserDto } from './auth/auth.create-user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  /* Обработка POST запроса на аворизацию */
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    this.authService.activeTime(req.user);
    return this.authService.login(req.user);
  }

  /* Обработка POST запроса на изменение данных пользователя */
  @UseGuards(JwtAuthGuard)
  @Post('auth/edit_profile')
  async edit_profile(@Request() req, @Body() createUserDto : CreateUserDto) {
    const user = req.user;
    this.authService.activeTime(user);
    return await this.authService.edit_profile(user, createUserDto);
  }

  /* Обработка GET запроса на Logout */
  @UseGuards(JwtAuthGuard)
  @Get('auth/logout')
  async logout(@Request() req) {
    this.authService.logout(req.user);
  }

  /* Обработка POST запроса на создание пользователя */
  @Post('auth/signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    await this.authService.signup(createUserDto);
  }

  /* Обработка POST запроса на переход внутри TimeTable */
  @UseGuards(JwtAuthGuard)
  @Post('auth/profile/timetable')
  async dateChange(@Request() req, @Body() changeDateDto : ChangeDateDto) {
    const user = req.user
    return this.authService.dateChange(user, changeDateDto);
  }

  /* GET запросы на переход */

    /* Обработка GET запроса на переход к Profile */
    @UseGuards(JwtAuthGuard)
    @Get('auth/profile')
    getProfile(@Request() req) {
      this.authService.activeTime(req.user);
      return req.user;
    }
  
    /* Обработка GET запроса на переход к EditProfile */
    @UseGuards(JwtAuthGuard)
    @Get('auth/edit_profile')
    getEditProfile(@Request() req) {
      this.authService.activeTime(req.user);
      return req.user;
    }
  
    /* Обработка GET запроса на переход к EditPassword */
    @UseGuards(JwtAuthGuard)
    @Get('auth/edit_password')
    getEditPassword(@Request() req) {
      this.authService.activeTime(req.user);
      return req.user;
    }
  
    /* Обработка GET запроса на переход к TimeTable */
    @UseGuards(JwtAuthGuard)
    @Get('auth/profile/timetable')
    async timetable(@Request() req) {
      this.authService.activeTime(req.user);
      return this.authService.timetable(req.user);
    }
}
