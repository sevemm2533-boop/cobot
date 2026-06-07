// Page Templates
window.currentLanguage = 'ko';
const templates = {
    home: `
        <section class="hero cinematic">
            <div id="video-container">
                <video autoplay muted playsinline class="hero-bg-video active" id="bg-video-1">
                    <source src="https://assets.mixkit.co/videos/47257/47257-720.mp4" type="video/mp4">
                </video>
                <video muted playsinline class="hero-bg-video" id="bg-video-2"></video>
            </div>
            <div class="hero-overlay"></div>
            <div class="container hero-center-content">
                <p class="hero-top-text">Safety & Efficiency for Industry 4.0</p>
                <h1 class="hero-main-title">사람과 기술의 동행,<br>지능형 협동로봇 솔루션</h1>
                <p class="hero-sub-text">독보적인 로봇 기술을 통해 인간과 기계의 완벽한 협업 환경을 창조합니다.<br>작업자의 안전을 최우선으로 하는 지능형 솔루션으로 산업 현장의 혁신적인 미래를 이끌어갑니다.</p>
                <div class="hero-cta-buttons" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                    <a href="#" class="btn-primary" onclick="window.navToProduct(null, event)">제품 라인업 보기</a>
                    <a href="#" class="btn-secondary" onclick="navigate('contact')">도입 문의하기</a>
                </div>
            </div>
        </section>

        <!-- Product Lineup Section -->
        <section class="container reveal">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">ROBOT LINEUP</p>
                <h2>지능형 협동로봇 라인업</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToProduct('a10', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/robot_a10.png" alt="Cobot A-10">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Cobot A-10</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">가장 강력한 주력 모델로 12kg의 가반 하중과 1450mm의 넓은 작업 반경을 제공하며 고도화된 충돌 감지 기능이 내장되어 있습니다.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">상세 사양 보기 &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToProduct('open_ring', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/robot_open_ring.png" alt="OpenManipulator-X Ring Type">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">OpenManipulator-X (Ring)</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">교육 및 연구용으로 최적화된 소형 로봇 팔입니다. 경량 링 타입 그리퍼를 이용해 다양한 객체를 걸어 이송할 수 있습니다.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">상세 사양 보기 &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToProduct('open_sensor', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/robot_open_sensor.png" alt="OpenManipulator-X Sensor Type">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">OpenManipulator-X (Sensor)</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">비전 카메라와 초음파 센서가 결합된 지능형 교육 로봇으로 실시간 환경 인식 및 객체 인식을 구현합니다.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">상세 사양 보기 &rarr;</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Applications Section -->
        <section class="container reveal" style="padding-top: 2rem;">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">APPLICATIONS</p>
                <h2>산업별 협업 솔루션</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToApplicationDetail('car', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/car_factory_robot.png" alt="Car Manufacturing">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">자동차 제조</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">자동차 조립 및 용접 공정에 투입되는 고정밀 협동로봇 솔루션으로 높은 신뢰성과 뛰어난 안전성을 제공합니다.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">자세히 보기 &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToApplicationDetail('assembly', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/assembly_working.jpg" alt="Assembly & Inspection">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">조립 및 검사</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">비전 AI 센서와 실시간 힘 제어 피드백을 결합하여 오차 없는 초정밀 전자부품 조립 및 불량 분석을 수행합니다.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">자세히 보기 &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToApplicationDetail('food', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/food_working.jpg" alt="F&B Automation">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">F&B 자동화 연동</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">무인 매장 자동화를 위해 POS 및 ROS 시스템을 연동한 바리스타 및 요리/조리 핸들링 솔루션을 제안합니다.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">자세히 보기 &rarr;</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Expertise Section -->
        <section class="container reveal" style="padding-top: 2rem;">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">TECHNICAL EXPERTISE</p>
                <h2>핵심 기술 역량</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌐</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Web Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Firebase 연동 실시간 관제 시스템 구축</p>
                </div>
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤖</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Robot Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">ROS 기반 협동로봇 제어 오퍼레이팅</p>
                </div>
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁️</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Computer Vision</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">비전 센서를 이용한 품질 자동 검사</p>
                </div>
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">📊</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Data Analytics</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">작동 로그 분석 및 가동률 대시보드</p>
                </div>
            </div>
        </section>

        <section class="stats container reveal">
            <div class="stat-item">
                <h4 class="counter" data-target="1500">0</h4>
                <p>Partners</p>
            </div>
            <div class="stat-item">
                <h4 class="counter" data-target="24">0</h4>
                <p>Certificates</p>
            </div>
            <div class="stat-item">
                <h4 class="counter" data-target="100">0</h4>
                <p>Uptime %</p>
            </div>
        </section>
    `,
    products: `
        <section class="container" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>제품 상세 사양</h2>
                <div class="divider"></div>
            </div>
            
            <div class="product-tabs">
                <button class="product-tab-btn active" data-product-id="a10" onclick="window.switchProduct('a10')">Cobot A-10</button>
                <button class="product-tab-btn" data-product-id="open_ring" onclick="window.switchProduct('open_ring')">OpenManipulator-X (Ring Type)</button>
                <button class="product-tab-btn" data-product-id="open_sensor" onclick="window.switchProduct('open_sensor')">OpenManipulator-X (Sensor Type)</button>
            </div>

            <div class="sticky-container">
                <div class="sticky-left">
                    <div class="sticky-img" style="transition: opacity 0.25s ease, transform 0.25s ease;">
                        <img src="assets/robot_a10.png" alt="Robot A10">
                    </div>
                    <button class="btn-primary" style="width: 100%; font-size: 1.1rem; font-weight: 700; padding: 1rem; border-radius: 8px; box-shadow: 0 4px 20px rgba(0, 168, 255, 0.35); text-transform: uppercase;" onclick="navigate('contact')">구매하기</button>
                </div>
                <div class="scroll-content" style="transition: opacity 0.25s ease, transform 0.25s ease;">
                    <div style="margin-bottom: 4rem;">
                        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Cobot A-10</h3>
                        <p style="color: var(--text-muted); font-size: 1.1rem;">
                            A-10은 가장 인기 있는 모델로, 10kg의 가반 하중과 1300mm의 작업 반경을 제공합니다. 
                            충돌 감지 알고리즘이 내장되어 작업자와의 안전한 공존을 보장합니다.
                        </p>
                    </div>
                    
                    <table class="board-table" style="margin-bottom: 4rem;">
                        <thead>
                            <tr>
                                <th>사양 항목</th>
                                <th>상세 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>가격 (Price)</td><td style="color: var(--primary); font-weight: bold;">32,000,000 원</td></tr>
                            <tr><td>가반 하중 (Payload)</td><td>10 kg</td></tr>
                            <tr><td>작업 반경 (Reach)</td><td>1300 mm</td></tr>
                            <tr><td>반복 정밀도 (Repeatability)</td><td>±0.03 mm</td></tr>
                            <tr><td>자유도 (Degrees of Freedom)</td><td>6 Axis</td></tr>
                            <tr><td>자중 (Weight)</td><td>33.5 kg</td></tr>
                        </tbody>
                    </table>

                    <div style="margin-bottom: 4rem;">
                        <h4 style="margin-bottom: 1rem;">주요 특징</h4>
                        <ul style="padding-left: 1.5rem; color: var(--text-muted);">
                            <li>지능형 충돌 감지 및 세이프 스탑</li>
                            <li>직관적인 그래픽 UI 티칭 펜던트</li>
                            <li>IP54 등급 방수/방진 (산업용 옵션 IP66)</li>
                            <li>빠른 설치 및 재배치 가능 (평균 1시간 이내)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    applications: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Industrial Applications</h2>
                <div class="divider"></div>
            </div>
            <div class="grid">
                <div class="card reveal" tabindex="0" id="app-car" onclick="window.navToApplicationDetail('car')" style="cursor: pointer;">
                    <div class="card-img"><img src="assets/car_factory_robot.png" alt="Car Factory Robot"></div>
                    <div class="card-body">
                        <h3>자동차 제조 (Car Manufacturing)</h3>
                        <p>자동차 공장에서 조립 및 용접 공정에 투입되는 협동로봇입니다. 높은 정밀도와 내구성을 자랑합니다.</p>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" id="app-assembly" onclick="window.navToApplicationDetail('assembly')" style="cursor: pointer;">
                    <div class="card-img"><img src="assets/assembly_working.jpg" alt="Assembly"></div>
                    <div class="card-body">
                        <h3>조립 및 검사 (Assembly)</h3>
                        <p>비전 센서와 결합하여 정밀한 부품 조립 and 불량품 검사를 동시 수행합니다.</p>
                    </div>
                </div>
                <div class="card reveal" id="app-food" onclick="window.navToApplicationDetail('food')" style="cursor: pointer;" tabindex="0">
                    <div class="card-img"><img src="assets/food_working.jpg" loading="lazy" alt="F&B 로봇 작동 모습"></div>
                    <div class="card-body">
                        <h3>F&B (푸드테크) 자동화 연동</h3>
                        <p>커피 추출, 치킨 조리 과정의 무인화를 위한 POS 시스템 및 로봇 운영 체제(ROS) 간 통합 개발.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    support: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>고객 지원 센터</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(2, 1fr);">
                <div class="board-container">
                    <h3>기술 문서 자료실</h3>
                    <ul style="list-style: none; margin-top: 1rem;">
                        <li style="padding: 1rem 0; border-bottom: 1px solid #eee;">
                            <a href="#" style="text-decoration: none; color: var(--text-main); display: flex; justify-content: space-between;">
                                <span>[CAD] A-Series 2D/3D Drawing</span>
                                <span style="color: var(--primary);">Download</span>
                            </a>
                        </li>
                        <li style="padding: 1rem 0; border-bottom: 1px solid #eee;">
                            <a href="#" style="text-decoration: none; color: var(--text-main); display: flex; justify-content: space-between;">
                                <span>[Manual] 운영 및 설치 가이드 (KR)</span>
                                <span style="color: var(--primary);">Download</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="board-container">
                    <h3>소프트웨어 업데이트</h3>
                    <ul style="list-style: none; margin-top: 1rem;">
                        <li style="padding: 1rem 0; border-bottom: 1px solid #eee;">
                            <span>ROOS (Robot Operating System) v2.4.1</span>
                            <span style="float: right; color: var(--text-muted);">2026.04.12</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `,
    news: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>커뮤니티</h2>
                <p>궁금한 점이나 도입 사례를 공유해 주세요.</p>
                <div class="divider"></div>
            </div>
            <div class="board-container">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div class="board-tabs" style="display: flex; gap: 0.5rem;">
                        <button class="board-tab active" onclick="window.filterBoardCategory(null)">전체</button>
                        <button class="board-tab" onclick="window.filterBoardCategory('notice')">공지사항</button>
                        <button class="board-tab" onclick="window.filterBoardCategory('free')">자유게시판</button>
                        <button class="board-tab" onclick="window.filterBoardCategory('qa')">Q&A</button>
                    </div>
                    <button class="btn-primary" style="padding: 0.5rem 1rem;" data-route="news_write">글쓰기</button>
                </div>
                <table class="board-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody id="board-list">
                        <tr><td colspan="4" style="text-align:center; padding: 2rem;">데이터베이스 연결 중...</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    `,
    news_write: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>새 글 작성하기</h2>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 800px; margin: 0 auto;">
                <form id="post-form">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">제목</label>
                        <input type="text" id="post-title" required placeholder="제목을 입력하세요" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">카테고리</label>
                            <select id="post-category" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 100%;">
                                <option value="free">자유게시판</option>
                                <option value="notice">공지사항</option>
                                <option value="qa">Q&A</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">작성자</label>
                            <input type="text" id="post-author" required placeholder="성함 또는 기업명" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">비밀번호 (수정/삭제용)</label>
                            <input type="password" id="post-password" required placeholder="비밀번호 4자리" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                        </div>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">내용</label>
                        <textarea id="post-content" required placeholder="내용을 입력하세요" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 300px;"></textarea>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn-primary" style="flex: 1;">등록하기</button>
                        <button type="button" class="btn-primary" style="flex: 1; background: #444;" data-route="news">취소</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    news_edit: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>게시물 수정하기</h2>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 800px; margin: 0 auto;">
                <form id="edit-form">
                    <input type="hidden" id="edit-id">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">제목</label>
                        <input type="text" id="edit-title" required style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">내용</label>
                        <textarea id="edit-content" required style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 300px;"></textarea>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn-primary" style="flex: 1;">수정 완료</button>
                        <button type="button" class="btn-primary" style="flex: 1; background: #444;" data-route="news">취소</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    contact: `
         <section class="container" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>도입 문의하기</h2>
                <p>귀사의 산업 현장에 최적화된 로보틱스 솔루션을 제안해 드립니다.</p>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 600px; margin: 0 auto;">
                <form id="contact-form">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">회사명</label>
                        <input type="text" placeholder="회사명을 입력하세요" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">연락처</label>
                        <input type="text" placeholder="010-0000-0000" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">관심 제품</label>
                        <select style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                            <option>Cobot A-10</option>
                            <option>OpenManipulator-X (Ring Type)</option>
                            <option>OpenManipulator-X (Sensor Type)</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">문의 내용</label>
                        <textarea placeholder="공정 내용 및 요구사항을 적어주세요" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px; height: 150px;"></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%;">상담 신청하기</button>
                </form>
            </div>
        </section>
    `,
    application_detail: (appId) => {
        const app = applicationsData.ko[appId];
        if (!app) return '';
        
        const benefitsHtml = app.benefits.map(b => `
            <div class="app-benefit-card reveal">
                <div class="app-benefit-num">✓</div>
                <div class="app-benefit-text">
                    <h5>${b.title}</h5>
                    <p>${b.detail}</p>
                </div>
            </div>
        `).join('');

        const specsHtml = app.techSpecs.map(s => `
            <tr>
                <th>${s[0]}</th>
                <td>${s[1]}</td>
            </tr>
        `).join('');

        const usecasesHtml = app.usecases.map(u => `
            <div class="app-usecase-item reveal">
                <h4>${u.title}</h4>
                <p>${u.desc}</p>
            </div>
        `).join('');

        const galleryHtml = app.gallery.map((imgUrl, i) => `
            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="window.setMainAppImage('${imgUrl}', this)">
                <img src="${imgUrl}" alt="Gallery Image ${i+1}">
            </div>
        `).join('');

        return `
            <section class="container reveal" style="padding-top: 10rem; padding-bottom: 5rem;">
                <div class="app-detail-back">
                    <a href="#" data-route="applications" style="color: var(--primary); text-decoration: none; font-weight: bold; display: flex; align-items: center; gap: 0.5rem;">
                        ← 사용처 목록으로 돌아가기
                    </a>
                </div>
                
                <div class="app-detail-header">
                    <span class="app-tag">Industrial Solutions</span>
                    <h2>${app.name}</h2>
                    <p class="app-subtitle">${app.subtitle}</p>
                    <div class="divider" style="margin: 1.5rem 0;"></div>
                </div>

                <div class="app-detail-grid">
                    <!-- Left: Visual Presentation -->
                    <div class="app-detail-visual">
                        <div class="app-main-img-wrap">
                            <img id="app-main-img" src="${app.img}" alt="${app.name}">
                        </div>
                        <div class="app-gallery-grid">
                            ${galleryHtml}
                        </div>
                    </div>

                    <!-- Right: Detailed Content -->
                    <div class="app-detail-info">
                        <div class="app-section">
                            <h3>솔루션 개요</h3>
                            <p class="app-desc">${app.desc}</p>
                        </div>

                        <div class="app-section">
                            <h3>도입 효과 (Key Benefits)</h3>
                            <div class="app-benefits-list">
                                ${benefitsHtml}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-detail-bottom">
                    <div class="app-section">
                        <h3>상세 적용 Usecases</h3>
                        <div class="app-usecases-grid">
                            ${usecasesHtml}
                        </div>
                    </div>

                    <div class="app-section" style="margin-top: 3rem;">
                        <h3>기술 사양 및 구성 정보</h3>
                        <table class="board-table app-specs-table">
                            <tbody>
                                ${specsHtml}
                            </tbody>
                        </table>
                    </div>

                    <div class="app-cta-container">
                        <div class="app-cta-card">
                            <h4>해당 솔루션 도입에 대해 상담이 필요하십니까?</h4>
                            <p>귀사의 현장 및 공정 요구사항에 가장 적합한 맞춤형 협동로봇 솔루션을 제시해 드립니다.</p>
                            <button class="btn-primary" onclick="navigate('contact')" style="margin-top: 1rem;">도입 문의하기</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
};

