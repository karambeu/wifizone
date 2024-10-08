'use client'
import { useSession } from 'next-auth/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Headerdash from '@/components/Headerdash';
import Loader from '@/components/Loader';
import Widget from '@/components/Widget';
import Table from '@/components/Table';

function Dashboard() { 
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Loader />;
  }

  if (status !== 'authenticated') {
    return null; // Ou une redirection vers une page de connexion
  }

  return (
    <div>
      <Navbar />
      <Headerdash />
      <section className="text-center">
        <div
          className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
          style={{
            marginTop: '-100px',
            backdropFilter: 'blur(30px)',
          }}>
            <div className="card-body">
              <div className="row d-flex justify-content-space-around">
                <div className="col-lg-12">
                  <h2 className="fw-bold mb-5">Mes objectifs</h2>
                  <Widget uid={session.userId} />
                  <Table uidt={session.userId} />
                </div>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;