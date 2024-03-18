import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EmployeeListing from './component/EmployeeListing';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeDetail from './component/EmployeeDetail';
import EmployeeEdit from './component/EmployeeEdit';
import ReduxComponent from './component/ReduxComponent';
import Create from './component/Axios/Create';
import Update from './component/Axios/Update';
import Read from './component/Axios/Read';
import Home from './component/Axios/Home';



class App extends Component {
    render(){
        return (       
            <div>  
                {/* <h1 style={{textAlign:'center', marginTop:'20px',marginBottom:'50px'}}>CRUD Operation</h1>    */}
                <Router>
                    <Switch>
                        <Route path="/" exact component={EmployeeListing}/> 
                        <Route path="/employee/create"  component={EmployeeCreate}/> 
                        <Route path="/employee/detail/:empid"  component={EmployeeDetail}/>
                        <Route path="/employee/edit/:empid" component={EmployeeEdit}/>
                        <Route path = "/redux" component={ReduxComponent}/>
                        <Route path = "/home" component={Home}/>
                        <Route path = "/create" component={Create}/>
                        <Route path = "/update/:id" component={Update}/>
                        <Route path = "/read/:id" component={Read}/>
                    </Switch>
                </Router>           
            </div>     
        )
    }
}

export default App;
