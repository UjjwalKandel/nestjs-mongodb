import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/nestjs_tutorial`),
    AuthModule,
    PostsModule,
  ],
})
export class AppModule {}
