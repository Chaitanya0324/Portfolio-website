export default function Footer() {
  return (
    <footer
      className="
        relative w-full py-6 flex justify-center items-center
        backdrop-blur-2xl bg-black/90 border-t border-gray-700
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      "
    >
      <p className="text-white text-sm md:text-base">
        &copy; {new Date().getFullYear()} Chaitanya Salunke. All rights reserved.
      </p>
    </footer>
  );
}
