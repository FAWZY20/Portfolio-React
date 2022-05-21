import './Projet.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

function Projets() {

    const [repo, setRepos] = useState([]);

    const fetchRepos = async () => {
        const { data } = await axios.get(`https://api.github.com/users/fawzy20/repos`)
        setRepos(data)
    }

    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    useEffect(() => {
        fetchRepos()
    }, [])

    return (
        <div className="container-fluid" >
            <div className="container">
                <div className="row" >
                    <div className="projet-title" >
                        <h2>Mon travail récent</h2>
                        <p>Voici quelques projets de design sur lesquels j'ai travaillé récemment.</p>
                    </div>
                </div>
                <div className='table-repo' >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Repository</th>
                                <th>Language</th>
                                <th>Date de création</th>
                                <th>Voir le Repository</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                repo.map((repository) => (
                                    <tr>
                                        <td>{repository?.name}</td>
                                        <td> {repository?.language}</td>
                                        <td>{formatDate(repository?.created_at)}</td>
                                        <td><Button href={repository?.html_url} target="_blank" >Voir le repository</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Projets;