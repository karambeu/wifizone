'use client';

import { useState, useEffect } from 'react';

export default function Widget({ uid }) {
  const [clients, setClients] = useState([]);
  const [clientsT, setClientsT] = useState([]);
  const [today, setToday] = useState(0);
  const [nbreClient, setNbreClient] = useState(0);
  const [nbreClientT, setNbreClientT] = useState(0);

  useEffect(() => {
    fetchClients();
  }, [uid]);

  useEffect(() => {
    setToday(countClientsToday(clients));
    setNbreClient(clients.length);
    setNbreClientT(clientsT.length);
  }, [clients, clientsT]);

    // Fonction pour compter les clients du jour
    function countClientsToday(datas){
    const todayDate = new Date().toISOString().split('T')[0];
    return datas.filter(data => {
        const createdAt = new Date(data.createdAt).toISOString().split('T')[0];
        return createdAt === todayDate;
    }).length;
    };

  async function fetchClients(){
    try {
      const response = await fetch(`/api/client/${uid}`, {
        cache: 'no-store',
      });
      if (!response.ok) {
        console.log('Erreur lors de la récupération des données');
        return;
      }
      const data = await response.json();
      setClients(data.clients || []);
      setClientsT(data.clientsT || []);
    } catch (error) {
      console.error('Erreur lors de la récupération des infos :', error);
    }
  };
  return (
    <>
      <div>
        <div className='row'>
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-dark card-custom overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <h4><i className="mdi mdi-deskphone"></i> {today}</h4>
                  <p className="text-center">Client ce jour</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-warning card-custom overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <h4><i className="mdi mdi-email"></i> {nbreClient}</h4>
                  <p className="text-center">Mes Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-info card-custom overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <h4><i className="mdi mdi-map-marker"></i>{nbreClientT}</h4>
                  <p className="text-center">Clients projet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-white bg-success card-custom overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <h4><i className="mdi mdi-map-marker"></i>{`${(parseInt(nbreClient) * 1000).toLocaleString()} FCFA`}</h4>
                  <p className="text-center">Wallet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}