import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.r6u1r.mongodb.net/music-player-2?retryWrites=true&w=majority'),
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
        TrackModule,
        FileModule
    ]
})
export class AppModule{}