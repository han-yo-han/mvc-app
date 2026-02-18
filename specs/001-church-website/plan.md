# Implementation Plan: 선교비전교회 홈페이지 (정보공개형 정적 사이트)

**Branch**: `001-church-website` | **Date**: 2026-02-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-church-website/spec.md`

## Summary

선교비전교회의 정보공개형 정적 홈페이지를 구축한다. 서버 없이 운영 가능하며, 운영자가 코드 수정 없이 JSON/Markdown 파일만으로 콘텐츠를 관리할 수 있어야 한다. Astro를 활용하여 완전 정적 사이트로 빌드하고, Vercel에 배포한다.

## Technical Context

**Language/Version**: JavaScript (ES6+), Node.js 18+  
**Primary Dependencies**: Astro, Tailwind CSS  
**Storage**: 파일 시스템 (JSON/Markdown 파일)  
**Testing**: Jest, React Testing Library, Playwright (E2E)  
**Target Platform**: 웹 브라우저 (모바일/태블릿/데스크탑 반응형)  
**Project Type**: web (정적 사이트)  
**Performance Goals**: 페이지 로딩 2초 이내, Lighthouse 성능 점수 90+  
**Constraints**: 서버 없이 정적 운영, 콘텐츠는 코드와 분리 관리, 운영자가 코드 수정 없이 콘텐츠 업데이트 가능  
**Scale/Scope**: 7개 페이지 (Home, 교회소개, 예배안내, 설교, 교회소식, 오시는길, 새가족)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- ✅ 최소 구현 원칙 준수: 정적 사이트로 최소한의 복잡도 유지
- ✅ 콘텐츠와 코드 분리: JSON/Markdown 파일로 콘텐츠 관리
- ✅ 운영자 친화적: 코드 수정 없이 콘텐츠만 업데이트 가능
- ✅ 확장 가능성: 향후 기능 추가 시에도 구조 유지 가능

## Project Structure

### Documentation (this feature)

```text
specs/001-church-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
frontend/
├── src/
│   ├── pages/                 # Astro 페이지
│   │   ├── index.astro       # Home
│   │   ├── about.astro       # 교회소개
│   │   ├── worship.astro     # 예배안내
│   │   ├── sermons/          # 설교
│   │   │   └── index.astro
│   │   ├── news/             # 교회소식
│   │   │   └── index.astro
│   │   ├── location.astro    # 오시는길
│   │   └── newcomer.astro    # 새가족
│   ├── components/           # Astro 컴포넌트
│   │   ├── Layout.astro
│   │   └── sections/
│   ├── layouts/              # 레이아웃
│   │   └── Layout.astro
│   ├── lib/                  # 유틸리티 함수
│   │   ├── content.js        # 콘텐츠 로더
│   │   └── utils.js
│   ├── content/              # 콘텐츠 파일 (JSON/Markdown)
│   │   ├── config/
│   │   │   ├── church.json
│   │   │   ├── worship.json
│   │   │   ├── location.json
│   │   │   └── contact.json
│   │   ├── sermons/          # 설교 Markdown 파일
│   │   └── news/             # 공지 Markdown 파일
│   └── styles/               # 글로벌 스타일
│       └── global.css        # Tailwind CSS 포함
├── public/                   # 정적 자산
│   ├── images/
│   └── icons/
├── astro.config.mjs
├── tailwind.config.mjs       # Tailwind CSS 설정
├── package.json
└── README.md
```

**Structure Decision**: Astro를 사용한 완전 정적 사이트 구조. 콘텐츠는 `/content` 디렉토리에 JSON/Markdown 파일로 관리하며, 빌드 시 정적 HTML로 생성된다. React 없이 기본 HTML/CSS/JS로 구현 가능하며, 필요시에만 JS를 추가한다.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

N/A - Constitution Check 통과

---

## Phase 0: Outline & Research

### Research Tasks

1. **정적 사이트 생성 프레임워크 비교**
   - Next.js SSG vs Astro vs Gatsby
   - 성능, 개발 경험, 배포 편의성 비교

2. **콘텐츠 관리 방식 연구**
   - JSON vs YAML vs Markdown
   - 파일 기반 CMS 패턴
   - 콘텐츠 타입 검증 방법

3. **정적 호스팅 서비스 비교**
   - Vercel vs Netlify vs AWS S3 + CloudFront
   - 비용, 성능, 배포 워크플로우 비교

4. **성능 최적화 전략**
   - 이미지 최적화 (Next.js Image)
   - 코드 스플리팅
   - SEO 최적화

5. **접근성 구현**
   - WCAG 2.1 준수
   - 키보드 네비게이션
   - prefers-reduced-motion 지원

### Research Findings

**Decision**: Astro with Static Site Generation

**Rationale**:
- 완전 정적 사이트 (서버 없음) - Spec 요구사항과 완벽 일치
- 최소 JS (필요시에만 추가) - Spec 요구사항과 일치
- React 몰라도 됨 (기본 HTML/CSS/JS로 가능) - 학습 곡선 낮음
- Markdown 중심 콘텐츠 관리 - Spec 요구사항과 일치
- 유지보수 단순성 - Spec 요구사항과 일치
- Vercel과의 통합으로 배포 간편

**Alternatives Considered**:
- Next.js: React 학습 필요, 서버 기능 기본 전제, Spec 요구사항과 불일치
- Gatsby: 복잡도 높고 런타임 오버헤드, GraphQL 필요
- Plain HTML/CSS: 유지보수 어려움

---

## Phase 1: Design & Contracts

### Data Model

콘텐츠는 파일 시스템에 저장되며, 빌드 시 읽어와서 정적 페이지로 생성된다.

#### Church Entity
```typescript
interface Church {
  name: string;
  slogan: string;
  intro: string;
  yearTheme?: string;
  coreValues: CoreValue[];
  vision?: string;
  mission?: string;
  pastor?: Pastor;
  history?: HistoryItem[];
}

