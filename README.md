# 선교비전교회 웹사이트

선교비전교회 공식 홈페이지입니다. Astro 기반 정적 사이트로 구성되어 있습니다.

## 기술 스택

- **프레임워크**: Astro 5
- **스타일**: Tailwind CSS
- **배포**: Vercel

## 프로젝트 구조

```
mvc-app/
├── frontend/          # Astro 앱 (전체 웹사이트)
│   ├── public/        # 정적 자산 (이미지, favicon 등)
│   ├── src/
│   │   ├── components/  # UI 컴포넌트
│   │   ├── content/     # 콘텐츠 (JSON 설정, Markdown)
│   │   ├── layouts/
│   │   ├── lib/         # 유틸리티 (content 로더 등)
│   │   ├── pages/       # 페이지
│   │   └── styles/
│   └── package.json
├── content-examples/   # 콘텐츠 스키마 예시
└── vercel.json        # 루트 배포 설정 (frontend 빌드)
```

## 시작하기

### 사전 요구사항

- Node.js 18+
- npm

### 설치 및 실행

```bash
cd frontend
npm install
npm run dev
```

개발 서버: http://localhost:4321

### 빌드

```bash
cd frontend
npm run build
```

출력: `frontend/dist/`

### 배포 (Vercel)

루트의 `vercel.json`이 `frontend/`를 빌드하도록 설정되어 있습니다. 저장소를 Vercel에 연결하면 자동 배포됩니다.

## 콘텐츠 관리

- **교회 정보, 예배, 연락처 등**: `frontend/src/content/config/*.json`
- **설교, 소식**: `frontend/src/content/sermons/`, `news/` (Markdown)
- **히어로 슬라이드, 팝업**: `frontend/src/content/config/hero-slides.json`, `popup-ad.json`

## 환경 변수 (선택)

네이버 지도 API를 사용하려면:

1. [네이버 클라우드 콘솔](https://console.ncloud.com/maps/application)에서 Application 등록
2. "Dynamic Map"(Web Dynamic Map) 체크 필수
3. `frontend/.env` 생성:

```
PUBLIC_NCP_KEY_ID=발급받은_키
```

4. Vercel 배포 시: Project Settings > Environment Variables에 동일하게 추가

## 라이선스

© 선교비전교회
