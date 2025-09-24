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
                <Button href='https://www.canva.com/design/DAGirXhcBSs/7wWkbfrI3F3azNTU9YK7Ew/view?utm_content=DAGirXhcBSs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8c47c10c5b' className='dowload' target="_blank" variant="outline-primary"> Telecharger ICI ! </Button>
            </div>
        </div>
    );

}

export default Cv;
