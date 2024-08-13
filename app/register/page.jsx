import Registerform from '@/components/Registerform'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
async function Register() {
  const session = await getServerSession(authOptions)
  if(session?.role !=='admin') redirect("/dashboard")
 
  return (
    <>
        <Registerform/>
    </>
  )
}

export default Register