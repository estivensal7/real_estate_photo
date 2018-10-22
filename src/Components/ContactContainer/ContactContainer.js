import React from 'react';
import { 
        Col, 
        Button, 
        Form, 
        FormGroup, 
        Label, 
        Input,
        Jumbotron,
        Container,
        FormFeedback
} from 'reactstrap';

import * as emailjs from 'emailjs-com';

//importing components
import Chat from '../Chat/Chat';

//importing custom CSS
import './ContactContainer.css';

export default class ContactContainer extends React.Component {
        constructor(props) {
                super(props)

                this.state = {
                        user_first: '',
                        user_last: '',
                        user_subject:'',
                        user_phone: '',
                        user_email: '',
                        text: '',
                        user_first_class: false,
                        user_last_class: false,
                        user_subject_class: false,
                        user_phone_class: false,
                        user_email_class: false,
                        text_class: false
                }

                this.validateForm = this.validateForm.bind(this);
        }

        handleChange = e => {
                this.setState({ [e.target.name]: e.target.value })
        }

        validateForm() {
                let formIsValid = true;

                if (!this.state.user_first || this.state.user_first.length < 2) {
                        // userFirstEl.classList.remove('valid');
                        this.setState({ user_first_class: true});
                        formIsValid = false;
                }

                if (!this.state.user_last || this.state.user_last.length < 2) {
                        this.setState({ user_last_class: true })
                        formIsValid = false;
                }

                if (!this.state.user_subject || this.state.user_subject.length < 5) {
                        this.setState({ user_subject_class: true })
                        formIsValid = false;
                }

                if (!this.state.user_phone || this.state.user_phone.length < 10) {
                        this.setState({ user_phone_class: true })
                        formIsValid = false;
                }

                if (!this.state.user_subject || this.state.user_subject.length < 5) {
                        this.setState({ user_subject_class: true })
                        formIsValid = false;
                }

                if (!this.state.user_email || this.state.user_email.length < 3) {
                        this.setState({ user_email_class: true })
                        formIsValid = false;
                }

                let emailRex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (!emailRex.test(this.state.user_email)) {
                        this.setState({ user_email_class: true })
                        formIsValid = false;
                }

                if (!this.state.text || this.state.text.length < 5) {
                        this.setState({ text_class: true })
                        formIsValid = false;
                }
                console.log(formIsValid);

                this.setState({
                        user_first: '',
                        user_last: '',
                        user_subject:'',
                        user_phone: '',
                        user_email: '',
                        text: ''
                })

                return formIsValid;
        }

        handleSubmit(e) {
                e.preventDefault()
                if(!this.validateForm()) {
                        return;
                }

                let template_params = {
                        "user_first": this.state.user_first,
                        "user_last": this.state.user_last,
                        "user_email": this.state.user_email,
                        "user_subject": this.state.user_subject,
                        "user_phone": this.state.user_phone,
                        "text": this.state.text
                     }
                     
                     var service_id = "gmail";
                     var template_id = "contact_form";
                     emailjs.send(service_id,template_id,template_params, 'user_sDAbZ5IkFyjc4bLs1mvJm');

                     this.setState({
                        user_first: '',
                        user_last: '',
                        user_subject:'',
                        user_phone: '',
                        user_email: '',
                        text: '',
                        user_first_class: false,
                        user_last_class: false,
                        user_subject_class: false,
                        user_phone_class: false,
                        user_email_class: false,
                        text_class: false
                     })

                     alert('Message Sent! We will get back to you shortly :)');
        }

        render() {
                return (
                        <Jumbotron fluid className="contact-jumbotron">
                                <Container fluid>
                                        <h1 style={{color: 'aliceblue', marginTop: "-30px"}}>Contact Us</h1>
                                        <Form className="contact-container">
                                                <FormGroup row>
                                                        <Col sm={3}>
                                                                <Label for="user_first" sm={6}>First Name</Label>
                                                                <Input invalid={this.state.user_first_class} type="name" value={this.state.user_first} name="user_first" id="first_name" placeholder="John" onChange={this.handleChange.bind(this)} />
                                                                <FormFeedback invalid="true">Please enter full first name.</FormFeedback>
                                                        </Col>
                                                        <Col sm={3}>
                                                                <Label for="user_last" sm={6}>Last Name</Label>
                                                                <Input invalid={this.state.user_last_class} type="name" value={this.state.user_last} name="user_last" id="last_name" placeholder="Smith" onChange={this.handleChange.bind(this)} />
                                                                <FormFeedback invalid="true">Please enter full last name.</FormFeedback>
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Col sm={6}>
                                                                <Label for="user_subject" sm={6}>Reason For Message</Label>
                                                                <Input invalid={this.state.user_subject_class} type="text" value={this.state.user_subject} name="user_subject" id="subject" placeholder="Pricing Inquiry" onChange={this.handleChange.bind(this)} />
                                                                <FormFeedback invalid="true">Please enter your reason for messaging so we may assist you accordingly.</FormFeedback>
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Col sm={6}>
                                                                <Label for="user_phone" sm={6}>Phone</Label>
                                                                <Input invalid={this.state.user_phone_class} type="phone" value={this.state.user_phone} name="user_phone" id="phone" placeholder="201-222-2222" onChange={this.handleChange.bind(this)} />
                                                                <FormFeedback invalid="true">Please enter a valid phone number.</FormFeedback>
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                        <Col sm={6}>
                                                                <Label for="user_email" sm={6}>Email</Label>
                                                                <Input invalid={this.state.user_email_class} type="email" value={this.state.user_email}name="user_email" id="user_email" placeholder="example@email.com" onChange={this.handleChange.bind(this)} />
                                                                <FormFeedback invalid="true">Please enter a valid email address.</FormFeedback>
                                                        </Col>
                                                </FormGroup>    
                                                <FormGroup row>
                                                        <Col sm={6}>
                                                                <Label for="text" sm={6}>Text Area</Label>
                                                                <Input invalid={this.state.text_class} type="text" value={this.state.text} name="text" id="text" placeholder="I would like awesome pictures for a property!" onChange={this.handleChange.bind(this)} />
                                                                <FormFeedback invalid="true">Please be descriptive with your message :)</FormFeedback>
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup check row>
                                                        <Col sm={6}>
                                                                <Button outline color="light" onClick={this.handleSubmit.bind(this)}>Submit</Button>
                                                        </Col>
                                                </FormGroup>
                                        </Form>
                                        <Chat />
                                </Container>
                        </Jumbotron>
                );
        }
}