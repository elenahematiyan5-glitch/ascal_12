import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';

const teamMembers = [
  {
    emoji: '👩‍💻',
    name: 'النا همتیان',
    role: 'Web Developer & ML Enthusiast',
    skills: ['طراحی وب‌سایت‌های مدرن', 'طراحی قالب اختصاصی', 'اجرای پروژه‌های Office'],
    degrees: ['مدرک زبان از آموزشگاه کیش', 'Machine Learning از امیرکبیر', 'Python از دانشگاه Harvard'],
    languages: ['Python، C#، HTML، CSS', 'JavaScript، PHP، MySQL', 'مجموعه Office'],
    services: ['طراحی سایت', 'طراحی قالب اختصاصی', 'انجام پروژه‌های Office'],
    telegram: 'El_ena88',
    phone: '09383718432'
  },
  {
    emoji: '🤖',
    name: 'آرمان صلاحی',
    role: 'ML & Deep Learning Engineer',
    skills: ['Machine Learning', 'Deep Learning', 'ساخت دیتاست‌های تخصصی'],
    degrees: ['ML از دانشگاه امیرکبیر', 'DL از دانشگاه امیرکبیر', 'ساخت دیتاست از MIT'],
    languages: ['Python، Arduino', 'C++، HTML'],
    services: ['طراحی ربات‌های تحلیل‌گر', 'سیستم‌های تشخیص بیماری', 'سیستم‌های مدیریت و امنیت', 'توسعه مدل‌های هوش مصنوعی'],
    telegram: 'Armansalahi1',
    phone: '09911973227'
  },
  {
    emoji: '🎨',
    name: 'مهدی‌یار صلاحی',
    role: 'Graphic Designer',
    skills: ['طراحی حرفه‌ای با Corel و Photoshop', 'گرافیک تبلیغاتی و محتوایی'],
    services: ['طراحی پوستر', 'طراحی کارت ویزیت و بنر', 'طراحی تبلیغات', 'ایده‌پردازی برای تولید محتوا'],
    telegram: 'Mahdiyar1531'
  },
  {
    emoji: '🏠',
    name: 'علی میر',
    role: 'Smart Systems Developer',
    skills: ['طراحی سیستم‌های شناسایی', 'هوشمندسازی استارتاپ‌ها', 'محصولات نوین'],
    degrees: ['Python از دانشگاه Harvard'],
    languages: ['Python', 'JavaScript'],
    services: ['توسعه سیستم‌های هوشمند', 'نرم‌افزارهای مهندسی'],
    phone: '09916551310'
  },
  {
    emoji: '💻',
    name: 'مارال محمدی',
    role: 'Web Developer & ML Developer',
    skills: ['طراحی سایت', 'Machine Learning', 'طراحی قالب', 'امنیت سیستم‌های شرکتی'],
    degrees: ['ML از دانشگاه امیرکبیر', 'مدرک زبان از آموزشگاه کانون'],
    languages: ['Python، C#، HTML، CSS', 'JavaScript، PHP، MySQL', 'برنامه‌های Office'],
    services: ['طراحی سایت', 'طراحی قالب', 'پروژه Office', 'مدل‌های ML', 'امنیت سیستمی'],
    telegram: 'maral_mimnm'
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 px-8 max-w-[1400px] mx-auto">
      <SectionTitle>اعضای تیم</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, borderColor: 'rgba(0, 191, 255, 0.5)' }}
            className="bg-gradient-to-br from-dark-card to-dark-cardInner border border-primary/10 rounded-[20px] p-8 text-center transition-all duration-300"
          >
            <div className="w-[120px] h-[120px] mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00bfff] to-[#0080ff] flex items-center justify-center text-5xl border-[3px] border-primary/30">
              {member.emoji}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-primary text-sm mb-6">{member.role}</p>

            <div className="text-right space-y-6">
              <div className="skills-list">
                <h4 className="text-primary text-base mb-3 font-bold">مهارت‌ها:</h4>
                <ul className="space-y-1">
                  {member.skills.map((skill, idx) => (
                    <li key={idx} className="text-[#cccccc] text-sm pr-5 relative before:content-['◆'] before:absolute before:right-0 before:text-primary">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {member.degrees && (
                <div className="skills-list">
                  <h4 className="text-primary text-base mb-3 font-bold">مدارک:</h4>
                  <ul className="space-y-1">
                    {member.degrees.map((degree, idx) => (
                      <li key={idx} className="text-[#cccccc] text-sm pr-5 relative before:content-['◆'] before:absolute before:right-0 before:text-primary">
                        {degree}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.languages && (
                <div className="skills-list">
                  <h4 className="text-primary text-base mb-3 font-bold">زبان‌های برنامه‌نویسی:</h4>
                  <ul className="space-y-1">
                    {member.languages.map((lang, idx) => (
                      <li key={idx} className="text-[#cccccc] text-sm pr-5 relative before:content-['◆'] before:absolute before:right-0 before:text-primary">
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.services && (
                <div className="skills-list">
                  <h4 className="text-primary text-base mb-3 font-bold">خدمات:</h4>
                  <ul className="space-y-1">
                    {member.services.map((service, idx) => (
                      <li key={idx} className="text-[#cccccc] text-sm pr-5 relative before:content-['◆'] before:absolute before:right-0 before:text-primary">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-2 items-center">
              {member.telegram && (
                <a href={`https://t.me/${member.telegram}`} target="_blank" rel="noopener noreferrer" className="inline-block px-7 py-3 bg-primary/10 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-black transition-all hover:-translate-y-0.5">
                  📱 @{member.telegram}
                </a>
              )}
              {member.phone && (
                <a href={`tel:${member.phone}`} className="inline-block px-7 py-3 bg-primary/10 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-black transition-all hover:-translate-y-0.5">
                  📞 {member.phone}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
