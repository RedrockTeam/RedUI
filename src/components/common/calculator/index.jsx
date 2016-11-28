import React, { Component } from 'react'
import css from './index.scss'
const numberArr = [], charArr = ['/', '*', '+', '-', '%']
for (let i = 0; i < 10; i ++) {
    numberArr.push(i)
}

let calculator = React.createClass({
    getInitialState: function() {
        return {
            save:['', ''],
            mark:''
        }
    },
    handel: function(event) {
        var target = event.target;
        var type = target.getAttribute('data-type');
        var tmp = this.state.save;
        console.log(this.state.save)
        if(type == 0) {
            if(this.state.mark) {
                tmp[1] += target.innerHTML;
                this.setState({
                    save: tmp
                });
                this.refs.cont.value = tmp[1];
            } else {
                tmp[0] += target.innerHTML;
                this.setState({
                    save: tmp
                });
                this.refs.cont.value = tmp[0];
            }
        } else if(type == 1) {
            if(!this.state.save[0]) return;
            if(!this.state.save[1]) {
                this.setState({
                    mark: target.innerHTML
                });
                console.log(this.state.mark)
            } else{
                var result;
                var l = parseInt(this.state.save[0]), r = parseInt(this.state.save[1]);
                switch(this.state.mark) {
                    case '/' :
                        result = l / r;
                        break;
                    case '*' :
                        result = l * r;
                        break;
                    case '+' :
                        result = l + r;
                        break;                     
                    case '-' :
                        result = l - r;
                        break;
                    default: break;
                }
                 this.refs.cont.value = result;
                 tmp = [result, ' '];
                 console.log(tmp)
                 this.setState( {
                    save: tmp,
                    mark: target.innerHTML
                 })
                 console.log(this.state.save)
            }
        } else if(type == 3){
            if(this.state.save[0] && this.state.save[1]) {
                console.log(1)
                var result;
                var l = parseInt(this.state.save[0]), r = parseInt(this.state.save[1]);
                switch(this.state.mark) {
                    case '/' :
                        result = l / r;
                        break;
                    case '*' :
                        result = l * r;
                        break;
                    case '+' :
                        result = l + r;
                        break;                     
                    case '-' :
                        result = l - r;
                        break;
                    default: break;
                }
                 this.refs.cont.value = result;
                 tmp = [result, ''];
                 console.log(tmp)
                 this.setState( {
                    save: tmp,
                    mark:''
                 })
            }
        }
    },
    render: function () {
        return <div>
            <ul onClick={this.handel}>
                {
                    numberArr.map(function (item, index) {
                        return <li key={index} data-type="0">{item}</li>
                    })
                }
            </ul>
            <ul onClick={this.handel}>
                {
                    charArr.map(function (item ,index) {                      
                        return <li key={index} data-type="1">{item}</li>
                    })
                }
            </ul>
            <ul onClick={this.handel}>
                <li data-type='2'>AC</li>
                <li data-type='2'>back</li>
            </ul>
            <ul><li onClick={this.handel} data-type='3'>=</li></ul>
            <input ref='cont'></input>
        </div>
    }
})

export default calculator