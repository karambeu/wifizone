'use client'
import { createContext, useContext} from 'react'; 

const MdecoContext = createContext();

export function useMdeContext() {
  return useContext(MdecoContext);
}

export const MdecoProvider = ({ children }) => {
  const menuItems = [
    { label: 'Accueil', path: '../dashboard', pathn: '/dashboard' },
    { label: 'Ajouter un Client', path: '../addclient', pathn: '/addclient' },
  ];

  const menuItemsAdmin = [
    { label: 'Paiement', path: '../pay', pathn: '/pay' },
    { label: 'Ajouter un user', path: '../register', pathn: '/register' },
    { label: 'Etat', path: '../state', pathn: '/state' },
  ];

  const secteurs = [
    { label: "Secteur du client:", value: "" },
    { label: "Hôpital des sœurs", value: "Hôpital des sœurs" },
    { label: "Cinquantenaire", value: "Cinquantenaire" },
    { label: "Japon", value: "Japon" },
    { label: "Carrefour PCS", value: "Carrefour PCS" },
    { label: "Trois palmiers", value: "Trois palmiers" },
    { label: "Manguier", value: "Manguier" },
    { label: "Espace bleu", value: "Espace bleu" },
    { label: "Carrefour kolo", value: "Carrefour kolo" },
    { label: "Carrefour deux boutiques", value: "Carrefour deux boutiques" },
    { label: "Carrefour académie", value: "Carrefour académie" },
    { label: "BC bilo", value: "BC bilo" },
    { label: "Mami zata", value: "Mami zata" },
    { label: "BC antenne", value: "BC antenne" },
  ];

  const residenceOptions = [
    { label: "Résidence du client:", value: "" },
    { label: "Cours communes", value: "cours_communes" },
    { label: "Villa basse", value: "villa_basse" },
    { label: "Villa duplex", value: "villa_duplex" },
    { label: "Chacun chez soi", value: "chacun_chez_soi" },
    { label: "Rez de chaussé", value: "rez_de_chaussé" },
    { label: "R+1", value: "r+1" },
    { label: "R+2", value: "r+2" },
    { label: "R+3", value: "r+3" },
    { label: "R+4", value: "r+4" },
    { label: "R+5", value: "r+5" },
    { label: "Maquis", value: "maquis" },
    { label: "Boutique", value: "boutique" },
    { label: "Hôtel", value: "hotel" },
  ];

  return (
    <MdecoContext.Provider value={{ menuItems, menuItemsAdmin, secteurs, residenceOptions }}>
      {children}
    </MdecoContext.Provider>
  );
};
