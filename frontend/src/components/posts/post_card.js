import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'



export default class PostCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Content header={this.props.title} />
                <Card.Content description={this.props.body} />
                <Card.Content extra left>
                    <Icon name='user' />4 Friends
                </Card.Content>
                <button class="ui toggle button">Vote</button>
            </Card>
        );
    }
}