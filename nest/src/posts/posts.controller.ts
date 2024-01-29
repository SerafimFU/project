import { Body, Controller, Get, Post, Redirect } from '@nestjs/common'
import { CreatePostsDto } from './create-posts.dto';

@Controller('posts')
export class PostsController {
    @Post('bb')
    async create(@Body() createPostsDto: CreatePostsDto) {
        console.log(createPostsDto)
    }
    

    @Get('aa')
    @Redirect('http://localhost:5173/')
        getAllPosts(): string {
            return 
        }
}



    
