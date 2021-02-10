import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import  ExpandTable from './core/expand-table'

import {makeData, getAPIdata1} from './utils/utils' //Dummy data makeData = static data, getAPIdata1= live json data


export default class App extends React.Component {
    columns ={
      title: null, // title of table
      columns: [
      {
        Header: 'Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },    
    ]
  };



    columns1 ={
      title: null,
      columns: [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'userId',
        accessor: 'userId',
      },
      {
        Header: 'Title',
        accessor: 'title',
      }
    ]
  };

     columns2 ={
       title: "Test",
       columns: [
      {
        Header: 'Pincode',
        accessor: 'pincode',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      }
    ]
  }


    constructor(props){
      super(props)
    }

    //Callback function for child table data 
    getChildData = async (row, level) =>{
        console.log('Data', level);
        if(level === 1){
            return {data: await getAPIdata1(true), column: this.columns1}
        }
        if(level === 2){
            return {data: makeData(10, 'address', false  ), column: this.columns2}
        }
       
    }
  

    render(){
      const data = makeData(10, 'person', true)

      return (
        <div className="App">
          <ExpandTable 
            tableField={this.columns} 
            data={data} // Data
            getChildData={this.getChildData} //Callback function for child table data 
            level={0} //Level of  table defaut 0
          />
        </div>
      );
    }
}


