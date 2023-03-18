import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';

const StyledTable = styled.table`
  color: ${variablesBreakpoints.backgroundColor};
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    padding: 1em;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

const StyledTableHead = styled.thead`
  border-bottom: 1px solid;
`;

const StyledTableBody = styled.tbody`
  & > tr:hover {
    background-color: ${variablesBreakpoints.primaryColor};
  }
`;

function TableView({ columns, data }) {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <StyledTable {...getTableProps()}>
      <StyledTableHead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </StyledTableHead>
      <StyledTableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </StyledTableBody>
    </StyledTable>
  );
}

TableView.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      bmi: PropTypes.number.isRequired,
      grade: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableView;
