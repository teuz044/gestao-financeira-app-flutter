import { PartialType } from '@nestjs/swagger';
import { CreateTransacoesFinanceiraDto } from './create-transacoes_financeira.dto';

export class UpdateTransacoesFinanceiraDto extends PartialType(CreateTransacoesFinanceiraDto) {}
