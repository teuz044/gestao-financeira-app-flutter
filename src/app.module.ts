import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { TransacoesFinanceirasModule } from './modules/transacoes_financeiras/transacoes_financeiras.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './modules/usuarios/entities/usuario.entity';
import { TransacoesFinanceira } from './modules/transacoes_financeiras/entities/transacoes_financeira.entity';

@Module({
  imports: [UsuariosModule, TransacoesFinanceirasModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'gestao_financeira',
    entities: [Usuario, TransacoesFinanceira],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
