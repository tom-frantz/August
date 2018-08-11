import React, {Component} from 'react';
import {Item, Image, Loader} from 'semantic-ui-react';


export default class ProjectItem extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {img, name, description} = this.props.project;

        return (
            <Item>
                {img !== null && img !== undefined && <Item.Image src={img} />}
                <Item.Content>
                    <Item.Header>{name}</Item.Header>
                    <Item.Description>{description.substring(0, 30)}</Item.Description>
                </Item.Content>
            </Item>
        )
    }
}
