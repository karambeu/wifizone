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


//                     'use client'
// import { signIn } from 'next-auth/react'
// import React, { useState, useEffect } from 'react'
// import { useSearchParams, useRouter } from 'next/navigation'
// import { toast } from 'react-toastify'
// import Image from 'next/image'

// export default function Signinform() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();
//     const searchParams = useSearchParams();
  
//     useEffect(() => {
//         const message = searchParams.get('message');
//         if (message === 'signed-out') {
//             toast.info('Vous êtes déconnecté');
//             router.replace('/');
//         }
//     }, [searchParams, router]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!email || !password) {
//             toast.error("Veuillez renseigner tous les champs");
//             return;
//         }
//         try {
//             const response = await signIn("credentials", {
//                 email: email.toLowerCase(),
//                 password,
//                 redirect: false,
//             });

//             if (!response.ok) {
//                 toast.error('Email ou mot de passe incorrect.');
//                 return;
//             }
//             toast.info('Vous êtes connecté!');
//             router.replace('dashboard');
//         } catch (error) {
//             console.log('error:', error);
//             toast.error('Échec de la connexion. Veuillez réessayer.');
//         }
//     }

//     return (
//         <section className="vh-100" style={{ backgroundColor: '#56370c' }}>
//             <div className="container py-5 h-100">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                     <div className="col col-xl-10">
//                         <div className="card" style={{ borderRadius: '1rem' }}>
//                             <div className="row g-0">
//                                 <div className="col-md-6 col-lg-5 d-none d-md-block">
//                                     <Image
//                                         src="/loginform.jpg"
//                                         width={1280}
//                                         height={1920}
//                                         alt="login form"
//                                         className="img-fluid"
//                                         style={{ borderRadius: '1rem 0 0 1rem' }}
//                                         priority
//                                     />
//                                 </div>
//                                 <div className="col-md-6 col-lg-7 d-flex align-items-center bg-body-tertiary">
//                                     <div className="card-body p-4 p-lg-5 text-black">
//                                         <form onSubmit={handleSubmit}>
//                                             <div className="d-flex align-items-center mb-3 pb-1">
//                                                 <span className="h1 fw-bold mb-0">WIFIZONE-BC</span>
//                                             </div>

//                                             <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Connectez-vous pour l&apos;Enregistrement des clients</h5>

//                                             <div className="form-outline mb-4">
//                                                 <input
//                                                     type="text"
//                                                     id="form2Example17"
//                                                     className="form-control form-control-lg custom-form-control"
//                                                     onChange={(e) => setEmail(e.target.value)}
//                                                 />
//                                                 <label className="form-label" htmlFor="form2Example17">Email ou Pseudo</label>
//                                             </div>

//                                             <div className="form-outline mb-4">
//                                                 <input
//                                                     type="password"
//                                                     id="form2Example27"
//                                                     className="form-control form-control-lg custom-form-control"
//                                                     onChange={(e) => setPassword(e.target.value.trim())}
//                                                 />
//                                                 <label className="form-label" htmlFor="form2Example27">Mot de passe</label>
//                                             </div>

//                                             <div className="pt-1 mb-4">
//                                                 <button
//                                                     className="btn btn-dark btn-lg btn-block"
//                                                     type="submit"
//                                                     style={{ backgroundColor: '#56370c' }}
//                                                 >
//                                                     Se connecter
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
