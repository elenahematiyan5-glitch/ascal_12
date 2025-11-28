import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';

type TeamMember = {
  name: string;
  telegram: string | null;
  phone: string | null;
};

const teamContacts: Record<string, TeamMember[]> = {
  'web-design': [
    { name: 'النا همتیان', telegram: 'El_ena88', phone: '09383718432' },
    { name: 'مارال محمدی', telegram: 'maral_mimnm', phone: null }
  ],
  'template-design': [
    { name: 'النا همتیان', telegram: 'El_ena88', phone: '09383718432' },
    { name: 'مارال محمدی', telegram: 'maral_mimnm', phone: null }
  ],
  'office-project': [
    { name: 'النا همتیان', telegram: 'El_ena88', phone: '09383718432' },
    { name: 'مارال محمدی', telegram: 'maral_mimnm', phone: null }
  ],
  'ai-bot': [
    { name: 'آرمان صلاحی', telegram: 'Armansalahi1', phone: '09911973227' }
  ],
  'disease-detection': [
    { name: 'آرمان صلاحی', telegram: 'Armansalahi1', phone: '09911973227' }
  ],
  'ai-model': [
    { name: 'آرمان صلاحی', telegram: 'Armansalahi1', phone: '09911973227' },
    { name: 'مارال محمدی', telegram: 'maral_mimnm', phone: null },
    { name: 'النا همتیان', telegram: 'El_ena88', phone: '09383718432' }
  ],
  'security-system': [
    { name: 'آرمان صلاحی', telegram: 'Armansalahi1', phone: '09911973227' },
    { name: 'مارال محمدی', telegram: 'maral_mimnm', phone: null }
  ],
  'graphic-design': [
    { name: 'مهدی‌یار صلاحی', telegram: 'Mahdiyar1531', phone: null }
  ],
  'smart-system': [
    { name: 'علی میر', telegram: null, phone: '09916551310' }
  ]
};

const projectTypeLabels: Record<string, string> = {
  'web-design': 'طراحی سایت',
  'template-design': 'طراحی قالب اختصاصی',
  'office-project': 'پروژه Office',
  'ai-bot': 'ربات تحلیل‌گر',
  'disease-detection': 'سیستم تشخیص بیماری',
  'ai-model': 'مدل هوش مصنوعی',
  'security-system': 'امنیت سیستم‌های شرکتی',
  'graphic-design': 'گرافیک تبلیغاتی',
  'smart-system': 'سیستم هوشمند'
};

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    projectType: '',
    description: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    const teamMembers = teamContacts[formData.projectType];

    if (teamMembers && teamMembers.length > 0) {
      const message = `🔔 سفارش جدید از وب‌سایت

👤 نام: ${formData.fullName}
📞 تلفن: ${formData.phone}
🎯 نوع پروژه: ${projectTypeLabels[formData.projectType]}
📝 توضیحات: ${formData.description}
💰 بودجه: ${formData.budget || 'ذکر نشده'}

🕐 ${new Date().toLocaleString('fa-IR')}`;

      teamMembers.forEach((member, index) => {
        setTimeout(() => {
          if (member.telegram) {
            const telegramUrl = `https://t.me/${member.telegram}?text=${encodeURIComponent(message)}`;
            window.open(telegramUrl, '_blank', 'noopener,noreferrer');
          }
        }, index * 500);
      });

      setShowSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        projectType: '',
        description: '',
        budget: ''
      });

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="py-24 px-8 max-w-[1400px] mx-auto">
      <SectionTitle>ثبت سفارش پروژه</SectionTitle>
      
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-[700px] mx-auto bg-gradient-to-br from-dark-card to-dark-cardInner border border-primary/10 rounded-[20px] p-8 md:p-12"
      >
        <div className="mb-7">
          <label htmlFor="fullName" className="block mb-2 text-primary font-medium">نام و نام خانوادگی *</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            required 
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-primary/20 rounded-[10px] text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="mb-7">
          <label htmlFor="phone" className="block mb-2 text-primary font-medium">شماره تماس *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-primary/20 rounded-[10px] text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="mb-7">
          <label htmlFor="projectType" className="block mb-2 text-primary font-medium">نوع پروژه *</label>
          <select 
            id="projectType" 
            name="projectType" 
            required 
            value={formData.projectType}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-primary/20 rounded-[10px] text-white focus:outline-none focus:border-primary transition-colors appearance-none"
          >
            <option value="" className="bg-dark-card">انتخاب کنید</option>
            <option value="web-design" className="bg-dark-card">طراحی سایت</option>
            <option value="template-design" className="bg-dark-card">طراحی قالب اختصاصی</option>
            <option value="office-project" className="bg-dark-card">پروژه Office</option>
            <option value="ai-bot" className="bg-dark-card">ربات تحلیل‌گر</option>
            <option value="disease-detection" className="bg-dark-card">سیستم تشخیص بیماری</option>
            <option value="ai-model" className="bg-dark-card">مدل هوش مصنوعی</option>
            <option value="security-system" className="bg-dark-card">امنیت سیستم‌های شرکتی</option>
            <option value="graphic-design" className="bg-dark-card">گرافیک تبلیغاتی</option>
            <option value="smart-system" className="bg-dark-card">سیستم هوشمند</option>
          </select>
        </div>

        <div className="mb-7">
          <label htmlFor="description" className="block mb-2 text-primary font-medium">توضیحات پروژه *</label>
          <textarea 
            id="description" 
            name="description" 
            required 
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-primary/20 rounded-[10px] text-white focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-y"
          ></textarea>
        </div>

        <div className="mb-7">
          <label htmlFor="budget" className="block mb-2 text-primary font-medium">بودجه پیشنهادی (تومان)</label>
          <input 
            type="text" 
            id="budget" 
            name="budget" 
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-4 bg-white/5 border border-primary/20 rounded-[10px] text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full p-5 bg-gradient-to-br from-[#00bfff] to-[#0080ff] rounded-[10px] text-white text-lg font-semibold cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'در حال ارسال...' : 'ارسال سفارش'}
        </button>

        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-primary/10 border border-primary rounded-[10px] text-primary text-center"
          >
            سفارش شما با موفقیت ارسال شد! به زودی از طریق تلگرام با شما تماس خواهیم گرفت.
          </motion.div>
        )}
      </motion.form>
    </section>
  );
};
