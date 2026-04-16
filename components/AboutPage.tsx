
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavClick: (view: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full bg-white text-[#1a1a1a] font-sans selection:bg-[#EE3231] selection:text-white">
      {/* Hero Section */}
      <section className="px-5 pt-40 pb-12 md:pt-64 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-6 md:space-y-8 text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-lg md:text-3xl font-black leading-[1.1] tracking-tight break-keep adobe-font"
            >
              브랜드의 감각을 {' '}
              <span className="text-[#EE3231]">시각적으로 풀어냅니다</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed break-keep"
            >
              DLLD design은 브랜드가 가진 이야기를 시각적으로 번역하는 디자인 스튜디오입니다.<br />
              로고 디자인, 캐릭터 디자인, 콘텐츠 디자인을 통해 브랜드의 이야기를 시각적으로 풀어내고, 사람들의 일상 속에 자연스럽게 스며드는 브랜드를 만듭니다.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-5 py-12 md:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          {/* Philosophy 1 */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
          >
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#EE3231] adobe-font">
                “귀여움 그 이상을 만듭니다”
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed break-keep">
                단순히 귀여운 캐릭터를 만드는 것을 넘어서,<br />
                브랜드가 전달하고자 하는 메시지와 감정을 담아냅니다.<br />
                캐릭터가 브랜드의 일부가 아니라, 브랜드 자체가 될 수 있도록 디자인합니다.
              </p>
            </div>
          </motion.div>

          {/* Philosophy 2 */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
          >
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#EE3231] adobe-font">
                “브랜드의 이야기를 시각화합니다”
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed break-keep">
                모든 브랜드는 저마다의 이유와 방향을 가지고 시작됩니다.<br />
                DLLD는 그 이야기를 발견하고, 가장 적절한 형태로 시각화하는 과정을 중요하게 생각합니다.
              </p>
            </div>
          </motion.div>

          {/* Philosophy 3 */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
          >
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#EE3231] adobe-font">
                “일상에 머무는 디자인을 만듭니다”
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed break-keep">
                좋은 디자인은 한 번 보고 끝나는 것이 아니라, 사용자의 일상 속에 자연스럽게 스며듭니다.<br />
                우리는 오래 기억되고 지속적으로 소비되는 브랜드 경험을 만듭니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-5 pt-24 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight adobe-font">
              DLLD는 다음과 같은 디자인 작업을 진행합니다.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: '브랜딩 디자인', en: 'Brand Identity Design' },
                { title: '캐릭터 디자인', en: 'Character Design' },
                { title: '패키지 디자인', en: 'Package Design' },
                { title: '콘텐츠 디자인', en: 'Content Design' }
              ].map((service, idx) => (
                <div key={idx} className="group p-8 bg-white border border-gray-100 hover:border-[#EE3231] transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#EE3231] transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">{service.en}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process & Stats Section */}
      <section className="px-5 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {/* Process */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-16"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight adobe-font">Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: '브랜드 이해', desc: '목표와 타겟 분석' },
                { step: '02', title: '컨셉 도출', desc: '디자인 방향 설정' },
                { step: '03', title: '시각화', desc: '아이덴티티 구현' },
                { step: '04', title: '확장', desc: '다양한 매체 적용' }
              ].map((item, idx) => (
                <div key={idx} className="relative pt-8 border-t border-gray-200">
                  <span className="absolute top-0 left-0 text-xs font-bold text-[#EE3231] -translate-y-1/2 bg-white pr-2">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="max-w-5xl mx-auto pt-12 border-t border-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                { num: '80+', text: '누적 프로젝트' },
                { num: '50+', text: '협업 브랜드' },
                { num: '80%', text: '재작업 비율' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <span className="text-sm md:text-base text-[#1a1a1a] font-bold tracking-tight">
                    {stat.text}
                  </span>
                  <div className="bg-[#EE3231] px-8 py-4 rounded-xl shadow-sm">
                    <span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                      {stat.num}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 pt-16 pb-32 md:pt-24 md:pb-56 text-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto space-y-12"
        >
          <h2 className="text-xl md:text-3xl font-black leading-tight adobe-font break-keep">
            브랜드를 더 명확하게 만들고 싶다면,<br />
            <span className="text-[#EE3231]">DLLD와 함께하세요.</span>
          </h2>
          <button 
            onClick={() => onNavClick('contact')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#EE3231] text-white font-bold rounded-full hover:bg-black transition-colors duration-300 group"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
