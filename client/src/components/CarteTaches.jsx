// Fichier: client/src/components/CarteTaches.jsx

import { useCallback, useEffect, useState, useMemo } from 'react';
import { Button, Modal, Form, Spinner, Alert } from 'react-bootstrap';
import { isToday, isFuture, isPast, startOfDay, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { AffichageTache } from './AffichageTache';
import './CarteTaches.scss';

export function CarteTaches() {
    const [taches, setTaches] = useState([]);
    const [chargement, setChargement] = useState(true);
    const [erreur, setErreur] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [activeFilter, setActiveFilter] = useState("Aujourd'hui");
    const [completedVisible, setCompletedVisible] = useState(true);

    const filtresTraduits = {
        "Aujourd'hui": "Aujourd'hui",
        "À venir": "À venir",
        "En retard": "En retard"
    };

    useEffect(() => {
        fetch('/api/items')
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => setTaches(data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))))
            .catch(() => setErreur("Impossible de charger les tâches. Le serveur est peut-être indisponible."))
            .finally(() => setChargement(false));
    }, []);

    const listesDeTaches = useMemo(() => {
        const tachesEnCours = taches.filter(t => !t.completed);
        const filtres = {
            "Aujourd'hui": tachesEnCours.filter(t => t.dueDate && isToday(new Date(t.dueDate))),
            "À venir": tachesEnCours.filter(t => t.dueDate && isFuture(new Date(t.dueDate))),
            "En retard": tachesEnCours.filter(t => t.dueDate && isPast(new Date(t.dueDate)) && !isToday(new Date(t.dueDate)))
        };
        return {
            tachesAffichees: filtres[activeFilter] || [],
            tachesTerminees: taches.filter(t => t.completed)
        };
    }, [taches, activeFilter]);

    const handleOpenAddModal = () => {
        setEditingTask(null);
        setShowModal(true);
    };

    const handleOpenEditModal = (tache) => {
        setEditingTask(tache);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingTask(null);
    };

    const handleToggle = useCallback((tacheToToggle) => {
        fetch(`/api/items/${tacheToToggle.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !tacheToToggle.completed })
        })
        .then(res => res.json())
        .then(updatedTask => {
            setTaches(current => current.map(t => (t.id === updatedTask.id ? updatedTask : t)));
        }).catch(err => console.error("Erreur de mise à jour:", err));
    }, []);

    const handleDelete = useCallback((idToDelete) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
            fetch(`/api/items/${idToDelete}`, { method: 'DELETE' })
            .then(res => {
                if (res.ok) {
                    setTaches(current => current.filter(t => t.id !== idToDelete));
                } else {
                    alert("Erreur lors de la suppression.");
                }
            }).catch(err => console.error("Erreur de suppression:", err));
        }
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.taskName.value;
        const dueDate = event.target.elements.taskDueDate.value;
        const taskData = { name, dueDate };

        if (editingTask) {
            fetch(`/api/items/${editingTask.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData)
            })
            .then(res => res.json())
            .then(updatedTask => {
                setTaches(current => current.map(t => (t.id === updatedTask.id ? updatedTask : t)));
                handleCloseModal();
            }).catch(console.error);
        } else {
            fetch('/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData)
            })
            .then(res => res.json())
            .then(newTask => {
                setTaches(current => [...current, newTask].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
                handleCloseModal();
            }).catch(console.error);
        }
    };

    return (
        <>
            <div className="tasks-header">
                <h2>Tâches</h2>
                <Button onClick={handleOpenAddModal} className="add-task-btn">
                    Ajouter une tâche
                </Button>
            </div>
            <div className="filter-tabs">
                {Object.keys(filtresTraduits).map(filter => (
                    <button
                        key={filter}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}>
                        {filtresTraduits[filter]}
                    </button>
                ))}
            </div>
            <div className="tasks-list">
                {chargement && <Spinner animation="border" />}
                {erreur && <Alert variant="danger">{erreur}</Alert>}
                {!chargement && !erreur && listesDeTaches.tachesAffichees.length === 0 && (
                    <p className="empty-list-message">Aucune tâche pour "{filtresTraduits[activeFilter]}".</p>
                )}
                {listesDeTaches.tachesAffichees.map(tache => (
                    <AffichageTache key={tache.id} tache={tache} onToggle={handleToggle} onSuppression={handleDelete} onEdit={handleOpenEditModal} />
                ))}
            </div>
            <div className="completed-section-header" onClick={() => setCompletedVisible(!completedVisible)}>
                <h3>Terminé</h3>
                <FontAwesomeIcon icon={faChevronDown} className={`chevron-icon ${completedVisible ? 'open' : ''}`} />
            </div>
            {completedVisible && (
                <div className="tasks-list completed-list">
                    {listesDeTaches.tachesTerminees.length === 0 && <p className="empty-list-message">Aucune tâche terminée.</p>}
                    {listesDeTaches.tachesTerminees.map(tache => (
                        <AffichageTache key={tache.id} tache={tache} onToggle={handleToggle} onSuppression={handleDelete} onEdit={handleOpenEditModal} />
                    ))}
                </div>
            )}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingTask ? "Modifier la tâche" : "Ajouter une nouvelle tâche"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="taskName">
                            <Form.Label>Nom de la tâche</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Sortir les poubelles" required defaultValue={editingTask ? editingTask.name : ''} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="taskDueDate">
                            <Form.Label>Date d'échéance</Form.Label>
                            <Form.Control type="date" required defaultValue={editingTask ? format(new Date(editingTask.dueDate), 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd')} />
                        </Form.Group>
                        <Button variant="success" type="submit" className="w-100">
                            {editingTask ? "Enregistrer les modifications" : "Enregistrer la tâche"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}