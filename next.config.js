/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['culture.seoul.go.kr', 'www.sejongpac.or.kr'], // 허용할 도메인 목록을 추가
  },
  async rewrites() {
    return [
      {
        source: '/api/culturalEventInfo/:type/:start/:end',
        destination: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}/:type/culturalEventInfo/:start/:end`,
      },
    ];
  },
};

module.exports = nextConfig;
