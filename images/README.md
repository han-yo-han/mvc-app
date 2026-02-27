# 이미지 패키지 (images/)

PNG 이미지를 용도별로 관리하는 폴더 구조입니다.

## 구조

```
images/
├── hero/          # 메인 슬라이드/카루셀용 원본
│   ├── 예배사진.png
│   ├── 전도사진.png
│   ├── 청년부.png
│   ├── 청청년부.png
│   ├── 청청년부2.png
│   ├── 캄보디아선교사역.png
│   ├── 베트남선교사역.png
│   └── 행사사진.png
├── branding/      # 로고, 색상 등
│   ├── logo.png
│   └── color.png
└── people/        # 인물 사진
    └── pastor.png
```

## 사용처

- **hero/** → `frontend/public/images/hero/` 에 번호 붙여 복사 (01-worship.png 등)
- **branding/** → `frontend/public/images/` 로 복사
- **people/** → `frontend/public/images/` 로 복사

슬라이드 매핑은 `frontend/src/content/config/hero-slides.json` 에서 관리합니다.
