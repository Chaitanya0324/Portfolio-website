export default function About() {
  return (
    <section
      id="about"
      className="
        relative w-full min-h-screen flex flex-col justify-center items-center text-center 
        overflow-hidden px-6 py-16
        bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      "
    >
      {/* Background glowing orbs */}
      <div className="absolute top-16 left-16 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 right-24 w-80 h-80 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-orange-400/25 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass content card */}
      <div
        className="
          relative z-10 max-w-2xl
          backdrop-blur-2xl bg-white/30 border border-white/40
          shadow-[0_8px_32px_rgba(31,38,135,0.25)]
          rounded-3xl p-10 md:p-12
          transition-transform duration-500
          hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,165,0,0.6)]
        "
      >
        <h2
          className="
            text-4xl md:text-5xl font-bold mb-6 text-gray-900
            drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]
          "
        >
          Hi, I'm Chaitanya👋
        </h2>
        <p
          className="
            text-lg md:text-xl text-gray-800 leading-relaxed
          "
        >
          I’m an aspiring <span className="font-semibold text-pink-600">Full Stack Developer</span> 
          passionate about crafting scalable and user-friendly web applications.  
          My focus is on clean UI, robust backend logic, and creating real-world 
          digital solutions using modern tools like 
          <span className="font-medium text-orange-600"> React</span>, 
          <span className="font-medium text-pink-600"> Node.js</span>, and 
          <span className="font-medium text-yellow-600"> MongoDB</span>.
          <br /><br />
          I believe in continuous learning, exploring new technologies, and 
          turning innovative ideas into impactful web experiences.
        </p>
      </div>
    </section>
  );
}
