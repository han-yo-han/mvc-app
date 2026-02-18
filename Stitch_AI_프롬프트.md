# Stitch AI 디자인 프롬프트

**프로젝트**: 선교비전교회 홈페이지  
**작성일**: 2026-02-18

---

## 🇰🇷 한글 버전

### 프로젝트 개요

선교비전교회의 정보공개형 정적 홈페이지를 디자인해주세요. 서버 없이 운영되는 완전 정적 사이트이며, 운영자가 코드 수정 없이 JSON/Markdown 파일만으로 콘텐츠를 관리할 수 있어야 합니다.

### 기술 스택

- **프레임워크**: Astro
- **언어**: JavaScript (ES6+)
- **스타일링**: Tailwind CSS
- **호스팅**: Vercel

### 디자인 방향

- **키워드**: 따뜻함, 미니멀, 자연광 중심
- **톤앤매너**: 과도한 종교 상징 배제, 사진 중심으로 교회 분위기 전달
- **컬러**: 화이트 기반, 베이지 톤, 네이비 포인트, 골드 소량 포인트
- **폰트**: 한글 - Pretendard 또는 Noto Sans KR, 영어 타이틀 - Playfair Display

### 사이트 구조

```
Home (메인)
├── 교회소개
├── 예배안내
├── 설교
├── 교회소식
├── 오시는길
└── 새가족
```

### 페이지별 요구사항

#### 1. Home (메인 페이지)

**목적**: 교회의 정체성을 가장 먼저 전달하고 주요 행동으로 연결

**구성 요소**:
- 히어로 섹션: 교회명, 핵심 메시지/슬로건, 한 문장 소개
- 핵심 가치 섹션: 2~4개의 핵심 가치 카드 (말씀 중심, 선교 중심, 사랑으로 하나 등)
- 예배 시간 요약: 대표 예배 시간 카드형 표시
- 최신 설교 하이라이트: 최신 설교 1개 또는 설교 페이지 링크
- CTA 섹션: 오시는 길, 문의로 연결되는 버튼

**애니메이션 요구사항**:
- 스크롤하면서 교회 소개하는 흐름
- 부드러운 페이드인 효과 (과도한 애니메이션 금지)
- 각 섹션 진입 시 페이드인 + 약간의 슬라이드업 (10px 정도)

#### 2. 교회소개

**목적**: 교회의 신뢰와 방향성 전달

**구성 요소**:
- 담임목사 인사말 (사진 + 환영 메시지)
- 교회 비전/사명
- 교회 연혁 (타임라인 형식, 선택사항)
- 교회 사진 갤러리 (선택사항)

#### 3. 예배안내

**목적**: 방문자가 실제 참여 가능하도록 정보 제공

**구성 요소**:
- 예배 시간 안내 카드형 레이아웃 (주일예배, 수요예배, 새벽기도 등)
- 온라인 예배 링크
- 유튜브 채널 링크
- 처음 방문자 안내

#### 4. 설교

**목적**: 설교 콘텐츠에 쉽게 접근

**구성 요소**:
- 설교 목록 카드형 UI (최신순)
- 각 설교 카드: 썸네일, 제목, 날짜, 본문(성경구절), 설교자, 유튜브 링크 버튼

#### 5. 교회소식

**목적**: 최신 공지 전달

**구성 요소**:
- 공지 목록 카드형 UI (최신순)
- 각 공지 카드: 제목, 날짜, 내용 요약
- 중요 공지 표시 (상단 고정 또는 배지)

#### 6. 오시는길

**목적**: 실제 방문 가능하게 함

**구성 요소**:
- 주소 표시
- 지도 (구글 맵 또는 네이버 지도 임베드)
- 교통편 안내 (지하철, 버스)
- 주차 안내
- 연락처 정보

#### 7. 새가족

**목적**: 처음 온 사람이 다음 단계로 나아가도록 돕기

**구성 요소**:
- 환영 문구
- 등록 절차 (단계별 안내)
- 문의 채널 (전화, 이메일, 카카오채널 등)
- 새가족 모임 안내 (선택사항)

### 디자인 요구사항

- **반응형**: 모바일, 태블릿, 데스크탑 모두 지원
- **접근성**: WCAG 2.1 Level AA 준수, 키보드 네비게이션 지원
- **성능**: 페이지 로딩 2초 이내, 이미지 최적화 필수
- **애니메이션**: 최소한의 부드러운 효과만 사용 (prefers-reduced-motion 지원)

### 레이아웃 구조

- 헤더: 로고, 네비게이션 메뉴 (모바일: 햄버거 메뉴)
- 메인 콘텐츠: 각 페이지별 콘텐츠
- 푸터: 교회 주소, 연락처, 저작권 표기

