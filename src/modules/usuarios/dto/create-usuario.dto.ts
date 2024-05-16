import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {
    @ApiProperty({ example: 'John Doe', description: 'O nome do usuário' })
    nome: string;
  
    @ApiProperty({ example: 'johndoe@example.com', description: 'O email do usuário' })
    email: string;
  
    @ApiProperty({ example: 'minhaSenhaSecreta123', description: 'A senha do usuário' })
    senha: string;
  
    @ApiProperty({ example: 1000.00, description: 'O saldo do usuário' })
    saldo: number;
  }