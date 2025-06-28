import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Theme toggle clicked! Current theme:', isDark ? 'dark' : 'light');
    toggleTheme();
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className="bg-gray-800/90 dark:bg-white/90 backdrop-blur-md border-2 border-gray-600/50 dark:border-white/50 hover:bg-gray-700/90 dark:hover:bg-white/80 transition-all duration-300 hover:scale-110 text-white dark:text-gray-900 shadow-lg w-12 h-12"
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-500 transition-all duration-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-500 transition-all duration-300" />
        )}
      </Button>
      <span className="text-xs text-white dark:text-gray-900 bg-gray-800/80 dark:bg-white/80 px-2 py-1 rounded text-center">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </div>
  );
};

export default ThemeToggle;
