import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      // toda vez que uma classe precisar do NotificationsRepository, vou devolver a PrismaNotificationsRepository
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  // mostrando quais providers devem ser compartilhados com os módulos que importarem esse módulo
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
