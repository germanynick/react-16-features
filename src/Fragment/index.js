import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid #000;
`;

const Row = styled.tr`
  border: 1px solid #000;
`;

const Column = styled.td`
  border: 1px solid #000;
`;

const Columns = () => [
  <Column>Column 1</Column>,
  <Column>Column 2</Column>,
  <Column>Column 3</Column>,
  <Column>Column 4</Column>
];

class TableContainer extends React.Component {
  render() {
    return (
      <Table>
        <Row>
          <Columns />
        </Row>
      </Table>
    );
  }
}

/**
 * Result
 *
 * <table>
 *  <tr>
 *    <td>Column 1<td>
 *    <td>Column 2</td>
 *    <td>Column 3</td>
 *    <td>Column 4</td>
 *  </tr>
 * </table>
 */

export default TableContainer;
