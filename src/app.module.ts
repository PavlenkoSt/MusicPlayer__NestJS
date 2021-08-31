import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.19tcc.mongodb.net/Music-player?retryWrites=true&w=majority'),
        TrackModule
    ]
})
export class AppModule{
    
}