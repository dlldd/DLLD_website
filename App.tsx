import React, { useState, useEffect } from 'react';
import Header, { ViewType as BaseViewType } from './components/Header';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ProjectDetail from './components/ProjectDetail';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import IntroOverlay from './components/IntroOverlay';
import AboutPage from './components/AboutPage';
import { Project, HeroImages, WorkCategory } from './types';

export type ViewType = BaseViewType | 'project-detail' | 'admin-login' | 'admin-dashboard' | 'about';

// 초기 이미지 URL들
const BRAND_HERO_IMAGE_URL = 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_therabbit%2022.png';
const PACKAGE_HERO_IMAGE_URL = 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_gs-02.jpg';
const CHARACTER_HERO_URL = 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.54.33.png';
const GRAPHIC_HERO_URL = 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/sbs%20%E1%84%80%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%AB_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A13.jpg';
const LOGO_URL = 'https://raw.githubusercontent.com/dlldd/DLLD-web/refs/heads/main/DLLD%E1%84%85%E1%85%A9%E1%84%80%E1%85%A92.png'; 
const ACCENT_IMAGE_URL = 'https://raw.githubusercontent.com/dlldd/DLLD-web/refs/heads/main/DLLD%E1%84%85%E1%85%A9%E1%84%80%E1%85%A93.png';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const STORAGE_KEYS = {
    PROJECTS: 'dlld_projects',
    HERO: 'dlld_hero_images',
    LOGO: 'dlld_logo',
    ACCENT: 'dlld_accent',
    ABOUT: 'dlld_about',
    GROWTH: 'dlld_growth',
    VERSION: 'dlld_data_version'
  };

  const CURRENT_VERSION = '5.3'; // 버전 숫자를 올리면 로컬 스토리지를 초기화하고 새 코드를 반영합니다.

  const [projects, setProjects] = useState<Project[]>(() => {
    const savedVersion = localStorage.getItem(STORAGE_KEYS.VERSION);
    const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    
    if (savedVersion !== CURRENT_VERSION || !savedProjects) {
      localStorage.setItem(STORAGE_KEYS.VERSION, CURRENT_VERSION);
      return [
        {
          id: '리틀펄리',
          title: "아동 구강 브랜드 '리틀펄리'\n캐릭터 디자인",
          category: WorkCategory.Character,
          year: '2026',
          imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-20.jpg',
          description: "리틀펄리의 공식 캐릭터 ‘펄리’는 빛나는 진주를 모티브로 탄생한 구강 케어 수호 캐릭터로, 아이들의 치아를 충치로부터 보호하고 올바른 구강 습관을 자연스럽게 길러주기 위해 개발되었습니다. ‘펄리’는 순수하고 깨끗한 진주의 이미지를 담아 건강한 치아의 상징이자, 아이들에게 친근하게 다가가는 친구 같은 존재입니다.\n\n 작은 날개로 부드럽게 날아다니며 아이들의 곁을 지키고, 즐겁고 긍정적인 경험을 통해 스스로 치아를 관리할 수 있도록 돕습니다. 리틀펄리는 ‘펄리’를 통해 구강 관리의 중요성을 쉽고 따뜻하게 전달하며, 아이들이 건강한 미소를 오래도록 유지할 수 있도록 함께합니다.",
          client: '리틀펄리',
          hideMainImageInDetail: true,
          galleryImages: [
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-13.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-14.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-16.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-17.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-18.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-19.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-20.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-21.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%85%E1%85%B5%E1%84%90%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF-22.jpg'
          ]
        },
        {
          id: '19',
          title: "베이커리 '고미베이커'\n브랜딩",
          category: WorkCategory.Brand,
          year: '2025',
          imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/gomi_tn2.jpg',
          description: "따뜻하고 유쾌한 베이커리 브랜드 ‘Gomi Baker’의 브랜드 아이덴티티를 디자인했습니다.\n\n‘Gomi Baker’는 친근한 곰 캐릭터를 중심으로, 갓 구운 빵처럼 편안하고 기분 좋은 순간을 전하는 브랜드입니다. 일상 속 작은 달콤함과 여유를 전달하는 것을 핵심 가치로 삼고 있습니다.\n\n전체적인 그래픽 요소는 일관된 톤앤매너로 확장되어 ‘Gomi Baker’만의 따뜻하고 유쾌한 브랜드 경험을 완성했습니다.",
          client: '고미베이커',
          hideMainImageInDetail: true,
          galleryImages: [
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%80%E1%85%A9%E1%84%86%E1%85%B5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AFq22-01.png',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%80%E1%85%A9%E1%84%86%E1%85%B5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AFq22-02.png',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%80%E1%85%A9%E1%84%86%E1%85%B5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A5_%E1%84%91%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AFq22-03.png'
          ]
        },
        {
          id: '5',
          title: 'GS25x치키차카초코\n찰깨크림빵 패키지',
          category: WorkCategory.Package,
          year: '2024',
          imageUrl: PACKAGE_HERO_IMAGE_URL,
          description: "100만개 이상 판매, GS25 디저트 카테고리 매출 1·2위를 기록한 치키차카초코 패키지 디자인을 진행했습니다.\n브랜드 캐릭터와 맛의 특징을 강조한 컬러 시스템을 통해 제품 인지도를 빠르게 확산시켰으며, 시리즈 간 일관성과 맛별 구분을 동시에 고려한 디자인으로 구매 전환을 극대화했습니다.",
          client: 'GS25',
          hideMainImageInDetail: true,
          galleryImages: ['https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_gs2.png']
        },
        {
          id: '9',
          title: "프렌차이즈 디저트 브랜드\n'치키차카초코' 브랜딩",
          category: WorkCategory.Brand,
          year: '2024',
          imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/refs/heads/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.18.13.png',
          description: "브랜드의 핵심 자산이 되는 캐릭터를 개발하고, 이를 중심으로 한 비주얼 아이덴티티를 설계했습니다. 캐릭터의 성격과 세계관을 반영해 로고, 컬러, 그래픽 요소를 확장 가능한 구조로 정리했습니다.\n브랜드 확장 이후에는 20개 이상 지점의 외부·내부 사이니지 및 공간 그래픽을 직접 디자인하며, 각 매장에서도 동일한 브랜드 경험이 구현되도록 전반적인 시각 시스템을 운영했습니다.",
          client: '치키차카초코',
          hideMainImageInDetail: true,
          galleryImages: [
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.54.56.png',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/output_2197159711.jpg',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.55.10.png',
            'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.18.13.png'
          ]
        },
      {
        id: '4',
        title: '2023 SBS 가요대전\n굿즈 디자인',
        category: WorkCategory.Graphic,
        year: '2023',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/sbs%20%E1%84%80%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%AB_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A13.jpg',
        description: "2023 SBS 가요대전 캐릭터 달토를 이용한 굿즈 디자인을 진행했습니다.\n\nY2K 감성과 ‘달에서 온 토끼’라는 컨셉이 자연스럽게 어우러지도록 디자인했습니다. 단순히 캐릭터를 배치하는 것이 아니라, 트렌디한 요소를 가미하고 컬러감과 레이아웃을 조정해 브랜드의 콘셉트를 더욱 강조했습니다. \n\n(캐릭터 협업 작업으로 캐릭터 달토를 이용한 작업 입니다.)",
        client: 'SBS',
        hideMainImageInDetail: true,
        galleryImages: [
          GRAPHIC_HERO_URL,
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/sbs%20%E1%84%80%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%AB_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A15.jpg'
        ]
      },
      { 
        id: '2', 
        title: '요거트 퍼플\n캐릭터 디자인', 
        category: WorkCategory.Character, 
        year: '2025', 
        imageUrl: CHARACTER_HERO_URL, 
        description: "프리미엄 디저트 브랜드 '요거트퍼플'의 브랜딩 전반을 새롭게 리디자인했습니다. 캐릭터를 활용한 친근한 커뮤니케이션 전략을 수립했습니다.", 
        galleryImages: [CHARACTER_HERO_URL, 'https://raw.githubusercontent.com/dlldd/DLLD-web/refs/heads/main/222.jpg'],
        client: '에이앤디',
        hideMainImageInDetail: true
      },
      {
        id: '12',
        title: '‘탄소예산과 탄소감축경로 톺아보기’\n행사 포스터 디자인',
        category: WorkCategory.Graphic,
        year: '2025',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/turntable2.png',
        description: "2025년 주한독일대사관과 기후커뮤니티 턴테이블이 공동 주최하는 ‘탄소예산과 탄소감축경로 톺아보기’ 행사의 공식 포스터 및 키 비주얼 디자인입니다. 청년들이 기후위기 핵심 키워드가 쓰인 깃발을 들고 함께 달려가는 이미지로 청년들의 행동을 상징적으로 표현하였으며, 배경 하단에 위치한 산은 계속 줄어드는 탄소예산을 이중적으로 표현하였습니다.",
        client: '주한독일대사관, 턴테이블',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/turntable.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/turntable2.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/Subway%20Poster%20Mockup%20copy.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/IMG_0717.jpeg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/IMG_0719.jpeg'
        ]
      },
      { 
        id: '3', 
        title: "'비건잔치'\n제 12회 비건페스티벌", 
        category: 'Visual Identity', 
        year: '2024', 
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%B5-04%20(1).jpg',
        description: "국내 최대 비건 문화 축제인 '비건페스티벌'의 12회 디자인을 담당했습니다. '잔치'라는 테마에 맞춰 활기차고 다채로운 비주얼을 선보였습니다.",
        client: 'Vegan Festival Korea',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%B5-01.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%B5-02.jpg'
        ]
      },
      {
        id: '6',
        title: '뉴당 NEWDANG\n아이스크림 카페 브랜딩',
        category: WorkCategory.Brand,
        year: '2024',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-01.jpg',
        description: "뉴당(NewDang)은 ‘새로운 당을 정의한다’는 의미를 담은 저당 아이스크림 브랜드 IP입니다. 기존의 달콤함 중심 디저트 문화를 넘어, 가볍고 부담 없는 단맛의 기준을 제안합니다.\n\n메인 캐릭터 ‘당이’는 뉴당의 철학을 상징하는 마스코트로, ‘뉴당’ 깃발을 들고 새로운 당의 기준을 알리는 역할을 합니다. 함께하는 펭귄 캐릭터들은 브랜드의 가벼움과 즐거움을 시각적으로 확장하며, 아이스크림이 주는 차가움과 청량한 이미지를 강화합니다.\n\n뉴당 IP는 패키지, 굿즈, 공간 브랜딩 등 다양한 접점에서 확장 가능한 구조로 설계되었습니다.",
        client: '달당',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-01.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-02.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-03.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-04.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-05.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-06.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-07.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-08.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-09.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-10.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%83%E1%85%A1%E1%86%BC-11.jpg'
        ]
      },
      { 
        id: '1', 
        title: '프리미엄 비건 고메 브랜드\n더래빗 브랜딩', 
        category: WorkCategory.Brand, 
        year: '2024', 
        imageUrl: BRAND_HERO_IMAGE_URL, 
        description: "더래빗(The Rabbit)은 ‘채식과 미식의 즐거움’을 연결하는 비건 고메샵 브랜드 IP입니다. 기존의 절제와 건강 중심인 비건 문화를 넘어, 생동감 넘치는 맛과 즐거운 미식의 기준을 제안합니다.\n\n메인 캐릭터 ‘래빗’은 더래빗의 철학을 상징하는 마스코트로, 입맛을 다시며 경쾌하게 뛰어오르는 포즈를 통해 ‘비건 미식의 즐거움’을 시각화합니다. 특히 로고의 아치형 프레임은 실제 더래빗 매장의 아치형 문을 모티브로 설계되었으며, 이는 고객이 도심 속에서 비밀스러운 ‘토끼굴’로 들어서며 새로운 미식의 세계를 마주하는 경험을 상징합니다.\n\n더래빗 IP는 이러한 상징적인 아치 구조와 레트로한 무드를 바탕으로 패키지, 굿즈, 공간 브랜딩 등 온·오프라인의 다양한 접점에서 유연하게 확장 가능한 구조로 설계되었습니다.", 
        galleryImages: ['https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_therabbit%202%20(1).png'],
        client: '남미컴퍼니',
        hideMainImageInDetail: true
      },
      {
        id: '7',
        title: '올바른 감탄 비건장\n비주얼 아이덴티티',
        category: WorkCategory.Graphic,
        year: '2025',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.38.45.png',
        description: "비건 문화의 확산을 목표로 하는 '올바른 감탄 비건장'의 통합 브랜딩입니다. 자연과 상생하는 가치를 따뜻하고 정갈한 그래픽 언어로 표현했습니다.",
        client: 'Reblank,올바른농부장,Vegan Festival Korea',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.38.45.png',
        ]
      },
      {
        id: '8',
        title: '프렌차이즈 디저트 브랜드\n치키차카초코 패키지 디자인',
        category: WorkCategory.Package,
        year: '2024',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%8E%E1%85%B5%E1%84%8E%E1%85%A1%E1%84%8E%E1%85%A9%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-01.jpg',
        description: "프렌차이즈 디저트 카페 치키차카초코의 코르네 파이 패키지 리뉴얼 디자인입니다.",
        client: '치키차카초코',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%8E%E1%85%B5%E1%84%8E%E1%85%A1%E1%84%8E%E1%85%A9%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-05.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%8E%E1%85%B5%E1%84%8E%E1%85%A1%E1%84%8E%E1%85%A9%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-06.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%8E%E1%85%B5%E1%84%8E%E1%85%A1%E1%84%8E%E1%85%A9%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-01.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%8E%E1%85%B5%E1%84%8E%E1%85%A1%E1%84%8E%E1%85%A9%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-02.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%8E%E1%85%B5%E1%84%8E%E1%85%A1%E1%84%8E%E1%85%A9%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-03.jpg'
        ]
      },
      {
        id: '10',
        title: '부산 전포 카페 "Heap.p"브랜딩',
        category: WorkCategory.Brand,
        year: '2024',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/Heapp3.jpg',
        description: "부산 전포동에 위치한 카페 'Heap.p'의 브랜드 아이덴티티 디자인입니다.",
        client: 'Heap.p',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/Heapp3.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%92%E1%85%B5%E1%86%B8%E1%84%91%E1%85%B5-04.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%92%E1%85%B5%E1%86%B8%E1%84%91%E1%85%B5-05.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%92%E1%85%B5%E1%86%B8%E1%84%91%E1%85%B5-06.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%92%E1%85%B5%E1%86%B8%E1%84%91%E1%85%B5-09.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%92%E1%85%B5%E1%86%B8%E1%84%91%E1%85%B5-10.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/Heapp1.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/Heapp2.png'
        ]
      },
      {
        id: '11',
        title: "'도봉구성평등활동센터'\n몸 다양성 워크숍 포스터 디자인",
        category: WorkCategory.Graphic,
        year: '2021',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/Thumbnail.gif',
        description: "‘몸 다양성’과 여성 자기방어 훈련이라는 주제를 긍정적이고 역동적인 이미지로 풀어내기 위해, 강한 컬러 대비와 운동의 순간을 포착한 그래픽을 중심으로 시리즈 아이덴티티를 구축했습니다. 각 연도의 프로그램 성격에 맞춰 메시지 톤을 조정하면서도, 통일된 비주얼 언어를 유지해 연속성 있는 캠페인 이미지를 완성했습니다.",
        client: '도봉구성평등활동센터',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/Thumbnail.gif',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/dobong1.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/dobong2.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/dobong3.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/dobong4.jpg'
        ]
      },
      {
        id: '17',
        title: "제주도 '블루메베이글'\n브랜딩",
        category: WorkCategory.Brand,
        year: '2023',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-01.png',
        description: "제주도 제주공항 근처에 위치한 베이글집 블루메베이글의 브랜딩을 했습니다.",
        client: '블루메베이글',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-01.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-02.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-03.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-04.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-05.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-06.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-09.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-10.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-11.png',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%AE%E1%84%86%E1%85%A6-12.png'
        ]
      },
      {
        id: '16',
        title: "제9회 비건페스티벌 'Vegan Now' 디자인",
        category: "Visual Identity",
        year: '2021',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A62-06.jpg',
        description: "제9회 비건페스티벌 'Vegan Now'의 비주얼 아이덴티티 및 그래픽 디자인입니다.",
        client: 'Vegan Festival Korea',
        hideMainImageInDetail: true,
        galleryImages: [
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A62-01.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A62-03.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A62-04.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A62-05.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A62-06.jpg',
          'https://raw.githubusercontent.com/dlldd/DLLD-web/main/%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9_%E1%84%87%E1%85%B5%E1%84%80%E1%85%A5%E1%86%AB%E1%84%91%E1%85%A62-07.jpg'
        ]
      },
      {
        id: '15',
        title: 'Coming Soon',
        category: "",
        year: '',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/coming%20soon.jpg',
        description: "coming soon",
        client: '',
        hideMainImageInDetail: true,
        galleryImages: []
      },
      {
        id: '14',
        title: 'Coming Soon',
        category: "",
        year: '',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/coming%20soon.jpg',
        description: "coming soon",
        client: '',
        hideMainImageInDetail: true,
        galleryImages: []
      },
      {
        id: '13',
        title: 'Coming Soon',
        category: "",
        year: '',
        imageUrl: 'https://raw.githubusercontent.com/dlldd/DLLD-web/main/coming%20soon.jpg',
        description: "coming soon",
        client: '',
        hideMainImageInDetail: true,
        galleryImages: []
      }
    ];
    }
    return JSON.parse(savedProjects);
  });

  const [heroImages, setHeroImages] = useState<HeroImages>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.HERO);
    return saved ? JSON.parse(saved) : {
      [WorkCategory.Brand]: BRAND_HERO_IMAGE_URL,
      [WorkCategory.Package]: PACKAGE_HERO_IMAGE_URL,
      [WorkCategory.Character]: CHARACTER_HERO_URL,
      [WorkCategory.Graphic]: GRAPHIC_HERO_URL
    };
  });

  const [logoUrl, setLogoUrl] = useState(() => localStorage.getItem(STORAGE_KEYS.LOGO) || LOGO_URL);
  const [accentImageUrl, setAccentImageUrl] = useState(() => localStorage.getItem(STORAGE_KEYS.ACCENT) || ACCENT_IMAGE_URL);
  
  const [aboutContent, setAboutContent] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ABOUT);
    return saved ? JSON.parse(saved) : {
      text: "DLLD는 시각적 메시지의 본질을 탐구하고\n브랜드의 진정한 가치를 전달하는 디자인을 추구합니다.",
      subText1: "우리는 단순한 아름다움을 넘어 브랜드가 지닌 고유한 서사를 발견합니다.",
      subText2: "DLLD는 파트너와 함께 성장하며 지속 가능한 디자인 솔루션을 만들어갑니다.",
      imageUrl: BRAND_HERO_IMAGE_URL
    };
  });

  const [growthStats, setGrowthStats] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GROWTH);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects)), [projects]);
  useEffect(() => localStorage.setItem(STORAGE_KEYS.HERO, JSON.stringify(heroImages)), [heroImages]);
  useEffect(() => localStorage.setItem(STORAGE_KEYS.LOGO, logoUrl), [logoUrl]);
  useEffect(() => localStorage.setItem(STORAGE_KEYS.ACCENT, accentImageUrl), [accentImageUrl]);
  useEffect(() => localStorage.setItem(STORAGE_KEYS.ABOUT, JSON.stringify(aboutContent)), [aboutContent]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === '/' || hash === '/home') {
        setCurrentView('home');
        setSelectedProject(null);
      } else if (hash.startsWith('/project/')) {
        const projectId = hash.split('/project/')[1];
        const project = projects.find(p => p.id === projectId);
        if (project) {
          setSelectedProject(project);
          setCurrentView('project-detail');
        } else {
          window.location.hash = '#/';
        }
      } else {
        const view = hash.startsWith('/') ? hash.slice(1) : hash;
        setCurrentView(view as ViewType);
        setSelectedProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [projects]);

  const handleNavClick = (view: string) => {
    window.location.hash = `#/${view}`;
    window.scrollTo(0, 0);
  };

  const handleProjectClick = (project: Project) => {
    window.location.hash = `#/project/${project.id}`;
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
      case 'works':
        return <WorkGrid projects={projects} onProjectClick={handleProjectClick} />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage onNavClick={handleNavClick} />;
      case 'project-detail':
        return selectedProject ? <ProjectDetail project={selectedProject} onBack={() => handleNavClick('home')} /> : null;
      case 'admin-login':
        return <AdminLogin onLogin={() => setIsAdmin(true)} onCancel={() => handleNavClick('home')} />;
      case 'admin-dashboard':
        return isAdmin ? (
          <AdminDashboard 
            projects={projects} 
            heroImages={heroImages} 
            logoUrl={logoUrl}
            accentImageUrl={accentImageUrl}
            aboutContent={aboutContent}
            growthStats={growthStats}
            onUpdateProjects={setProjects}
            onUpdateHeroImages={setHeroImages}
            onUpdateLogo={setLogoUrl}
            onUpdateAccentImage={setAccentImageUrl}
            onUpdateAbout={setAboutContent}
            onUpdateGrowth={setGrowthStats}
            onClose={() => handleNavClick('home')} 
          />
        ) : <AdminLogin onLogin={() => setIsAdmin(true)} onCancel={() => handleNavClick('home')} />;
      default:
        return null;
    }
  };

  const isMinimalView = currentView === 'admin-login' || currentView === 'admin-dashboard';

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Overlay */}
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      {/* Main UI */}
      <div className={showIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {!isMinimalView && (
          <Header 
            onNavClick={handleNavClick as any} 
            currentView={currentView as BaseViewType} 
            logoUrl={logoUrl} 
          />
        )}
        
        <main className="min-h-screen">
          {renderContent()}
        </main>

        {!isMinimalView && <Footer onAdminClick={() => handleNavClick('admin-login')} />}
      </div>
    </div>
  );
};

export default App;
