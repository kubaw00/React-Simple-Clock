class App extends React.Component {
    
    state = {
        active: true,
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }
    
    
    
    render(){
        return(
            <div>
                <Button click={this.handleClick} active={this.state.active}/>
                {this.state.active && <Clock />}
            </div>
        )
    }
}

const Button = (props) => (
    <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
)



class Clock extends React.Component {
   
   
   
    state = {
    time: this.getTime()
   }
   
   getTime() {
        const currentTime = new Date();
        return({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
        })
        
   }

   updateTime = () => {
       this.setState({
           time: this.getTime()
       })
   }
  

   componentDidMount(){
      this.interval =  setInterval(this.updateTime, 1000)
   }

   componentWillUnmount() {
       clearInterval(this.interval)
       
   }
   
    render(){
        
        const { hours, minutes, seconds } = this.state.time
        return(
            <div>
                {hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))