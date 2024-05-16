import { Injectable } from '@nestjs/common';
import { CreateTransacoesFinanceiraDto } from './dto/create-transacoes_financeira.dto';
import { UpdateTransacoesFinanceiraDto } from './dto/update-transacoes_financeira.dto';

@Injectable()
export class TransacoesFinanceirasService {
  create(createTransacoesFinanceiraDto: CreateTransacoesFinanceiraDto) {
    return 'This action adds a new transacoesFinanceira';
  }

  findAll() {
    return `This action returns all transacoesFinanceiras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transacoesFinanceira`;
  }

  update(id: number, updateTransacoesFinanceiraDto: UpdateTransacoesFinanceiraDto) {
    return `This action updates a #${id} transacoesFinanceira`;
  }

  remove(id: number) {
    return `This action removes a #${id} transacoesFinanceira`;
  }
}
