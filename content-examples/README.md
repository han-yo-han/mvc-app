# 콘텐츠 입력값 관리 가이드

이 폴더는 선교비전교회 홈페이지의 콘텐츠 입력값을 관리하는 예시 파일들입니다.

## 파일 구조

### JSON 파일 (구조화된 데이터)

- `church.json.example` - 교회 기본 정보
- `worship.json.example` - 예배 시간 정보
- `location.json.example` - 오시는길 정보
- `contact.json.example` - 연락처 정보
- `newcomer.json.example` - 새가족 안내

### Markdown 파일 (텍스트 콘텐츠)

- `sermon-example.md` - 설교 템플릿
- `news-example.md` - 공지 템플릿

## 사용 방법

1. 각 `.example` 파일을 복사하여 실제 파일로 만듭니다.
   ```bash
   cp church.json.example church.json
   ```

2. `[NEEDS INPUT]`으로 표시된 부분을 실제 값으로 채웁니다.

3. JSON 파일의 경우 유효한 JSON 형식을 유지해야 합니다.

4. Markdown 파일의 경우 Frontmatter 형식을 유지해야 합니다.

## 파일별 설명

### church.json
교회의 기본 정보를 담는 파일입니다.
- 교회명, 슬로건, 소개
- 핵심 가치
- 교회 비전/사명
- 담임목사 정보
- 교회 연혁
- 이미지 경로

### worship.json
예배 시간 정보를 담는 파일입니다.
- 각 예배의 종류, 시간, 장소
- 온라인 예배 링크
- 유튜브 채널

### location.json
오시는길 정보를 담는 파일입니다.
- 주소
- 지도 좌표
- 대중교통 안내 (지하철, 버스)
- 주차 안내

### contact.json
연락처 정보를 담는 파일입니다.
- 전화번호
- 이메일
- 소셜 미디어 링크
- 사무실 운영 시간

### newcomer.json
새가족 안내 정보를 담는 파일입니다.
- 환영 문구
- 등록 절차
- 문의 채널
- 새가족 모임 안내

### sermon-example.md
설교 콘텐츠 템플릿입니다.
- 제목, 날짜, 본문, 설교자
- 영상 링크
- 썸네일 이미지

### news-example.md
공지 콘텐츠 템플릿입니다.
- 제목, 날짜
- 중요 여부
- 카테고리
- 내용

## 주의사항

- 모든 `[NEEDS INPUT]` 항목은 실제 값으로 채워져야 합니다.
- JSON 파일은 유효한 JSON 형식을 유지해야 합니다.
- Markdown 파일의 Frontmatter는 YAML 형식을 따라야 합니다.
- 민감한 정보(전화번호, 이메일 등)는 공개 여부를 확인한 후 입력하세요.

## 업데이트 방법

콘텐츠를 업데이트할 때는:
1. 해당 파일을 열어 수정합니다.
2. JSON 파일의 경우 형식이 유효한지 확인합니다.
3. 변경사항을 저장합니다.
4. (필요시) 빌드/배포를 다시 실행합니다.
