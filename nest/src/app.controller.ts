import { Controller, Get, Request, Post, UseGuards, Body, UseInterceptors, HttpStatus, ParseFilePipeBuilder } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ChangeDateDto, CreateUserDto } from './auth/auth.create-user.dto';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common';
import { diskStorage } from 'multer';
import {v4 as uuidv4} from 'uuid';
import { extname } from 'path';

let uuid = uuidv4;

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

  /* Обработка POST сохранения аватара пользователя */
  @UseGuards(JwtAuthGuard)
  @Post('auth/change_avatar')
  @UseInterceptors(
    FileInterceptor('file', {
    storage: diskStorage({destination: './public/files/avatars',
    filename: (req, file, cb) => {cb(null, `${uuid()}${extname(file.originalname)}`);}}),
    limits: {files: 1, fileSize: 3000000},
    fileFilter: async (req, file, cb) => { 
      if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
        return cb(null, false);
      }
      return cb(null, true);
    } }))
  async uploadFile(
    @Request() req,
    @UploadedFile( 
    new ParseFilePipeBuilder()
    .addFileTypeValidator({
      fileType: 'image/png|image/jpg|image/jpeg',
    })
    .addMaxSizeValidator({
      maxSize: 3000000
    })
    .build({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST
    }),
    ) file: Express.Multer.File) {
    this.authService.activeTime(req.user);
    return await this.authService.saveAvatar(req.user, file)
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

    /* Обработка GET запроса на переход к EditAvatar */
    @UseGuards(JwtAuthGuard)
    @Get('auth/edit_avatar')
    getEditAvatar(@Request() req) {
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
