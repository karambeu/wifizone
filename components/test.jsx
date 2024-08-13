// const { data: session, status } = useSession();
  // const [email, setEmail] = useState('');
  // const [pseudo, setPseudo] = useState('');
  // const [id, setId] = useState('');
  // const [role, setRole] = useState('');
  // const [clients, setClients] = useState([]);
  // const [clientsT, setClientsT] = useState([]);
  // const [ctd, setCtd] = useState('');

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     setEmail(session.user.email);
  //     setPseudo(session.username);
  //     setId(session.userId);
  //     setRole(session.role);
  //     fetchClients(session.userId);  // Appel de la fonction fetchClients ici
  //   }
  // }, [session, status]);

  // const fetchClients = async (userId) => {
  //   try {
  //     const response = await fetch(`/api/client/${userId}`, {
  //       cache: 'no-store',
  //     });
  //     if (!response.ok) {
  //       console.log('Erreur lors de la récupération des données');
  //       return;
  //     }
  //     const data = await response.json();
  //     setClients(data.clients);
  //     setClientsT(data.clientsT);

  //     // Compter les clients du jour après avoir reçu les données
  //     countClientsToday(data.clients);
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération des infos :', error);
  //   }
  // };

  // const countClientsToday = (datas) => {
  //   const today = new Date().toISOString().split('T')[0];

  //   const clientsToday = datas.filter(data => {
  //     const createdAt = new Date(data.createdAt).toISOString().split('T')[0];
  //     return createdAt === today;
  //   });

  //   setCtd(clientsToday.length);
  // };

   {/* <Widget nbreClientsDay={ctd} nbreClientsBut={clients.length} nbreClientsTotal={clientsT.length} />
                    <Table clients={clients} /> */}