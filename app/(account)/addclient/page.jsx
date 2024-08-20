'use client'
import { useSession } from 'next-auth/react';
import Footer from '@/components/Footer';
import Headerdash from '@/components/Headerdash';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import RegisterClient from '@/components/RegisterClient';

function Client() { 
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
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                  <RegisterClient user_id={session.userId} />
                </div>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Client;