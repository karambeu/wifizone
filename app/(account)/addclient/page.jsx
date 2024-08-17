'use client'
import Footer from '@/components/Footer'
import Headerdash from '@/components/Headerdash'
import Navbar from '@/components/Navbar'
import RegisterClient from '@/components/RegisterClient'
import { useSession } from 'next-auth/react';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';

function Client() {
  
  const { data: session, status } = useSession();
  const [id, setId] = useState('');

    useEffect(() => {
        if (status === 'authenticated') {
          setId(session.userId);
        }
      }, [status]);

      if (status === 'loading') {
        return <Loader />;
      }
  return (
    <>
        <div>
        <Navbar/>
        <Headerdash />
        <section className="text-center">
          <div
            className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
            style={{
              marginTop: '-100px',
              backdropFilter: 'blur(30px)',
            }}
          >
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <RegisterClient user_id = {id}/> 
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
     
    </>
  )
}

export default Client