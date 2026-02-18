# Data Model: 선교비전교회 홈페이지

**Date**: 2026-02-18  
**Feature**: 001-church-website

## 개요

본 프로젝트는 정적 사이트이므로 데이터베이스가 없으며, 모든 콘텐츠는 파일 시스템에 JSON/Markdown 파일로 저장된다. 빌드 시 이 파일들을 읽어와서 정적 페이지로 생성한다.

## 엔티티 정의

### 1. Church (교회 기본 정보)

**파일**: `content/config/church.json`

```typescript
interface Church {
  name: string;                    // 교회명
  slogan: string;                   // 슬로건
  intro: string;                     // 한 문장 소개
  yearTheme?: string;                // 올해의 표어/말씀
  coreValues: CoreValue[];          // 핵심 가치 (2~4개)
  vision?: string;                   // 교회 비전
  mission?: string;                  // 교회 사명
  pastor?: Pastor;                   // 담임목사 정보
  history?: HistoryItem[];           // 교회 연혁
}

interface CoreValue {
  title: string;                    // 가치 제목
  description: string;               // 가치 설명
  icon?: string;                     // 아이콘 경로 (선택)
}

interface Pastor {
  name: string;                      // 목사님 성함
  title: string;                     // 직함 (예: "담임목사")
  greeting?: string;                 // 인사말
  photo?: string;                    // 사진 경로 (선택)
}

interface HistoryItem {
  year: string;                      // 연도
  event: string;                     // 사건
  description?: string;              // 설명 (선택)
}
```

**예시**:
```json
{
  "name": "선교비전교회",
  "slogan": "하나님의 사랑을 세상에 전하는 교회",
  "intro": "선교와 말씀 위에 세워진 공동체",
  "yearTheme": "[NEEDS INPUT]",
  "coreValues": [
    {
      "title": "말씀 중심",
      "description": "성경 말씀을 기반으로 한 교회"
    },
    {
      "title": "선교 중심",
      "description": "열방을 향한 선교 공동체"
    }
  ],
  "vision": "[NEEDS INPUT]",
  "mission": "[NEEDS INPUT]",
  "pastor": {
    "name": "[NEEDS INPUT]",
    "title": "담임목사",
    "greeting": "[NEEDS INPUT]"
  }
}
```

---

### 2. Worship (예배 정보)

**파일**: `content/config/worship.json`

```typescript
interface Worship {
  schedules: WorshipSchedule[];     // 예배 시간 목록
  onlineLink?: string;               // 온라인 예배 링크
  youtubeChannel?: string;          // 유튜브 채널 URL
  firstTimeVisitorGuide?: {         // 처음 방문자 안내
    description: string;
    infoDeskLocation?: string;
  };
}

interface WorshipSchedule {
  type: string;                      // 예배 종류 (예: "주일예배")
  time: string;                      // 시간 (예: "오전 11시")
  location: string;                  // 장소 (예: "본당")
  description?: string;              // 설명 (선택)
  onlineAvailable: boolean;          // 온라인 참여 가능 여부
}
```

**예시**:
```json
{
  "schedules": [
    {
      "type": "주일예배",
      "time": "[NEEDS INPUT]",
      "location": "[NEEDS INPUT]",
      "onlineAvailable": true
    },
    {
      "type": "수요예배",
      "time": "[NEEDS INPUT]",
      "location": "[NEEDS INPUT]",
      "onlineAvailable": true
    }
  ],
  "onlineLink": "[NEEDS INPUT]",
  "youtubeChannel": "[NEEDS INPUT]"
}
```

---

### 3. Sermon (설교 정보)

**파일**: `content/sermons/YYYY-MM-DD.md` (Markdown + Frontmatter)

```typescript
interface Sermon {
  title: string;                     // 설교 제목
  date: string;                      // 날짜 (YYYY-MM-DD)
  scripture: string;                 // 본문 (성경구절)
  speaker?: string;                  // 설교자 (선택)
  link: string;                      // 영상 링크 (유튜브 등)
  thumbnail?: string;                // 썸네일 이미지 경로 (선택)
  category?: string;                  // 카테고리 (선택)
  content?: string;                  // 설교 내용/요약 (Markdown)
}
```

**예시** (`content/sermons/2026-01-07.md`):
```markdown
---
title: "하나님의 사랑"
date: 2026-01-07
scripture: "요한일서 4:7-12"
speaker: "[NEEDS INPUT]"
link: "https://youtube.com/..."
thumbnail: "/images/sermons/2026-01-07.jpg"
---

설교 내용이나 요약을 여기에 작성하세요. (선택사항)
```

---

### 4. News (공지 정보)

**파일**: `content/news/YYYY-MM-DD.md` (Markdown + Frontmatter)

```typescript
interface News {
  title: string;                     // 공지 제목
  date: string;                      // 날짜 (YYYY-MM-DD)
  content: string;                   // 공지 내용 (Markdown)
  important: boolean;                // 중요 공지 여부
  category?: string;                  // 카테고리 (선택)
}
```

