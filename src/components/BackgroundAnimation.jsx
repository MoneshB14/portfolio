import { useBackgroundAnimation } from '../hooks/useGSAPAnimations'

export default function BackgroundAnimation() {
  const bgRef = useBackgroundAnimation()
  
  return (
    <div 
      ref={bgRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Animated gradient blobs */}
      <div className="animated-blob absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="animated-blob absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="animated-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        ></div>
      ))}
    </div>
  )
}

