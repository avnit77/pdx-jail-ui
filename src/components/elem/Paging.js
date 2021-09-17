import React from "react";
import usePaging from "../../hooks/use-paging";

const Paging = () => {
  const { page, prevPage, nextPage } = usePaging();

  return (
    <div className="pagination">
      <strong onClick={prevPage}>{`<`}</strong>
      <span>{page}</span>
      <strong onClick={nextPage}>{`>`}</strong>
    </div>
  );
};

export default Paging;