### 특별 요구사항

- 스크롤하면서 교회 소개하는 흐름 (메인 페이지)
- 부드러운 스크롤 애니메이션 (과도하지 않게)
- 이미지 중심 레이아웃
- 따뜻하고 접근하기 쉬운 느낌

---

## 🇺🇸 English Version

### Project Overview

Design a static information website for Mission Vision Church. It should be a completely static site that operates without a server, allowing content managers to update content through JSON/Markdown files without code modifications.

### Tech Stack

- **Framework**: Astro
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

### Design Direction

- **Keywords**: Warmth, Minimal, Natural light focused
- **Tone & Manner**: Avoid excessive religious symbols, convey church atmosphere through photos
- **Color Palette**: White base, Beige tones, Navy accent, Gold subtle accent
- **Typography**: Korean - Pretendard or Noto Sans KR, English titles - Playfair Display

### Site Structure

```
Home (Main)
├── About
├── Worship
├── Sermons
├── News
├── Location
└── Newcomer
```

### Page Requirements

#### 1. Home (Main Page)

**Purpose**: Convey church identity first and connect to key actions

**Components**:
- Hero section: Church name, core message/slogan, one-sentence introduction
- Core values section: 2-4 core value cards (Word-centered, Mission-centered, Love unity, etc.)
- Worship schedule summary: Representative worship times in card format
- Latest sermon highlight: Latest sermon or link to sermons page
- CTA section: Buttons linking to location and contact

**Animation Requirements**:
- Scroll-based storytelling flow introducing the church
- Smooth fade-in effects (avoid excessive animations)
- Fade-in + slight slide-up (about 10px) when each section enters viewport

#### 2. About

**Purpose**: Convey church trust and direction

**Components**:
- Pastor's greeting (photo + welcome message)
- Church vision/mission
- Church history (timeline format, optional)
- Church photo gallery (optional)

#### 3. Worship

**Purpose**: Provide information for visitors to participate

**Components**:
- Worship schedule cards (Sunday service, Wednesday service, Dawn prayer, etc.)
- Online worship link
- YouTube channel link
- First-time visitor guide

#### 4. Sermons

**Purpose**: Easy access to sermon content

**Components**:
- Sermon list in card UI (newest first)
- Each sermon card: Thumbnail, title, date, scripture, speaker, YouTube link button

#### 5. News

**Purpose**: Deliver latest announcements

**Components**:
- Announcement list in card UI (newest first)
- Each announcement card: Title, date, content summary
- Important announcement indicator (sticky top or badge)

#### 6. Location

**Purpose**: Enable actual visits

**Components**:
- Address display
- Map (Google Maps or Naver Map embed)
- Transportation guide (subway, bus)
- Parking information
- Contact information

#### 7. Newcomer

**Purpose**: Help first-time visitors take next steps

**Components**:
- Welcome message
- Registration process (step-by-step guide)
- Contact channels (phone, email, Kakao Channel, etc.)
- Newcomer meeting information (optional)

### Design Requirements

- **Responsive**: Support mobile, tablet, and desktop
- **Accessibility**: WCAG 2.1 Level AA compliance, keyboard navigation support
- **Performance**: Page loading within 2 seconds, image optimization required
- **Animation**: Minimal smooth effects only (support prefers-reduced-motion)

### Layout Structure

- Header: Logo, navigation menu (mobile: hamburger menu)
- Main content: Page-specific content
- Footer: Church address, contact, copyright notice

### Special Requirements

- Scroll-based storytelling flow introducing the church (main page)
- Smooth scroll animations (not excessive)
- Image-centered layout
- Warm and approachable feeling

---

## 📋 추가 참고사항

### 콘텐츠 구조

콘텐츠는 다음 구조로 관리됩니다:

```
/content
├── config/
│   ├── church.json          # 교회 기본 정보
│   ├── worship.json         # 예배 시간 정보
│   ├── location.json        # 위치 정보
│   └── contact.json         # 연락처 정보
├── sermons/                 # 설교 Markdown 파일
│   └── YYYY-MM-DD.md
└── news/                    # 공지 Markdown 파일
    └── YYYY-MM-DD.md
```

### 디자인 제약사항

- 서버 없음 (완전 정적 사이트)
- 데이터베이스 없음
- 관리자 페이지 없음
- 로그인 기능 없음
- 실시간 게시판 없음

### 성능 목표

- 페이지 로딩: 2초 이내
- Lighthouse 성능 점수: 90+
- First Contentful Paint: < 1.5초

---

**이 프롬프트를 Stitch AI에 입력하여 디자인 시안을 생성하세요.**
