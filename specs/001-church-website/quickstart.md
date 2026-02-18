# Quickstart Guide: 선교비전교회 홈페이지

**Date**: 2026-02-18  
**Feature**: 001-church-website

## 프로젝트 초기화

### 1. Astro 프로젝트 생성

```bash
npm create astro@latest church-website
cd church-website
```

프롬프트에서 선택:
- Template: Empty
- TypeScript: No (JavaScript 선택)
- Install dependencies: Yes
- Git: Yes
- Cloudflare: No

### 2. Tailwind CSS 설치

```bash
npx astro add tailwind
```

### 3. 필요한 패키지 설치

```bash
# Markdown 파싱
npm install gray-matter remark remark-html

# 유틸리티
npm install date-fns
```

### 4. 프로젝트 구조 생성

```bash
mkdir -p src/content/config
mkdir -p src/content/sermons
mkdir -p src/content/news
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/layouts
mkdir -p src/lib
mkdir -p public/images
mkdir -p public/icons
```

## 콘텐츠 파일 준비

### 1. 교회 기본 정보 (`src/content/config/church.json`)

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
    },
    {
      "title": "사랑으로 하나",
      "description": "서로 사랑하며 하나 되는 가족"
    }
  ],
  "vision": "[NEEDS INPUT]",
  "mission": "[NEEDS INPUT]"
}
```

### 2. 예배 정보 (`src/content/config/worship.json`)

```json
{
  "schedules": [
    {
      "type": "주일예배",
      "time": "[NEEDS INPUT]",
      "location": "[NEEDS INPUT]",
      "onlineAvailable": true
    }
  ],
  "onlineLink": "[NEEDS INPUT]",
  "youtubeChannel": "[NEEDS INPUT]"
}
```

### 3. 위치 정보 (`src/content/config/location.json`)

```json
{
  "address": {
    "full": "[NEEDS INPUT]"
  },
  "coordinates": {
    "lat": "[NEEDS INPUT]",
    "lng": "[NEEDS INPUT]"
  }
}
```

### 4. 연락처 정보 (`src/content/config/contact.json`)

```json
{
  "phone": {
    "main": "[NEEDS INPUT]",
    "display": "[NEEDS INPUT]"
  },
  "email": {
    "main": "[NEEDS INPUT]",
    "display": "[NEEDS INPUT]"
  }
}
```

### 5. 새가족 안내 (`src/content/config/newcomer.json`)

```json
{
  "welcomeMessage": "[NEEDS INPUT]",
  "registrationSteps": [
    {
      "step": 1,
      "title": "[NEEDS INPUT]",
      "description": "[NEEDS INPUT]"
    }
  ],
  "contactChannels": [
    {
      "type": "phone",
      "label": "전화",
      "value": "[NEEDS INPUT]",
      "available": true
    }
  ]
}
```

## 콘텐츠 로더 구현

### `src/lib/content.js`

```javascript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDirectory = path.join(__dirname, '../content');

export function getChurch() {
  const filePath = path.join(contentDirectory, 'config', 'church.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getWorship() {
  const filePath = path.join(contentDirectory, 'config', 'worship.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAllSermons() {
  const sermonsDirectory = path.join(contentDirectory, 'sermons');
  const fileNames = fs.readdirSync(sermonsDirectory);
  
  const sermons = fileNames.map((fileName) => {
    const filePath = path.join(sermonsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      content,
    };
  });
  
  return sermons.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getAllNews() {
  const newsDirectory = path.join(contentDirectory, 'news');
  const fileNames = fs.readdirSync(newsDirectory);
  
  const news = fileNames.map((fileName) => {
    const filePath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      content,
    };
  });
  
  return news.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getLocation() {
  const filePath = path.join(contentDirectory, 'config', 'location.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getContact() {
  const filePath = path.join(contentDirectory, 'config', 'contact.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getNewcomer() {
  const filePath = path.join(contentDirectory, 'config', 'newcomer.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
```

## 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:4321` 접속 (Astro 기본 포트)

## 빌드 및 배포

### 로컬 빌드

```bash
npm run build
npm run start
```

### Vercel 배포

1. GitHub 저장소에 푸시
2. Vercel에 프로젝트 연결
3. 자동 배포 완료

또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

## 다음 단계

1. 콘텐츠 파일에 실제 값 입력 (`[NEEDS INPUT]` 항목 채우기)
2. 페이지 컴포넌트 개발
3. 레이아웃 및 스타일링
4. 테스트 작성
5. 배포
