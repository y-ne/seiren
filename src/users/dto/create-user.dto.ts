import { IsString, IsNotEmpty, MinLength, IsBoolean, IsOptional, isString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    fullname: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
    
    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
