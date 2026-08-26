import bg from '../Components/assets/bg-header.png'
export default function ServiceDetail() {
  return (
    <div className="group relative max-w-sm overflow-hidden rounded-xl  cursor-pointer">
  {/* <!-- L'image d'origine --> */}
  <img 
    src={bg} 
    alt="Code sur un écran" 
    className="w-full h-64 object-cover"
  />
  

  {/* <!-- Le calque de couleur avec le texte (Masqué par défaut, apparaît au survol) --> */}
  <div className="absolute inset-0 bg-blue-600/90 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h3 className="text-white font-bold text-xl mb-2">Développement Web</h3>
    <p className="text-blue-100 text-sm">
      Le code est l'art de transformer des idées en solutions interactives.
    </p>
  </div>
</div>
  )
}
