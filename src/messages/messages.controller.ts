import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

// Controller is class Decorator,  @Get is method Decorator, @Post is method Decorator, @Body is parameter Decorator, @Param is parameter Decorator
@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){

    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        console.log('Creating message:', body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        console.log('Getting message with ID:', id);
    }
}
