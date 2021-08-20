
import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import './User_registration.css';
import {Link} from 'react-router-dom'


function Payments(){
    const data = [
        {sellerID: "1", name:"Ravindu", nic:'1997546981V', date: "2021/08/11"},
        {sellerID: "2", name:"Ravindu", nic:'1997546981V', date: "2021/08/11"},
        {sellerID: "3", name:"Ravindu", nic:'1997546981V', date: "2021/08/11"},
        {sellerID: "4", name:"Ravindu", nic:'1997546981V', date: "2021/08/11"},
        {sellerID: "5", name:"Ravindu", nic:'1997546981V', date: "2021/08/11"},
        {sellerID: "6", name:"Ravindu", nic:'1997546981V', date: "2021/08/11"},
        {sellerID: "7", name:"Ravindu", nic:'1997546981V', date: "2021/08/11"},

    ]

        const columns = [
            {title: 'Seller ID', field:'sellerID'},
            {title: 'Name', field:'name'},
            {title: 'NIC', field:'nic'},
            {title: 'Transaction date', field:'date'},
            

        ]    
     

       return(
    <div class ="container">      
        <div className="table__container"> 
           <MaterialTable 
            title="Payments"
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
                  <Link to ="/PaymentDetails"><Button
                    /*onClick={(event) => props.action.onClick(event, props.data)}*/
                    color="primary"
                    variant="contained"
                    style={{textTransform: 'none',border: 0, borderRadius: 10}}
                    size="small"
                  >
                   View
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

export default Payments