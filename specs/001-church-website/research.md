# Research: 선교비전교회 홈페이지 기술 스택 및 전략

**Date**: 2026-02-18  
**Feature**: 001-church-website

## 1. 정적 사이트 생성 프레임워크 비교

### 후보
- Next.js (SSG)
- Astro
- Gatsby

### 비교 결과

| 항목 | Next.js | Astro | Gatsby |
|------|---------|-------|--------|
| 성능 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 개발 경험 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 배포 편의성 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| React 생태계 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 학습 곡선 | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

### 결정: Astro

**Rationale**:
- 완전 정적 사이트 (서버 없음) - Spec 요구사항과 완벽 일치
- 최소 JS (필요시에만 추가) - Spec 요구사항과 일치
- React 몰라도 됨 (기본 HTML/CSS/JS로 가능) - 학습 곡선 낮음
- Markdown 중심 콘텐츠 관리 - Spec 요구사항과 일치
- 유지보수 단순성 - Spec 요구사항과 일치
- Python/Java 개발자에게 더 적합한 구조

**Alternatives Considered**:
- Next.js: React 학습 필요, 서버 기능 기본 전제, Spec 요구사항과 불일치
- Gatsby: 복잡도 높고 런타임 오버헤드, GraphQL 필요

---

## 2. 콘텐츠 관리 방식 연구

### 후보
- JSON
- YAML
- Markdown + Frontmatter

### 비교 결과

| 항목 | JSON | YAML | Markdown |
|------|------|------|----------|
| 구조화 데이터 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 텍스트 콘텐츠 | ⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| 가독성 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 타입 검증 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| 주석 지원 | ❌ | ✅ | ✅ |

### 결정: 하이브리드 (JSON + Markdown)

**Rationale**:
- 구조화된 데이터(교회 정보, 예배 시간) → JSON
- 텍스트 콘텐츠(설교, 공지) → Markdown + Frontmatter
- 각각의 장점 활용

**구조**:
```
/content
├── config/
│   ├── church.json          # 구조화된 데이터
│   ├── worship.json
│   ├── location.json
│   └── contact.json
├── sermons/                 # 텍스트 콘텐츠
│   └── *.md
└── news/
    └── *.md
```

---

## 3. 정적 호스팅 서비스 비교

### 후보
- Vercel
- Netlify
- AWS S3 + CloudFront

### 비교 결과

| 항목 | Vercel | Netlify | AWS S3 + CloudFront |
|------|--------|---------|---------------------|
| 배포 편의성 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| 비용 | 무료 플랜 | 무료 플랜 | 사용량 기반 |
| Next.js 통합 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 성능 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 설정 복잡도 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

### 결정: Vercel

**Rationale**:
- Next.js와 완벽한 통합
- 무료 플랜 제공 (개인/소규모 프로젝트)
- 배포 자동화 (Git 연동)
- 성능 우수 (글로벌 CDN)
- 설정 최소화

**Alternatives Considered**:
- Netlify: 유사하나 Next.js 통합이 Vercel보다 약간 낮음
- AWS S3 + CloudFront: 비용 및 설정 복잡도 높음

---

## 4. 성능 최적화 전략

### 전략

1. **이미지 최적화**
   - Next.js Image 컴포넌트 사용
   - WebP 형식 자동 변환
   - Lazy loading

2. **코드 스플리팅**
   - 페이지별 자동 코드 스플리팅
   - 동적 import 활용

3. **SEO 최적화**
   - 메타 태그 설정
   - 구조화된 데이터 (JSON-LD)
   - sitemap.xml 생성

4. **캐싱 전략**
   - 정적 자산 캐싱
   - CDN 활용

### 목표
- 페이지 로딩 2초 이내
- Lighthouse 성능 점수 90+
- First Contentful Paint < 1.5초

---

## 5. 접근성 구현

### 전략

1. **WCAG 2.1 준수**
   - Level AA 목표
   - 색상 대비 비율 준수
   - 키보드 네비게이션 지원

2. **키보드 네비게이션**
   - 모든 인터랙티브 요소 접근 가능
   - 포커스 표시 명확

3. **prefers-reduced-motion 지원**
   - 애니메이션 비활성화 옵션
   - 사용자 선호 설정 존중

4. **스크린 리더 지원**
   - 의미론적 HTML 사용
   - ARIA 레이블 적절히 사용
   - alt 텍스트 제공

---

## 6. 콘텐츠 타입 검증

### 전략

1. **JSON Schema 검증**
   - 콘텐츠 파일 스키마 정의
   - 빌드 시 검증
   - 개발 환경에서 실시간 검증

2. **타입스크립트 타입 정의**
   - 콘텐츠 엔티티 타입 정의
   - 타입 안정성 확보

3. **빌드 타임 검증**
   - 빌드 시 모든 콘텐츠 파일 검증
   - 스키마 위반 시 에러 발생

---

## 7. 배포 워크플로우

### 전략

1. **Git 기반 배포**
   - GitHub/GitLab 연동
   - Push 시 자동 배포
   - Preview 배포 지원

2. **환경 변수 관리**
   - 민감 정보만 .env 사용
   - Vercel 환경 변수 설정

3. **CI/CD**
   - 자동 빌드 및 배포
   - 빌드 실패 시 알림

---

## 최종 기술 스택

- **프레임워크**: Astro
- **언어**: JavaScript (ES6+)
- **스타일링**: Tailwind CSS
- **콘텐츠 관리**: JSON + Markdown
- **호스팅**: Vercel
- **테스팅**: (선택사항, 필요시 추가)
- **빌드 도구**: Astro 내장

---

## 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [JSON Schema](https://json-schema.org/)
