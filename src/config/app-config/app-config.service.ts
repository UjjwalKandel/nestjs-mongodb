import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  private getHost(): string {
    return this.configService.get<string>('MONGO_HOST') || 'localhost';
  }

  private getPort(): string {
    return this.configService.get<string>('MONGO_PORT') || '27017';
  }

  private getDatabaseName(): string {
    return this.configService.get<string>('MONGO_DATABASE')!;
  }

  getMongoConfig(): MongooseModuleOptions {
    return {
      uri:
        'mongodb://' +
        this.getHost() +
        ':' +
        this.getPort() +
        '/' +
        this.getDatabaseName(),
    };
  }
}
