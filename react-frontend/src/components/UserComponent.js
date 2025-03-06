import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component{

    //constructor() is involved beore the component is mounted, in the constructor we defined our state variables
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    //the componentDidMount() is called as soon as the component is mounted and ready
    componentDidMount(){
        UserService.getUsers().then((response) =>{
            this.setState({users: response.data})
        });
    }

    //render method output HTML to DOM
    render(){
        return (
            <div>
                <h1 className="text-center">User List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>
                                User ID
                            </td>
                            <td>
                                User First Name
                            </td>
                            <td>
                                User Last Name
                            </td>
                            <td>
                                User Email ID
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map( //map operation to loop list
                                user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent