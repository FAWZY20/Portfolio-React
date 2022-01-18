import './Banner.css';
import Ordinateur from '../../assets/ordinateur.png';
import Bitmojie from '../../assets/bitmojie.png';

function Banner() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row" >
                    <div className='title' >
                        <div>
                            <h1>Concepteur, Développeur Full-Stack</h1><br />
                            <h2>Je conçois et code des choses magnifiquement simples, et j'aime ce que je fais.</h2>
                        </div>
                        <div>
                            <div>
                                <img className='bitmojie' src={Bitmojie} width={280} height={280} alt='background orinateur ' />
                            </div>
                            <div>
                                <img className='ordinateur' src={Ordinateur} width={400} height={350} alt='background orinateur ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;