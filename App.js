//getting component from react

const { Component } = React;

//creating component
class App extends Component {
    constructor(props){
        super(props)
        //creating intiial state
        this.state = {
            colors : [
            {id : 0, backgroundColor : '#'+(Math.random()*0xFFFFFF<<0).toString(16), isLocked : false},
            {id : 1, backgroundColor : '#'+(Math.random()*0xFFFFFF<<0).toString(16), isLocked : false},
            {id : 2, backgroundColor : '#'+(Math.random()*0xFFFFFF<<0).toString(16), isLocked : false},
            {id : 3, backgroundColor : '#'+(Math.random()*0xFFFFFF<<0).toString(16), isLocked : false},
            {id : 4, backgroundColor : '#'+(Math.random()*0xFFFFFF<<0).toString(16), isLocked : false}
        ]}
    }

    //this function handles the lo button toggle. 
    handleLock(id){
        //currentstate 
        let colors = [...this.state.colors];
        //setting this.state.colors.isLocke to true;
        colors[id].isLocked = !colors[id].isLocked;

        //setting new state with new isLocked value
        this.setState({ colors : colors });
    }

    //this function handles random color changes  note: Pure Function
    handleRandomColor(){
        //spreading current state form this.state.colors 
        const currentState = [...this.state.colors]
        this.setState({
            colors : currentState.map(color=> color.isLocked === false ? {id : color.id, backgroundColor :'#'+(Math.random()*0xFFFFFF<<0).toString(16), isLocked : false} : color)
        })
    }
    
   /** handles rendering colors to Virtual DOM 
    * 
    */
    render(){
        return (
            <div>
                <div className="text-center bg-dark fixed-top">
                    <button onClick = {this.handleRandomColor.bind(this)} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
                </div>
                    <div className="w-100 d-flex" style={{height: "100vh"}}>
                        {
                            this.state.colors.map((color, id) =>{
                                return(
                                            <div key = {id} style={{backgroundColor : color.backgroundColor }} className="w-100 d-flex flex-column align-items-center justify-content-center">
                                                <h1>{color.backgroundColor}</h1>
                                                <button onClick= {() => {this.handleLock(id)}}className="btn btn-outline-dark">{color.isLocked == false ? "Lock" : "Unlock"}</button>
                                            </div>
                                    
                                )
                            })
                        }
                    </div>
            </div>
        )
    }
}

