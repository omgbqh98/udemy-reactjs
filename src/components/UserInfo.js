import React from 'react'

class UserInfo extends React.Component {
    state = {
        name: 'huynh',
        age: 26,
        adess: 'HN'
    };

    handleClick() {
        console.log("dfgfdgfdg: ", this.state.name)
        this.setState(
            {
                name: 'hehe'
            }
        )
    }

    onchangefn = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    onchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleNewInfo({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return (
            <div>
                my name: {this.state.name}
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" onChange={(event) => { this.onchangefn(event) }}></input>
                    <input type="text" onChange={(event) => { this.onchangeAge(event) }}></input>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;