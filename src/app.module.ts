import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { join } from 'path';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DeliveryAgentsModule } from './delivery-agents/delivery-agents.module';
import { StoreAgentsModule } from './store-agents/store-agents.module';
import { ProductModule } from './product/product.module';
// import { UsersModule } from './user/user.module';

@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>(process.env.MONGO_DB_URL),
    //   }),
    //   inject: [ConfigService],
    // }),
    // MailerModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (config: ConfigService) => ({
    //     transport: {
    //       host: config.get('MAIL_HOST'),
    //       secure: false,
    //       auth: {
    //         user: config.get('MAIL_USER'),
    //         pass: config.get('MAIL_PASS'),
    //       },
    //     },
    //     defaults: {
    //       from: '"No Reply: <noreply@example.com>',
    //     },
    //     template: {
    //       dir: join(__dirname, 'templates'),
    //       // adapter: new HandlebarsAdapter(),
    //       options: {
    //         strict: true,
    //       },
    //     },
    //   }),
    //   inject: [ConfigService],
    // }),
    AuthModule,
    DeliveryAgentsModule,
    StoreAgentsModule,
    ProductModule,
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
