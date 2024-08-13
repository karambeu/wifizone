import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
async function State() {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/')
  if(session?.role !=='admin') redirect("/dashboard")
  return (
    <div>page de state ici</div>
  )
}

export default State