'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import { useEffect } from 'react';

function Pay() {
  const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === 'authenticated') {
          if (session.role !== 'admin'){
            toast.error('acces refusé');
            router.push("/dashboard");
          }
        }
      }, [status]);

      if (status === 'loading') {
        return <Loader />;
      }
  return (
    <div>page de pay ici</div>
  )
}

export default Pay