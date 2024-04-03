import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

export default () => ({
	PORT: parseInt(process.env.PORT, 10),
	COMPRESSION_LEVEL: parseInt(process.env.COMPRESSION_LEVEL, 10),
	COMPRESSION_THRESHOLD: parseInt(process.env.COMPRESSION_THRESHOLD, 10),
	CORS_ORIGINS: process.env.CORS_ORIGINS.split(','),
});
