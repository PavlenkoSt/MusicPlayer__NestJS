import { CreateTrackDTO } from './dto/create-track.dto';
import { Comments, CommentsDocument } from './schemas/comments.schema';
import { Track, TrackDocument } from './schemas/track.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';


@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comments.name) private commentsModel: Model<CommentsDocument>
    ) {}

    async create(dto: CreateTrackDTO): Promise<Track> {
        const track = await this.trackModel.create({
            ...dto,
            listens: 0
        });
        
        return track;
    }

    async getAll() {
        return 'ALL WORK!'
    }

    async getOne() {

    }

    async delete() {

    }
}