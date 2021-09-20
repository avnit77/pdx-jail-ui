import React, { useContext, useMemo, useState } from "react";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";
import {
  FaAngleDown,
  FaAngleUp,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaSearch,
} from "react-icons/fa";
import { IncludesFilter, filterTypes } from "./TableFilters";
import { TableContext } from "../../wrappers/TableContext";

const Table = () => {
  const [visibleSearch, setVisibleSearch] = useState([]);
  const { createColumns, data } = useContext(TableContext);

  const handleSearch = (column) => {
    const id = column.id;
    if (id) {
      visibleSearch.includes(id)
        ? setVisibleSearch(visibleSearch.filter((x) => x !== id))
        : setVisibleSearch([...visibleSearch, id]);
    }
  };

  console.log(data, "data");

  const defaultColumn = useMemo(
    () => ({
      Filter: IncludesFilter,
    }),
    []
  );

  const columns = useMemo(
    () => (data && data.length ? createColumns() : []),
    [data]
  );
  const tableData = useMemo(() => (data && data.length ? data : []), [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: tableData,
      defaultColumn,
      filterTypes,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        // sortBy: [
        //     {
        //         id: 'Name',
        //         desc: false,
        //     },
        // ],
      },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className="gridWrapper is-centered">
      <table {...getTableProps()} className="table is-fullwidth">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="has-text-grey-dark">
                  <div className="is-flex is-align-items-center is-flex-wrap-wrap">
                    <span {...column.getSortByToggleProps()}>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaAngleDown />
                        ) : (
                          <FaAngleUp />
                        )
                      ) : (
                        ""
                      )}
                      {column.render("Header")}
                    </span>
                    {column.canFilter ? (
                      <span
                        className="searchIcon"
                        onClick={() => handleSearch(column)}
                      >
                        <FaSearch />
                      </span>
                    ) : null}
                    <span
                      style={
                        visibleSearch.length &&
                        visibleSearch.indexOf(column.id) > -1
                          ? null
                          : { display: "none" }
                      }
                    >
                      {column.canFilter ? column.render("Filter") : null}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="row has-text-grey-dark">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-list" style={{ justifyContent: "center" }}>
        <div
          className={!canPreviousPage ? "has-text-grey" : ""}
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <FaAngleDoubleLeft />
        </div>{" "}
        <div
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={!canPreviousPage ? "has-text-grey" : ""}
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaChevronCircleLeft />
        </div>{" "}
        <span>
          <th className="">
            Page{" "}
            <strong className="has-text-grey-dark">
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </th>
        </span>
        <div
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={!canNextPage ? "has-text-grey" : ""}
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaChevronCircleRight />
        </div>{" "}
        <div
          className={!canNextPage ? "has-text-grey" : ""}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          style={{ display: "flex", alignItems: "center" }}
        >
          <FaAngleDoubleRight />
        </div>{" "}
      </div>
    </div>
  );
};

export default Table;