window.activeProduct = 'a10';

const applicationsData = {
    ko: {
        car: {
            name: "자동차 제조 (Car Manufacturing)",
            subtitle: "스마트 공정을 위한 고정밀 차량 조립 및 용접 솔루션",
            desc: "자동차 제조 공정에서의 협동로봇은 차체 용접, 나사 체결, 실링 도포 및 부품 핸들링 등 다양한 공정에서 활약하고 있습니다. 펜스 없이 작업자와 한 공간에서 협업하여 높은 품질의 균일성을 유지하며 조립 속도를 크게 향상시킵니다. 작업자의 신체적 부담을 덜어주면서 정밀한 제어로 불량률을 0%에 가깝게 줄여줍니다.",
            img: "assets/car_factory_robot.png",
            gallery: ["assets/car_factory_robot.png", "assets/welding.png"],
            benefits: [
                { title: "생산성 향상", detail: "공정 주기(Cycle Time)를 25% 단축하고 균일한 품질 보장" },
                { title: "작업자 안전 보장", detail: "안전 펜스 없는 공간에서 충돌 감지센서를 통해 작업자 보호" },
                { title: "다기능 공정 전환", detail: "용접에서부터 조립, 도포까지 간편한 툴 교체 및 티칭 지원" }
            ],
            techSpecs: [
                ["주요 적용 공정", "스폿 용접, 차체 조립, 실링 도포, 볼트 나사 체결"],
                ["추천 로봇 모델", "Cobot A-10 (고하중 12kg 가반하중 모델)"],
                ["시스템 통신방식", "ROS, Modbus TCP, EtherCAT 지원"],
                ["안전 인증 등급", "ISO 13849-1 PL d/e, ISO 10218-1 준수"]
            ],
            usecases: [
                {
                    title: "1. 실시간 차체 정밀 용접 (Welding)",
                    desc: "협동로봇에 용접 건을 장착하여 일정한 압력과 경로로 스폿 및 아크 용접을 완벽하게 수행합니다."
                },
                {
                    title: "2. 조립 라인 볼트/너트 결합",
                    desc: "정교한 힘 제어 토크 센서를 이용하여 일정한 조임 토크로 부품의 볼트 체결 불량을 원천 차단합니다."
                },
                {
                    title: "3. 실런트 및 접착제 도포",
                    desc: "차량 유리나 도어 틈새에 고속 정밀 궤적을 그리며 고르게 실링제를 도포합니다."
                }
            ]
        },
        assembly: {
            name: "조립 및 검사 (Assembly & Inspection)",
            subtitle: "비전 인공지능 센서 융합 정밀 검사 및 초정밀 조립 시스템",
            desc: "초정밀 전자부품 및 기계 부품 조립 라인에서 협동로봇은 강력한 컴퓨터 비전 센서와 힘 제어 솔루션을 결합하여 미세한 부품의 위치를 파악하고 조립을 수행합니다. 조립 완료 후에는 3D 카메라 및 인공지능 광학 검사를 수행하여 조립 상태와 치수를 검증하고, 불량 유무를 그 자리에서 즉시 분석하여 완전 무결한 가동을 보장합니다.",
            img: "assets/assembly_working.jpg",
            gallery: ["assets/assembly_working.jpg", "assets/assembly_inspection.png"],
            benefits: [
                { title: "초정밀 제어", detail: "반복 정밀도 ±0.02mm 수준의 미세 오차 제어로 정밀 기판 조립 가능" },
                { title: "실시간 불량 판별", detail: "AI 카메라로 크랙, 이물질, 커넥터 접촉 불량 등을 즉시 검사" },
                { title: "유연한 라인 배치", detail: "컴팩트한 크기로 기존 생산 라인의 수정 없이 신속 도입 가능" }
            ],
            techSpecs: [
                ["주요 적용 공정", "PCB 삽입, 스마트폰 카메라 모듈 조립, 기판 외관 검사"],
                ["추천 로봇 모델", "OpenManipulator-X (Sensor Type) 및 A-Series 소형"],
                ["비전 모듈 인터페이스", "OpenCV 연동, GigE 카메라 및 USB 3.0 인터페이스"],
                ["정밀도 사양", "±0.02mm 반복 정밀도 및 실시간 힘 제어 피드백"]
            ],
            usecases: [
                {
                    title: "1. 초정밀 전자 부품 장착",
                    desc: "커넥터나 소형 커패시터를 손상 없이 일정한 힘(Force)으로 기판에 안착시킵니다."
                },
                {
                    title: "2. 3D 스캐닝 기판 치수 검사",
                    desc: "로봇 팁에 부착된 3D 스캐너를 이용해 조립품의 마이크론 단위 치수 공차를 실시간 측정합니다."
                },
                {
                    title: "3. 외관 스크래치 및 이물 검증",
                    desc: "다각도의 라이팅 하에서 Vision AI 솔루션과 결합하여 표면 스크래치와 납조 조립 불량을 확인합니다."
                }
            ]
        },
        food: {
            name: "F&B 자동화 연동 (F&B Automation)",
            subtitle: "식음료 위생 기준을 충족하는 리테일 푸드테크 자동화 솔루션",
            desc: "푸드테크 영역에서의 협동로봇은 커피 에스프레소 머신 연동, 음료 컵 핸들링, 치킨/튀김류 조리 등 무인 리테일 매장의 핵심 브레인 역할을 수행합니다. POS 주문 결제 시스템과 실시간으로 연동되어 주문 번호에 맞는 메뉴를 제조하고 로봇 운영 체제(ROS)를 통한 정확한 이동으로 위생적이고 정밀한 무인 F&B 서비스를 실현합니다.",
            img: "assets/food_working.jpg",
            gallery: ["assets/food_working.jpg", "assets/food_barista.png"],
            benefits: [
                { title: "24시간 무인 운영", detail: "POS 주문 결제 즉시 로봇이 작동하여 끊김 없는 자동 제조 서비스 구현" },
                { title: "철저한 위생 규격", detail: "FDA 승인 및 IP 등급 방수로 물세척 및 위생 관리 우수" },
                { title: "일관된 맛 유지", detail: "레시피대로 시간과 중량을 정밀 통제하여 일관성 있는 최상의 F&B 제공" }
            ],
            techSpecs: [
                ["주요 적용 공정", "바리스타 커피 추출, 치킨 튀김 조리, 디저트 데코레이션, 서빙"],
                ["추천 로봇 모델", "Cobot A-Series (위생 방진방수 IP66 커스터마이징)"],
                ["소프트웨어 통합", "POS 연동 TCP/IP 프로토콜, ROS/ROS2 통합 구동 및 웹 모니터링"],
                ["보안 및 위생 규격", "NSF 규격 준수, 식품 등급 윤활유 사용"]
            ],
            usecases: [
                {
                    title: "1. 무인 바리스타 카페 시스템",
                    desc: "주문 결제 시스템(POS)의 신호를 받아 에스프레소 샷을 추출하고 컵에 우유와 얼음을 조절하여 담습니다."
                },
                {
                    title: "2. 자동 프라이어 조리 핸들링",
                    desc: "식품 바스켓을 일정한 속도로 뜨거운 기름에 투입하고 튀김이 완성되면 탈수 및 털기 작업을 자동 수행합니다."
                },
                {
                    title: "3. 위생 자동 세척 모드",
                    desc: "일과 후 스팀 분사기나 세척 브러시를 쥐고 스스로 머신 노즐과 조리 테이블을 청결하게 케어합니다."
                }
            ]
        }
    },
    en: {
        car: {
            name: "Car Manufacturing",
            subtitle: "High-Precision Body Assembly & Welding Solutions for Smart Factories",
            desc: "Collaborative robots in the automotive manufacturing process play an active role in body welding, screw fastening, sealant dispensing, and part handling. By working in the same space as operators without safety fences, they maintain high quality consistency and significantly improve assembly speeds. They reduce the operator's physical burden while minimizing defect rates near 0% through precision control.",
            img: "assets/car_factory_robot.png",
            gallery: ["assets/car_factory_robot.png", "assets/welding.png"],
            benefits: [
                { title: "Productivity Boost", detail: "Reduces cycle times by 25% and guarantees uniform quality output" },
                { title: "Operator Safety", detail: "Protects operators via advanced collision sensors in fence-free work zones" },
                { title: "Flexible Line Changeover", detail: "Supports quick tool changes and easy teaching from welding to assembly" }
            ],
            techSpecs: [
                ["Main Applications", "Spot Welding, Body Assembly, Sealing & Gluing, Bolt/Screw Driving"],
                ["Recommended Model", "Cobot A-10 (High payload 12kg model)"],
                ["Communication protocol", "ROS, Modbus TCP, EtherCAT support"],
                ["Safety Rating", "ISO 13849-1 PL d/e, ISO 10218-1 compliant"]
            ],
            usecases: [
                {
                    title: "1. Real-time Precision Body Welding",
                    desc: "The cobot welds car body panels with constant force and precision paths using integrated welding guns."
                },
                {
                    title: "2. Assembly Line Bolt & Nut Fastening",
                    desc: "Leverages fine force-torque sensors to guarantee correct fastening torque, preventing defect leaks."
                },
                {
                    title: "3. Sealant and Adhesive Dispensing",
                    desc: "Applies sealants uniformly along high-speed precision paths on windshield and door frames."
                }
            ]
        },
        assembly: {
            name: "Assembly & Inspection",
            subtitle: "Precision Inspection and Assembly Systems with Vision AI Integration",
            desc: "On precision electronics and mechanical assembly lines, cobots combine powerful computer vision sensors and force control solutions to locate microscopic components and execute delicate insertion tasks. After assembly, integrated 3D cameras and optical inspection algorithms instantly verify the assembly condition and tolerances, checking for defects on-the-spot to ensure absolute defect-free operation.",
            img: "assets/assembly_working.jpg",
            gallery: ["assets/assembly_working.jpg", "assets/assembly_inspection.png"],
            benefits: [
                { title: "Ultra-Precision Control", detail: "Repeatability of ±0.02mm allows assembly of micro electronic boards" },
                { title: "Real-time Defect Detection", detail: "Instantly checks for cracks, contaminants, and connector misalignments using AI cameras" },
                { title: "Flexible Line Deployment", detail: "Compact footprint allows swift installation into existing lines without modifications" }
            ],
            techSpecs: [
                ["Main Applications", "PCB insertion, Smartphone camera module assembly, Circuit board inspection"],
                ["Recommended Model", "OpenManipulator-X (Sensor Type) & A-Series light payload models"],
                ["Vision Module Interface", "OpenCV integration, GigE camera, and USB 3.0 interfaces"],
                ["Precision Specs", "±0.02mm repeatability and real-time force feedback loop"]
            ],
            usecases: [
                {
                    title: "1. Ultra-Precision Component Insertion",
                    desc: "Inserts connectors or micro capacitors onto boards with precise force control, avoiding parts damage."
                },
                {
                    title: "2. 3D Scanning Dimensional Analysis",
                    desc: "Measures dimensional tolerances of assemblies in microns in real-time using end-of-arm 3D scanners."
                },
                {
                    title: "3. Surface Scratch & Foreign Object Detection",
                    desc: "Scans under multi-angle lighting in combination with Vision AI to catch scratches and solder defects."
                }
            ]
        },
        food: {
            name: "F&B Automation",
            subtitle: "Retail Foodtech Solutions Compliant with Food Safety Standards",
            desc: "In the foodtech sector, collaborative robots serve as the core engine for unmanned retail stores, handling tasks like operating espresso machines, managing beverage cups, and deep-frying food. Seamlessly integrated with POS order payment systems, they prepare menus matched to order numbers, utilizing the Robot Operating System (ROS) for precise navigation to achieve hygienic, precise, and unmanned food and beverage services.",
            img: "assets/food_working.jpg",
            gallery: ["assets/food_working.jpg", "assets/food_barista.png"],
            benefits: [
                { title: "24/7 Unmanned Operations", detail: "Robots activate instantly upon POS checkout to deliver continuous service" },
                { title: "Strict Hygiene Compliance", detail: "FDA-approved materials and high IP waterproof ratings for easy cleaning and maintenance" },
                { title: "Consistent Flavor & Quality", detail: "Maintains absolute recipe consistency by precisely controlling time and weight" }
            ],
            techSpecs: [
                ["Main Applications", "Barista coffee extraction, Deep-frying food prep, Dessert decoration, Serving"],
                ["Recommended Model", "Cobot A-Series (Customized IP66 hygiene-grade dust/waterproof options)"],
                ["Software Integration", "POS link via TCP/IP, ROS/ROS2 core driver integration, and web monitoring dashboard"],
                ["Safety & Hygiene Standard", "Complies with NSF specifications, uses food-grade lubricants"]
            ],
            usecases: [
                {
                    title: "1. Unmanned Barista Cafe System",
                    desc: "Receives order signals from the POS system to extract espresso shots and prepare customizable milk/ice drinks."
                },
                {
                    title: "2. Automated Deep-Fryer Food Handling",
                    desc: "Lowers food baskets into hot oil at a steady speed, and automatically shakes off oil when cooking is finished."
                },
                {
                    title: "3. Automated Cleaning & Sanitizing Mode",
                    desc: "Equipped with steam sprayers or brushes to autonomously sanitize machine nozzles and prep counters post-shift."
                }
            ]
        }
    }
};

