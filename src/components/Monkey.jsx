import React from 'react'
import monkey from '../images/bit_0_0.png'
import monkey_ from '../images/bit_0_1.png'
import monkeyNaked from '../images/bit.png'

import './style/monkey.css'
import tree_noFruit from "../images/tree_nofruit.png";
import tree_m from "../images/tree_m.png";


const {
    pc_media
} = require('../config')


class Monkey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: true
        }
        this.tick = this.tick.bind(this)
    }

    tick() {
        this.setState({
            action: !this.state.action
        })
    }


    componentDidMount() {
        setInterval(this.tick, 1000);
        console.log("monkeyNaked", this.props.data)
    }

    render() {
        if (this.props.where == 1) {
            return (
                <div className="bg_bit"></div>
            )
        }

        if (!this.props.data) {
            return (
                <img className="bg_bit" src={monkeyNaked}/>
            )
        } else {
            return (
                <img className="bg_bit" src={this.state.action ? monkey : monkey_}/>
            );
        }

    }


}


export default Monkey
