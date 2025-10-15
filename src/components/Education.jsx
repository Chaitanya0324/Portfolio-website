export default function Education() {
  const data = [
    { degree: "B.Tech in Computer Engineering", college: "Pimpri Chinchwad University", year: "2023–2027",marks:"CGPA:8.01"  },
    { degree: "HSC (Science)", college: "S.B Pati Junior College", year: "2021–2023",marks:"Passed with 65%"  },
    { degree: "High School", college: "Alphonsa High School", year:"2021" ,marks:"Passed with 83%" },
  ];

  return (
    <section
      id="education"
      className="
        relative w-full min-h-screen flex flex-col justify-center items-center text-center
        overflow-hidden px-6 py-16
        bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      "
    >
      {/* Background glowing orbs */}
      <div className="absolute top-16 left-16 w-64 h-64 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-60 h-60 bg-orange-400/25 rounded-full blur-3xl animate-pulse"></div>

      {/* Section title */}
      <h2 className="relative z-10 text-3xl md:text-4xl font-semibold mb-10 text-gray-900 drop-shadow-[0_0_6px_rgba(255,140,0,0.4)]">
        Education
      </h2>

      {/* Glass cards for each education */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {data.map((edu, idx) => (
          <div
            key={idx}
            className="
              backdrop-blur-2xl bg-white/30 border border-white/40
              shadow-[0_8px_32px_rgba(31,38,135,0.25)]
              rounded-3xl p-6 text-left
              transition-transform duration-500
              hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,165,0,0.6)]
            "
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{edu.degree}</h3>
            <p className="text-gray-800">{edu.college}</p>
            <p className="text-gray-900 font-medium">{edu.year}</p>
            <p className="text-gray-900 font-medium">{edu.marks}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
