import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Producto } from './productos/entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'usrprueba',
      password: 'Prueba257...',
      database: 'db_prueba257',
      entities: [Usuario, Producto],
      synchronize: true,
    }),
    UsuariosModule,
    ProductosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
