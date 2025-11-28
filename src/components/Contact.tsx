import { SectionTitle } from './ui/SectionTitle';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-8 max-w-[1400px] mx-auto">
      <SectionTitle>تماس با ما</SectionTitle>
      
      <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-gradient-to-br from-dark-card to-dark-cardInner border border-primary/10 rounded-[20px] p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-primary text-xl mb-3">تلفن تماس</h3>
          <p><a href="tel:09911973227" className="text-[#cccccc] hover:text-primary transition-colors">۰۹۹۱۱۹۷۳۲۲۷</a></p>
        </div>

        <div className="bg-gradient-to-br from-dark-card to-dark-cardInner border border-primary/10 rounded-[20px] p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-primary text-xl mb-3">تلگرام</h3>
          <p><a href="https://t.me/El_ena88" target="_blank" rel="noopener noreferrer" className="text-[#cccccc] hover:text-primary transition-colors">@El_ena88</a></p>
        </div>

        <div className="bg-gradient-to-br from-dark-card to-dark-cardInner border border-primary/10 rounded-[20px] p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-primary text-xl mb-3">ایمیل</h3>
          <p><a href="mailto:info@ascai.com" className="text-[#cccccc] hover:text-primary transition-colors">info@ascai.com</a></p>
        </div>
      </div>
    </section>
  );
};
