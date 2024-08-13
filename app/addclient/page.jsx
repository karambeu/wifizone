import { getServerSession } from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Footer from '@/components/Footer'
import Headerdash from '@/components/Headerdash'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader';
import RegisterClient from '@/components/Registerclient'
async function Client() {
  const session = await getServerSession(authOptions) 
  if (!session) return <Loader />;
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
                  <RegisterClient user_id = {session?.userId}/> 
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