const productsData = {
    ko: {
        a10: {
            name: "Cobot A-10",
            img: "assets/robot_a10.png",
            desc: "Cobot A-10은 가장 강력한 성능을 자랑하는 주력 모델로, 12kg의 가반 하중과 1450mm의 광범위한 작업 반경을 제공합니다. 고도화된 충돌 감지 알고리즘과 세이프티 시스템이 내장되어 작업자와의 완벽한 안전 공존을 보장합니다.",
            specs: [
                ["가격 (Price)", "32,000,000 원"],
                ["가반 하중 (Payload)", "12 kg"],
                ["작업 반경 (Reach)", "1450 mm"],
                ["반복 정밀도 (Repeatability)", "±0.02 mm"],
                ["자유도 (Degrees of Freedom)", "6 Axis"],
                ["자중 (Weight)", "31.5 kg"]
            ],
            features: [
                "지능형 충돌 감지 및 세이프 스탑",
                "직관적인 그래픽 UI 티칭 펜던트",
                "IP54 등급 방수/방진 (산업용 옵션 IP66)",
                "빠른 설치 및 재배치 가능 (평균 1시간 이내)"
            ]
        },
        open_ring: {
            name: "OpenManipulator-X (Ring Type)",
            img: "assets/robot_open_ring.png",
            desc: "OpenManipulator-X (Ring Type)은 교육 및 연구용으로 최적화된 소형 매니퓰레이터입니다. 경량화된 설계와 링 타입 그리퍼를 탑재하여 다양한 형상의 객체를 걸거나 이송하는 연구에 적합합니다.",
            specs: [
                ["가격 (Price)", "1,200,000 원"],
                ["가반 하중 (Payload)", "600 g (0.6 kg)"],
                ["작업 반경 (Reach)", "400 mm"],
                ["반복 정밀도 (Repeatability)", "±0.05 mm"],
                ["자유도 (Degrees of Freedom)", "5 Axis (4 + Gripper)"],
                ["자중 (Weight)", "680 g (0.68 kg)"]
            ],
            features: [
                "DYNAMIXEL XM430 액추에이터 기반의 높은 내구성과 제어성",
                "오픈소스 ROS 및 ROS2 공식 지원",
                "PC, OpenCR 등을 통한 다양한 인터페이스 환경 지원",
                "초보자도 쉽게 따라 할 수 있는 튜토리얼 및 예제 제공"
            ]
        },
        open_sensor: {
            name: "OpenManipulator-X (Sensor Type)",
            img: "assets/robot_open_sensor.png",
            desc: "OpenManipulator-X (Sensor Type)은 비전 카메라와 초음파 센서가 결합된 지능형 교육용 로봇 팔입니다. 실시간 환경 감지 및 객체 인식을 통해 자율 작업 시나리오를 설계하고 구현할 수 있습니다.",
            specs: [
                ["가격 (Price)", "1,500,000 원"],
                ["가반 하중 (Payload)", "450 g (0.45 kg)"],
                ["작업 반경 (Reach)", "380 mm"],
                ["반복 정밀도 (Repeatability)", "±0.1 mm"],
                ["자유도 (Degrees of Freedom)", "6 Axis (Vision Control)"],
                ["자중 (Weight)", "890 g (0.89 kg)"]
            ],
            features: [
                "초음파 센서를 통한 실시간 장애물 거리 측정",
                "그리퍼 상단 USB 카메라 탑재로 컴퓨터 비전(OpenCV) 연동 가능",
                "오픈소스 하드웨어 및 소프트웨어 완벽 호환",
                "자율 주행 플랫폼(TurtleBot 등)과의 결합 연구 가능"
            ]
        }
    },
    en: {
        a10: {
            name: "Cobot A-10",
            img: "assets/robot_a10.png",
            desc: "The Cobot A-10 is our flagship high-performance model, offering a 12kg payload and an extensive 1450mm reach. Advanced collision detection and safety systems guarantee complete and safe coexistence with human operators.",
            specs: [
                ["Price", "32,000,000 KRW ($25,000 USD)"],
                ["Payload", "12 kg"],
                ["Reach", "1450 mm"],
                ["Repeatability", "±0.02 mm"],
                ["DOF", "6 Axis"],
                ["Weight", "31.5 kg"]
            ],
            features: [
                "Intelligent collision detection & safe stop",
                "Intuitive GUI teaching pendant",
                "IP54 rating (industrial option IP66)",
                "Fast installation & relocation"
            ]
        },
        open_ring: {
            name: "OpenManipulator-X (Ring Type)",
            img: "assets/robot_open_ring.png",
            desc: "OpenManipulator-X (Ring Type) is a compact manipulator optimized for education and research. Featuring a lightweight design and a ring-type gripper, it is ideal for studies in hooking and transferring objects of various shapes.",
            specs: [
                ["Price", "1,200,000 KRW ($1,000 USD)"],
                ["Payload", "600 g (0.6 kg)"],
                ["Reach", "400 mm"],
                ["Repeatability", "±0.05 mm"],
                ["DOF", "5 Axis (4 + Gripper)"],
                ["Weight", "680 g (0.68 kg)"]
            ],
            features: [
                "High durability and control based on DYNAMIXEL XM430 actuators",
                "Official support for open-source ROS & ROS2",
                "Supports various interface environments (PC, OpenCR, etc.)",
                "Comprehensive tutorials and examples for beginners"
            ]
        },
        open_sensor: {
            name: "OpenManipulator-X (Sensor Type)",
            img: "assets/robot_open_sensor.png",
            desc: "OpenManipulator-X (Sensor Type) is an intelligent educational robotic arm integrated with a vision camera and an ultrasonic sensor. It enables users to design and implement autonomous task scenarios through real-time environmental sensing and object recognition.",
            specs: [
                ["Price", "1,500,000 KRW ($1,250 USD)"],
                ["Payload", "450 g (0.45 kg)"],
                ["Reach", "380 mm"],
                ["Repeatability", "±0.1 mm"],
                ["DOF", "6 Axis (Vision Control)"],
                ["Weight", "890 g (0.89 kg)"]
            ],
            features: [
                "Real-time obstacle distance measurement via ultrasonic sensor",
                "USB camera mounted on gripper for computer vision (OpenCV) integration",
                "Full compatibility with open-source hardware & software",
                "Enables joint research combined with autonomous mobile platforms (TurtleBot, etc.)"
            ]
        }
    }
};

