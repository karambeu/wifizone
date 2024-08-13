export { default } from "next-auth/middleware"

export const config = { matcher: [
    "/dashboard",
    "/register",
    "/state",
    "/pay"
]}


// matcher: [
//     "/dashboard",
//     "/autrepage1",
//     "/autrepage2",
//     "/autredossier/:path*",  // Pour matcher toutes les sous-routes d'un dossier
//     "/utilisateur/[id]",      // Route dynamique pour un utilisateur avec un id
//     "/produit/[categorie]/[id]" // Route dynamique pour un produit avec une catégorie et un id
//   ]