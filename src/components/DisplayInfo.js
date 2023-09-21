import React from 'react'
import './DisplayInfo.scss'

class DisplayInfo extends React.Component {

    state = {
        isShow: true
    }

    hideInfo = () => {
        this.setState(
            {
                isShow: !this.state.isShow
            }
        )
    }

    render() {
        const { name, age, listInfo } = this.props;
        return (
            <div>
                <div>
                    <button onClick={() => { this.hideInfo() }}>{this.state.isShow ? "hide info" : "show info"}</button>

                </div>
                {this.state.isShow && <div>
                    {listInfo.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 24 ? "red" : "blue"} >
                                <div>my name: {user.name}</div>
                                <div>age: {user.age}</div>
                            </div>
                        )
                    })}
                </div>}
            </div>
        );
    }
}

export default DisplayInfo;