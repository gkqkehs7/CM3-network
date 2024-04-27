import { FaHouse } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa6';

export const metadata = {
  title: 'Contact',
  description: 'This is contact page.',
};

export default function ContactPage() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src="/contact/contact.jpg" width="100%" />
      </div>

      <div className="mt-8 text-3xl font-bold" style={{ color: 'orange' }}>
        통신공사, 네트워크, 주차관제, CCTV, 공시청유지보수
      </div>

      <h1 className="mt-4 text-3xl font-bold">
        20년 경력 전문가 분들의 경험을 바탕으로 시공이 진행됩니다
      </h1>

      {/* 전화연결 */}
      <div className="mt-4">
        <a className="flex items-center" href="1522-5182">
          <div className="mr-4 text-3xl font-bold">대표전화</div>
          <FaHouse size={30} className="mr-2" />
          <div className="text-3xl font-bold ">1522-5182</div>
        </a>

        <a className="mt-4 flex items-center" href="010-2892-6100">
          <div className="mr-4 text-3xl font-bold">상담전화</div>
          <FaPhoneVolume size={30} className="mr-2" />
          <div className="text-3xl font-bold">010-2892-6100</div>
        </a>
      </div>
    </div>
  );
}
