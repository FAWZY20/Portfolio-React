import './contact.css';
import Bitmojie from '../../assets/bitmojie.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function FormContact() {
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
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Row>
                        <Form.Group class="form-row">
                            <Form.Control as="textarea" placeholder="Message" rows={3} />
                        </Form.Group>
                        <Button className='contact-submit' variant="primary" type="submit">
                            Envoyer
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default FormContact;