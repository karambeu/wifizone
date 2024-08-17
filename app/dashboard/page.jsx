'use client'
import { useSession } from 'next-auth/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Headerdash from '@/components/Headerdash';
import Loader from '@/components/Loader';
import { useState,useEffect } from 'react';

async function Dashboard() { 
  const { data: session, status } = useSession();
  // const [email, setEmail] = useState('');
  // const [pseudo, setPseudo] = useState('');
  const [id, setId] = useState('');
  useEffect(() => {
    if (status === 'authenticated') {
      setId(session.userId);
    }
  }, [status]);
console.log(session)
 if (status === 'loading') {
  return <Loader />;
}
  return (
    <>
      {id && (
        <div>
        <Navbar />
        <Headerdash />
        <section className="text-center">
          <div
            className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
            style={{
              marginTop: '-100px',
              backdropFilter: 'blur(30px)',
            }}
          >
            <div className="card-body">
              <div className="row d-flex justify-content-space-around">
                <div className="col-lg-12">
                  <h2 className="fw-bold mb-5">Mes objectifs</h2>
                      {/* widget et table ici */}
               
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      )}
        
    </>
  );
}

export default Dashboard;
