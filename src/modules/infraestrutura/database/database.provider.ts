import { TransacoesFinanceira } from 'src/modules/transacoes_financeiras/entities/transacoes_financeira.entity';
import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'gestao_financeira',
        entities: [
            Usuario,
            TransacoesFinanceira
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];