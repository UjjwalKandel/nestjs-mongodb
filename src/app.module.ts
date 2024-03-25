import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app-config/app-config.module';
import { AppConfigService } from './config/app-config/app-config.service';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: async (appCOnfigService: AppConfigService) =>
        appCOnfigService.getMongoConfig(),
    }),
    AuthModule,
    PostsModule,
  ],
  providers: [AppConfigService],
})
export class AppModule {}
