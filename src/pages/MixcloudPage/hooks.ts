import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/store';
import { fetchReleases } from 'src/store/slices/releases/actions';
import { selectPageNumber } from 'src/store/slices/releases/selectores';

export const useReleases = () => {
  const dispatch = useAppDispatch();
  const pageNumber = useSelector(selectPageNumber);

  console.log(pageNumber);
  useEffect(() => {
    dispatch(fetchReleases(pageNumber));
  }, [pageNumber, dispatch]);
};
