/* Типизация принимаемых при создании пользователя значений */

export class CreatePostsDto {
    readonly username: string;
    readonly surname: string;
    readonly email: string;
    readonly phone_number: string;
    readonly password: string;
  }