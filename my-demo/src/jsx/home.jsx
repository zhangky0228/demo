import { FixedSizeGrid as Table } from 'react-window';
import React from 'react'
import './home.css'

const Cell = ({ rowIndex, style }) => (
  <div id='celldiv' style={style}>
    {rowIndex}
  </div>
);

class BasicUse extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }

  render() {
      return (
        <Table
          columnCount={4}
          columnWidth={200}
          height={600}
          rowCount={100000}
          rowHeight={35}
          width={817}
        >
        {Cell}
      </Table>
      )
  }
}
export default BasicUse
