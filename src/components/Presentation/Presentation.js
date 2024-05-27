import './Presentation.css';
import Backend from '../../assets/backend.png';
import Frontend from '../../assets/frontend.png';
import Devops from '../../assets/devops.png';
import Database from '../../assets/database.png';

function Presentation() {
    return (
        <sectuion>
            <div className="container-fluid presentation">
                <div className="container">
                    <div className="row">
                        <div className='presentation-title'>
                            <h3>Salut, je suis Fawzy. Ravi de vous rencontrer.</h3><br />
                            <div className='presentation-text' >
                                <p>
                                    Depuis le début de ma carrière en tant que développeur full-stack il y a près de cinq ans,
                                    j'ai travaillé avec diverses agences pour créer des produits numériques destinés à la fois
                                    aux entreprises et aux consommateurs. Je suis sereinement confiant, naturellement curieux,
                                    et je m'efforce constamment d'améliorer mes compétences, en résolvant un problème de conception à la fois.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container competence-block'>
                <div className='row'>
                    <div className='competence col-3'>
                        <div className='front-icon'>
                            <img src={Frontend} width={100} height={100} alt='' />
                            <p>Frontend</p>
                        </div>
                        <div className='text'>
                            <p className='text-subtitle' >Langues que je parle :</p>
                            <ul className='list-competence'>
                                <li>Html / Css</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Angular</li>
                            </ul>
                        </div>
                    </div>
                    <div className='competence col-3'>
                        <div className='back-icon'>
                            <img src={Backend} width={100} height={100} alt='' />
                            <p>Backend</p>
                        </div>
                        <div className='text'>
                            <p className='text-subtitle' >Langues que je parle :</p>
                            <ul className='list-competence'>
                                <li>Java</li>
                                <li>PHP</li>
                                <li>Spring</li>
                                <li>Spring Boot</li>
                                <li>Spring Data</li>
                                <li>Spring Security</li>
                                <li>NodeJs</li>
                                <li>Express</li>
                            </ul>
                        </div>
                    </div>
                    <div className='competence col-3'>
                        <div className='back-icon'>
                            <img src={Database} width={100} height={100} alt='' />
                            <p>Database</p>
                        </div>
                        <div className='text'>
                            <p className='text-subtitle' >Langues que je parle :</p>
                            <p>
                                <ul className='list-competence'>
                                    <li>SQL</li>
                                    <li>ORACLE</li>
                                    <li>SQLDeveloper</li>
                                    <li>MySQL</li>
                                    <li>Postgres</li>
                                    <li>PhpMyAdmin</li>
                                    <li>PySpark</li>
                                    <li>GraphQL</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='competence col-3'>
                        <div className='back-icon'>
                            <img src={Devops} width={100} height={100} alt='' />
                            <p>Devops</p>
                        </div>
                        <div className='text'>
                            <p className='text-subtitle' >Langues que je parle :</p>
                            <p>
                                <ul className='list-competence'>
                                    <li>Docker</li>
                                    <li>Jenkins</li>
                                    <li>Git</li>
                                    <li>GitLab</li>
                                    <li>Bash</li>
                                    <li>Jira</li>
                                    <li>Confluence</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </sectuion>

    );
}

export default Presentation;
