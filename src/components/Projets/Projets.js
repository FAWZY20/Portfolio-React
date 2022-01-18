import './Projet.css';


function Projets() {
    return (
        <div className="container-fluid" >
            <div className="container">
                <div className="row" >
                    <div className="projet-title" >
                        <h2>Mon travail récent</h2>
                        <p>Voici quelques projets de design sur lesquels j'ai travaillé récemment.</p>
                    </div>
                </div>
                {/* <div className='row project-list'>
                    <ul>
                        {projets.map((projet) => (
                            <li key={projet.id} className='col-lg-4' >
                                <img className='project-image' src={projet.image} width={383.99} height={255.99} alt='' />
                                <figcaption>
                                    <p>{projet.nom}</p>
                                </figcaption>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>
        </div>
    );
}

export default Projets;