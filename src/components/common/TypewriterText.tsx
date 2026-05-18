import { motion } from 'motion/react';

type TypewriterTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  speed?: number;
  mode?: 'char' | 'word';
};

export default function TypewriterText({
  text,
  className,
  once = true,
  speed = 0.05,
  mode = 'char',
}: TypewriterTextProps) {
  const items = mode === 'char' ? text.split('') : text.split(' ');

  return (
    <motion.span className={className} initial="hidden" whileInView="visible" viewport={{ once }}>
      {items.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: speed, delay: i * speed, ease: 'easeIn' }}
          className={mode === 'word' ? 'inline-block mr-[0.25em]' : ''}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
