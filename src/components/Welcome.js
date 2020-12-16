import React from 'react';
import  { Component } from 'react';
const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa']

export class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }

    sayHello = function() {
        return hellos[Math.floor((Math.random()*hellos.length))];
    }

    render() {
        return (
            <div className="Welcome">

            </div>
        );
    }
}
    //ReactDOM.render(document.querySelector('#root'));
// const Time = ({ time }) => {
// const timeString = moment(time).fromNow();

// return (

// <span className="time">
//     {timeString}
// </span>
// );
// };

// Time.propTypes = {
// time: PropTypes.string.isRequired
// };

// export default Time;
