import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class MysqlService {
  private connection;

  constructor() {
    this.connect();
  }

  private async connect() {
    this.connection = await mysql.createConnection({
      host: 'localhost:3306',
      user: 'root',
      password: 'admin',
      database: 'gestao_financeira',
    });
  }

  async query(sql: string, values?: any[]): Promise<any> {
    try {
      const [rows] = await this.connection.execute(sql, values);
      return rows;
    } catch (error) {
      throw new Error(`Erro ao executar a consulta: ${error.message}`);
    }
  }
}
