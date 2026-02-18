# Content Schema: 콘텐츠 파일 스키마 정의

**Date**: 2026-02-18  
**Feature**: 001-church-website

## 개요

정적 사이트이므로 서버 API는 없으나, 콘텐츠 파일의 스키마를 정의하여 타입 안정성과 검증을 보장한다.

## JSON Schema 정의

### Church Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["name", "slogan", "intro", "coreValues"],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1
    },
    "slogan": {
      "type": "string",
      "minLength": 1
    },
    "intro": {
      "type": "string",
      "minLength": 1
    },
    "yearTheme": {
      "type": "string"
    },
    "coreValues": {
      "type": "array",
      "minItems": 2,
      "maxItems": 4,
      "items": {
        "type": "object",
        "required": ["title", "description"],
        "properties": {
          "title": { "type": "string" },
          "description": { "type": "string" },
          "icon": { "type": "string" }
        }
      }
    },
    "vision": {
      "type": "string"
    },
    "mission": {
      "type": "string"
    },
    "pastor": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "title": { "type": "string" },
        "greeting": { "type": "string" },
        "photo": { "type": "string" }
      }
    },
    "history": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["year", "event"],
        "properties": {
          "year": { "type": "string" },
          "event": { "type": "string" },
          "description": { "type": "string" }
        }
      }
    }
  }
}
```

### Worship Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["schedules"],
  "properties": {
    "schedules": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "required": ["type", "time", "location", "onlineAvailable"],
        "properties": {
          "type": { "type": "string" },
          "time": { "type": "string" },
          "location": { "type": "string" },
          "description": { "type": "string" },
          "onlineAvailable": { "type": "boolean" }
        }
      }
    },
    "onlineLink": {
      "type": "string",
      "format": "uri"
    },
    "youtubeChannel": {
      "type": "string",
      "format": "uri"
    }
  }
}
```

### Sermon Frontmatter Schema

```yaml
title: string (required)
date: string (required, format: YYYY-MM-DD)
scripture: string (required)
speaker: string (optional)
link: string (required, format: uri)
thumbnail: string (optional)
category: string (optional)
```

### News Frontmatter Schema

```yaml
title: string (required)
date: string (required, format: YYYY-MM-DD)
important: boolean (required)
category: string (optional)
```

## 검증 규칙

1. **빌드 타임 검증**
   - 모든 콘텐츠 파일이 스키마에 맞는지 검증
   - 스키마 위반 시 빌드 실패

2. **개발 타임 검증**
   - 개발 서버 실행 시 콘텐츠 파일 변경 감지
   - 스키마 위반 시 경고 표시

3. **타입 안정성**
   - TypeScript 타입 정의와 스키마 일치
   - 타입 체크로 런타임 에러 방지

## 검증 도구

- **JSON Schema Validator**: `ajv` 또는 `zod`
- **Markdown Frontmatter Validator**: `gray-matter` + 커스텀 검증
- **TypeScript 타입**: 컴파일 타임 타입 체크
