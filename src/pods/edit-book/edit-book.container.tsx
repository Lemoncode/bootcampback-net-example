import React from 'react';
import { useParams } from 'react-router-dom';
import { getBookInfo } from './api';
import { mapBookInfoFromApiToVm } from './edit-book.mappers';
import { createEmptyBook } from './edit-book.vm';
import { EditBookComponent } from './edit-book.component';

export const EditBook: React.FC = () => {
  const [bookInfo, setBookInfo] = React.useState(createEmptyBook());
  const { id } = useParams();

  const loadBookInfo = async () => {
    try {
      const bookInfo = await getBookInfo(id);
      setBookInfo(mapBookInfoFromApiToVm(bookInfo));
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    loadBookInfo();
  }, []);

  return <EditBookComponent book={bookInfo} />;
};
