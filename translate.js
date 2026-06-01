const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

const t_en = code.substring(code.indexOf('const templates = {'), code.indexOf('// Router Function'));
let en_str = t_en.replace('const templates =', 'const templates_en =');
en_str = en_str.replace(/로봇소프트웨어과<br>프로젝트 포트폴리오/g, 'Robot Software<br>Project Portfolio');
en_str = en_str.replace(/작업자와 공존하는 스마트한 선택. 웹 프로그래밍과 로봇 제어 기술을 융합한 앤티그래비티 프로젝트입니다./g, 'A smart choice coexisting with workers. Antigravity project merging web programming and robotics.');
en_str = en_str.replace(/포트폴리오 보기/g, 'View Portfolio');
en_str = en_str.replace(/핵심 포트폴리오/g, 'Core Portfolio');
en_str = en_str.replace(/A-Series 웹 제어 UI 구현/g, 'A-Series Web UI Implementation');
en_str = en_str.replace(/P-Series 정밀 위치 보정/g, 'P-Series Precision Control');
en_str = en_str.replace(/H-Series 페이로드 최적화/g, 'H-Series Payload Optimization');
en_str = en_str.replace(/도입 기업 수/g, 'Client Companies');
en_str = en_str.replace(/글로벌 인증/g, 'Global Certifications');
en_str = en_str.replace(/누적 구동 시간 \(h\)/g, 'Operation Hours (h)');
en_str = en_str.replace(/A-Series 상세 사양/g, 'A-Series Specifications');
en_str = en_str.replace(/사양 항목/g, 'Specification');
en_str = en_str.replace(/상세 정보/g, 'Details');
en_str = en_str.replace(/가반 하중 \(Payload\)/g, 'Payload');
en_str = en_str.replace(/작업 반경 \(Reach\)/g, 'Reach');
en_str = en_str.replace(/반복 정밀도 \(Repeatability\)/g, 'Repeatability');
en_str = en_str.replace(/자유도 \(Degrees of Freedom\)/g, 'DOF');
en_str = en_str.replace(/자중 \(Weight\)/g, 'Weight');
en_str = en_str.replace(/주요 특징/g, 'Key Features');
en_str = en_str.replace(/카탈로그 다운로드/g, 'Download Catalog');
en_str = en_str.replace(/로봇소프트웨어과 소개/g, 'About Robot Software Dept');
en_str = en_str.replace(/프로젝트 & 포트폴리오 상세/g, 'Portfolio Details');
en_str = en_str.replace(/고객 소통 게시판/g, 'Community Board');
en_str = en_str.replace(/최근 게시물/g, 'Recent Posts');
en_str = en_str.replace(/글쓰기/g, 'Write');
en_str = en_str.replace(/번호/g, 'No.');
en_str = en_str.replace(/제목/g, 'Title');
en_str = en_str.replace(/작성자/g, 'Author');
en_str = en_str.replace(/날짜/g, 'Date');
en_str = en_str.replace(/데이터베이스 연결 중.../g, 'Connecting to database...');
en_str = en_str.replace(/새 글 작성하기/g, 'Write a new post');
en_str = en_str.replace(/비밀번호 \(수정\/삭제용\)/g, 'Password');
en_str = en_str.replace(/내용/g, 'Content');
en_str = en_str.replace(/등록하기/g, 'Submit');
en_str = en_str.replace(/게시물 수정하기/g, 'Edit Post');
en_str = en_str.replace(/수정 완료/g, 'Finish Edit');
en_str = en_str.replace(/취소/g, 'Cancel');

code = "window.currentLanguage = 'ko';\n\n" + code;
code = code.replace(t_en, t_en + en_str);

code = code.replace('appContent.innerHTML = templates[route] || templates.home;', 'appContent.innerHTML = (window.currentLanguage === "en" ? templates_en[route] : templates[route]) || (window.currentLanguage === "en" ? templates_en.home : templates.home);');

// Translate news_detail
code = code.replace('← 목록으로 돌아가기', '${window.currentLanguage === "en" ? "← Back to list" : "← 목록으로 돌아가기"}');
code = code.replace('>수정<', '>${window.currentLanguage === "en" ? "Edit" : "수정"}<');
code = code.replace('>삭제<', '>${window.currentLanguage === "en" ? "Delete" : "삭제"}<');
code = code.replace('작성자:', '${window.currentLanguage === "en" ? "Author:" : "작성자:"}');
code = code.replace('날짜:', '${window.currentLanguage === "en" ? "Date:" : "날짜:"}');

const setLangSrc = `
window.setLanguage = function(lang) {
    if (window.currentLanguage === lang) return;
    window.currentLanguage = lang;
    
    document.getElementById('btn-ko').style.opacity = lang === 'ko' ? '1' : '0.5';
    document.getElementById('btn-en').style.opacity = lang === 'en' ? '1' : '0.5';
    document.getElementById('btn-ko').style.color = lang === 'ko' ? 'var(--primary)' : '#fff';
    document.getElementById('btn-en').style.color = lang === 'en' ? 'var(--primary)' : '#fff';

    document.querySelectorAll('[data-ko][data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });

    const activeLink = document.querySelector('nav a.active');
    let currentRoute = 'home';
    if(activeLink) currentRoute = activeLink.getAttribute('data-route') || 'home';
    
    if(document.querySelector('button[onclick*="editPost"]')) {
        const id = document.querySelector('button[onclick*="editPost"]').getAttribute('onclick').match(/'([^']+)'/)[1];
        navigate('news_detail', id);
        return;
    }
    navigate(currentRoute);
};
`;
code += '\n' + setLangSrc;
fs.writeFileSync('main.js', code);
