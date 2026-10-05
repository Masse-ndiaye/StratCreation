// ServiceDetail.tsx
import { useParams, Link } from "react-router-dom";
import { features } from "../constant";

function ServiceDetail() {
  const { id } = useParams();
  const service = features.find(s => s.id === id);

  if (!service) {
    return <p>Service introuvable</p>;
  }

  return (
    <div className="h-screen flex flex-col bg-amber-600 justify-center items-center">
      <h1>{service.titre}</h1>
      <p>{service.prgrphe}</p>
      <p>ID : {service.id}</p>
      <Link to="/service">Retour à la liste de la page service</Link>
    </div>
  );
}

export default ServiceDetail;