interface CoreValue {
  title: string;
  description: string;
  icon?: string;
}

interface Pastor {
  name: string;
  title: string;
  greeting?: string;
  photo?: string;
}
```

#### Worship Entity
```typescript
interface Worship {
  schedules: WorshipSchedule[];
  onlineLink?: string;
  youtubeChannel?: string;
  firstTimeVisitorGuide?: {
    description: string;
    infoDeskLocation?: string;
  };
}

interface WorshipSchedule {
  type: string;
  time: string;
  location: string;
  description?: string;
  onlineAvailable: boolean;
}
```

#### Sermon Entity
```typescript
interface Sermon {
  title: string;
  date: string;
  scripture: string;
  speaker?: string;
  link: string;
  thumbnail?: string;
  category?: string;
  content?: string; // Markdown content
}
```

#### News Entity
```typescript
interface News {
  title: string;
  date: string;
  content: string;
  important: boolean;
  category?: string;
}
```

#### Location Entity
```typescript
interface Location {
  address: {
    full: string;
    detail?: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  subway?: SubwayInfo[];
  bus?: BusInfo[];
  parking?: {
    available: boolean;
    description?: string;
    capacity?: number;
  };
  mapEmbed?: {
    provider: string;
    embedCode?: string;
  };
}

interface SubwayInfo {
  line: string;
  station: string;
  exit: string;
  walkingTime: string;
}

interface BusInfo {
  number: string;
  stop: string;
  walkingTime: string;
}
```

#### Contact Entity
```typescript
interface Contact {
  phone: {
    main: string;
    office?: string;
    display: string;
  };
  email: {
    main: string;
    display: string;
  };
  social?: {
    kakaoChannel?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  officeHours?: {
    weekday?: string;
    weekend?: string;
  };
}
```

#### Newcomer Entity
```typescript
interface Newcomer {
  welcomeMessage: string;
  registrationSteps: RegistrationStep[];
  contactChannels: ContactChannel[];
  meetingInfo?: {
    hasMeeting: boolean;
    schedule?: string;
    location?: string;
    description?: string;
  };
}

interface RegistrationStep {
  step: number;
  title: string;
  description: string;
}

interface ContactChannel {
  type: 'phone' | 'email' | 'kakao' | 'other';
  label: string;
  value: string;
  available: boolean;
}
```

### API Contracts

정적 사이트이므로 서버 API는 없음. 콘텐츠는 빌드 시 파일 시스템에서 읽어온다.

**Content Loader Interface**:
```typescript
// lib/content.ts
export function getChurch(): Church;
export function getWorship(): Worship;
export function getAllSermons(): Sermon[];
export function getSermonByDate(date: string): Sermon | null;
export function getAllNews(): News[];
export function getNewsByDate(date: string): News | null;
export function getLocation(): Location;
export function getContact(): Contact;
export function getNewcomer(): Newcomer;
```

### Quickstart Guide

1. **프로젝트 초기화**
   ```bash
   npx create-next-app@latest church-website --typescript --app
   cd church-website
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **콘텐츠 파일 준비**
   - `content/config/church.json` 생성 및 채우기
   - `content/config/worship.json` 생성 및 채우기
   - `content/config/location.json` 생성 및 채우기
   - `content/config/contact.json` 생성 및 채우기
   - `content/config/newcomer.json` 생성 및 채우기

4. **개발 서버 실행**
   ```bash
   npm run dev
   ```

5. **빌드 및 배포**
   ```bash
   npm run build
   npm run start
   ```

### Contracts

정적 사이트이므로 API 계약은 없음. 대신 콘텐츠 파일 스키마 검증이 필요하다.

**Content Schema Validation**:
- JSON Schema를 사용하여 콘텐츠 파일 검증
- 빌드 시 스키마 위반 시 에러 발생
- 개발 환경에서 실시간 검증

---

## Phase 2: Task Breakdown

*This phase is handled by `/speckit.tasks` command*

---

## Next Steps

1. `/speckit.tasks` 실행하여 작업 분해
2. 콘텐츠 파일 템플릿 생성
3. 프로젝트 초기화 및 기본 구조 설정
4. 컴포넌트 개발 시작
