import "./Footer.css";
import logo from '../../assets/logo.png';
import { Button } from 'react-bootstrap';
import { SiLinkedin, SiMicrosoftoutlook } from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container" >
                    <div className="row start-project" >
                        <div className="col-lg-4 start-project-block" >
                            <h2>Démarrer un projet</h2>
                        </div>
                        <div className="col-lg-4 start-project-block"  >
                            <p>
                                Intéressé à travailler ensemble? On devrait faire <br />
                                la queue pour discuter. Je vais acheter le café.
                            </p>
                        </div>
                        <div className="col-lg-4 start-project-block"  >
                            <Button href="/contact" className='contact faisons-ca' variant="outline-primary">Faisons cela</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer" >
                <div className="container" >
                    <div className="row" >
                        <div className="proverbe" >
                            <div className="logo-footer">
                                <img src={logo} alt="log" height={62} width={58} />
                            </div>
                            <div className="proverbe-text" >
                                <p>
                                    Vivre, apprendre et monter <br />
                                    de niveau un jour à la fois.
                                </p>
                            </div>
                        </div>
                        <div className="icon-resaux">
                            <div>
                                <a href="">
                                    <span>
                                        <VscGithubAlt className="icon" />
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <span>
                                        <SiLinkedin className="icon" />
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <span>
                                        <SiMicrosoftoutlook className="icon" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;