import React from "react";

class MyComponent extends React.Component{
    
    state ={
        name :'Ben',
        age : '23'
    }
    
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        
        
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                    onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Welcome to react : {this.state.name}
                </div>

                <div className="second">
                    I'm {this.state.age}
                </div>
            </>
            
        )
    }
}

export default MyComponent;