'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeSelect = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="ghost" size="icon" className="rounded-full" onClick={handleThemeSelect}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
