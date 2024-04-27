export const metadata = {
  title: 'About',
  description: 'This is about page.',
};

export default function AboutPage() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src="/about/greetings.png" width="100%" />
      </div>

      <div className="mt-10 flex-col items-center">
        <p className="text-xl font-bold">
          주식회사 CM3네트워크는 정보통신업 건설 업체로 충실함을 바탕으로 성실한
          책임 시공을 통해
        </p>

        <p className="mt-4 text-xl font-bold ">
          고객만족에 한걸음 한걸음 다가갈 수 있도록 최선의 노력을 다하고
          있습니다.
        </p>

        <p className="mt-4 text-xl font-bold ">
          최고의 전문가와 기술력을 접목시켜
        </p>
        <p className="mt-4 text-xl font-bold ">
          <span style={{ color: 'orange' }}>
            통신공사, 네트워크, 주차관제, CCTV, 공시청유지보수
          </span>
          등 고객의 니즈에 맞는 다양한 솔루션을 제공해 드립니다.
        </p>
        <p className="mt-4 text-xl font-bold "></p>

        <p className="mt-4 text-xl font-bold ">
          금번 귀 회사에서 발주하는 공사에 저희 업체를 지명하여 주시기 바랍니다.
        </p>

        <p className="mt-4 text-xl font-bold ">
          항상 믿음이 가는 기업으로 성장할 것을 약속 드리며
        </p>

        <p className="mt-4 text-xl font-bold ">
          작은 일 하나에도 최선을 다하는 기업이 될 것을 저희 임직원 일동은 약속
          드립니다.
        </p>
      </div>

      <p className="mt-8 text-center text-2xl font-bold">
        주식회사 CM3네트워크 대표이사 박 운 황
      </p>
    </div>
  );
}
