'use client';

import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

function Table({ uidt }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, [uidt]);
   async function fetchClients () {
	try {
	  const response = await fetch(`/api/client/${uidt}`, {
		cache: 'no-store',
	  });
	  if (!response.ok) {
		console.log('Erreur lors de la récupération des données');
		return;
	  }
	  const data = await response.json();
	  if(data){
		setClients(data.clients);
	  }
	  return
	} catch (error) {
	  console.error('Erreur lors de la récupération des infos :', error);
	}
  };
  const columns = [
    { name: "ID", selector: row => row.id, sortable: true },
    { name: "Date", selector: row => row.date, sortable: true },
    { name: "Nom complet", selector: row => row.fullname, sortable: true },
    { name: "Secteur/Habitat", selector: row => row.residence, sortable: true },
    { name: "Contacts", selector: row => row.contacts, sortable: true },
  ];

  const rows = clients.map((client, index) => {
    const dateObj = new Date(client.createdAt);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return {
      id: index + 1,
      date: formattedDate,
      fullname: `${client.lastname} ${client.firstname}`,
      residence: `${client.district} / ${client.residence}`,
      contacts: `${client.phone} / ${client.whatsapp}`,
    };
  });

  return (
    <>
      <div className="row my-5">
        <DataTable 
          columns={columns} 
          data={rows} 
          fixedHeader 
          pagination
          title="Ma liste de clients inscris"
        />
      </div>
    </>
  );
}

export default Table;