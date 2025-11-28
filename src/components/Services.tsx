import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { WebDesignIcon, TemplateIcon, OfficeIcon, RobotIcon, MedicalIcon, AIModelIcon, GraphicDesignIcon, SmartSystemIcon } from './icons/CustomIcons';

const services = [
  { icon: <WebDesignIcon />, title: 'طراحی سایت' },
  { icon: <TemplateIcon />, title: 'طراحی قالب اختصاصی' },
  { icon: <OfficeIcon />, title: 'انجام پروژه‌های Office' },
  { icon: <RobotIcon />, title: 'طراحی ربات تحلیل‌گر' },
  { icon: <MedicalIcon />, title: 'سیستم‌های تشخیص بیماری' },
  { icon: <AIModelIcon />, title: 'مدل‌های هوش مصنوعی' },
  { icon: <GraphicDesignIcon />, title: 'گرافیک تبلیغاتی' },
  { icon: <SmartSystemIcon />, title: 'سیستم‌های هوشمند استارتاپی' },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-8 max-w-[1400px] mx-auto">
      <SectionTitle>خدمات ما</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, borderColor: 'rgba(0, 191, 255, 0.5)' }}
            className="bg-gradient-to-br from-dark-card to-dark-cardInner border border-primary/10 rounded-[20px] p-8 text-center transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl text-primary mb-4">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
