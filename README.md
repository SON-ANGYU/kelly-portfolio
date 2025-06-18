# Fashion Design Portfolio Website

패션디자인 포트폴리오를 위한 모던하고 반응형 웹사이트입니다. HTML5, CSS3, JavaScript로 제작되었으며, 면접이나 포트폴리오 공유에 최적화되어 있습니다.

## 🌟 주요 기능

- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- **모던한 UI/UX**: 패션 산업에 맞는 세련된 디자인
- **포트폴리오 필터링**: 카테고리별 작품 분류
- **부드러운 애니메이션**: 스크롤 기반 애니메이션 효과
- **연락처 폼**: 방문자와의 소통을 위한 폼
- **모바일 친화적**: 햄버거 메뉴와 터치 최적화

## 📁 파일 구조

```
workspace/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 이 파일
```

## 🚀 사용법

1. **웹 브라우저에서 열기**
   - `index.html` 파일을 더블클릭하여 웹 브라우저에서 열기
   - 또는 로컬 서버를 사용하여 실행

2. **커스터마이징**
   - 개인 정보, 포트폴리오 작품, 연락처 정보 수정
   - 색상, 폰트, 레이아웃 변경 가능

## 🎨 커스터마이징 가이드

### 개인 정보 수정

`index.html` 파일에서 다음 부분을 수정하세요:

```html
<!-- About Section -->
<div class="about-text">
    <h3>Fashion Design Student</h3>
    <p>여기에 본인의 소개를 작성하세요...</p>
</div>

<!-- Education -->
<div class="education">
    <h4>Education</h4>
    <p><strong>Bachelor of Fine Arts in Fashion Design</strong><br>
    실제 대학교명, 졸업 예정년도</p>
</div>
```

### 포트폴리오 작품 추가/수정

```html
<div class="portfolio-item" data-category="womenswear">
    <div class="portfolio-image">
        <!-- 실제 이미지로 교체 -->
        <img src="your-image.jpg" alt="Collection Name">
    </div>
    <div class="portfolio-info">
        <h3>작품 제목</h3>
        <p>작품 설명</p>
        <div class="portfolio-tags">
            <span class="tag">카테고리</span>
        </div>
    </div>
</div>
```

### 연락처 정보 수정

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>실제 이메일 주소</p>
    </div>
</div>
```

### 색상 테마 변경

`styles.css` 파일에서 다음 CSS 변수들을 수정하세요:

```css
/* 주요 색상 */
--primary-color: #e74c3c;      /* 메인 색상 */
--secondary-color: #f39c12;    /* 보조 색상 */
--text-color: #2c3e50;         /* 텍스트 색상 */
--background-color: #f8f9fa;   /* 배경 색상 */
```

## 📱 반응형 디자인

이 웹사이트는 다음 디바이스에서 최적화되어 있습니다:

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript**: ES6+ 기능
- **Font Awesome**: 아이콘
- **Google Fonts**: Playfair Display, Poppins

## 📸 이미지 추가 방법

1. **포트폴리오 이미지**
   - `images/` 폴더 생성
   - 이미지 파일 업로드
   - HTML에서 경로 수정

2. **프로필 사진**
   - About 섹션의 프로필 이미지 교체
   - 원형 이미지 권장 (250x250px)

## 🌐 배포 방법

### GitHub Pages
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings > Pages에서 배포

### Netlify
1. Netlify 계정 생성
2. 파일 드래그 앤 드롭
3. 자동 배포

### Vercel
1. Vercel 계정 생성
2. GitHub 저장소 연결
3. 자동 배포

## 📞 연락처 폼 설정

현재는 시뮬레이션된 폼입니다. 실제 이메일 전송을 위해서는:

1. **Formspree** 사용
2. **Netlify Forms** 사용
3. **자체 백엔드** 구축

## 🎯 SEO 최적화

- 메타 태그 추가
- Open Graph 태그
- 구조화된 데이터
- 이미지 alt 태그

## 🔒 보안 고려사항

- HTTPS 사용 권장
- 폼 검증 구현
- XSS 방지
- CSRF 토큰 사용

## 📈 성능 최적화

- 이미지 압축
- CSS/JS 미니파이
- 캐싱 설정
- CDN 사용

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 지원

문제가 있거나 질문이 있으시면 언제든 연락주세요!

---

**Happy Coding! 🎨✨** 