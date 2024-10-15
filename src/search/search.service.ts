import { Injectable } from '@nestjs/common';
import * as TfIdf from 'tf-idf-search';
import { blogs } from '../data/blogs';
import * as natural from 'natural';
import * as stopword from 'stopword'; // Import stopword library

@Injectable()
export class SearchService {
    private tf_idf: any;
    private stemmer: any;

    constructor() {
        this.tf_idf = new TfIdf();
        this.stemmer = natural.PorterStemmer;

        const blogContent = blogs.map((blog) => {
          // Tokenisasi dan penghilangan karakter selain huruf dan angka
          const tokenizedTitle = blog.title.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ');
          const tokenizedAuthor = blog.author.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ');
          const tokenizedContent = blog.content.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(' ');

          // Filtering stopword
          const filteredTitle = stopword.removeStopwords(tokenizedTitle);
          const filteredAuthor = stopword.removeStopwords(tokenizedAuthor);
          const filteredContent = stopword.removeStopwords(tokenizedContent);

          // Stemming
          const stemmedTitle = filteredTitle.map(word => this.stemmer.stem(word)).join(' ');
          const stemmedAuthor = filteredAuthor.map(word => this.stemmer.stem(word)).join(' ');
          const stemmedContent = filteredContent.map(word => this.stemmer.stem(word)).join(' ');

          return `${stemmedTitle} ${stemmedAuthor} ${stemmedContent}`;
      });

      // Membuat corpus TF-IDF dari data yang sudah diproses
      this.tf_idf.createCorpusFromStringArray(blogContent);
    }

    public search(query: string) {
        // Pembersihan karakter non-alfanumerik pada query
        const cleanedQuery = query.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();

        // Tokenisasi query
        const tokenizedQuery = cleanedQuery.split(' ');

        // Filtering stopword pada query
        const filteredQuery = stopword.removeStopwords(tokenizedQuery);

        // Stemming query
        const stemmedQuery = filteredQuery.map(word => this.stemmer.stem(word)).join(' ');

        // Ranking dokumen berdasarkan query
        const searchResults = this.tf_idf.rankDocumentsByQuery(stemmedQuery);
        const result = searchResults
            .filter(item => item.similarityIndex > 0)
            .map(item => ({
                ...blogs[item.index],
                score: item.similarityIndex,
                token: item.document
            }));

        return result;
    }

    public getBlogById(id: number) {
        return blogs.find(blog => blog.id === id);
    }
}