window.switchProduct = function(productId) {
    window.activeProduct = productId;
    
    // Update active class on tab buttons
    document.querySelectorAll('.product-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-product-id') === productId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const stickyImg = document.querySelector('.sticky-img img');
    const scrollContent = document.querySelector('.scroll-content');
    
    if (stickyImg && scrollContent) {
        stickyImg.parentElement.style.opacity = '0';
        stickyImg.parentElement.style.transform = 'scale(0.98)';
        scrollContent.style.opacity = '0';
        scrollContent.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            const lang = window.currentLanguage || 'ko';
            const prod = productsData[lang][productId];
            if (!prod) return;

            stickyImg.src = prod.img;
            stickyImg.alt = prod.name;
            
            let specsHtml = prod.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('');
            let featuresHtml = prod.features.map(f => `<li>${f}</li>`).join('');
            
            scrollContent.innerHTML = `
                <div style="margin-bottom: 4rem;">
                    <h3 style="font-size: 2rem; margin-bottom: 1rem;">${prod.name}</h3>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">
                        ${prod.desc}
                    </p>
                </div>
                
                <table class="board-table" style="margin-bottom: 4rem;">
                    <thead>
                        <tr>
                            <th>${lang === 'ko' ? '사양 항목' : 'Specification'}</th>
                            <th>${lang === 'ko' ? '상세 정보' : 'Details'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${specsHtml}
                    </tbody>
                </table>

                <div style="margin-bottom: 4rem;">
                    <h4 style="margin-bottom: 1rem;">${lang === 'ko' ? '주요 특징' : 'Key Features'}</h4>
                    <ul style="padding-left: 1.5rem; color: var(--text-muted);">
                        ${featuresHtml}
                    </ul>
                </div>
            `;
            
            stickyImg.parentElement.style.opacity = '1';
            stickyImg.parentElement.style.transform = 'scale(1)';
            scrollContent.style.opacity = '1';
            scrollContent.style.transform = 'translateY(0)';
        }, 250);
    }
};

