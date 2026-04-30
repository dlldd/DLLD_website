
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ServiceCategory = 'Logo Design' | 'Branding' | 'Character Design' | 'Package Design';

interface ServiceContent {
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  images: string[];
  projectIds?: string[];
}

const servicesData: Record<ServiceCategory, ServiceContent> = {
  'Logo Design': {
    title: 'Logo Design',
    description: '소규모 창업자와 1인 브랜드를 위한 로고 디자인\n카페, 소형 매장, 개인 브랜드에 적합합니다',
    features: [
      '브랜드 성격을 반영한 로고 컨셉 도출',
      '다양한 환경에서 활용 가능한 심플한 구조',
      '심볼 + 워드마크 기반의 명확한 아이덴티티'
    ],
    deliverables: [
      '메인 로고 (기본형)',
      '로고 변형 (가로형 / 세로형)',
      '컬러 및 기본 사용 가이드'
    ],
    images: [
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-04-30%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.43.27.png',
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-04-30%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.47.33.png',
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-04-30%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.46.52.png'
    ]
  },
  'Branding': {
    title: 'Branding',
    description: '브랜드의 방향과 아이덴티티를 정리하는 브랜딩\n신규 론칭, 리브랜딩, 확장을 준비하는 브랜드에 추천합니다',
    features: [
      '브랜드 방향 및 컨셉 정의',
      '일관된 시각 톤앤매너 구축',
      '온·오프라인 전반에 적용 가능한 디자인 시스템'
    ],
    deliverables: [
      '브랜드 로고 및 기본 아이덴티티',
      '컬러 및 타이포그래피 가이드',
      '기본 브랜드 가이드 (간단 매뉴얼)',
      '패턴 개발'
    ],
    images: [
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_therabbit%2022.png',
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-01.jpg'
    ],
    projectIds: ['1', '6']
  },
  'Character Design': {
    title: 'Character Design',
    description: '브랜드의 개성을 표현하는 캐릭터 디자인\n굿즈, SNS, 콘텐츠 확장을 고려한 브랜드에 적합합니다',
    features: [
      '브랜드 성격을 반영한 캐릭터 컨셉 설계',
      '다양한 활용을 고려한 확장형 디자인',
      '콘텐츠 및 굿즈에 적용 가능한 구조'
    ],
    deliverables: [
      '캐릭터 기본형',
      '응용 동작 (표정 / 포즈)',
      '기본 활용 가이드',
      '간단 그래픽 요소 (아이콘 등)'
    ],
    images: [
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-20.jpg',
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.54.33.png'
    ],
    projectIds: ['18', '2']
  },
  'Package Design': {
    title: 'Package Design',
    description: '제품의 가치를 전달하는 패키지 디자인\n카페, F&B 브랜드, 제품 출시를 준비하는 브랜드에 적합합니다',
    features: [
      '제품과 타겟에 맞는 패키지 컨셉 설계',
      '브랜드에 맞는 그래픽 및 컬러 적용',
      '실제 제작을 고려한 구조 디자인'
    ],
    deliverables: [
      '패키지 디자인',
      '라벨 및 스티커 디자인',
      '인쇄 및 후가공 가이드'
    ],
    images: [
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_gs-02.jpg',
      'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%8E%E1%85%B5%E1%84%8E%E1%85%A1%E1%84%8E%E1%85%A9%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-01.jpg'
    ],
    projectIds: ['5', '8']
  }
};

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('Logo Design');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: ServiceCategory[] = ['Logo Design', 'Branding', 'Character Design', 'Package Design'];

  // Reset image index when switching categories
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? servicesData[activeTab].images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === servicesData[activeTab].images.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageClick = () => {
    const projectIds = servicesData[activeTab].projectIds;
    if (projectIds && projectIds[currentImageIndex]) {
      window.location.hash = `#/project/${projectIds[currentImageIndex]}`;
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="pt-40 md:pt-56 pb-40 px-6 md:px-12 max-w-7xl mx-auto min-h-screen font-sans bg-white">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Services</h1>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          DLLD는 각 분야의 전문성을 바탕으로 브랜드의 가치를 시각적으로 극대화하는 디자인 솔루션을 제공합니다.
        </p>
      </motion.div>

      {/* Tab Menu */}
      <div className="flex flex-wrap justify-center mb-24 gap-4 md:gap-8 border-b border-gray-100 pb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`text-sm md:text-lg font-black tracking-widest uppercase transition-all duration-300 relative py-2 ${
              activeTab === category ? 'text-black' : 'text-gray-300 hover:text-gray-600'
            }`}
          >
            {category}
            {activeTab === category && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#EE3231]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          {/* Text Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase line-tight">
                {servicesData[activeTab].title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium whitespace-pre-line">
                {servicesData[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6">
                <h3 className="text-xs uppercase font-black tracking-[0.2em] text-gray-400">Key Features</h3>
                <ul className="space-y-4">
                  {servicesData[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base font-bold text-gray-800">
                      <span className="w-1.5 h-1.5 bg-[#EE3231] rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xs uppercase font-black tracking-[0.2em] text-gray-400">Deliverables</h3>
                <ul className="space-y-4">
                  {servicesData[activeTab].deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base font-bold text-gray-800">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-10">
              <button
                onClick={() => {
                  window.location.hash = '#/contact';
                  window.scrollTo(0, 0);
                }}
                className="group relative inline-flex items-center gap-4 text-black font-black text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:text-[#EE3231] active:scale-95"
              >
                <span className="relative z-10">Contact Us</span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Project Previews Slider */}
          <div className="relative group">
            <div 
              className={`aspect-[4/3] overflow-hidden bg-gray-50 relative ${servicesData[activeTab].projectIds ? 'cursor-pointer' : ''}`}
              onClick={handleImageClick}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${currentImageIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${servicesData[activeTab].images[currentImageIndex]})` }}
                />
              </AnimatePresence>
              
              {/* Overlay for hover feedback */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                {servicesData[activeTab].projectIds && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/90 text-black px-6 py-3 rounded-full font-black text-xs tracking-widest uppercase shadow-2xl"
                  >
                    View Project
                  </motion.div>
                )}
              </div>
            </div>

            {/* Navigation Buttons - Only show if there's more than one image */}
            {servicesData[activeTab].images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 shadow-xl rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 shadow-xl rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {servicesData[activeTab].images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === idx ? 'bg-[#EE3231] w-6' : 'bg-black/20 hover:bg-black/40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image counter */}
            <div className="absolute top-6 right-6 font-black text-xs tracking-widest bg-black text-white px-3 py-1.5 rounded-full">
              {currentImageIndex + 1} / {servicesData[activeTab].images.length}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
