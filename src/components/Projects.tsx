import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { BrainTumorIcon, LungCancerIcon, BitcoinIcon, DiabetesIcon, PsychologistIcon } from './icons/CustomIcons';

const projects = [
  {
    icon: <BrainTumorIcon />,
    title: 'تشخیص تومور مغزی',
    description: 'تشخیص تومور مغزی از روی CT با مدل‌های Deep Learning',
    accuracy: 'دقت ۹۸٪',
    note: '(Coming Soon)'
  },
  {
    icon: <LungCancerIcon />,
    title: 'تشخیص سرطان ریه',
    description: 'تحلیل اسکن قفسه سینه با CNN - کاربرد: تشخیص زودهنگام و کاهش ریسک بالینی',
    accuracy: 'دقت ۹۵٪'
  },
  {
    icon: <BitcoinIcon />,
    title: 'پیش‌بینی قیمت بیت‌کوین',
    description: 'پیش‌بینی روند بیت‌کوین با LSTM و شبکه‌های زمانی - کاربرد: ترید الگوریتمی، هشدار تغییر روند',
    accuracy: 'دقت ۷۳٪'
  },
  {
    icon: <DiabetesIcon />,
    title: 'پیش‌بینی دیابت',
    description: 'تحلیل وضعیت بدنی با ML و پردازش داده‌های بالینی - کاربرد: تشخیص اولیه و کمک به سیستم‌های سلامت دیجیتال',
    accuracy: 'دقت ۹۰٪'
  },
  {
    icon: <PsychologistIcon />,
    title: 'روانشناس هوش مصنوعی',
    description: 'چت‌بات پیشرفته با قابلیت تحلیل احساسات و ارائه مشاوره روانشناسی هوشمند',
    accuracy: 'دقت ۹۷٪'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 max-w-[1400px] mx-auto">
      <SectionTitle>پروژه‌های انجام شده</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, borderColor: 'rgba(0, 191, 255, 0.5)', boxShadow: '0 20px 40px rgba(0, 191, 255, 0.2)' }}
            className="bg-gradient-to-br from-dark-card to-dark-cardInner border border-primary/10 rounded-[20px] p-8 cursor-pointer transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-6">
              {project.icon}
            </div>
            <h3 className="text-2xl text-primary mb-4">{project.title}</h3>
            <p className="text-[#cccccc] mb-6 leading-relaxed">{project.description}</p>
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-semibold text-sm">
              {project.accuracy}
            </span>
            {project.note && (
              <p className="text-primary text-sm mt-2">{project.note}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
