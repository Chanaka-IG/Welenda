
import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import './User_registration.css';
import {Link} from 'react-router-dom'


function UserRegistration(){
    const data = [
        {name: "chanaka", age:18, city:'Matara', user_type: "seller"},
        {name: "prasad", age:22,  city:'Colombo', user_type: "customer"},
        {name: "Nuwan", age:25,  city:'Galle', user_type: "seller"},
        {name: "kamal", age:21,  city:'Nuwara', user_type: "customer"},
        {name: "chamara", age:14,  city:'Gampaha', user_type: "seller"},
        {name: "Ravindu", age:14,  city:'Gampaha', user_type: "seller"},
        {name: "Avishka", age:14,  city:'Gampaha', user_type: "seller"},
        {name: "Avishka", age:14,  city:'Gampaha', user_type: "seller"},
        {name: "Avishka", age:14,  city:'Gampaha', user_type: "seller"},
        {name: "Avishka", age:14,  city:'Gampaha', user_type: "seller"},
        {name: "Avishka", age:14,  city:'Gampaha', user_type: "seller"},

    ]

        const columns = [
            {title: 'Name', field:'name'},
            {title: 'Age', field:'age'},
            {title: 'City', field:'city'},
            {title: 'User-type', field:'user_type'},
            

        ]    
     

       return(
    <div class ="container">      
        <div className="table__container"> 
           <MaterialTable 
            title="User informations"
            data={data}
            columns={columns}
            style={{fontSize: 25}}
            actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',
                  onClick: (event, data) => alert("Do you want to view " + data.name)
                }
              ]}
              components={{
                Action: props => (
                  <div className="userDetails__button" style={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center",marginLeft: 20,}} >
                  <Link to ="/user_profile"><Button
                    onClick={(event) => props.action.onClick(event, props.data)}
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

export default UserRegistration