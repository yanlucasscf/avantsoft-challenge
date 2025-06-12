import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    app.enableCors({
        origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "Content-Type, Accept, Authorization, access-control-allow-credentials",
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
