import { ResumeButton } from '../ResumeButton';
import { Socials } from './Socials';

export const Drawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div
      className={`
                  fixed top-0 left-0 h-full w-80
                  bg-black/90
                  z-50
                  transition-transform duration-300 ease-in-out
                  ${open ? 'translate-x-0' : '-translate-x-full'}
                `}
    >
      <div className="flex flex-col mt-20 px-8 gap-6 text-white text-lg">
        <a
          onClick={() => setOpen(false)}
          className="border-b border-white/10 pb-3"
        >
          Home
        </a>
        <a
          onClick={() => setOpen(false)}
          className="border-b border-white/10 pb-3"
        >
          Blog
        </a>
        <a
          onClick={() => setOpen(false)}
          className="border-b border-white/10 pb-3"
        >
          Projects
        </a>
        <a
          onClick={() => setOpen(false)}
          className="border-b border-white/10 pb-3"
        >
          Contact
        </a>

        <div className="mt-6">
          <ResumeButton />
        </div>
        <Socials />
      </div>
    </div>
  );
};
