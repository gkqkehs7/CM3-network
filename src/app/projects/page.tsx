export const metadata = {
  title: 'Projects',
  description: 'This is projects page.',
};

const projects = [
  {
    date: '2023-02',
    company: '㈜더-리움',
    project: '평택 동탄현장 복합건물 통신공사',
  },
  {
    date: '2023-02',
    company: '건축주',
    project: '평택 비전동833-1 근린생활시설 신축통신공사',
  },
  {
    date: '2023-02',
    company: '건축주',
    project: '청주 오창 읍 기암리 상가 동 통신공사',
  },
  {
    date: '2023-03',
    company: '기아자동차',
    project: '광주공장 5공장 광케이블포설및 주차관제시설',
  },
  {
    date: '2023-03',
    company: '담양펜션',
    project: '전남 담양 펜션 리사빌리지 통신공사',
  },
  { date: '2023-04', company: '센터프라자', project: 'CCTV구축공사' },
  {
    date: '2023-04',
    company: '광산구보건소',
    project: '광산구보건소 통신공사 및 주차관제',
  },
  {
    date: '2023-04',
    company: 'K병원',
    project: '병원 리모텔링 통신공사,CCTV, 주차관제시설공사',
  },
  {
    date: '2023-04',
    company: 'KT스카이라이프',
    project: '청주 우암동 우양오피스텔 IF구축공사',
  },
  {
    date: '2023-04',
    company: '광주시교육청',
    project: '체육고등학교 증축 선로보수및 통신공사',
  },
  {
    date: '2023-05',
    company: '한전KDN',
    project: '내부망 분리작업및 광케이블 포설공사',
  },
  {
    date: '2023-05',
    company: '더 마크호텔',
    project: '청주 더마크호텔 IF공사및 주차관제',
  },
  {
    date: '2023-06',
    company: '지웰오피스텔',
    project: 'CCTV구축및 주차관제시설공사',
  },
  {
    date: '2023-06',
    company: '포레오피스텔',
    project: '내부 네트워크 및 통신공사',
  },
  {
    date: '2023-06',
    company: '한국아델리움',
    project: '지하 레이스웨이 유도관제',
  },
  {
    date: '2023-07',
    company: '㈜초우',
    project: '화순 수만리 캠핑장 통신공사',
  },
  {
    date: '2023-07',
    company: '건축주',
    project: '송파구 오금동 근린시설 통신공사',
  },
  {
    date: '2023-07',
    company: '㈜대라수건설',
    project: '광주 대라수오피스텔 헤드앤더및 주차관제 시설공사',
  },
  { date: '2023-07', company: '진천군', project: '요양원 CCTV구축공사12개소' },
  {
    date: '2023-08',
    company: '파킹 클라우드',
    project: '군산.남원.제천 TOP10 매장 주차관제시설공사',
  },
  {
    date: '2023-08',
    company: '한국공항공단',
    project: '항공기술훈련원 선로및 방송장비 교체공사/ IF공사',
  },
  {
    date: '2023-08',
    company: '백양관광호텔',
    project: '장성 백양사호텔 리모텔링 통신공사및 IF구축공사',
  },
  {
    date: '2023-08',
    company: '목포 신세계병원',
    project: '무선AP 네트워크 구축공사',
  },
  {
    date: '2023-08',
    company: '광주시교육청',
    project: '장덕중학교 선로보수및 통신공사',
  },
  {
    date: '2023-09',
    company: '포레오피스텔',
    project: '주차관제,유도관제 구축공사',
  },
  {
    date: '2023-09',
    company: '건강관리협회',
    project: '무선AP망 구축및 IF구축공사',
  },
  { date: '2023-09', company: '블루지움오피스텔', project: 'CCTV구축공사' },
  { date: '2023-09', company: '환경관리본부', project: '마을지원사업CCTV' },
  {
    date: '2023-10',
    company: '항공기술훈련원',
    project: '기숙사 리모델링 통신공사',
  },
  { date: '2023-10', company: '프렌치코드호텔', project: 'IF구축공사' },
  { date: '2023-10', company: '파킹 크라우드', project: '제천 상가주차관제' },
  {
    date: '2023-10',
    company: '아마노코리아',
    project: '광주방림골드클레스 주차, 유도관제구축공사',
  },
  {
    date: '2023-11',
    company: '청주VIP의료원',
    project: '네트워크공사/AP/방송시설',
  },
  { date: '2023-11', company: '프렌치코드호텔', project: 'IF구축공사' },
  {
    date: '2023-11',
    company: '파킹클라우드',
    project: '화순 백신센터 주차관제',
  },
  {
    date: '2023-11',
    company: '임광기전',
    project: '서울 동두천 TOP10 매장 통신공사',
  },
  {
    date: '2023-11',
    company: '파킹클라우드',
    project: '남원TOP10 매장 주차관제',
  },
  {
    date: '2023-12',
    company: 'KT SKYLIFE',
    project: ' 청주 뮤제오호텔 IF공사',
  },
  { date: '2023-12', company: 'KT SKYLIFE', project: '호텔쇼 IF공사' },

  // 나머지 데이터를 추가하세요
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="mb-4 text-center text-3xl font-bold">공사 실적</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-md border-2 border-black p-4 dark:border-white  "
            >
              <p className="mb-2 text-lg font-semibold">{project.date}</p>
              <p className="mb-2 text-lg font-semibold dark:text-[#FFA500] ">
                {project.company}
              </p>
              <p className="text-base">{project.project}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