**예시** (`content/news/2026-01-01.md`):
```markdown
---
title: "새해 인사"
date: 2026-01-01
important: false
category: "일반"
---

공지 내용을 여기에 작성하세요.
```

---

### 5. Location (위치 정보)

**파일**: `content/config/location.json`

```typescript
interface Location {
  address: {
    full: string;                    // 전체 주소
    detail?: string;                 // 상세 주소 (선택)
  };
  coordinates?: {
    lat: number;                     // 위도
    lng: number;                     // 경도
  };
  subway?: SubwayInfo[];             // 지하철 안내
  bus?: BusInfo[];                   // 버스 안내
  parking?: {
    available: boolean;              // 주차 가능 여부
    description?: string;           // 주차 안내
    capacity?: number;               // 주차 가능 대수 (선택)
  };
  mapEmbed?: {
    provider: string;                // 지도 제공자 (예: "google", "naver")
    embedCode?: string;              // 지도 임베드 코드 (선택)
  };
}

interface SubwayInfo {
  line: string;                      // 호선 (예: "2호선")
  station: string;                   // 역명 (예: "강남역")
  exit: string;                      // 출구 (예: "3번 출구")
  walkingTime: string;               // 도보 시간 (예: "도보 5분")
}

interface BusInfo {
  number: string;                    // 버스 번호 (예: "146번")
  stop: string;                      // 정류장 이름
  walkingTime: string;               // 도보 시간
}
```

---

### 6. Contact (연락처 정보)

**파일**: `content/config/contact.json`

```typescript
interface Contact {
  phone: {
    main: string;                    // 대표 전화번호
    office?: string;                 // 교회 사무실 (선택)
    display: string;                 // 표시할 형식 (예: "02-1234-5678")
  };
  email: {
    main: string;                    // 대표 이메일
    display: string;                 // 표시할 형식
  };
  social?: {
    kakaoChannel?: string;          // 카카오 채널 링크 (선택)
    instagram?: string;              // 인스타그램 링크 (선택)
    facebook?: string;               // 페이스북 링크 (선택)
    youtube?: string;                // 유튜브 채널 링크 (선택)
  };
  officeHours?: {
    weekday?: string;                // 평일 운영 시간 (선택)
    weekend?: string;                // 주말 운영 시간 (선택)
  };
}
```

---

### 7. Newcomer (새가족 안내)

**파일**: `content/config/newcomer.json`

```typescript
interface Newcomer {
  welcomeMessage: string;            // 환영 문구
  registrationSteps: RegistrationStep[];  // 등록 절차
  contactChannels: ContactChannel[]; // 문의 채널
  meetingInfo?: {
    hasMeeting: boolean;             // 새가족 모임 여부
    schedule?: string;                // 모임 일정 (선택)
    location?: string;                // 모임 장소 (선택)
    description?: string;             // 모임 안내 (선택)
  };
}

interface RegistrationStep {
  step: number;                      // 단계 번호
  title: string;                     // 단계 제목
  description: string;               // 단계 설명
}

interface ContactChannel {
  type: 'phone' | 'email' | 'kakao' | 'other';  // 채널 타입
  label: string;                     // 채널 라벨
  value: string;                     // 채널 값 (전화번호, 이메일, 링크 등)
  available: boolean;                // 사용 가능 여부
}
```

---

## 데이터 관계

모든 엔티티는 독립적으로 관리되며, 특별한 관계는 없다. 각 페이지는 해당하는 엔티티를 읽어와서 표시한다.

- **Home 페이지**: Church, Worship (요약), Sermon (최신 1개)
- **교회소개 페이지**: Church
- **예배안내 페이지**: Worship
- **설교 페이지**: Sermon (모든 설교)
- **교회소식 페이지**: News (모든 공지)
- **오시는길 페이지**: Location, Contact
- **새가족 페이지**: Newcomer, Contact

---

## 검증 규칙

1. **필수 필드 검증**
   - Church: name, slogan, intro, coreValues
   - Worship: schedules
   - Sermon: title, date, scripture, link
   - News: title, date, content
   - Location: address.full
   - Contact: phone.main, email.main
   - Newcomer: welcomeMessage, registrationSteps, contactChannels

2. **형식 검증**
   - 날짜 형식: YYYY-MM-DD
   - 이메일 형식 검증
   - 전화번호 형식 검증
   - URL 형식 검증

3. **범위 검증**
   - coreValues: 2~4개
   - registrationSteps: 최소 1개

---

## 파일 구조

```
content/
├── config/
│   ├── church.json
│   ├── worship.json
│   ├── location.json
│   ├── contact.json
│   └── newcomer.json
├── sermons/
│   ├── 2026-01-07.md
│   ├── 2026-01-14.md
│   └── ...
└── news/
    ├── 2026-01-01.md
    ├── 2026-01-15.md
    └── ...
```
