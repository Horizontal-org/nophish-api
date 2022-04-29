import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname + '/../**/entities/*.entity.{ts,js}'],
  // synchronize: true,
  autoLoadEntities: true,
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
};

export default OrmConfig;
