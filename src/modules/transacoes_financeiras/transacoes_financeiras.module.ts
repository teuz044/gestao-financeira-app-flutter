import { Module } from '@nestjs/common';
import { TransacoesFinanceirasService } from './transacoes_financeiras.service';
import { TransacoesFinanceirasController } from './transacoes_financeiras.controller';

@Module({
  controllers: [TransacoesFinanceirasController],
  providers: [TransacoesFinanceirasService],
})
export class TransacoesFinanceirasModule {}
