import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';

@JsonController()
export class MainController {
    @Get('/')
    getAll() {
        return 'This action returns all users';
    }

    @Get('/:id')
    getOne(@Param('id') id: number) {
        return `This action returns user #${id}`;
    }

    @Post('/')
    post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/:id')
    remove(@Param('id') id: number) {
        return 'Removing user...';
    }
}
