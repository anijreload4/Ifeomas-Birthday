import { motion } from 'framer-motion';

export default function FamilyFrames() {
  const children = [
    {
      name: 'Chigoziem',
      photo: '/assets/family/chigoziem.jpg',
      message: "A brilliant mind with a heart of gold, Chigoziem brings joy and pride to our family with his remarkable achievements and caring nature."
    },
    {
      name: 'Chimezie',
      photo: '/assets/family/chimezie.jpg',
      message: "Chimezie, our creative soul, fills our home with laughter and inspiration. His unique perspective and loving spirit make every day special."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-12"
    >
      {children.map((child, index) => (
        <div key={child.name} className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-coral to-gold opacity-20 blur-xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
              <img
                src={child.photo}
                alt={child.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-sm"
          >
            <svg
              viewBox="0 0 200 180"
              className="absolute inset-0 w-full h-full fill-white/10"
              style={{ filter: 'blur(8px)' }}
            >
              <path
                d="M100,10 C120,10 140,20 160,40 C180,60 190,80 190,100 C190,120 180,140 160,160 C140,180 120,190 100,190 C80,190 60,180 40,160 C20,140 10,120 10,100 C10,80 20,60 40,40 C60,20 80,10 100,10 Z"
              />
            </svg>
            
            <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-[30px] border border-white/20">
              <h3 className="text-2xl font-cursive text-gold mb-3 text-center">{child.name}</h3>
              <p className="text-white/90 text-center">{child.message}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}