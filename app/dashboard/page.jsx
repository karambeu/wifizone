import { getServerSession } from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Headerdash from '@/components/Headerdash';
import Widget from "@/components/Widget";
import Table from "@/components/Table";
import { redirect } from "next/navigation";

async function Dashboard() { 
  const session = await getServerSession(authOptions) 
  if (!session) return redirect('/')
console.log(session)
  return (
    <>
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
                    <Widget uid ={session?.userId}  />
                    <Table uidt ={session?.userId} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
    </>
  );
}

export default Dashboard;
