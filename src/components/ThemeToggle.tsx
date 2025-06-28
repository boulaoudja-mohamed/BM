
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-400 transition-all duration-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
