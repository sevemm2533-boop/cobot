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
                <h1 class="hero-main-title">로봇소프트웨어과<br>프로젝트 포트폴리오</h1>
                <p class="hero-sub-text">작업자와 공존하는 스마트한 선택. 웹 프로그래밍과 로봇 제어 기술을 융합한 앤티그래비티 프로젝트입니다.</p>

            </div>
        </section>

        <section class="container reveal">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">TECHNICAL EXPERTISE</p>
                <h2>핵심 기술 역량</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌐</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Web Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Firebase 연동 실시간 관제 시스템 구축</p>
                </div>
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤖</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Robot Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">ROS 기반 협동로봇 제어 오퍼레이팅</p>
                </div>
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁️</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Computer Vision</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">비전 센서를 이용한 품질 자동 검사</p>
                </div>
                <div class="card" style="padding: 2rem; text-align: center;">
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
                <button class="product-tab-btn active" data-product-id="a10" onclick="window.switchProduct('a10')">Antigravity A-10</button>
                <button class="product-tab-btn" data-product-id="open_ring" onclick="window.switchProduct('open_ring')">OpenManipulator-X (Ring Type)</button>
                <button class="product-tab-btn" data-product-id="open_sensor" onclick="window.switchProduct('open_sensor')">OpenManipulator-X (Sensor Type)</button>
            </div>

            <div class="sticky-container">
                <div class="sticky-img" style="transition: opacity 0.25s ease, transform 0.25s ease;">
                    <img src="assets/robot_a10.png" alt="Robot A10">
                </div>
                <div class="scroll-content" style="transition: opacity 0.25s ease, transform 0.25s ease;">
                    <div style="margin-bottom: 4rem;">
                        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Antigravity A-10</h3>
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

                    <a href="#" class="btn-primary" data-route="contact">카탈로그 다운로드</a>
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
                <div class="card">
                    <div class="card-img"><img src="assets/car_factory_robot.png" alt="Car Factory Robot"></div>
                    <div class="card-body">
                        <h3>자동차 제조 (Car Manufacturing)</h3>
                        <p>자동차 공장에서 조립 및 용접 공정에 투입되는 협동로봇입니다. 높은 정밀도와 내구성을 자랑합니다.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"><img src="assets/assembly_working.jpg" alt="Assembly"></div>
                    <div class="card-body">
                        <h3>조립 및 검사 (Assembly)</h3>
                        <p>비전 센서와 결합하여 정밀한 부품 조립과 불량품 검사를 동시 수행합니다.</p>
                    </div>
                </div>
                <div class="card" tabindex="0">
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
                            <span>AGOS (Antigravity OS) v2.4.1</span>
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
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                    <h3>최근 게시물</h3>
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
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
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
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">관심 페이로드 (kg)</label>
                        <select style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                            <option>3kg 미만</option>
                            <option>5kg - 10kg</option>
                            <option>10kg 이상</option>
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
    `
};

window.activeProduct = 'a10';

const productsData = {
    ko: {
        a10: {
            name: "Antigravity A-10",
            img: "assets/robot_a10.png",
            desc: "A-10은 가장 인기 있는 모델로, 10kg의 가반 하중과 1300mm의 작업 반경을 제공합니다. 충돌 감지 알고리즘이 내장되어 작업자와의 안전한 공존을 보장합니다.",
            specs: [
                ["가반 하중 (Payload)", "10 kg"],
                ["작업 반경 (Reach)", "1300 mm"],
                ["반복 정밀도 (Repeatability)", "±0.03 mm"],
                ["자유도 (Degrees of Freedom)", "6 Axis"],
                ["자중 (Weight)", "33.5 kg"]
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
            desc: "OpenManipulator-X (Ring Type)은 교육 및 연구용으로 최적화된 소형 매니퓰레이터입니다. 경량화된 설계와 링 타입 그리퍼를 탑재하여 다양한 형상의 객체를 걸거나 이송하는 연구에 적합합니다. (타사 모델)",
            specs: [
                ["가반 하중 (Payload)", "500 g (0.5 kg)"],
                ["작업 반경 (Reach)", "380 mm"],
                ["반복 정밀도 (Repeatability)", "±0.1 mm"],
                ["자유도 (Degrees of Freedom)", "5 Axis (4 + Gripper)"],
                ["자중 (Weight)", "700 g (0.7 kg)"]
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
            desc: "OpenManipulator-X (Sensor Type)은 비전 카메라와 초음파 센서가 결합된 지능형 교육용 로봇 팔입니다. 실시간 환경 감지 및 객체 인식을 통해 자율 작업 시나리오를 설계하고 구현할 수 있습니다. (타사 모델)",
            specs: [
                ["가반 하중 (Payload)", "500 g (0.5 kg)"],
                ["작업 반경 (Reach)", "380 mm"],
                ["반복 정밀도 (Repeatability)", "±0.1 mm"],
                ["자유도 (Degrees of Freedom)", "5 Axis (4 + Gripper)"],
                ["자중 (Weight)", "750 g (0.75 kg)"]
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
            name: "Antigravity A-10",
            img: "assets/robot_a10.png",
            desc: "The A-10 is our most popular model, offering a 10kg payload and a 1300mm reach. Built-in collision detection guarantees safe coexistence with operators.",
            specs: [
                ["Payload", "10 kg"],
                ["Reach", "1300 mm"],
                ["Repeatability", "±0.03 mm"],
                ["DOF", "6 Axis"],
                ["Weight", "33.5 kg"]
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
            desc: "OpenManipulator-X (Ring Type) is a compact manipulator optimized for education and research. Featuring a lightweight design and a ring-type gripper, it is ideal for studies in hooking and transferring objects of various shapes. (Third-party model)",
            specs: [
                ["Payload", "500 g (0.5 kg)"],
                ["Reach", "380 mm"],
                ["Repeatability", "±0.1 mm"],
                ["DOF", "5 Axis (4 + Gripper)"],
                ["Weight", "700 g (0.7 kg)"]
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
            desc: "OpenManipulator-X (Sensor Type) is an intelligent educational robotic arm integrated with a vision camera and an ultrasonic sensor. It enables users to design and implement autonomous task scenarios through real-time environmental sensing and object recognition. (Third-party model)",
            specs: [
                ["Payload", "500 g (0.5 kg)"],
                ["Reach", "380 mm"],
                ["Repeatability", "±0.1 mm"],
                ["DOF", "5 Axis (4 + Gripper)"],
                ["Weight", "750 g (0.75 kg)"]
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

                <a href="#" class="btn-primary" data-route="contact">${lang === 'ko' ? '카탈로그 다운로드' : 'Download Catalog'}</a>
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
    const appContent = document.getElementById('app-content');
    
    // Add transition effect
    appContent.style.opacity = '0';
    appContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        if (route === 'news_detail' && params) {
            if (window.db) {
                window.db.collection("posts").doc(params).get().then((doc) => {
                    if (doc.exists) {
                        const data = doc.data();
                        appContent.innerHTML = (window.currentLanguage === 'en' ? templates_en : templates).news_detail(doc.id, data);
                        finalizeNavigation(route);
                    }
                }).catch(err => {
                    console.error("Detail Fetch Error:", err);
                    navigate('news');
                });
            }
        } else {
            const activeTemplates = window.currentLanguage === 'en' ? templates_en : templates;
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
        if (linkRoute === route || (route === 'news_detail' && linkRoute === 'news')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
            link.style.color = 'var(--primary)';
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            link.style.color = '#fff';
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
        renderSnapshot(snapshot);
    }, (error) => {
        window.db.collection("posts").get().then(renderSnapshot);
    });

    function renderSnapshot(snapshot) {
        if (!listContainer) return;
        if (snapshot.empty) {
            listContainer.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 2rem;">등록된 게시물이 없습니다.</td></tr>';
            return;
        }
        listContainer.innerHTML = snapshot.docs.map(doc => {
            const data = doc.data();
            return `
                <tr style="cursor: pointer;" onclick="window.navigateDetail('${doc.id}')" class="reveal">
                    <td>${data.id || '-'}</td>
                    <td style="font-weight: 500;">${data.title}</td>
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
    
    // Hero Mouse Effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--mouse-x', x + '%');
        document.documentElement.style.setProperty('--mouse-y', y + '%');
    });
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
    document.getElementById('btn-ko').style.color = lang === 'ko' ? 'var(--primary)' : '#fff';
    document.getElementById('btn-en').style.color = lang === 'en' ? 'var(--primary)' : '#fff';

    // Update static HTML tags defined with data-ko/data-en
    document.querySelectorAll('[data-ko][data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });

    // Re-render current route to fetch English/Korean templates
    const activeLink = document.querySelector('nav a.active');
    let currentRoute = 'home';
    if(activeLink) currentRoute = activeLink.getAttribute('data-route') || 'home';
    
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
                <h1 class="hero-main-title">Robot Software<br>Project Portfolio</h1>
                <p class="hero-sub-text">A smart choice coexisting with workers. Antigravity project combining web programming and robotics.</p>

            </div>
        </section>
        <section class="container reveal">
            <div class="section-title">
                <p style="color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 2px;">TECHNICAL EXPERTISE</p>
                <h2>Core Technical Competencies</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌐</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Web Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Real-time monitoring via Firebase integration</p>
                </div>
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤖</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Robot Control</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">ROS-based collaborative robot operation</p>
                </div>
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">👁️</div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Computer Vision</h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Automated quality inspection with vision sensors</p>
                </div>
                <div class="card" style="padding: 2rem; text-align: center;">
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
                <div class="sticky-img" style="transition: opacity 0.25s ease, transform 0.25s ease;">
                    <img src="assets/robot_a10.png" alt="Robot A10">
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
                <div class="card">
                    <div class="card-img"><img src="assets/car_factory_robot.png" alt="Car Factory Robot"></div>
                    <div class="card-body">
                        <h3>Car Manufacturing</h3>
                        <p>Collaborative robots used in assembly and welding processes in car factories. Boasts high precision and durability.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"><img src="assets/assembly_working.jpg" alt="Assembly"></div>
                    <div class="card-body">
                        <h3>Assembly & Inspection</h3>
                        <p>Simultaneously performs precise part assembly and defect inspection combined with vision sensors.</p>
                    </div>
                </div>
                <div class="card" tabindex="0">
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
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                    <h3>Recent Posts</h3>
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
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
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
    `
};
