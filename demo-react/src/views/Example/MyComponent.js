import React from "react";

class MyComponent extends React.Component{
    
    state ={
        name :'',
        age : '25'
    }
    
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
            // age: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click button')
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
                {/* <input value={this.state.age} type="text"
                    onChange={(event) => this.handleOnChangeName(event)}
                    /> */}
                    I'm : {this.state.age}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
            
        )
    }
}

export default MyComponent;