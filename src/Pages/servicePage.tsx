// ServicePage.tsx
import { Link } from "react-router-dom";
import { features } from "../constant";

function ServicePage() {
  return (
    <div className="bg-gray-200 flex flex-col h-screen justify-center items-center">
      <h1 className=" text-8xl font-extrabold">Nos Services</h1>
      <ul className="grid grid-cols-3 gap-15 mt-6">
        {features.map(service => (
          <li key={service.id} className="hover:bg-green-500 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold mb-3">{service.titre}</h2>
            <p>{service.prgrphe}</p>
            {/* Lien vers la page détail */}
            <Link to={`/service/${service.id}`} className="bg-green-200 px-2 rounded-sm">Voir détails</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicePage;
