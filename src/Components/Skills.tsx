import { competente } from "../constant"

export default function Skills() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {competente.map((skill) => {

          const rayon = 40
          const circonference = 2 * Math.PI * rayon
          const offset = circonference * (1 - skill.percent / 100)

          return (
            <div key={skill.label} className="flex flex-col items-center gap-3 bg-white rounded-2xl p-5 ">

              <svg width="500" height="150" viewBox="0 0 100 100">

                {/* Fond gris */}
                <circle cx="50" cy="50" r={rayon} fill="none" stroke="#e5e7eb" strokeWidth="10" />

                {/* Arc coloré */}
                <circle
                  cx="50" cy="50" r={rayon}
                  fill="none"
                  stroke={skill.color}
                  strokeWidth="10"
                  strokeDasharray={circonference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />

                {/* Pourcentage au centre */}
                <text x="50" y="54" textAnchor="middle" fontSize="25" fontWeight="500" fill={skill.color}>
                  {skill.percent}
                </text>

              </svg>

              <p className="text-2xl font-bold text-gray-700">{skill.label}</p>
              <p className="text-center">{skill.description}</p>

            </div>
          )
        })}

      </div>

    </section>
  )
}