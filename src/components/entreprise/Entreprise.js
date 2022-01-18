import './Entreprise.css';
import { entreprises } from '../../datas/entreprise';


function Entrepise() {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="company-title" >
                        <h2>Je suis fier d'avoir collaboré avec<br /> des entreprises formidables :</h2>
                    </div>
                </div>
            </div>
            <div className='row project-list'>
                <ul>
                    {entreprises.map((entreprise) => (
                        <li key={entreprise.id} className='entreprise-img col-lg-2' >
                            <img src={entreprise.image} width={110} height={80} alt='' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}


export default Entrepise;