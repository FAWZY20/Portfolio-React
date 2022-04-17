import './Cv.css';
import { Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";



function Cv() {
    return (
        <div className='cv-block'>
            <div className='cv-question-block'>
                <h2 className="cv-question">Intéressé par mon porfil ?</h2>
                <p className='cv-question-text' >Télecharger mon Cv afin d'en savoir sur mon profil.</p>
            </div>
            <div className='cv-button-block' >
                {/* <Button to="../../assets/cv.pdf" target="_blank" download className='dowload' variant="outline-primary">Telecharger ICI !</Button> */}
                <Button className='dowload' variant="outline-primary">
                    <Link to="/" target="_blank" download="cv.pdf">Telecharger ICI !</Link>
                </Button>
            </div>
        </div>
    );

}

export default Cv;