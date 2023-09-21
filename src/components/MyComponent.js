import React from 'react'
import DisplayInfo from './DisplayInfo';
import UserInfo from './UserInfo';


class MyComponent extends React.Component {
    state = {
        listInfo: [
            {
                id: 1,
                name: "huynh",
                age: 29
            },
            {
                id: 2,
                name: "thu",
                age: 30
            },
            {
                id: 3,
                name: "kien",
                age: 12
            }
        ]
    }

    handleNewInfo = (userObj) => {
        //alert("aaaa")
        console.log(userObj)
        this.setState({
            listInfo: [userObj, ...this.state.listInfo]
        })
    }

    render() {
        const myName = "huynh";
        const myAge = 25;

        return (
            <div>
                <UserInfo
                    handleNewInfo={this.handleNewInfo}
                ></UserInfo>
                <DisplayInfo listInfo={this.state.listInfo}></DisplayInfo>

            </div>
        );
    }
}

export default MyComponent;