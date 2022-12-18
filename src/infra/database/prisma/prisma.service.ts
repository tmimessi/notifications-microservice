import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// criando uma classe que extende a classe PrismaClient para fazer as operações no BD e implementa a OnModuleInit que executa algo assim que a app subir, forçando a conexão com o Prisma
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // antes da conexão com o Prisma ser fechada, fechar a app
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