// Router Function
function navigate(route, params = null) {
    window.currentRoute = route;
    const appContent = document.getElementById('app-content');
    
    // Add transition effect
    appContent.style.opacity = '0';
    appContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        const activeTemplates = window.currentLanguage === 'en' ? templates_en : templates;
        if (route === 'news_detail' && params) {
            if (window.db) {
                window.db.collection("posts").doc(params).get().then((doc) => {
                    if (doc.exists) {
                        const data = doc.data();
                        appContent.innerHTML = activeTemplates.news_detail(doc.id, data);
                        finalizeNavigation(route);
                    }
                }).catch(err => {
                    console.error("Detail Fetch Error:", err);
                    navigate('news');
                });
            }
        } else if (route === 'application_detail' && params) {
            window.activeApplicationId = params;
            appContent.innerHTML = activeTemplates.application_detail(params);
            finalizeNavigation(route);
        } else {
            appContent.innerHTML = activeTemplates[route] || activeTemplates.home;
            finalizeNavigation(route);
        }
    }, 300);
}

function finalizeNavigation(route) {
    const appContent = document.getElementById('app-content');
    appContent.style.opacity = '1';
    appContent.style.transform = 'translateY(0)';
    appContent.style.transition = 'all 0.5s ease-out';

    if (route === 'news') {
        renderBoardFromFirebase();
        setTimeout(() => {
            window.filterBoardCategory(window.currentCategoryFilter);
        }, 50);
    }

    if (route === 'products') {
        if (!window.activeProduct) {
            window.activeProduct = 'a10';
        }
        window.switchProduct(window.activeProduct);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (route === 'home' || !route) {
        startCounters();
        initVideoCycler();
    }
    
    setTimeout(initScrollReveal, 100);

    // Accessibility: aria-current and active state
    document.querySelectorAll('nav a').forEach(link => {
        const linkRoute = link.getAttribute('data-route');
        const onClickAttr = link.getAttribute('onclick') || '';
        let isMatch = linkRoute === route || 
                      (route === 'news_detail' && linkRoute === 'news');
                      
        if (route === 'applications') {
            isMatch = isMatch || onClickAttr.includes("navToApplication(null") || onClickAttr.includes("toggleMegaMenu('applications'");
        } else if (route === 'application_detail') {
            isMatch = isMatch || 
                      onClickAttr.includes("navToApplication(null") || 
                      (window.activeApplicationId && onClickAttr.includes(`navToApplication('${window.activeApplicationId}'`));
        } else if (route === 'products') {
            isMatch = isMatch || 
                      onClickAttr.includes("navToProduct(null") || 
                      onClickAttr.includes("toggleMegaMenu('products'") ||
                      (window.activeProduct && onClickAttr.includes(`navToProduct('${window.activeProduct}'`));
        } else if (route === 'news' || route === 'news_detail' || route === 'news_write' || route === 'news_edit') {
            isMatch = isMatch || 
                      onClickAttr.includes("navToCommunity(null") || 
                      onClickAttr.includes("toggleMegaMenu('news'") ||
                      (window.currentCategoryFilter && onClickAttr.includes(`navToCommunity('${window.currentCategoryFilter}'`));
        }
                        
        if (isMatch) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
            link.style.color = 'var(--primary)';
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            link.style.color = 'var(--text-main)';
        }
    });

    // Move focus to main content for accessibility
    appContent.setAttribute('tabindex', '-1');
    appContent.focus();
}

// Scroll Reveal Observer
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Real-time Board Rendering
function renderBoardFromFirebase() {
    const listContainer = document.getElementById('board-list');
    if (!listContainer) return;
    if (!window.db) {
        listContainer.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 2rem;">데이터베이스 연결 중...</td></tr>';
        return;
    }

    window.db.collection("posts").orderBy("id", "desc").onSnapshot((snapshot) => {
        window.lastBoardSnapshot = snapshot;
        renderSnapshot(snapshot);
    }, (error) => {
        window.db.collection("posts").get().then(snapshot => {
            window.lastBoardSnapshot = snapshot;
            renderSnapshot(snapshot);
        });
    });

    function renderSnapshot(snapshot) {
        if (!listContainer) return;
        let docs = snapshot.docs;
        if (window.currentCategoryFilter) {
            docs = docs.filter(doc => doc.data().category === window.currentCategoryFilter);
        }

        if (docs.length === 0) {
            listContainer.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 2rem;">${window.currentLanguage === 'en' ? 'No posts registered in this category.' : '등록된 게시물이 없습니다.'}</td></tr>`;
            return;
        }

        const categoryLabels = {
            ko: { notice: '[공지사항]', free: '[자유게시판]', qa: '[Q&A]' },
            en: { notice: '[Notice]', free: '[Free]', qa: '[Q&A]' }
        };
        const lang = window.currentLanguage || 'ko';

        listContainer.innerHTML = docs.map(doc => {
            const data = doc.data();
            const categoryPrefix = categoryLabels[lang][data.category] ? `<span style="color: var(--primary); margin-right: 5px;">${categoryLabels[lang][data.category]}</span>` : '';
            return `
                <tr style="cursor: pointer;" onclick="window.navigateDetail('${doc.id}')" class="reveal">
                    <td>${data.id || '-'}</td>
                    <td style="font-weight: 500;">${categoryPrefix}${data.title}</td>
                    <td>${data.author}</td>
                    <td>${data.date || data.Date || '-'}</td>
                </tr>
            `;
        }).join('');
        setTimeout(initScrollReveal, 50);
    }
}

// Global Nav Helpers
window.navigateDetail = (id) => navigate('news_detail', id);

window.editPost = async function(docId) {
    const doc = await window.db.collection("posts").doc(docId).get();
    if (!doc.exists) return;
    const data = doc.data();
    
    const pw = prompt("글 작서 시 입력한 비밀번호를 입력해주세요.");
    if (pw === data.password) {
        navigate('news_edit');
        document.getElementById('edit-id').value = docId;
        document.getElementById('edit-title').value = data.title;
        document.getElementById('edit-content').value = data.content;
    } else if (pw !== null) {
        alert("비밀번호가 일치하지 않습니다.");
    }
};

window.deletePost = async function(docId) {
    const doc = await window.db.collection("posts").doc(docId).get();
    if (!doc.exists) return;
    const data = doc.data();
    
    const pw = prompt("글 작서 시 입력한 비밀번호를 입력해주세요.");
    if (pw === data.password) {
        if (confirm("정말로 이 글을 삭제하시겠습니까?")) {
            await window.db.collection("posts").doc(docId).delete();
            alert("게시물이 삭제되었습니다.");
            navigate('news');
        }
    } else if (pw !== null) {
        alert("비밀번호가 일치하지 않습니다.");
    }
};

