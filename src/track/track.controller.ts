import { CreateTrackDTO } from './dto/create-track.dto';
import { TrackService } from './track.service';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { CreateCommentDTO } from './dto/create-comment.dto';


@Controller('/tracks')
export class TrackController{
    constructor(private trackService: TrackService){}
    
    @Get()
    getAll() {
        return this.trackService.getAll();
    }

    @Post()
    create(@Body() dto: CreateTrackDTO) {
        return this.trackService.create(dto);
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