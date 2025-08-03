import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white cursor-pointer"
    >
      {theme === "dark" ? <IoMdSunny size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
