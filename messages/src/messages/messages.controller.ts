import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// Controller is class Decorator,  @Get is method Decorator, @Post is method Decorator, @Body is parameter Decorator, @Param is parameter Decorator
@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService) {
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messagesService.findOne(id);

        if(!message){
            throw new NotFoundException('message not found');
        }

        return message;
    }
}
