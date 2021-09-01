import { CreateTrackDTO } from './dto/create-track.dto';
import { TrackService } from './track.service';
import { Body, Controller, Get, Post } from "@nestjs/common";


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
}