// Form Handlers
async function handlePostSubmit(e) {
    e.preventDefault();
    if (!window.db) return alert("연결 오류!");

    const title = document.getElementById('post-title').value;
    const author = document.getElementById('post-author').value;
    const password = document.getElementById('post-password').value;
    const content = document.getElementById('post-content').value;
    
    let nextId = 1;
    try {
        const snap = await window.db.collection("posts").orderBy("id", "desc").limit(1).get();
        if (!snap.empty) nextId = (Number(snap.docs[0].data().id) || 0) + 1;
    } catch(e) {}

    const today = new Date().toISOString().split('T')[0];
    try {
        await window.db.collection("posts").add({ title, author, password, content, date: today, id: nextId });
        alert("게시물이 등록되었습니다!");
        navigate('news');
    } catch (error) { alert("오류: " + error.message); }
}

async function handleEditSubmit(e) {
    e.preventDefault();
    const docId = document.getElementById('edit-id').value;
    const title = document.getElementById('edit-title').value;
    const content = document.getElementById('edit-content').value;

    try {
        await window.db.collection("posts").doc(docId).update({ title, content });
        alert("수정이 완료되었습니다.");
        navigate('news_detail', docId);
    } catch (error) { alert("오류: " + error.message); }
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert('문의가 접수되었습니다.');
    navigate('home');
}

// Stats Animation with IntersectionObserver
function startCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const duration = 2000;
                const step = target / (duration / 16);
                
                const update = () => {
                    count += step;
                    if (count < target) {
                        counter.innerText = Math.ceil(count).toLocaleString();
                        requestAnimationFrame(update);
                    } else {
                        counter.innerText = target.toLocaleString() + (target >= 100 && target < 1000 ? '%' : (target >= 1000 ? '+' : ''));
                    }
                };
                update();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(c => observer.observe(c));
}

// Header Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
});

// Initialization
function init() {
    document.addEventListener('click', (e) => {
        const routeEl = e.target.closest('[data-route]');
        if (routeEl) {
            e.preventDefault();
            navigate(routeEl.getAttribute('data-route'));
        }
    });

    document.addEventListener('submit', (e) => {
        if (e.target.id === 'post-form') handlePostSubmit(e);
        if (e.target.id === 'edit-form') handleEditSubmit(e);
        if (e.target.id === 'contact-form') handleFormSubmit(e);
    });

    navigate('home');
    initVideoCycler();
    initTheme();
    
    // Accessibility: Keydown triggers click on cards
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const activeEl = document.activeElement;
            if (activeEl && (activeEl.classList.contains('card') || activeEl.hasAttribute('onclick') || activeEl.hasAttribute('data-route'))) {
                if (activeEl.tagName !== 'BUTTON' && activeEl.tagName !== 'A') {
                    e.preventDefault();
                    activeEl.click();
                }
            }
        }
    });
    
    // Hero Mouse Effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--mouse-x', x + '%');
        document.documentElement.style.setProperty('--mouse-y', y + '%');
    });
}

// Theme Switcher Logic
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('theme-icon-moon');
    const sunIcon = document.getElementById('theme-icon-sun');
    if (!themeToggle || !moonIcon || !sunIcon) return;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeUI(newTheme);
    });

    function updateThemeUI(theme) {
        if (theme === 'light') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }
}

