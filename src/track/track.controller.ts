import { TrackService } from './track.service';
import { Controller, Get } from "@nestjs/common";


@Controller('/tracks')
export class TrackController{
    constructor(private trackService: TrackService){}
    
    @Get()
    getAll() {
        return this.trackService.getAll()
    }
}