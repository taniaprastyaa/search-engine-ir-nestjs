import { IsNotEmpty, IsString } from 'class-validator';

export class SearchBlogDto {
    @IsString()
    @IsNotEmpty()
    search: string;
}
