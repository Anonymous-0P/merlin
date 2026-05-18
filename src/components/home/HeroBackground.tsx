import { motion, useScroll, useTransform } from 'motion/react';

const videoUrls = [
  '/hero_section_videos/30 Sec. Video.mov',
  '/hero_section_videos/De-Hooking 28.54 Sec. mp4.mov',
];

export default function HeroBackground({ videoIndex }: { videoIndex: number }) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1.1, 1.4]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.4]);

  return (
    <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ filter: useTransform(scrollY, [0, 600], ['blur(0px)', 'blur(8px)']) }}
        className="absolute inset-0 w-full h-full shadow-[inset_0_-135px_150px_rgba(15,23,42,0.36),inset_0_80px_110px_rgba(15,23,42,0.18),0_30px_90px_rgba(15,23,42,0.34)]"
      >
        <video
          key={videoIndex}
          src={videoUrls[videoIndex % videoUrls.length]}
          className="w-full h-full pointer-events-none object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          title="Merlin Hydraulics Hero Video"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/24 shadow-[inset_0_-95px_130px_rgba(15,23,42,0.28)]" />
    </motion.div>
  );
}
