import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('usuarios') 
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('criarUsuario') // Personalize a rota para a criação de usuários
  @ApiOperation({ summary: 'Criar um novo usuário' }) // Descrição da operação para o Swagger
  @ApiBody({ type: CreateUsuarioDto })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('todosUsuariosTeste')
  getTodosUsuarios() {
    return this.usuariosService.getTodosUsuarios();
  }

  @Get('todosUsuarios')
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get('usuario/:id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch('atualizarUsuario/:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete('deletarUsuario/:id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
