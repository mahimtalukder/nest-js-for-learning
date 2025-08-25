import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// Controller is class Decorator,  @Get is method Decorator, @Post is method Decorator, @Body is parameter Decorator, @Param is parameter Decorator
@Controller('messages')
export class MessagesController {
    private messagesService: MessagesService;

    constructor() {
      // Controller is creating its own dependencies
      // DONT DO THIS ON REAL APPS
      this.messagesService = new MessagesService();
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
    getMessage(@Param('id') id: string){
        return this.messagesService.findOne(id);
    }
}
