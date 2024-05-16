import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  mysqlService: any;
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new Error(`Usuário com o ID ${id} não encontrado.`);
    }

    const updatedUsuario = Object.assign(usuario, updateUsuarioDto);
    return await this.usuarioRepository.save(updatedUsuario);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
  
  // Mantém a função que utiliza MySQL diretamente
  async getTodosUsuarios(): Promise<any> {
    const sql = 'SELECT * FROM usuarios';
    return await this.mysqlService.query(sql);
  }
}
