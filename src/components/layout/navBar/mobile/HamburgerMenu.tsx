import { Menu, MoonStar, SunMedium, X } from 'lucide-react';

export const HamburgerMenu = ({ open, setOpen, handleToggle, dark }: any) => {
  return (
    <div className="flex md:hidden items-center justify-between w-full px-4">
      {/* Theme Toggle */}

      <button
        onClick={handleToggle}
        className="w-10 h-10 flex items-center justify-center text-teal-400"
      >
        {dark ? <SunMedium size={26} /> : <MoonStar size={26} />}
      </button>

      {/* Hamburger / Close */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center text-teal-400"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </div>
  );
};
