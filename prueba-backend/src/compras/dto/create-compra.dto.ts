import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCompraDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo descripcion no debe ser vacio' })
  @IsNumber({}, { message: 'El campo descripcion debe ser de tipo numerico' })
  readonly cantidad: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo total no debe ser vacio' })
  @IsNumber({}, { message: 'El total descripcion debe ser de tipo numerico' })
  readonly total: number;

  @ApiProperty()
  @IsDefined({ message: 'El usuario descripcion no debe ser vacio' })
  @IsNumber({}, { message: 'El usuario descripcion debe ser de tipo numerico' })
  readonly usuario: number;

  @ApiProperty()
  @IsDefined({ message: 'El producto descripcion no debe ser vacio' })
  @IsNumber({}, { message: 'El producto descripcion debe ser de tipo numerico' })
  readonly producto: number;
}
