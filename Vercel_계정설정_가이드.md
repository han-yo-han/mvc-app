# Vercel 계정 설정 가이드

**작성일**: 2026-02-18  
**프로젝트**: 선교비전교회 홈페이지

---

## 📋 Vercel 계정 설정 필요 여부

**답변**: **네, 필요합니다** (하지만 매우 간단합니다!)

---

## 🚀 Vercel 계정 설정 방법

### 방법 1: GitHub 계정으로 로그인 (권장)

**장점**:
- 가장 간단함
- GitHub 저장소와 자동 연동
- 별도 비밀번호 불필요

**단계**:

1. **Vercel 웹사이트 접속**
   - https://vercel.com 접속

2. **Sign Up 클릭**
   - 우측 상단 "Sign Up" 버튼 클릭

3. **GitHub로 로그인**
   - "Continue with GitHub" 선택
   - GitHub 계정으로 로그인
   - 권한 승인

4. **완료!**
   - 계정 생성 완료

**소요 시간**: 약 1분

---

### 방법 2: 이메일로 가입

**단계**:

1. **Vercel 웹사이트 접속**
   - https://vercel.com 접속

2. **Sign Up 클릭**
   - 우측 상단 "Sign Up" 버튼 클릭

3. **이메일 입력**
   - 이메일 주소 입력
   - 비밀번호 설정

4. **이메일 인증**
   - 이메일로 전송된 링크 클릭
   - 인증 완료

5. **완료!**
   - 계정 생성 완료

**소요 시간**: 약 2-3분

---

## 💰 Vercel 무료 플랜

### 무료 플랜 제공 내용

- ✅ **무제한 프로젝트**
- ✅ **무제한 배포**
- ✅ **100GB 대역폭/월**
- ✅ **자동 HTTPS**
- ✅ **글로벌 CDN**
- ✅ **커스텀 도메인** (무료)
- ✅ **Git 연동** (자동 배포)

**이 프로젝트에는 충분합니다!** ✅

---

## 🔧 Vercel CLI 설치 (선택사항)

### CLI가 필요한 경우

- 로컬에서 배포 테스트
- 명령줄에서 배포 관리

### CLI 설치 방법

```bash
# npm으로 설치
npm install -g vercel

# 또는 yarn으로 설치
yarn global add vercel
```

### CLI 로그인

```bash
vercel login
```

브라우저가 열리면 로그인하면 됩니다.

---

## 📦 프로젝트 배포 방법

### 방법 1: GitHub 연동 (권장)

**장점**:
- 자동 배포 (Git push 시)
- Preview 배포 (PR마다)
- 설정 간단

**단계**:

1. **GitHub에 프로젝트 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/church-website.git
   git push -u origin main
   ```

2. **Vercel에서 프로젝트 Import**
   - Vercel 대시보드에서 "Add New Project" 클릭
   - GitHub 저장소 선택
   - "Import" 클릭

3. **자동 설정**
   - Vercel이 자동으로 Next.js 프로젝트 감지
   - 빌드 설정 자동 완료

4. **배포 완료!**
   - 몇 분 후 배포 완료
   - URL 제공 (예: `church-website.vercel.app`)

---

### 방법 2: Vercel CLI로 배포

**단계**:

1. **프로젝트 디렉토리에서 실행**
   ```bash
   cd church-website
   vercel
   ```

2. **질문에 답변**
   ```
   ? Set up and deploy "~/church-website"? [Y/n] y
   ? Which scope do you want to deploy to? [Your Account]
   ? Link to existing project? [y/N] n
   ? What's your project's name? church-website
   ? In which directory is your code located? ./
   ```

3. **배포 완료!**
   - 배포 URL 제공

---

## 🔄 자동 배포 설정

### GitHub 연동 시 자동 배포

**동작 방식**:
- `main` 브랜치에 push → 프로덕션 배포
- 다른 브랜치에 push → Preview 배포

**설정**:
- Vercel 대시보드에서 자동으로 설정됨
- 별도 설정 불필요

---

## 🌐 커스텀 도메인 설정 (선택사항)

### 도메인이 있는 경우

**단계**:

1. **Vercel 대시보드에서 도메인 추가**
   - 프로젝트 설정 → Domains
   - 도메인 입력 (예: `church.example.com`)

2. **DNS 설정**
   - 도메인 제공업체에서 DNS 레코드 추가
   - Vercel이 제공하는 DNS 정보 입력

3. **완료!**
   - 몇 분 후 도메인 연결 완료

**무료로 가능합니다!** ✅

---

## 📝 체크리스트

### 배포 전 확인사항

- [ ] Vercel 계정 생성 완료
- [ ] GitHub 저장소 생성 완료
- [ ] 프로젝트가 GitHub에 푸시됨
- [ ] `package.json`에 빌드 스크립트 있음
- [ ] `.gitignore`에 `node_modules` 포함됨

---

## 🎯 다음 단계

1. **Vercel 계정 생성** (지금!)
   - https://vercel.com 접속
   - GitHub로 로그인 (가장 간단)

2. **프로젝트 개발**
   - Next.js 프로젝트 생성
   - 개발 진행

3. **GitHub에 푸시**
   - 프로젝트를 GitHub에 업로드

4. **Vercel에 배포**
   - Vercel에서 GitHub 저장소 Import
   - 자동 배포 완료!

---

## 💡 팁

### 무료 플랜 제한사항

- **대역폭**: 100GB/월 (충분함)
- **함수 실행 시간**: 10초 (정적 사이트에는 영향 없음)
- **빌드 시간**: 무제한

**이 프로젝트에는 충분합니다!** ✅

---

## 🆘 문제 해결

### 배포 실패 시

1. **빌드 로그 확인**
   - Vercel 대시보드 → Deployments → 로그 확인

2. **일반적인 문제**
   - `package.json`에 빌드 스크립트 없음
   - 의존성 설치 실패
   - 환경 변수 누락

3. **해결 방법**
   - 로그를 확인하여 에러 메시지 확인
   - 로컬에서 `npm run build` 테스트

---

## 📚 참고 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Vercel 무료 플랜](https://vercel.com/pricing)

---

**결론**: Vercel 계정 설정은 **매우 간단**하며, **GitHub로 로그인하면 1분 안에 완료**됩니다!
