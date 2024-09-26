export interface Thumbnail {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  }
  
  export interface Show {
    title: string;
    thumbnail: Thumbnail;
    year: number;
    category: "Movie" | "TV Series";
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  }