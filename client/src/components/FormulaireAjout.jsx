// Fichier: client/src/components/FormulaireAjout.jsx
// Gère le formulaire pour ajouter une nouvelle tâche.

import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function FormulaireAjout({ onNouvelleTache }) {
    const [nouvelleTache, setNouvelleTache] = useState('');
    const [envoiEnCours, setEnvoiEnCours] = useState(false);
    const [erreur, setErreur] = useState('');

    const soumettreNouvelleTache = (e) => {
        e.preventDefault();
        setEnvoiEnCours(true);
        setErreur(''); // Réinitialise l'erreur à chaque soumission

        const options = {
            method: 'POST',
            body: JSON.stringify({ name: nouvelleTache }),
            headers: { 'Content-Type': 'application/json' },
        };

        fetch('/api/items', options)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('La requête a échoué');
                }
                return res.json();
            })
            .then((tache) => {
                onNouvelleTache(tache);
                setNouvelleTache(''); // Vide le champ après succès
            })
            .catch(() => {
                setErreur("Impossible d'ajouter la tâche. Veuillez réessayer.");
            })
            .finally(() => {
                setEnvoiEnCours(false);
            });
    };

    return (
        <Form onSubmit={soumettreNouvelleTache}>
            <InputGroup className="mb-3">
                <Form.Control
                    value={nouvelleTache}
                    onChange={(e) => setNouvelleTache(e.target.value)}
                    type="text"
                    placeholder="Entrez une nouvelle tâche..."
                    aria-label="Entrez une nouvelle tâche"
                    required
                />
                <Button
                    type="submit"
                    variant="primary"
                    disabled={!nouvelleTache.length || envoiEnCours}
                >
                    {envoiEnCours ? 'Ajout...' : 'Ajouter Tâche'}
                </Button>
            </InputGroup>
            {erreur && <p className="text-danger small mt-1">{erreur}</p>}
        </Form>
    );
}

FormulaireAjout.propTypes = {
    onNouvelleTache: PropTypes.func.isRequired,
};