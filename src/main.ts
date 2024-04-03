import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';

import configuration from './config';
import { AppModule } from './modules/app/app.module';

const { PORT, COMPRESSION_LEVEL, COMPRESSION_THRESHOLD, CORS_ORIGINS } = configuration();
console.log(CORS_ORIGINS);

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: CORS_ORIGINS,
		credentials: true,
	});
	app.useGlobalPipes(new ValidationPipe());
	app.use(
		compression({
			level: COMPRESSION_LEVEL,
			threshold: COMPRESSION_THRESHOLD,
		}),
	);
	app.setGlobalPrefix('/api/v1');
	await app.listen(PORT, () => console.log(`Server started on port 🚀 ${PORT}`));
}
bootstrap();
