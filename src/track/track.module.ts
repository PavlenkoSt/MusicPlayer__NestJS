import { FileService } from './../file/file.service';
import { Comments, CommentsSchema } from './schemas/comments.schema';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/track.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{ name: Comments.name, schema: CommentsSchema}])
    ],
    controllers: [TrackController],
    providers: [TrackService, FileService]
})
export class TrackModule{}