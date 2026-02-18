# Tasks: 선교비전교회 홈페이지 (정보공개형 정적 사이트)

**Input**: Design documents from `/specs/001-church-website/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: Tests are OPTIONAL - not included in this task list as not explicitly requested in spec.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., [US1], [US2], [US3], [US4])
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `frontend/src/` (as per plan.md structure)
- Paths follow Astro project structure from plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create Astro project structure in frontend/ directory
- [X] T002 Initialize Astro project with `npm create astro@latest` in frontend/
- [X] T003 [P] Install Tailwind CSS integration: `npx astro add tailwind` in frontend/
- [X] T004 [P] Configure astro.config.mjs with static output mode in frontend/astro.config.mjs
- [X] T005 [P] Setup package.json scripts (dev, build, preview) in frontend/package.json
- [X] T006 [P] Create .gitignore with node_modules, .astro, dist entries in frontend/.gitignore
- [X] T007 [P] Initialize content directory structure (config/, sermons/, news/) in frontend/src/content/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T008 Create content loader utility in frontend/src/lib/content.js
- [X] T009 [P] Implement getChurch() function in frontend/src/lib/content.js
- [X] T010 [P] Implement getWorship() function in frontend/src/lib/content.js
- [X] T011 [P] Implement getAllSermons() function in frontend/src/lib/content.js
- [X] T012 [P] Implement getAllNews() function in frontend/src/lib/content.js
- [X] T013 [P] Implement getLocation() function in frontend/src/lib/content.js
- [X] T014 [P] Implement getContact() function in frontend/src/lib/content.js
- [X] T015 [P] Implement getNewcomer() function in frontend/src/lib/content.js
- [X] T016 Create base Layout component in frontend/src/layouts/Layout.astro
- [X] T017 [P] Setup global styles with Tailwind CSS in frontend/src/styles/global.css
- [X] T018 [P] Create navigation component in frontend/src/components/Navigation.astro
- [X] T019 [P] Create footer component in frontend/src/components/Footer.astro
- [X] T020 Create content file templates (JSON/Markdown) in frontend/src/content/config/ with example structure

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - 처음 방문자 정보 확인 (Priority: P1) 🎯 MVP

**Goal**: 처음 방문자가 홈페이지에 접속하여 교회의 정체성과 핵심 정보를 파악하고, 예배 시간과 오시는 길을 확인한 뒤 방문 결정을 내린다.

**Independent Test**: 사용자가 홈페이지에 접속하여 1분 이내에 교회명, 슬로건, 예배 시간, 주소를 확인할 수 있다.

### Implementation for User Story 1

- [X] T021 [US1] Create Home page (index.astro) in frontend/src/pages/index.astro
- [X] T022 [US1] Implement hero section with church name and slogan in frontend/src/pages/index.astro
- [X] T023 [US1] Implement core values section in frontend/src/pages/index.astro
- [X] T024 [US1] Implement worship schedule summary section in frontend/src/pages/index.astro
- [X] T025 [US1] Create 예배안내 page (worship.astro) in frontend/src/pages/worship.astro
- [X] T026 [US1] Display worship schedules from content/config/worship.json in frontend/src/pages/worship.astro
- [X] T027 [US1] Display online worship links and YouTube channel in frontend/src/pages/worship.astro
- [X] T028 [US1] Create 오시는길 page (location.astro) in frontend/src/pages/location.astro
- [X] T029 [US1] Display address and map embed in frontend/src/pages/location.astro
- [X] T030 [US1] Display subway and bus information in frontend/src/pages/location.astro
- [X] T031 [US1] Display parking information in frontend/src/pages/location.astro
- [X] T032 [US1] Add navigation links to Home, 예배안내, 오시는길 in frontend/src/components/Navigation.astro
- [X] T033 [US1] Ensure responsive design for mobile, tablet, desktop in all US1 pages

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. Users can access Home, 예배안내, and 오시는길 pages and find core church information.

---

## Phase 4: User Story 2 - 온라인 방문자 설교 시청 (Priority: P1)

**Goal**: 온라인 방문자가 홈페이지에서 최신 설교를 찾아 시청한다.

**Independent Test**: 사용자가 홈페이지 또는 설교 페이지에서 최신 설교 목록을 확인하고 영상 링크를 통해 설교를 시청할 수 있다.

### Implementation for User Story 2

- [X] T034 [US2] Create 설교 page (sermons/index.astro) in frontend/src/pages/sermons/index.astro
- [X] T035 [US2] Implement sermon list display sorted by date (newest first) in frontend/src/pages/sermons/index.astro
- [X] T036 [US2] Create sermon card component in frontend/src/components/SermonCard.astro
- [X] T037 [US2] Display sermon title, date, scripture, speaker in sermon cards in frontend/src/components/SermonCard.astro
- [X] T038 [US2] Add video link button to sermon cards in frontend/src/components/SermonCard.astro
- [X] T039 [US2] Display sermon thumbnail image if available in frontend/src/components/SermonCard.astro
- [X] T040 [US2] Add latest sermon highlight section to Home page in frontend/src/pages/index.astro
- [X] T041 [US2] Add navigation link to 설교 page in frontend/src/components/Navigation.astro
- [X] T042 [US2] Ensure responsive design for sermon list and cards in frontend/src/pages/sermons/index.astro

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. Users can view sermon list and access video links.

---

## Phase 5: User Story 3 - 기존 성도 공지 확인 (Priority: P2)

**Goal**: 기존 성도가 교회소식 페이지에서 최신 공지를 확인하고 일정/행사 정보를 얻는다.

**Independent Test**: 사용자가 교회소식 페이지에서 최신 공지 목록을 확인하고, 중요 공지와 일반 공지를 구분하여 확인할 수 있다.

### Implementation for User Story 3

- [X] T043 [US3] Create 교회소식 page (news/index.astro) in frontend/src/pages/news/index.astro
- [X] T044 [US3] Implement news list display sorted by date (newest first) in frontend/src/pages/news/index.astro
- [X] T045 [US3] Create news card component in frontend/src/components/NewsCard.astro
- [X] T046 [US3] Display news title, date, and important flag in news cards in frontend/src/components/NewsCard.astro
- [X] T047 [US3] Highlight important news items visually in frontend/src/components/NewsCard.astro
- [X] T048 [US3] Display news content (markdown rendered) in news cards in frontend/src/components/NewsCard.astro
- [X] T049 [US3] Add navigation link to 교회소식 page in frontend/src/components/Navigation.astro
- [X] T050 [US3] Ensure responsive design for news list and cards in frontend/src/pages/news/index.astro

**Checkpoint**: At this point, User Stories 1, 2, AND 3 should all work independently. Users can view news list and identify important announcements.

---

## Phase 6: User Story 4 - 새가족 등록 및 문의 (Priority: P2)

**Goal**: 새가족이 새가족 페이지에서 등록 방법을 확인하고 문의 경로로 연락한다.

**Independent Test**: 사용자가 새가족 페이지에서 환영 문구, 등록 절차, 문의 채널을 확인하고 연락할 수 있다.

### Implementation for User Story 4

- [X] T051 [US4] Create 새가족 page (newcomer.astro) in frontend/src/pages/newcomer.astro
- [X] T052 [US4] Display welcome message from content/config/newcomer.json in frontend/src/pages/newcomer.astro
- [X] T053 [US4] Display registration steps in frontend/src/pages/newcomer.astro
- [X] T054 [US4] Display contact channels (phone, email, Kakao) in frontend/src/pages/newcomer.astro
- [X] T055 [US4] Display newcomer meeting information if available in frontend/src/pages/newcomer.astro
- [X] T056 [US4] Create 교회소개 page (about.astro) in frontend/src/pages/about.astro
- [X] T057 [US4] Display church vision and mission in frontend/src/pages/about.astro
- [X] T058 [US4] Display pastor information in frontend/src/pages/about.astro
- [X] T059 [US4] Display church history if available in frontend/src/pages/about.astro
- [X] T060 [US4] Add navigation links to 새가족 and 교회소개 pages in frontend/src/components/Navigation.astro
- [X] T061 [US4] Ensure responsive design for 새가족 and 교회소개 pages

**Checkpoint**: All user stories should now be independently functional. Users can access all pages and find all required information.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T062 [P] Add SEO meta tags to all pages (title, description, og tags) in frontend/src/layouts/Layout.astro
- [ ] T063 [P] Add structured data (JSON-LD) for church information in frontend/src/layouts/Layout.astro
- [ ] T064 [P] Generate sitemap.xml in frontend/public/sitemap.xml
- [ ] T065 [P] Add favicon and app icons in frontend/public/icons/
- [ ] T066 [P] Optimize images (WebP format, lazy loading) across all pages
- [ ] T067 [P] Implement error handling for missing content files in frontend/src/lib/content.js
- [ ] T068 [P] Add loading states and empty states for content lists
- [ ] T069 [P] Ensure WCAG 2.1 Level AA accessibility compliance (keyboard navigation, ARIA labels, color contrast)
- [ ] T070 [P] Add prefers-reduced-motion support for animations in frontend/src/styles/global.css
- [ ] T071 [P] Performance optimization (code splitting, image optimization, CSS minification)
- [ ] T072 [P] Test responsive design on mobile (320px+), tablet (768px+), desktop (1024px+) breakpoints
- [ ] T073 [P] Validate content file schemas (JSON Schema validation) in build process
- [ ] T074 [P] Add external link handling (open in new tab, security attributes) in all components
- [ ] T075 [P] Create README.md with setup and deployment instructions in frontend/README.md
- [ ] T076 [P] Run quickstart.md validation checklist

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Independent, can use content loader from Foundational
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Independent, can use content loader from Foundational
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Independent, can use content loader from Foundational

### Within Each User Story

- Content loader functions must be available (from Foundational phase)
- Layout components must be available (from Foundational phase)
- Pages can be created independently
- Components can be created in parallel within a story
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T003-T007)
- All Foundational content loader tasks marked [P] can run in parallel (T009-T015)
- All Foundational component tasks marked [P] can run in parallel (T017-T020)
- Once Foundational phase completes, User Stories 1-4 can start in parallel (if team capacity allows)
- Components within a user story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members
- All Polish tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all US1 page creation tasks together:
Task: "Create Home page (index.astro) in frontend/src/pages/index.astro"
Task: "Create 예배안내 page (worship.astro) in frontend/src/pages/worship.astro"
Task: "Create 오시는길 page (location.astro) in frontend/src/pages/location.astro"

# Then implement sections in parallel:
Task: "Implement hero section with church name and slogan"
Task: "Implement core values section"
Task: "Implement worship schedule summary section"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Verify Home page displays church info
   - Verify 예배안내 page displays worship schedules
   - Verify 오시는길 page displays location info
   - Test on mobile, tablet, desktop
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add Polish phase → Final validation → Production deploy
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Home, 예배안내, 오시는길)
   - Developer B: User Story 2 (설교)
   - Developer C: User Story 3 (교회소식)
   - Developer D: User Story 4 (새가족, 교회소개)
3. Stories complete and integrate independently
4. Polish phase can be done in parallel by all developers

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Content files (JSON/Markdown) should be created with example/template data before implementation
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- All content files follow structure defined in data-model.md
- All pages must be responsive (mobile-first approach)
- External links (YouTube, maps) should open in new tab with security attributes

---

## Task Summary

- **Total Tasks**: 76 tasks
- **Setup Phase**: 7 tasks
- **Foundational Phase**: 13 tasks
- **User Story 1 (P1)**: 13 tasks
- **User Story 2 (P1)**: 9 tasks
- **User Story 3 (P2)**: 8 tasks
- **User Story 4 (P2)**: 11 tasks
- **Polish Phase**: 15 tasks

**MVP Scope**: Phases 1-3 (Setup + Foundational + User Story 1) = 33 tasks
