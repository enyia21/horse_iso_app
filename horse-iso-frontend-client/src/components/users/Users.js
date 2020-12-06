import React, { Component } from 'react'
import {connect} from 'react-redux'
import UserCard from './UserCard'
export class Users extends Component {
    render() {
        //Check if user information is loading
        if(this.props.loading){
            return <div>Loading...</div>
        }else {
            console.log(this.props)
            const users = this.props.users.map((user) => {
                return <UserCard key={user.id} user={user} />
            })
        
        return (
            <div>
                {console.log(users)}
                List of Users
                { users!==undefined ? users : 'Not a value yet!'}
            </div>
        )
        }
    }
}
const mapStateToProps = (state) => {
    //find user state maintain loading state
    return {
            users: state.usersReducer.users,
            loading: state.usersReducer.loading
        }
}
export default connect(mapStateToProps)(Users);
