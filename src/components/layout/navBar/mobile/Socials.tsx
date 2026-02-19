import { socials } from '@/lib/constants';

export const Socials = () => {
  return (
    <div className="flex border-t border-white/20 pt-5 justify-center gap-3">
      {socials.map(({ icon: Icon, link, color }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
                  w-11 h-11
                  flex items-center justify-center
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  transition-all duration-300
                  hover:bg-white/10
                  hover:scale-110
                "
        >
          <Icon size={20} color={color} />
        </a>
      ))}
    </div>
  );
};
