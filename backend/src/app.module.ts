import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "./product/product.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath:
                process.env.NODE_ENV === "production"
                    ? ".env.production.local"
                    : ".env.development.local",
        }),

        TypeOrmModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                type: "postgres",
                username: configService.get<string>("DB_USERNAME"),
                host: configService.get<string>("DB_HOST"),
                port: configService.get<number>("DB_PORT") || 5433,
                database: configService.get<string>("DB_NAME"),
                password: configService.get<string>("DB_PASSWORD"),
                entities: [__dirname + "/**/*.entity.{js,ts}"],
                synchronize: configService.get<string>("NODE_ENV") !== "production",
            }),
            inject: [ConfigService],
        }),
        ProductModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
