'use client'
import React, { useEffect } from 'react'
import('bootstrap/dist/js/bootstrap.bundle.min.js');
import('@fortawesome/fontawesome-free/css/all.min.css');
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useMdeContext } from '@/app/Decocontext'

function Navbar() {
  const { data: session} = useSession();
  const { menuItems, menuItemsAdmin } = useMdeContext();
  const pathname = usePathname();

  function handleSignOut() {
    signOut({
      callbackUrl: '/?message=signed-out', // URL vers laquelle l'utilisateur sera redirigé après la déconnexion
    });
  }

  const navItems = menuItems.map((item) => (
    <li className="nav-item" key={item.label}>
      <Link className={item.pathn === pathname ? 'nav-link active' : 'nav-link'} aria-current="page" href={item.path}>
        {item.label}
      </Link>
    </li>
  ));

  if (session?.role === 'admin') {
    menuItemsAdmin.forEach((itema) => {
      navItems.push(
        <li className="nav-item" key={itema.label}>
          <Link className={itema.pathn === pathname ? 'nav-link active' : 'nav-link'} aria-current="page" href={itema.path}>
            {itema.label}
          </Link>
        </li>
      );
    });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#56370c' }} data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" href="#">Tableau de bord</Link>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navItems}
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Bienvenue {session?.username}
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" href="#">{session?.user?.email}</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li className='d-grid gap-2 col-12 mx-auto py-0'>
                      <button onClick={handleSignOut} className="btn btn-danger pt-2 pb-2" style={{ fontSize: '0.8rem' }}>Se Déconnecter</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;