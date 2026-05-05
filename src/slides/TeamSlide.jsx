import { motion } from 'framer-motion';
import yujiImg from '../assets/Yuji.png';
import megumiImg from '../assets/Megumi.png';
import gojoImg from '../assets/Gojo.png';

const team = [
  {
    name: 'Andi Pratama',
    role: 'Koordinator',
    avatar: yujiImg,
    caption: 'console.log("sleep") // ReferenceError',
    color: '#FFD700',
  },
  {
    name: 'Sari Dewi',
    role: 'Wakil Koordinator',
    avatar: megumiImg,
    caption: 'CSS is my cardio',
    color: '#5B8EC2',
  },
  {
    name: 'Budi Setiawan',
    role: 'Lead Mentor',
    avatar: gojoImg,
    caption: 'It works on my machine',
    color: '#00e5ff',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
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

export default function TeamSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0f1a2e 50%, #0a0a0a 100%)' }}
    >
      {/* Giant background text */}
      <div className="bg-text text-[18vw] top-[15%] left-1/2 -translate-x-1/2">
        TEAM
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-dots" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-unsrat-blue/5 blur-[150px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 md:mb-14 text-center z-10"
      >
        <h2 className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-white text-glow-white leading-none">
          GET TO KNOW
          <span className="block text-unsrat-blue text-glow-blue">US</span>
        </h2>
      </motion.div>

      {/* Team Cards — Banner Style */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row gap-5 md:gap-6 max-w-6xl w-full px-6 z-10"
      >
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${member.color}08, ${member.color}03)`,
              border: `1px solid ${member.color}15`,
            }}
          >
            {/* Background name text */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[5rem] md:text-[6rem] leading-none whitespace-nowrap select-none pointer-events-none tracking-tighter"
              style={{ color: `${member.color}06` }}
            >
              {member.name.split(' ')[0].toUpperCase()}
            </div>

            {/* Content */}
            <div className="relative p-5 flex items-end gap-4 min-h-[200px] md:min-h-[240px]">
              {/* Character image */}
              <div className="absolute right-2 bottom-0 h-[180px] md:h-[220px] opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-auto object-contain character-img"
                  style={{ filter: `drop-shadow(0 0 20px ${member.color}30)` }}
                />
              </div>

              {/* Text content */}
              <div className="relative z-10 flex-1">
                {/* Role badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full font-mono text-[10px] font-bold mb-3 tracking-wider"
                  style={{ backgroundColor: member.color + '15', color: member.color, border: `1px solid ${member.color}25` }}
                >
                  {member.role.toUpperCase()}
                </div>

                {/* Name */}
                <h3 className="font-sans font-black text-2xl md:text-3xl text-white tracking-tight leading-tight">
                  {member.name.split(' ')[0].toUpperCase()}
                </h3>
                <p className="font-sans font-bold text-sm text-white/30 tracking-wide">
                  {member.name.split(' ').slice(1).join(' ')}
                </p>

                {/* Caption */}
                <p className="mt-3 font-mono text-[10px] text-white/25 italic">
                  "{member.caption}"
                </p>
              </div>
            </div>

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ boxShadow: `inset 0 0 60px ${member.color}08, 0 0 30px ${member.color}10` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
