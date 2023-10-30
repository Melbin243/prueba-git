import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({message: 'El campo descripcion no debe ser vacio'})
  @IsString({message: 'El campo descripcion debe ser de tipo cadena'})
  @MaxLength(30, {message: 'El campo descripcion no debe ser mayor a 30 caracteres'})
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({message: 'El campo unidad no debe ser vacio'})
  @IsString({message: 'El campo unidad debe ser de tipo cadena'})
  @MaxLength(40, {message: 'El campo unidad no debe ser mayor a 40 caracteres'})
  readonly unidad: string;
}
