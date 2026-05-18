import { useEffect, useMemo, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

export default function DynamicGlobe() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const syncSize = () => {
      if (!containerRef.current) return;
      const { offsetWidth } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetWidth });
      setIsMobile(window.innerWidth < 768);
    };

    syncSize();
    window.addEventListener('resize', syncSize);
    return () => window.removeEventListener('resize', syncSize);
  }, []);

  const markerData = useMemo(() => [
    { lat: 37.0902, lng: -95.7129, name: 'USA' },
    { lat: 23.6345, lng: -102.5528, name: 'Mexico' },
    { lat: 15.7835, lng: -90.2308, name: 'Guatemala' },
    { lat: -14.2350, lng: -51.9253, name: 'Brazil' },
    { lat: 1.3733, lng: 32.2903, name: 'Uganda' },
    { lat: -0.0236, lng: 37.9062, name: 'Kenya' },
    { lat: 9.1450, lng: 40.4897, name: 'Ethiopia' },
    { lat: -30.5595, lng: 22.9375, name: 'South Africa' },
    { lat: 12.8628, lng: 30.2176, name: 'Sudan' },
    { lat: 9.0820, lng: 8.6753, name: 'Nigeria' },
    { lat: -0.7893, lng: 113.9213, name: 'Indonesia' },
    { lat: 15.87, lng: 100.9925, name: 'Thailand' },
  ], []);

  const arcsData = useMemo(
    () => markerData.map(({ lat, lng }) => ({
      startLat: 20.5937,
      startLng: 78.9629,
      endLat: lat,
      endLng: lng,
      color: '#3b82f6',
    })),
    [markerData]
  );

  useEffect(() => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 1.5;
    globeRef.current.controls().enableZoom = false;
    globeRef.current.pointOfView({ lat: 10, lng: 0, altitude: isMobile ? 2.5 : 2.0 });
  }, [isMobile]);

  return (
    <div ref={containerRef} className="w-full aspect-square max-w-[850px] mx-auto relative overflow-hidden rounded-full shadow-[0_0_200px_rgba(59,130,246,0.2)] bg-blue-50/10">
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        htmlElementsData={markerData}
        htmlElement={(d: any) => {
          const el = document.createElement('div');
          const scaleClass = isMobile ? 'scale-75' : 'scale-125';
          const paddingClass = isMobile ? 'p-1.5' : 'p-2.5';
          const fontSizeClass = isMobile ? 'text-[8px]' : 'text-[12px]';
          const iconSize = isMobile ? '12' : '16';

          el.innerHTML = `
            <div class="flex flex-col items-center group cursor-pointer pointer-events-none ${scaleClass}">
              <div class="relative">
                <div class="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                <div class="relative bg-merlin-blue ${paddingClass} rounded-full border-2 border-white shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
              </div>
              <div class="mt-2 bg-white/95 backdrop-blur-sm text-black ${fontSizeClass} font-extrabold px-3 py-1 rounded-full border-2 border-merlin-blue shadow-[0_0_20px_rgba(59,130,246,0.3)] whitespace-nowrap">
                ${d.name}
              </div>
            </div>
          `;
          return el;
        }}
        arcsData={arcsData}
        arcColor={() => '#3b82f6'}
        arcDashLength={0.8}
        arcDashGap={0.5}
        arcDashAnimateTime={800}
        arcStroke={1.5}
        atmosphereColor="#3b82f6"
        atmosphereAltitude={0.6}
      />
    </div>
  );
}
