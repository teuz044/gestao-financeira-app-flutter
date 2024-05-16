import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransacoesFinanceirasService } from './transacoes_financeiras.service';
import { CreateTransacoesFinanceiraDto } from './dto/create-transacoes_financeira.dto';
import { UpdateTransacoesFinanceiraDto } from './dto/update-transacoes_financeira.dto';

@Controller('transacoes-financeiras')
export class TransacoesFinanceirasController {
  constructor(private readonly transacoesFinanceirasService: TransacoesFinanceirasService) {}

  @Post()
  create(@Body() createTransacoesFinanceiraDto: CreateTransacoesFinanceiraDto) {
    return this.transacoesFinanceirasService.create(createTransacoesFinanceiraDto);
  }

  @Get()
  findAll() {
    return this.transacoesFinanceirasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacoesFinanceirasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransacoesFinanceiraDto: UpdateTransacoesFinanceiraDto) {
    return this.transacoesFinanceirasService.update(+id, updateTransacoesFinanceiraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacoesFinanceirasService.remove(+id);
  }
}