function initVideoCycler() {
    const videos = [
        "https://assets.mixkit.co/videos/47257/47257-720.mp4",
        "https://assets.mixkit.co/videos/47260/47260-720.mp4",
        "https://assets.mixkit.co/videos/47258/47258-720.mp4",
        "https://assets.mixkit.co/videos/47266/47266-720.mp4",
        "https://assets.mixkit.co/videos/2230/2230-720.mp4"
    ];
    let currentIdx = 0;
    const v1 = document.getElementById('bg-video-1');
    const v2 = document.getElementById('bg-video-2');
    if (!v1 || !v2) return;

    let activeVideo = v1;
    let idleVideo = v2;
    let timer = null;

    const transition = () => {
        currentIdx = (currentIdx + 1) % videos.length;
        idleVideo.src = videos[currentIdx];
        idleVideo.load();
        
        idleVideo.oncanplaythrough = () => {
            idleVideo.play();
            idleVideo.classList.add('active');
            activeVideo.classList.remove('active');
            
            // Swap references
            [activeVideo, idleVideo] = [idleVideo, activeVideo];
            
            // Schdule next transition in 2 seconds
            clearTimeout(timer);
            timer = setTimeout(transition, 2000);
        };
    };

    // Initial timer
    timer = setTimeout(transition, 2000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.setLanguage = function(lang) {
    if (window.currentLanguage === lang) return;
    window.currentLanguage = lang;
    
    // Update language selection buttons opacity/color
    document.getElementById('btn-ko').style.opacity = lang === 'ko' ? '1' : '0.5';
    document.getElementById('btn-en').style.opacity = lang === 'en' ? '1' : '0.5';
    document.getElementById('btn-ko').style.color = lang === 'ko' ? 'var(--primary)' : 'var(--text-main)';
    document.getElementById('btn-en').style.color = lang === 'en' ? 'var(--primary)' : 'var(--text-main)';

    // Update static HTML tags defined with data-ko/data-en
    document.querySelectorAll('[data-ko][data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });

    // Re-render current route to fetch English/Korean templates
    const activeLink = document.querySelector('nav a.active');
    let currentRoute = window.currentRoute || 'home';
    if (activeLink && !window.currentRoute) {
        currentRoute = activeLink.getAttribute('data-route') || 'home';
    }
    
    // Check if in application detail view
    if (window.currentRoute === 'application_detail' && window.activeApplicationId) {
        navigate('application_detail', window.activeApplicationId);
        return;
    }
    
    // Check if in news detail view
    const editBtn = document.querySelector('button[onclick*="editPost"]');
    if (editBtn) {
        const match = editBtn.getAttribute('onclick').match(/'([^']+)'/);
        if (match) {
            navigate('news_detail', match[1]);
            return;
        }
    }
    
    navigate(currentRoute);
};

// Translate function for news detail
templates.news_detail = (id, data) => `
    <section class="container reveal" style="padding-top: 10rem;">
        <div class="board-container">
            <div style="display: flex; justify-content: space-between; margin-bottom: 2rem;">
                <a href="#" data-route="news" style="color: var(--primary); text-decoration: none;">← 목록으로 돌아가기</a>
                <div style="display: flex; gap: 0.5rem;">
                    <button onclick="window.editPost('${id}')" style="background: none; border: 1px solid #444; color: #fff; padding: 0.3rem 0.8rem; cursor: pointer; border-radius: 4px;">수정</button>
                    <button onclick="window.deletePost('${id}')" style="background: none; border: 1px solid #ff4d4d; color: #ff4d4d; padding: 0.3rem 0.8rem; cursor: pointer; border-radius: 4px;">삭제</button>
                </div>
            </div>
            <h2 style="margin-bottom: 1rem; color: var(--primary);">${data.title}</h2>
            <div style="color: var(--text-muted); margin-bottom: 2rem; border-bottom: 1px solid #333; padding-bottom: 1rem;">
                <span>작성자: ${data.author}</span> | <span>날짜: ${data.date || data.Date || '-'}</span>
            </div>
            <div style="line-height: 1.8; font-size: 1.1rem; min-height: 300px; color: #ccc;">
                ${(data.content || '').replace(/\n/g, '<br>')}
            </div>
        </div>
    </section>
`;

// Insert English dictionary
const templates_en = {
    home: `
        <section class="hero cinematic">
            <div id="video-container">
                <video autoplay muted playsinline class="hero-bg-video active" id="bg-video-1">
                    <source src="https://assets.mixkit.co/videos/47257/47257-720.mp4" type="video/mp4">
                </video>
                <video muted playsinline class="hero-bg-video" id="bg-video-2"></video>
            </div>
            <div class="hero-overlay"></div>
            <div class="container hero-center-content">
                <p class="hero-top-text">Safety & Efficiency for Industry 4.0</p>
                <h1 class="hero-main-title">Human-Centric,<br>Intelligent Cobot Solutions</h1>
                <p class="hero-sub-text">Creating a perfect collaborative environment between humans and machines through robotic innovation.<br>Delivering state-of-the-art industrial automation through advanced control systems and AI integration.</p>
                <div class="hero-cta-buttons" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                    <a href="#" class="btn-primary" onclick="window.navToProduct(null, event)">View Product Lineup</a>
                    <a href="#" class="btn-secondary" onclick="navigate('contact')">Inquire Now</a>
                </div>
            </div>
        </section>

        <!-- Product Lineup Section -->
        <section class="container reveal">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">ROBOT LINEUP</p>
                <h2>Intelligent Cobot Lineup</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToProduct('a10', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/robot_a10.png" alt="Cobot A-10">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Cobot A-10</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">Our flagship model featuring 12kg payload and a wide 1450mm reach. Built-in collision detection and premium safety systems.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">View Specs &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToProduct('open_ring', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/robot_open_ring.png" alt="OpenManipulator-X Ring Type">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">OpenManipulator-X (Ring)</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">Compact manipulator arm optimized for education and research. Employs lightweight ring gripper for hook-and-transfer.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">View Specs &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToProduct('open_sensor', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/robot_open_sensor.png" alt="OpenManipulator-X Sensor Type">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">OpenManipulator-X (Sensor)</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">Intelligent manipulator combining vision camera and ultrasonic sensor. Enables real-time environment sensing and object recognition.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">View Specs &rarr;</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Applications Section -->
        <section class="container reveal" style="padding-top: 2rem;">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">APPLICATIONS</p>
                <h2>Industrial Collaborative Solutions</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToApplicationDetail('car', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/car_factory_robot.png" alt="Car Manufacturing">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Car Manufacturing</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">High-precision welding and assembly. Operates fence-free side-by-side with workers to boost overall throughput.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">View Solution &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToApplicationDetail('assembly', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/assembly_working.jpg" alt="Assembly & Inspection">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Assembly & Inspection</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">Sub-millimeter assembly coupled with Vision AI. Automatically inspects cosmetic flaws and assembly completeness.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">View Solution &rarr;</span>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" style="cursor: pointer;" onclick="window.navToApplicationDetail('food', event)">
                    <div class="card-img" style="height: 220px;">
                        <img src="assets/food_working.jpg" alt="F&B Automation">
                    </div>
                    <div class="card-body">
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">F&B Automation</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; min-height: 4.5rem;">Barista & fryer automation solutions. POS integration and ROS-based controls build clean, automated retail booths.</p>
                        <span style="color: var(--primary); font-weight: bold; font-size: 0.95rem;">View Solution &rarr;</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Expertise Section -->
        <section class="container reveal" style="padding-top: 2rem;">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">TECHNICAL EXPERTISE</p>
                <h2>Core Technical Competencies</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌐</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Web Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Real-time monitoring via Firebase integration</p>
                </div>
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤖</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Robot Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">ROS-based collaborative robot operation</p>
                </div>
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁️</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Computer Vision</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Automated quality inspection with vision sensors</p>
                </div>
                <div class="card reveal" tabindex="0" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">📊</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Data Analytics</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Operational log analysis & uptime dashboards</p>
                </div>
            </div>
        </section>

        <section class="stats container reveal">
            <div class="stat-item">
                <h4 class="counter" data-target="1500">0</h4>
                <p>Partners</p>
            </div>
            <div class="stat-item">
                <h4 class="counter" data-target="24">0</h4>
                <p>Certificates</p>
            </div>
            <div class="stat-item">
                <h4 class="counter" data-target="100">0</h4>
                <p>Uptime %</p>
            </div>
        </section>
    `,
    products: `
        <section class="container" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Product Specifications</h2>
                <div class="divider"></div>
            </div>
            
            <div class="product-tabs">
                <button class="product-tab-btn active" data-product-id="a10" onclick="window.switchProduct('a10')">Antigravity A-10</button>
                <button class="product-tab-btn" data-product-id="open_ring" onclick="window.switchProduct('open_ring')">OpenManipulator-X (Ring Type)</button>
                <button class="product-tab-btn" data-product-id="open_sensor" onclick="window.switchProduct('open_sensor')">OpenManipulator-X (Sensor Type)</button>
            </div>

            <div class="sticky-container">
                <div class="sticky-left">
                    <div class="sticky-img" style="transition: opacity 0.25s ease, transform 0.25s ease;">
                        <img src="assets/robot_a10.png" alt="Robot A10">
                    </div>
                    <button class="btn-primary" style="width: 100%; font-size: 1.1rem; font-weight: 700; padding: 1rem; border-radius: 8px; box-shadow: 0 4px 20px rgba(0, 168, 255, 0.35); text-transform: uppercase;" onclick="navigate('contact')">Buy Now</button>
                </div>
                <div class="scroll-content" style="transition: opacity 0.25s ease, transform 0.25s ease;">
                    <div style="margin-bottom: 4rem;">
                        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Antigravity A-10</h3>
                        <p style="color: var(--text-muted); font-size: 1.1rem;">
                            The A-10 is our most popular model, offering a 10kg payload and a 1300mm reach. Built-in collision detection guarantees safe coexistence with operators.
                        </p>
                    </div>
                    <table class="board-table" style="margin-bottom: 4rem;">
                        <thead><tr><th>Specification</th><th>Details</th></tr></thead>
                        <tbody>
                            <tr><td>Price</td><td style="color: var(--primary); font-weight: bold;">32,000,000 KRW ($25,000 USD)</td></tr>
                            <tr><td>Payload</td><td>10 kg</td></tr>
                            <tr><td>Reach</td><td>1300 mm</td></tr>
                            <tr><td>Repeatability</td><td>±0.03 mm</td></tr>
                            <tr><td>DOF</td><td>6 Axis</td></tr>
                            <tr><td>Weight</td><td>33.5 kg</td></tr>
                        </tbody>
                    </table>
                    <div style="margin-bottom: 4rem;">
                        <h4 style="margin-bottom: 1rem;">Key Features</h4>
                        <ul style="padding-left: 1.5rem; color: var(--text-muted);">
                            <li>Intelligent collision detection & safe stop</li>
                            <li>Intuitive GUI teaching pendant</li>
                            <li>IP54 rating (industrial option IP66)</li>
                            <li>Fast installation & relocation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    applications: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Industrial Applications</h2>
                <div class="divider"></div>
            </div>
            <div class="grid">
                <div class="card reveal" tabindex="0" id="app-car" onclick="window.navToApplicationDetail('car')" style="cursor: pointer;">
                    <div class="card-img"><img src="assets/car_factory_robot.png" alt="Car Factory Robot"></div>
                    <div class="card-body">
                        <h3>Car Manufacturing</h3>
                        <p>Collaborative robots used in assembly and welding processes in car factories. Boasts high precision and durability.</p>
                    </div>
                </div>
                <div class="card reveal" tabindex="0" id="app-assembly" onclick="window.navToApplicationDetail('assembly')" style="cursor: pointer;">
                    <div class="card-img"><img src="assets/assembly_working.jpg" alt="Assembly"></div>
                    <div class="card-body">
                        <h3>Assembly & Inspection</h3>
                        <p>Simultaneously performs precise part assembly and defect inspection combined with vision sensors.</p>
                    </div>
                </div>
                <div class="card reveal" id="app-food" onclick="window.navToApplicationDetail('food')" style="cursor: pointer;" tabindex="0">
                    <div class="card-img"><img src="assets/food_working.jpg" loading="lazy" alt="F&B Robot in Action"></div>
                    <div class="card-body">
                        <h3>F&B Automation</h3>
                        <p>Integrated POS system and ROS for uncrewed coffee extraction and chicken cooking processes.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    news: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Community Board</h2>
                <p>Share your questions and use cases.</p>
                <div class="divider"></div>
            </div>
            <div class="board-container">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div class="board-tabs" style="display: flex; gap: 0.5rem;">
                        <button class="board-tab active" onclick="window.filterBoardCategory(null)">All</button>
                        <button class="board-tab" onclick="window.filterBoardCategory('notice')">Notices</button>
                        <button class="board-tab" onclick="window.filterBoardCategory('free')">Free Board</button>
                        <button class="board-tab" onclick="window.filterBoardCategory('qa')">Q&A</button>
                    </div>
                    <button class="btn-primary" style="padding: 0.5rem 1rem;" data-route="news_write">Write</button>
                </div>
                <table class="board-table">
                    <thead>
                        <tr><th>No.</th><th>Title</th><th>Author</th><th>Date</th></tr>
                    </thead>
                    <tbody id="board-list">
                        <tr><td colspan="4" style="text-align:center; padding: 2rem;">Connecting to database...</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    `,
    news_write: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Write a new post</h2>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 800px; margin: 0 auto;">
                <form id="post-form">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Title</label>
                        <input type="text" id="post-title" required placeholder="Enter title" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Category</label>
                            <select id="post-category" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 100%;">
                                <option value="free">Free Board</option>
                                <option value="notice">Notice</option>
                                <option value="qa">Q&A</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Author</label>
                            <input type="text" id="post-author" required placeholder="Name or Company" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Password (for edit)</label>
                            <input type="password" id="post-password" required placeholder="4 digits" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                        </div>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Content</label>
                        <textarea id="post-content" required placeholder="Content" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 300px;"></textarea>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn-primary" style="flex: 1;">Submit</button>
                        <button type="button" class="btn-primary" style="flex: 1; background: #444;" data-route="news">Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    news_edit: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Edit Post</h2>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 800px; margin: 0 auto;">
                <form id="edit-form">
                    <input type="hidden" id="edit-id">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Title</label>
                        <input type="text" id="edit-title" required style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Content</label>
                        <textarea id="edit-content" required style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 300px;"></textarea>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn-primary" style="flex: 1;">Finish Edit</button>
                        <button type="button" class="btn-primary" style="flex: 1; background: #444;" data-route="news">Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    news_detail: (id, data) => `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="board-container">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2rem;">
                    <a href="#" data-route="news" style="color: var(--primary); text-decoration: none;">← Back to list</a>
                    <div style="display: flex; gap: 0.5rem;">
                        <button onclick="window.editPost('${id}')" style="background: none; border: 1px solid #444; color: #fff; padding: 0.3rem 0.8rem; cursor: pointer; border-radius: 4px;">Edit</button>
                        <button onclick="window.deletePost('${id}')" style="background: none; border: 1px solid #ff4d4d; color: #ff4d4d; padding: 0.3rem 0.8rem; cursor: pointer; border-radius: 4px;">Delete</button>
                    </div>
                </div>
                <h2 style="margin-bottom: 1rem; color: var(--primary);">${data.title}</h2>
                <div style="color: var(--text-muted); margin-bottom: 2rem; border-bottom: 1px solid #333; padding-bottom: 1rem;">
                    <span>Author: ${data.author}</span> | <span>Date: ${data.date || data.Date || '-'}</span>
                </div>
                <div style="line-height: 1.8; font-size: 1.1rem; min-height: 300px; color: #ccc;">
                    ${(data.content || '').replace(/\n/g, '<br>')}
                </div>
            </div>
        </section>
    `,
    application_detail: (appId) => {
        const app = applicationsData.en[appId];
        if (!app) return '';
        
        const benefitsHtml = app.benefits.map(b => `
            <div class="app-benefit-card reveal">
                <div class="app-benefit-num">✓</div>
                <div class="app-benefit-text">
                    <h5>${b.title}</h5>
                    <p>${b.detail}</p>
                </div>
            </div>
        `).join('');

        const specsHtml = app.techSpecs.map(s => `
            <tr>
                <th>${s[0]}</th>
                <td>${s[1]}</td>
            </tr>
        `).join('');

        const usecasesHtml = app.usecases.map(u => `
            <div class="app-usecase-item reveal">
                <h4>${u.title}</h4>
                <p>${u.desc}</p>
            </div>
        `).join('');

        const galleryHtml = app.gallery.map((imgUrl, i) => `
            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="window.setMainAppImage('${imgUrl}', this)">
                <img src="${imgUrl}" alt="Gallery Image ${i+1}">
            </div>
        `).join('');

        return `
            <section class="container reveal" style="padding-top: 10rem; padding-bottom: 5rem;">
                <div class="app-detail-back">
                    <a href="#" data-route="applications" style="color: var(--primary); text-decoration: none; font-weight: bold; display: flex; align-items: center; gap: 0.5rem;">
                        ← Back to Applications
                    </a>
                </div>
                
                <div class="app-detail-header">
                    <span class="app-tag">Industrial Solutions</span>
                    <h2>${app.name}</h2>
                    <p class="app-subtitle">${app.subtitle}</p>
                    <div class="divider" style="margin: 1.5rem 0;"></div>
                </div>

                <div class="app-detail-grid">
                    <!-- Left: Visual Presentation -->
                    <div class="app-detail-visual">
                        <div class="app-main-img-wrap">
                            <img id="app-main-img" src="${app.img}" alt="${app.name}">
                        </div>
                        <div class="app-gallery-grid">
                            ${galleryHtml}
                        </div>
                    </div>

                    <!-- Right: Detailed Content -->
                    <div class="app-detail-info">
                        <div class="app-section">
                            <h3>Solution Overview</h3>
                            <p class="app-desc">${app.desc}</p>
                        </div>

                        <div class="app-section">
                            <h3>Key Benefits</h3>
                            <div class="app-benefits-list">
                                ${benefitsHtml}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-detail-bottom">
                    <div class="app-section">
                        <h3>Detailed Usecases</h3>
                        <div class="app-usecases-grid">
                            ${usecasesHtml}
                        </div>
                    </div>

                    <div class="app-section" style="margin-top: 3rem;">
                        <h3>Technical Specifications & Configurations</h3>
                        <table class="board-table app-specs-table">
                            <tbody>
                                ${specsHtml}
                            </tbody>
                        </table>
                    </div>

                    <div class="app-cta-container">
                        <div class="app-cta-card">
                            <h4>Need consultation on introducing this solution?</h4>
                            <p>We offer customized collaborative robot solutions best suited for your workshop and process requirements.</p>
                            <button class="btn-primary" onclick="navigate('contact')" style="margin-top: 1rem;">Inquire Now</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
    ,
    contact: `
         <section class="container" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Inquire Now</h2>
                <p>We suggest robotics solutions optimized for your industrial worksite.</p>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 600px; margin: 0 auto;">
                <form id="contact-form">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Company Name</label>
                        <input type="text" placeholder="Enter company name" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Contact Number</label>
                        <input type="text" placeholder="010-0000-0000" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Product of Interest</label>
                        <select style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                            <option>Cobot A-10</option>
                            <option>OpenManipulator-X (Ring Type)</option>
                            <option>OpenManipulator-X (Sensor Type)</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Inquiry Content</label>
                        <textarea placeholder="Enter process details and requirements" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px; height: 150px;"></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%;">Submit Consultation</button>
                </form>
            </div>
        </section>
    `
};

// Mega Menu & Category Board Controllers
window.activeMegaMenuType = null;
window.currentCategoryFilter = null;

window.toggleMegaMenu = function(menuType, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    const megaMenu = document.getElementById('nav-mega-menu');
    if (!megaMenu) return;

    const isAlreadyActive = megaMenu.classList.contains('active') && window.activeMegaMenuType === menuType;

    document.querySelectorAll('.mega-col').forEach(col => {
        col.classList.remove('highlight');
    });

    if (isAlreadyActive) {
        window.closeMegaMenu();
    } else {
        megaMenu.classList.add('active');
        window.activeMegaMenuType = menuType;
        const targetCol = document.getElementById('col-' + menuType);
        if (targetCol) {
            targetCol.classList.add('highlight');
        }
    }
};

window.closeMegaMenu = function() {
    const megaMenu = document.getElementById('nav-mega-menu');
    if (megaMenu) {
        megaMenu.classList.remove('active');
    }
    window.activeMegaMenuType = null;
};

document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
        window.closeMegaMenu();
    }
});

window.navToProduct = function(productId, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    window.activeProduct = productId;
    navigate('products');
    window.closeMegaMenu();
};

window.navToApplication = function(appId, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (appId) {
        navigate('application_detail', appId);
    } else {
        navigate('applications');
    }
    window.closeMegaMenu();
};

window.navToApplicationDetail = function(appId, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    navigate('application_detail', appId);
};

window.setMainAppImage = function(imgUrl, el) {
    const mainImg = document.getElementById('app-main-img');
    if (mainImg) {
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = imgUrl;
            mainImg.style.opacity = '1';
        }, 150);
    }
    
    // Update active state in thumbnail
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
};

window.navToCommunity = function(category, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    window.currentCategoryFilter = category;
    navigate('news');
    window.closeMegaMenu();
};

window.filterBoardCategory = function(category) {
    window.currentCategoryFilter = category;
    document.querySelectorAll('.board-tab').forEach(tab => {
        const onClickAttr = tab.getAttribute('onclick');
        if ((category === null && onClickAttr.includes('null')) || (category && onClickAttr.includes(`'${category}'`))) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    if (window.lastBoardSnapshot) {
        const listContainer = document.getElementById('board-list');
        if (listContainer) {
            let docs = window.lastBoardSnapshot.docs;
            if (window.currentCategoryFilter) {
                docs = docs.filter(doc => doc.data().category === window.currentCategoryFilter);
            }

            if (docs.length === 0) {
                listContainer.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 2rem;">${window.currentLanguage === 'en' ? 'No posts registered in this category.' : '등록된 게시물이 없습니다.'}</td></tr>`;
                return;
            }

            const categoryLabels = {
                ko: { notice: '[공지사항]', free: '[자유게시판]', qa: '[Q&A]' },
                en: { notice: '[Notice]', free: '[Free]', qa: '[Q&A]' }
            };
            const lang = window.currentLanguage || 'ko';

            listContainer.innerHTML = docs.map(doc => {
                const data = doc.data();
                const categoryPrefix = categoryLabels[lang][data.category] ? `<span style="color: var(--primary); margin-right: 5px;">${categoryLabels[lang][data.category]}</span>` : '';
                return `
                    <tr style="cursor: pointer;" onclick="window.navigateDetail('${doc.id}')" class="reveal">
                        <td>${data.id || '-'}</td>
                        <td style="font-weight: 500;">${categoryPrefix}${data.title}</td>
                        <td>${data.author}</td>
                        <td>${data.date || data.Date || '-'}</td>
                    </tr>
                `;
            }).join('');
            setTimeout(initScrollReveal, 50);
        }
    }
};
