import Bitmojie from '../../assets/bitmojie.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function FormContact() {
    return (
        <div>
            <div>
                <img className='bitmojie' src={Bitmojie} width={84} height={84} alt='background orinateur ' />
                <h1>
                    Merci d'avoir pris le temps de nous contacter. Comment puis-je vous aider aujourd'hui?
                </h1>
            </div>
            <div>
                <Form>
                    <Form.Group class="form-row">
                        <div class="col-lg-6">
                            <Form.Control type="text" class="form-control" placeholder="Nom" />
                        </div>
                        <div class="col-lg-6">
                            <Form.Control type="email" class="form-control" placeholder="Email" />
                        </div>
                    </Form.Group>
                    <Form.Group class="form-row">
                        <Form.Control as="textarea" placeholder="Message" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
            </div>

        </div>
    );
}

export default FormContact;