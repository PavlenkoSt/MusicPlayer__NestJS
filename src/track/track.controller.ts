import { CreateTrackDTO } from './dto/create-track.dto';
import { TrackService } from './track.service';
import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';


@Controller('/tracks')
export class TrackController{
    constructor(private trackService: TrackService){}
    
    @Get()
    getAll() {
        return this.trackService.getAll();
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDTO) {
        const { picture, audio } = files;
        return this.trackService.create(dto, audio[0], picture[0]);
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id);
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDTO) {
        return this.trackService.addComment(dto);
    }
}