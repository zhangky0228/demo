import React from 'react'
import { Table } from 'antd';
import './home.css'
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class BasicUse extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }

  render() {
      return (
          <div>
              <Table 
                columns={columns} 
                dataSource={data} 
                pagination={{ pageSize: 50 }} 
                scroll={{ y: 240 }} 
                size="middle"
              />
          </div>
      )
  }
}
export default BasicUse;
