'use client'
import { toast } from 'react-toastify'
import React,{useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function Pay() {
  const {data:session, status} = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === 'authenticated' && session.role !=='admin') {
      toast.info("page non autorisée pour vous");
      router.push('/');
    }
  }, [session, status,router]);
  return (
    <div>page de pay ici</div>
  )
}

export default Pay