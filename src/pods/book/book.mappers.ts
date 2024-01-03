import * as apiModel from './api';
import * as vm from './book.vm';

export const mapBookFromApiToVm = (book: apiModel.Book, reviews: apiModel.ReviewParams): vm.BookVm => ({
  id: book.id.toString(),
  title: book.title,
  imageUrl: book.imageUrl,
  imageAltText: book.imageAltText,
  description: book.description,
  authors: book.authors.map(author => ({
    id: author.id.toString(),
    firstName: author.firstName,
    lastName: author.lastName,
  })),
  reviews: reviews.results.map(review => ({
    id: review.id.toString(),
    bookId: review.bookId.toString(),
    reviewer: review.reviewer,
    reviewText: review.reviewText,
    creationDate: new Date(review.creationDate).toLocaleDateString('es-ES'),
    stars: review.stars,
  })),
});

export const mapReviewFromVmToApi = (review: vm.Review): apiModel.Review => ({
  id: review.id ? parseInt(review.id) : undefined,
  bookId: parseInt(review.bookId),
  reviewer: review.reviewer,
  reviewText: review.reviewText,
  creationDate: review.creationDate ? new Date(review.creationDate).toISOString() : undefined,
  stars: review.stars,
});
