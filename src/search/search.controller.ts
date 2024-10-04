import { Controller, Get, Query, Param } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchBlogDto } from './dto/search-blog.dto';
import { ResponseFormatter } from '../helpers/response.formatter';
import { blogs } from '../data/blogs';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Get()
    public async getBlogs(@Query() query: SearchBlogDto) {
        try {
            // Cek apakah query search kosong atau tidak dikirim
            if (!query.search) {
                // Jika tidak ada search query, kembalikan seluruh data blogs
                return ResponseFormatter.success(
                    'All blogs fetched successfully',
                    blogs
                );
            }

            // Jika ada query search, panggil service untuk melakukan pencarian
            const results = await this.searchService.search(query.search);
            return ResponseFormatter.success(
                'Articles ranked by TF-IDF',
                results
            );
        } catch (error) {
            console.error('Error fetching articles:', error);
            return ResponseFormatter.error(
                'Failed to fetch articles',
                error.message,
                500
            );
        }
    }

    @Get(':id')
    public async getBlogById(@Param('id') id: string) {
        try {
            const blog = await this.searchService.getBlogById(Number(id));
            if (!blog) {
                return ResponseFormatter.error(
                    'Blog data not found',
                    'No blog found with the provided ID',
                    404
                );
            }
            return ResponseFormatter.success(
                'Article found by TF-IDF',
                blog
            );
        } catch (error) {
            console.error('Error fetching article:', error);
            return ResponseFormatter.error(
                'Failed to fetch article',
                error.message,
                500
            );
        }
    }
}
