// Fichier: client/src/components/AffichageTache.jsx

import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// On importe l'icône de la poubelle
import { faClock, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { format, isPast, isToday } from 'date-fns';
import { fr } from 'date-fns/locale';
import './AffichageTache.scss';

export function AffichageTache({ tache, onToggle, onSuppression, onEdit }) {
    
    const estEnRetard = !tache.completed && tache.dueDate && isPast(new Date(tache.dueDate)) && !isToday(new Date(tache.dueDate));
    let statusClass = 'pending';
    if (estEnRetard) {
        statusClass = 'overdue';
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onSuppression(tache.id);
    };

    return (
        <div className={`tache-item-wrapper ${tache.completed ? 'complete' : ''}`}>
            <Form.Check 
                type="checkbox"
                checked={tache.completed}
                onChange={() => onToggle(tache)}
                aria-label={`Marquer ${tache.name} comme ${tache.completed ? 'incomplète' : 'complétée'}`}
            />
            <div className="tache-details">
                <span className="tache-nom">{tache.name}</span>
                {tache.dueDate && (
                    <span className="tache-date">
                        <FontAwesomeIcon icon={faClock} />
                        {format(new Date(tache.dueDate), 'd MMM yy', { locale: fr })}
                    </span>
                )}
            </div>
            <div className="tache-actions">
                <button className="action-btn edit-btn" aria-label="Modifier la tâche" onClick={() => onEdit(tache)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                {/* On remplace l'indicateur par un bouton avec une icône */}
                <button className="action-btn delete-btn" aria-label="Supprimer la tâche" onClick={handleDeleteClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

AffichageTache.propTypes = {
    tache: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        dueDate: PropTypes.string,
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
    onSuppression: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired, 
};