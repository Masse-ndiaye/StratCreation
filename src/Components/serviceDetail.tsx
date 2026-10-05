// ServiceDetail.tsx
import { useParams, Link } from "react-router-dom";
import { features } from "../constant";
import { Undo2 } from "lucide-react";

function ServiceDetail() {
  const { id } = useParams();
  const service = features.find(s => s.id === id);

  if (!service) {
    return <p>Service introuvable</p>;
  }

  return (
    <div className="h-screen flex flex-col bg-green-500 justify-center items-center">
      <p>ID : {service.id}</p>
      <h1>{service.titre}</h1>
      <p>{service.prgrphe}</p>
      <Link to="/service" className="flex gap-3"><Undo2 size={20} className="bg-gray-500 text-2xl" />
      Retour la page précèdent</Link>
    </div>
  );
}

export default ServiceDetail;
