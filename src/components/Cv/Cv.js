import './Cv.css';
import { Button } from 'react-bootstrap';
import Cvv from './Fawzy ELSAM.pdf';
import { saveAs } from 'file-saver';


function Cv() {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/1qIiD8Z7QDtAjU0oien-LByT5DrvXbG2_/view",
            "example.pdf"
        );
    };
    return (
        <div className='cv-block'>
            <div className='cv-question-block'>
                <h2 className="cv-question">Intéressé par mon porfil ?</h2>
                <p className='cv-question-text' >Télecharger mon Cv afin d'en savoir sur mon profil.</p>
            </div>
            <div className='cv-button-block' >
                <Button onClick={saveFile} className='dowload' variant="outline-primary">Telecharger ICI !</Button>
            </div>
        </div>
    );

}

export default Cv;