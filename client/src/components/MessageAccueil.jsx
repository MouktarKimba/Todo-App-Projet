// Fichier: client/src/components/MessageAccueil.jsx
// Affiche un message de bienvenue dynamique récupéré depuis le backend.

import { useEffect, useState } from 'react';

export function MessageAccueil() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/greeting')
            .then((res) => res.json())
            .then((data) => setMessage(data.greeting))
            .catch(() => setMessage('Bienvenue !')); // Message par défaut en cas d'erreur
    }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois

    if (!message) return null;

    return <p className="lead text-muted">{message}</p>;
}