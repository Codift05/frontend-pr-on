import { motion } from 'framer-motion';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const team = [
  {
    name: 'Andi Pratama',
    role: 'Koordinator Divisi',
    avatar: avatar1,
    caption: '"console.log(\'sleep\') // ReferenceError: sleep is not defined"',
    accent: 'border-neon-lime/30',
    glow: 'hover:shadow-[0_0_30px_rgba(204,255,0,0.2)]',
  },
  {
    name: 'Sari Dewi',
    role: 'Wakil Koordinator',
    avatar: avatar2,
    caption: '"CSS is my cardio 🏃‍♀️"',
    accent: 'border-neon-cyan/30',
    glow: 'hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]',
  },
  {
    name: 'Budi Setiawan',
    role: 'Lead Mentor',
    avatar: avatar3,
    caption: '"It works on my machine ¯\\_(ツ)_/¯"',
    accent: 'border-neon-magenta/30',
    glow: 'hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function TeamSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-noir-black bg-dots overflow-hidden px-8">
      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-neon-lime/3 blur-[150px] pointer-events-none" />

      {/* Title */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 md:mb-16"
      >
        <h2 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white text-glow-white leading-none text-center">
          GET TO KNOW
          <span className="block text-neon-lime text-glow-lime">US</span>
        </h2>
      </motion.div>

      {/* Team Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-6xl w-full justify-center items-stretch"
      >
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            className={`glass-card ${member.accent} ${member.glow} transition-all duration-500 flex-1 max-w-sm mx-auto md:mx-0`}
            style={{ marginTop: index === 1 ? '2rem' : '0' }}
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-2 font-mono text-[10px] text-noir-mid">
                profile_{member.name.split(' ')[0].toLowerCase()}.tsx
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-28 h-28 rounded-xl overflow-hidden mb-4 border border-white/10">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-sans font-bold text-lg text-white">{member.name}</h3>
              <p className="font-mono text-xs text-neon-lime mt-1">{member.role}</p>

              {/* Meme Caption */}
              <p className="font-mono text-[11px] text-noir-mid mt-3 italic leading-relaxed">
                {member.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
