import './contact.css';
import Bitmojie from '../../assets/bitmojie.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const Result = () => {
    return (
        <div className='sucess-message' >
            <p>votre message à bien était envoyer !</p>
        </div>
    );
}

function FormContact() {

    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_2mqx5gp", "template_cv7qg99", e.target, "1x0g9sVHu9hOWIqNZ")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);
    };

    setTimeout(() => {
        showResult(false)
    }, 5000)

    return (
        <div className='container'>
            <div className='container-fluid'>
                <div>
                    <div className='bitmojie-block' >
                        <img className='bitmojie' src={Bitmojie} width={84} height={84} alt='background orinateur ' />
                    </div>
                    <div>
                        <h1>
                            Merci d'avoir pris le temps de nous contacter. Comment puis-je vous aider aujourd'hui?
                        </h1>
                    </div>
                </div>
                <div className='contact-form'>
                    <Form action="" onSubmit={sendEmail}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" name='name' placeholder="Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="email" name='email' placeholder="Email" />
                            </Form.Group>
                        </Row>
                        <Form.Group class="form-row">
                            <Form.Control as="textarea" name='message' placeholder="Message" rows={3} />
                        </Form.Group>
                        <Button className='contact-submit' variant="primary" type="submit">Envoyer</Button>
                    </Form>
                    <div className='row' >
                        {result ? <Result /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormContact;