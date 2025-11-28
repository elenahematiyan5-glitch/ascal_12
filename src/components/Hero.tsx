import { motion } from 'framer-motion';
import { BrainIcon } from './icons/CustomIcons';

export const Hero = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-8 pt-32 pb-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute w-[500px] h-[500px] bg-radial-primary rounded-full top-[10%] left-[10%] animate-float opacity-30 blur-[100px] pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-radial-secondary rounded-full bottom-[10%] right-[10%] animate-floatReverse opacity-20 blur-[80px] pointer-events-none"></div>

      <div className="max-w-[900px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[200px] h-[200px] mx-auto mb-8"
        >
          <BrainIcon />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-white to-[#00bfff] bg-clip-text text-transparent"
        >
          تیم توسعه هوش مصنوعی و وب
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl text-[#cccccc] mb-12 leading-relaxed"
        >
          ما تیمی از متخصصان هوش مصنوعی، یادگیری ماشین، توسعه وب و طراحی گرافیک هستیم که آماده‌ایم پروژه‌های شما را به واقعیت تبدیل کنیم
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05, translateY: -3, boxShadow: '0 10px 30px rgba(0, 191, 255, 0.4)' }}
          onClick={scrollToOrder}
          className="inline-block px-10 py-4 bg-gradient-to-br from-[#00bfff] to-[#0080ff] text-white rounded-full font-semibold text-lg transition-all"
        >
          ثبت سفارش پروژه
        </motion.button>
      </div>
    </section>
  );
};
