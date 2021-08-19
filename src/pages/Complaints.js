

import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import './User_registration.css';
import {Link} from 'react-router-dom'


function Complaints(){
    const data = [
        {id:1, name: "chanaka", category:"Customer", complaint:'seller sell illegal products'},
        {id:2, name: "ravindu", category:"Seller", complaint:'user is a fake one'},
        {id:1, name: "chanaka", category:"Customer", complaint:'seller sell illegal products'},
        {id:2, name: "ravindu", category:"Seller", complaint:'user is a fake one'},
        {id:1, name: "chanaka", category:"Customer", complaint:'seller sell illegal products'},
        {id:2, name: "ravindu", category:"Seller", complaint:'user is a fake one'},
        {id:1, name: "chanaka", category:"Customer", complaint:'seller sell illegal products'},
        {id:2, name: "ravindu", category:"Seller", complaint:'user is a fake one'},
      

    ]

        const columns = [
            {title: 'Useid', field:'id'},
            {title: 'Name', field:'name'},
            {title: 'User-category', field:'category'},
            {title: 'complaint', field:'complaint'},
            

        ]    
     

       return(
    <div class ="container">      
        <div className="table__container"> 
           <MaterialTable 
            title="User complaints"
            data={data}
            columns={columns}
            style={{fontSize: 25}}
            actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',
               /*   onClick: (event, data) => alert("Do you want to view " + data.name)*/
                }
              ]}
              components={{
                Action: props => (
                  <div className="userDetails__button" style={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center",marginLeft: 20,}} >
                  <Link to ="/Message"><Button
                    /*onClick={(event) => props.action.onClick(event, props.data)}*/
                    color="primary"
                    variant="contained"
                    style={{textTransform: 'none',border: 0, borderRadius: 10}}
                    size="small"
                  >
                   Contact
                  </Button>
                  </Link>

                  </div>
                ),
              }}
            
              options={{
                actionsColumnIndex: -1,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF',
                    fontSize: 17
                  },
                  cellStyle: {
                    backgroundColor: '#EEE',
                     
                  },
                  exportButton: true
              }}

            style={{overflow:'hidden'}}  
           />

        </div>   

     </div>   
       ) 

}

export default Complaints