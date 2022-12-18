import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}

// inversão de controle: quando tem uma classe que recebe dependências através de um construtor; quem instanciar essa classe vai dizer quais são as dependências dela
// injeção de dependência: uma forma de automatizar a inserção dessas dependências no momento que as classes forem instanciadas --- fica mais fácil trabalhar com testes
// a injeção de dependência apenas injeta a dependência de uma classe para outra classe. A inversão de controle deixa de ter a dependência internamente da classe e passa para uma classe externa
