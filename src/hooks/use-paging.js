import { useHistory, useLocation } from 'react-router-dom';

const usePaging = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageStr = searchParams.get('page');
  let page = Number(pageStr);
  if(isNaN(page) || page < 1) {
    page = 1;
  }

  const prevPage = () => {
    const newPageNum = page > 1 ? page - 1 : 1;
    searchParams.set('page', newPageNum);
    history.push(`${location.pathname}?${searchParams}`);
  };

  const nextPage = () => {
    searchParams.set('page', page + 1);
    history.push(`${location.pathname}?${searchParams}`);
  };

  return { page, nextPage, prevPage };
};

export default usePaging;
