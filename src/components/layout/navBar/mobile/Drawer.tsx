import { navLinks } from '@/lib/constants';
import { ResumeButton } from '../ResumeButton';
import { Socials } from './Socials';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Drawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const pathname = usePathname();
  const linkClass = (path: string) =>
    pathname === path
      ? 'text-teal-400  border-b border-white/20 pb-3 flex justify-center'
      : 'border-b border-white/20 pb-3 flex justify-center';
  return (
    <div
      className={`
                  fixed top-0 left-0 h-full w-80
                  bg-black/90 backdrop-blur-sm
                  z-50
                  transition-transform duration-300 ease-in-out
                  ${open ? 'translate-x-0' : '-translate-x-full'}
                `}
    >
      <div className="flex flex-col mt-20 px-8 gap-6 text-white text-lg">
        {navLinks.map(({ name, href }, index) => (
          <Link
            key={index}
            href={href}
            onClick={() => setOpen(false)}
            className={linkClass(href)}
          >
            {name}
          </Link>
        ))}
        <div className="flex justify-center">
          <ResumeButton />
        </div>
        <Socials />
      </div>
    </div>
  );
};
