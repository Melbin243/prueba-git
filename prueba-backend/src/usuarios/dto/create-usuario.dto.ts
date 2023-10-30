import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'el campo nombre no puede ser vacio' })
  @IsString({ message: 'el campo nombre debe ser de tipo cadena' })
  @MaxLength(30, {
    message: 'el campo nombre no debe tener mas de 30 caracteres',
  })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'el campo nombre no puede ser vacio' })
  @IsString({ message: 'el campo nombre debe ser de tipo cadena' })
  @MaxLength(40, {
    message: 'el campo nombre no debe tener mas de 40 caracteres',
  })
  readonly apellido: string;
}
