import React, {Component} from 'react'
import * as AS from '../index'

export class LeviSidebar extends Component {
    render() {
        return (
            <div className='LeviSidebar'>
                <div className='Logo'/>
                <AS.Navigacija/>
            </div>
        )
    }
}