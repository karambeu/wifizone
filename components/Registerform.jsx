'use client'
import React, { useState} from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
function Registerform() {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fpasseword, setFpassword] = useState('');
    const [term, setTerm] = useState(false);
    const [role, setRole] = useState('');
    const router = useRouter();

    const validateForm = () => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/>.<,])(?=.{8,})/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const fullnameRegex = /^([a-zA-Z]+[ '-]?)+[a-zA-Z]+$/;
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9@._-]{2,15}$/;

        if (!fullname || !email || !password || !fpasseword || !term || !username) {
            return 'Veuillez remplir tous les champs!';
        }
        if (!fullnameRegex.test(fullname)) {
            return 'Entrez un nom complet valide';
        }
        if (!usernameRegex.test(username)) {
            return 'Entrez un pseudo valide';
        }
        if (!emailRegex.test(email)) {
            return 'Entrez un email valide';
        }
        if (!passwordRegex.test(password)) {
            return 'Le mot de passe doit contenir au moins: une majuscule, un caractère spécial et être d\'au moins 8 caractères';
        }
        if (password !== fpasseword) {
            return 'Les mots de passe ne correspondent pas';
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const errorMessage = validateForm();
        if (errorMessage) {
            toast.error(errorMessage);
            return;
        }

        try {
            const response = await fetch("/api/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullname, email: email.toLowerCase(), password, username: username.toLowerCase(), role })
            });
            const data = await response.json();
            if (response.ok) {
                e.target.reset();
                toast.success('Utilisateur enregistré avec succès');
                router.push("/dashboard");
            } else {
                console.log('Erreur:', data.message);
                toast.error(data.message);
            }
        } catch (error) {
            console.log('Échec de l\'API:', error);
            toast.error('Une erreur s\'est produite. Veuillez réessayer.');
        }
    };

    return (
        <div className='container row col-md-6 mx-auto mt-5 bg-body-tertiary rounded-lg shadow-lg'>
            <h1 className='mt-4 mb-4'>Enregistrement du commercial</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="formExample1" className="form-control custom-form-control" onChange={(e) => setFullname(e.target.value.trim())} />
                        <label className="form-label" htmlFor="formExample1">Nom complet</label>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="formExample2" className="form-control custom-form-control" onChange={(e) => setUsername(e.target.value.trim())} />
                        <label className="form-label" htmlFor="formExample2">Pseudo</label>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="formExample3" className="form-control custom-form-control" onChange={(e) => setEmail(e.target.value.trim())} />
                        <label className="form-label" htmlFor="formExample3">Email</label>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <div data-mdb-input-init className="form-outline">
                        <input type="password" id="formExample4" className="form-control custom-form-control" onChange={(e) => setPassword(e.target.value)} />
                        <label className="form-label" htmlFor="formExample4">Mot de passe</label>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <div data-mdb-input-init className="form-outline">
                        <input type="password" id="formExample5" className="form-control custom-form-control" onChange={(e) => setFpassword(e.target.value)} />
                        <label className="form-label" htmlFor="formExample5">Confirmation de mot de passe</label>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <div data-mdb-input-init className="form-outline">
                        <select id="formExample6" className="form-control custom-form-control" onChange={(e) => setRole(e.target.value)}>
                            <option value="">Sélectionnez votre rôle</option>
                            <option value="admin">Administrateur</option>
                            <option value="com">Commercial</option>
                        </select>
                        <label className="form-label" htmlFor="formExample6">Rôle</label>
                    </div>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" id="registerCheck" onChange={(e) => setTerm(e.target.checked)} />
                    <label className="form-check-label" htmlFor="registerCheck">J&apos;ai lu et accepté les termes</label>
                </div>

                <div className="row mb-4">
                    <button type="submit" className="btn btn-primary btn-block mb-4" style={{ backgroundColor: '#56370c' }}>Valider</button>
                </div>
            </form>
        </div>
    );
}

export default Registerform;