import React, { Component } from 'react'
import Counter from './Counter'


export default class CounterClass extends Component {
    constructor(){
        super()
        this.state={count: 0}
      }
      incrementCount= () => {
        this.setState({
          count:this.state.count +1
        })
      }
      decrementCount= () => {
        if(this.state.count< 1){
          this.setState({
            value:0
          });
        }else {
          this.setState({
            count: this.state.count-1
          });
        }
      };
      
      reset= () => {
        this.setState({
          count: 0
        })
      }
    
    
      render() {
        const {count} = this.state
        return (
          <div>
            <h2>Count: {count}
            </h2>
            <Counter
            title={"+"}
            task= { () => this.incrementCount()}>
            </Counter>
            <Counter
            title={"-"}
            task= { () => this.decrementCount()}
            
            >
            </Counter>
            <Counter
            title={"Reset"}
            task= { () => this.reset()}>
            </Counter>
    
          </div>
        )
      }
    }