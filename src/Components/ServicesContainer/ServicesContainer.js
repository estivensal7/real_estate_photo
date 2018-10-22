import React from 'react';
import { 
        Jumbotron, 
        Container, 
        Card, 
        Button, 
        CardTitle, 
        CardText, 
        CardDeck,
        CardSubtitle, 
        CardBody 
} from 'reactstrap';

//importing services JSON file to store in state
import services from '../../services.json';


//importing custom css
import './ServicesContainer.css';


export default class ServicesContainer extends React.Component {
        constructor(props) {
                super(props)

                this.state = {
                        services
                }
        }

        render() {

                let serviceCards = this.state.services.map(service => {
                        return (
                                <Card className="services_card_body">
                                        <CardBody>
                                                <CardTitle>{service.card_title}</CardTitle>
                                                <CardSubtitle>{service.card_subtitle}</CardSubtitle>
                                                <CardText>{service.card_description}</CardText>
                                        </CardBody>
                                </Card>
                        )
                });

                return (
                        <div>
                                <Jumbotron fluid className="services-container">
                                        <Container fluid>
                                                <h1 className="display-3">Services</h1>
                                                <CardDeck>
                                                        { serviceCards }
                                                </CardDeck>
                                        </Container>
                                </Jumbotron>
                        </div>
                );
        }
};