'use client'
import('bootstrap/dist/js/bootstrap.bundle.min.js');
import('@fortawesome/fontawesome-free/css/all.min.css');
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useMdeContext } from '@/app/Decocontext';

function RegisterClient({ user_id }) {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [district, setDistrict] = useState('');
  const [residence, setResidence] = useState('');
  const [observation, setObservation] = useState('')
  const router = useRouter();
  const { secteurs, residenceOptions } = useMdeContext();

  const validateForm = () => {
    const errors = {};

    const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const observationRegex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ ,;.'-()]*$/;

    if (!nameRegex.test(lastname)) {
      errors.lastname = 'Entrez un nom valide';
    }
    if (!nameRegex.test(firstname)) {
      errors.firstname = 'Entrez un prénom valide';
    }
    if (!emailRegex.test(email)) {
      errors.email = 'Entrez un email valide';
    }
    if (!phoneRegex.test(phone)) {
      errors.phone = 'Entrez un numéro de téléphone valide (10 chiffres)';
    }
    if (whatsapp && !phoneRegex.test(whatsapp)) {
      errors.whatsapp = 'Entrez un numéro WhatsApp valide (10 chiffres)';
    }
    if (observation && !observationRegex.test(observation)) {
      errors.observation = 'Entrez une observation valide';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }   

    try {
      const response = await fetch("/api/client", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lastname, email, firstname, phone, whatsapp, district, residence, user_id, observation })
      });
      const data = await response.json();
      if (response.ok) {
        const form = e.target;
        form.reset();
        toast.success('Client enregistré avec succès');
        router.replace("/dashboard");
      } else {
        console.log('Erreur:', data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="fw-bold mb-5">Enregistrement de clients</h2>
      <form onSubmit={handleSubmit}>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <input
                type="text"
                id="form3Example1"
                className="form-control custom-form-control"
                onChange={(e) => setLastname(e.target.value)}
              />
              <label className="form-label lab" htmlFor="form3Example1">
                Nom
              </label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <input
                type="text"
                id="form3Example2"
                className="form-control custom-form-control"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label className="form-label" htmlFor="form3Example2">
                Prénoms
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <input
                type="text"
                id="form3Example3"
                className="form-control custom-form-control"
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="form-label lab" htmlFor="form3Example3">
                Téléphone
              </label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <input
                type="text"
                id="form3Example4"
                className="form-control custom-form-control"
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <label className="form-label" htmlFor="form3Example4">
                Whatsapp
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <input
                type="text"
                id="form3Example5"
                className="form-control custom-form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label lab" htmlFor="form3Example5">
                Email
              </label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <select
                id="form3Example6"
                className="form-control custom-form-control"
                onChange={(e) => setDistrict(e.target.value)}
              >
                {secteurs.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label className="form-label" htmlFor="form3Example6">
                Secteur
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <select
                id="form3Example7"
                className="form-control custom-form-control"
                onChange={(e) => setResidence(e.target.value)}
              >
                {residenceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label className="form-label" htmlFor="form3Example7">
                Type de résidence
              </label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div data-mdb-input-init className="form-outline">
              <textarea
                id="form3Example8"
                className="form-control custom-form-control"
                rows="4"
                onChange={(e) => setObservation(e.target.value)}
              ></textarea>
              <label className="form-label" htmlFor="form3Example8">
                Observation
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary mb-4"
          style={{ backgroundColor: "#56370c" }}
        >
          Sauvegarder
        </button>
      </form>
    </>
  );
}

export default RegisterClient;
