<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>시각디자인 산업기사 스터디 플랜</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      min-height: 100vh;
      background: #F7F5F2;
      font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
      padding-bottom: 60px;
    }

    /* ── 헤더 ── */
    .header {
      background: #1A1A2E;
      padding: 32px 24px 28px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse at 30% 50%, rgba(74,124,89,0.3) 0%, transparent 60%),
        radial-gradient(ellipse at 70% 50%, rgba(107,63,160,0.25) 0%, transparent 60%);
    }
    .header-inner { position: relative; }
    .header-sub {
      color: #8B9AB0; font-size: 11px; letter-spacing: 3px;
      text-transform: uppercase; margin-bottom: 8px;
    }
    .header-title {
      color: #fff; font-size: 24px; font-weight: 800;
      margin-bottom: 8px; letter-spacing: -0.5px;
    }
    .header-date { color: #A0B0C0; font-size: 13px; }

    /* ── 요약 바 ── */
    .summary-bar {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1px; background: #E0DDD8;
      border-bottom: 1px solid #E0DDD8;
    }
    .summary-item {
      background: #fff; padding: 13px 8px; text-align: center;
    }
    .summary-label { color: #888; font-size: 11px; margin-bottom: 4px; }
    .summary-value { color: #1A1A2E; font-size: 14px; font-weight: 700; }

    /* ── 메인 컨테이너 ── */
    .container { max-width: 680px; margin: 0 auto; padding: 0 16px; }

    /* ── 교재 구성 카드 ── */
    .subject-cards {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 8px; margin: 20px 0 4px;
    }
    .subject-card {
      border-radius: 10px; padding: 12px 8px; text-align: center;
      border: 1.5px solid transparent;
    }
    .subject-card-label {
      font-size: 10px; font-weight: 700; letter-spacing: 1px; margin-bottom: 4px;
    }
    .subject-card-title {
      font-size: 13px; font-weight: 700; color: #1A1A2E;
      line-height: 1.3; margin-bottom: 4px;
    }
    .subject-card-ch { font-size: 11px; color: #888; }
    .subject-note {
      text-align: center; font-size: 11px; color: #aaa; margin: 8px 0 16px;
    }

    /* ── 단계 탭 ── */
    .phase-tabs {
      display: flex; gap: 8px; margin: 8px 0 20px;
    }
    .phase-tab {
      flex: 1; padding: 10px 6px; border-radius: 10px;
      border: none; cursor: pointer; font-family: inherit;
      font-size: 13px; transition: all 0.2s; line-height: 1.4;
    }
    .phase-tab-label { font-size: 10px; opacity: 0.8; margin-bottom: 2px; }
    .phase-tab-period { font-size: 11px; opacity: 0.8; margin-top: 2px; }

    /* ── 단계 배너 ── */
    .phase-banner {
      border-radius: 12px; padding: 14px 18px;
      margin-bottom: 20px; display: flex; align-items: center; gap: 12px;
      border: 1.5px solid transparent;
    }
    .phase-icon {
      width: 40px; height: 40px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      color: #fff; font-weight: 800; font-size: 14px; flex-shrink: 0;
    }
    .phase-title { font-weight: 700; font-size: 15px; margin-bottom: 2px; }
    .phase-desc { color: #666; font-size: 13px; }

    /* ── 주차 아코디언 ── */
    .week-card {
      background: #fff; border-radius: 12px; margin-bottom: 10px;
      overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      border: 1.5px solid transparent; transition: border-color 0.2s;
    }
    .week-header {
      width: 100%; padding: 14px 16px; background: none;
      border: none; cursor: pointer; display: flex;
      align-items: center; justify-content: space-between; gap: 12px;
      font-family: inherit;
    }
    .week-header-left { display: flex; align-items: center; gap: 10px; }
    .week-badge {
      color: #fff; font-size: 11px; font-weight: 700;
      padding: 3px 8px; border-radius: 6px; white-space: nowrap;
    }
    .week-info { text-align: left; }
    .week-period { font-weight: 700; font-size: 14px; color: #1A1A2E; margin-bottom: 3px; }
    .week-tags { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
    .week-tag {
      font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 4px;
    }
    .week-tag-sub { font-size: 11px; color: #888; }
    .week-arrow {
      font-size: 18px; display: inline-block;
      transition: transform 0.2s;
    }
    .week-arrow.open { transform: rotate(90deg); }

    /* ── 일별 목록 ── */
    .week-body { padding: 4px 0 8px; }
    .week-body-border { border-top: 1px solid; }
    .day-row {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 9px 16px;
    }
    .day-row.alt { background: #FAFAF9; }
    .day-label {
      min-width: 64px; font-size: 12px; font-weight: 600;
      padding-top: 1px; flex-shrink: 0;
    }
    .day-content { font-size: 13px; color: #333; line-height: 1.5; }

    /* ── 팁 박스 ── */
    .tips-box {
      background: #1A1A2E; border-radius: 12px;
      padding: 20px; margin-top: 24px; color: #fff;
    }
    .tips-title { font-weight: 700; font-size: 15px; margin-bottom: 14px; }
    .tip-row { display: flex; gap: 10px; font-size: 13px; margin-bottom: 10px; }
    .tip-row:last-child { margin-bottom: 0; }
    .tip-bold { color: #7ECBA8; font-weight: 700; }

    /* ── 시험일 배너 ── */
    .exam-banner {
      background: linear-gradient(135deg, #6B3FA0, #4A7C59);
      border-radius: 12px; padding: 20px; margin-top: 10px;
      text-align: center; color: #fff;
    }
    .exam-icon { font-size: 22px; margin-bottom: 4px; }
    .exam-title { font-weight: 800; font-size: 16px; margin-bottom: 4px; }
    .exam-sub { font-size: 13px; opacity: 0.85; }
  </style>
</head>
<body>

<!-- 헤더 -->
<div class="header">
  <div class="header-bg"></div>
  <div class="header-inner">
    <p class="header-sub">예문사 교재 기반 · 시각디자인 산업기사 필기 2회</p>
    <h1 class="header-title">📅 51일 완성 스터디 플랜</h1>
    <p class="header-date">2026. 3. 19 (목) 시작 → 2026. 5. 9 (토) 시험일</p>
  </div>
</div>

<!-- 요약 바 -->
<div class="summary-bar">
  <div class="summary-item"><p class="summary-label">총 기간</p><p class="summary-value">51일</p></div>
  <div class="summary-item"><p class="summary-label">하루 학습</p><p class="summary-value">1~2시간</p></div>
  <div class="summary-item"><p class="summary-label">교재</p><p class="summary-value">예문사</p></div>
  <div class="summary-item"><p class="summary-label">시험일</p><p class="summary-value">5월 9일</p></div>
</div>

<div class="container">

  <!-- 교재 구성 카드 -->
  <div class="subject-cards">
    <div class="subject-card" style="background:#E8F0FB; border-color:#2D5BB920;">
      <p class="subject-card-label" style="color:#2D5BB9;">Subject 1</p>
      <p class="subject-card-title">시각디자인<br>조사·분석</p>
      <p class="subject-card-ch">3 Parts / 12 Ch</p>
    </div>
    <div class="subject-card" style="background:#E8FBF0; border-color:#1A8A4020;">
      <p class="subject-card-label" style="color:#1A8A40;">Subject 2</p>
      <p class="subject-card-title">시각디자인<br>기획 구상</p>
      <p class="subject-card-ch">3 Parts / 9 Ch</p>
    </div>
    <div class="subject-card" style="background:#FBF4E8; border-color:#B97A2D20;">
      <p class="subject-card-label" style="color:#B97A2D;">Subject 3</p>
      <p class="subject-card-title">시각디자인<br>제작</p>
      <p class="subject-card-ch">4 Parts / 10 Ch</p>
    </div>
  </div>
  <p class="subject-note">+ 모의고사 12회 · 기출문제 12개년</p>

  <!-- 단계 탭 -->
  <div class="phase-tabs" id="phaseTabs"></div>

  <!-- 단계 배너 -->
  <div class="phase-banner" id="phaseBanner"></div>

  <!-- 주차 목록 -->
  <div id="weekList"></div>

  <!-- 팁 박스 -->
  <div class="tips-box">
    <p class="tips-title">💡 학습 팁</p>
    <div class="tip-row"><span>📖</span><span><span class="tip-bold">챕터별 연습문제 바로 풀기</span> — 각 Subject 끝나면 교재 연습문제 → 즉시 오답 확인</span></div>
    <div class="tip-row"><span>📝</span><span><span class="tip-bold">모의고사 12회 전부 풀기</span> — 채점 후 해설편 반드시 확인 · 오답 노트 작성</span></div>
    <div class="tip-row"><span>🗓️</span><span><span class="tip-bold">기출은 최근 연도 우선</span> — 2022→2021→2020 순으로 최신 경향 먼저 파악</span></div>
    <div class="tip-row"><span>🔁</span><span><span class="tip-bold">디자인사 챕터 주의</span> — Subject 2 Part01 Ch02는 연대·인물 세트로 암기</span></div>
    <div class="tip-row"><span>🎯</span><span><span class="tip-bold">인쇄·후가공 용어 암기</span> — Subject 3 Part04는 실무 용어가 그대로 출제</span></div>
  </div>

  <!-- 시험일 배너 -->
  <div class="exam-banner">
    <p class="exam-icon">🎯</p>
    <p class="exam-title">시험일 D-0 · 2026년 5월 9일 (토)</p>
    <p class="exam-sub">합격 커트라인 60점 이상 / 전 과목 40점 이상</p>
  </div>

</div>

<script>
const phases = [
  {
    id: 1, label: "1단계", title: "이론 완성",
    period: "3/19 – 4/22", days: "35일",
    color: "#4A7C59", bg: "#EDF4F0",
    desc: "교재 이론편 3과목 정독 · 챕터별 핵심 정리",
    weeks: [
      {
        week: "Week 1", period: "3/19 – 3/25",
        tag: "Subject 1", tagSub: "시각디자인 조사·분석 Part 01",
        days: [
          { day: "목 3/19", content: "Ch01 디자인의 개요" },
          { day: "금 3/20", content: "Ch02 시각 커뮤니케이션의 이해" },
          { day: "토 3/21", content: "Ch03 시각디자인 관리" },
          { day: "일 3/22", content: "Ch04 시장 환경 조사 및 분석" },
          { day: "월 3/23", content: "Ch05 디자인 트렌드 조사 및 분석" },
          { day: "화 3/24", content: "Ch06 사용자 조사 및 분석" },
          { day: "수 3/25", content: "Week 1 복습 + Part 01 연습문제" },
        ],
      },
      {
        week: "Week 2", period: "3/26 – 4/1",
        tag: "Subject 1", tagSub: "시각디자인 조사·분석 Part 02~03",
        days: [
          { day: "목 3/26", content: "Part02 Ch01 프로젝트 결과보고서 정리" },
          { day: "금 3/27", content: "Part02 Ch02 데이터베이스 관리" },
          { day: "토 3/28", content: "Part02 Ch03 지식재산권 확보 / Ch04 디자인 저작권 관리" },
          { day: "일 3/29", content: "Part03 Ch01 디자인 자료 조사 / Ch02 디자인 자료 선정" },
          { day: "월 3/30", content: "Subject 1 전체 연습문제 풀기" },
          { day: "화 3/31", content: "Subject 1 오답 정리 + 핵심 요약" },
          { day: "수 4/1",  content: "Week 2 복습" },
        ],
      },
      {
        week: "Week 3", period: "4/2 – 4/8",
        tag: "Subject 2", tagSub: "시각디자인 기획 구상 Part 01~03",
        days: [
          { day: "목 4/2", content: "Part01 Ch01 디자인 요소 수집" },
          { day: "금 4/3", content: "Part01 Ch02 디자인사" },
          { day: "토 4/4", content: "Part01 Ch03 아트웍 / Ch04 베리에이션" },
          { day: "일 4/5", content: "Part02 Ch01 디자인 요소 응용 / Ch02 아트웍 응용화" },
          { day: "월 4/6", content: "Part03 Ch01 프로젝트 준비 / Ch02 프로젝트 계획" },
          { day: "화 4/7", content: "Part03 Ch03 프로젝트 계약문서 준비" },
          { day: "수 4/8", content: "Subject 2 연습문제 + 오답 정리" },
        ],
      },
      {
        week: "Week 4", period: "4/9 – 4/15",
        tag: "Subject 3", tagSub: "시각디자인 제작 Part 01~02",
        days: [
          { day: "목 4/9",  content: "Part01 Ch01 아이디어 구상 및 전개" },
          { day: "금 4/10", content: "Part01 Ch02 아이디어 스케치 구상 및 전개" },
          { day: "토 4/11", content: "Part02 Ch01 아이디어 적용" },
          { day: "일 4/12", content: "Part02 Ch02 비주얼 방향 전개 및 적용" },
          { day: "월 4/13", content: "Part03 Ch01 편집디자인 레이아웃 구현" },
          { day: "화 4/14", content: "Part03 Ch02 타이포그래피 적용" },
          { day: "수 4/15", content: "Part03 Ch03 색상 선택" },
        ],
      },
      {
        week: "Week 5", period: "4/16 – 4/22",
        tag: "Subject 3", tagSub: "시각디자인 제작 Part 04 + 이론 총복습",
        days: [
          { day: "목 4/16", content: "Part04 Ch01 완성 레이아웃 수정" },
          { day: "금 4/17", content: "Part04 Ch02 인쇄상태 점검" },
          { day: "토 4/18", content: "Part04 Ch03 후가공 상태 점검" },
          { day: "일 4/19", content: "Subject 3 연습문제 + 오답 정리" },
          { day: "월 4/20", content: "Subject 1 전체 핵심 키워드 재정리" },
          { day: "화 4/21", content: "Subject 2 전체 핵심 키워드 재정리" },
          { day: "수 4/22", content: "Subject 3 전체 핵심 키워드 재정리" },
        ],
      },
    ],
  },
  {
    id: 2, label: "2단계", title: "모의고사",
    period: "4/23 – 5/4", days: "12일",
    color: "#C17A3A", bg: "#FDF4EC",
    desc: "모의고사 12회 완주 · 오답 집중 분석",
    weeks: [
      {
        week: "Week 6", period: "4/23 – 4/29",
        tag: "모의고사", tagSub: "1~7회",
        days: [
          { day: "목 4/23", content: "모의고사 1회 풀기 + 오답 확인" },
          { day: "금 4/24", content: "모의고사 2회 풀기 + 오답 확인" },
          { day: "토 4/25", content: "모의고사 3회 풀기 + 오답 확인" },
          { day: "일 4/26", content: "모의고사 4회 풀기 + 오답 확인" },
          { day: "월 4/27", content: "모의고사 5회 풀기 + 오답 확인" },
          { day: "화 4/28", content: "모의고사 6회 풀기 + 오답 확인" },
          { day: "수 4/29", content: "모의고사 7회 풀기 + 오답 확인" },
        ],
      },
      {
        week: "Week 7", period: "4/30 – 5/4",
        tag: "모의고사", tagSub: "8~12회",
        days: [
          { day: "목 4/30", content: "모의고사 8회 풀기 + 오답 확인" },
          { day: "금 5/1",  content: "모의고사 9회 풀기 + 오답 확인" },
          { day: "토 5/2",  content: "모의고사 10회 풀기 + 오답 확인" },
          { day: "일 5/3",  content: "모의고사 11회 풀기 + 오답 확인" },
          { day: "월 5/4",  content: "모의고사 12회 풀기 + 오답 확인" },
        ],
      },
    ],
  },
  {
    id: 3, label: "3단계", title: "기출 + 마무리",
    period: "5/5 – 5/8", days: "4일",
    color: "#6B3FA0", bg: "#F4EFFE",
    desc: "기출문제 핵심 연도 풀기 · 최종 암기 점검",
    weeks: [
      {
        week: "Week 8", period: "5/5 – 5/8",
        tag: "기출 + 마무리", tagSub: "기출문제 + 최종 점검",
        days: [
          { day: "화 5/5", content: "기출문제 2~3개년 풀기 (2022·2021·2020년)" },
          { day: "수 5/6", content: "기출문제 2~3개년 풀기 (2019·2018·2017년) + 오답 정리" },
          { day: "목 5/7", content: "모의고사 오답 노트 전체 점검 + 핵심 키워드 최종 암기" },
          { day: "금 5/8", content: "🌙 전 과목 가볍게 훑기 · 수험표 확인 · 일찍 취침" },
        ],
      },
    ],
  },
];

const tagColors = {
  "Subject 1":     { bg: "#E8F0FB", text: "#2D5BB9" },
  "Subject 2":     { bg: "#E8FBF0", text: "#1A8A40" },
  "Subject 3":     { bg: "#FBF4E8", text: "#B97A2D" },
  "모의고사":      { bg: "#FFF3CD", text: "#856404" },
  "기출 + 마무리": { bg: "#E8E8FB", text: "#3A3AB9" },
};

const weekendPrefixes = ["토", "일"];
let activePhase = 0;
let expandedWeek = null;

function render() {
  renderTabs();
  renderBanner();
  renderWeeks();
}

function renderTabs() {
  const container = document.getElementById("phaseTabs");
  container.innerHTML = "";
  phases.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "phase-tab";
    btn.style.background = i === activePhase ? p.color : "#ECEAE6";
    btn.style.color = i === activePhase ? "#fff" : "#666";
    btn.style.fontWeight = i === activePhase ? "700" : "500";
    btn.innerHTML = `
      <div class="phase-tab-label">${p.label}</div>
      <div>${p.title}</div>
      <div class="phase-tab-period">${p.period}</div>
    `;
    btn.addEventListener("click", () => {
      activePhase = i;
      expandedWeek = null;
      render();
    });
    container.appendChild(btn);
  });
}

function renderBanner() {
  const p = phases[activePhase];
  const banner = document.getElementById("phaseBanner");
  banner.style.background = p.bg;
  banner.style.borderColor = p.color + "30";
  banner.innerHTML = `
    <div class="phase-icon" style="background:${p.color};">${p.id}</div>
    <div>
      <p class="phase-title" style="color:${p.color};">${p.label} — ${p.title} (${p.days})</p>
      <p class="phase-desc">${p.desc}</p>
    </div>
  `;
}

function renderWeeks() {
  const p = phases[activePhase];
  const container = document.getElementById("weekList");
  container.innerHTML = "";

  p.weeks.forEach((week, wi) => {
    const isOpen = expandedWeek === wi;
    const tagStyle = tagColors[week.tag] || { bg: "#f0f0f0", text: "#333" };

    const card = document.createElement("div");
    card.className = "week-card";
    card.style.borderColor = isOpen ? p.color + "40" : "transparent";

    // 헤더 버튼
    const header = document.createElement("button");
    header.className = "week-header";
    header.innerHTML = `
      <div class="week-header-left">
        <div class="week-badge" style="background:${p.color};">${week.week}</div>
        <div class="week-info">
          <p class="week-period">${week.period}</p>
          <div class="week-tags">
            <span class="week-tag" style="background:${tagStyle.bg}; color:${tagStyle.text};">${week.tag}</span>
            ${week.tagSub ? `<span class="week-tag-sub">${week.tagSub}</span>` : ""}
          </div>
        </div>
      </div>
      <span class="week-arrow ${isOpen ? "open" : ""}" style="color:${p.color};">›</span>
    `;
    header.addEventListener("click", () => {
      expandedWeek = isOpen ? null : wi;
      render();
    });
    card.appendChild(header);

    // 바디 (열린 경우)
    if (isOpen) {
      const body = document.createElement("div");
      body.className = "week-body week-body-border";
      body.style.borderColor = p.color + "20";

      week.days.forEach((d, di) => {
        const isWeekend = weekendPrefixes.some(w => d.day.startsWith(w));
        const row = document.createElement("div");
        row.className = "day-row" + (di % 2 !== 0 ? " alt" : "");
        row.innerHTML = `
          <div class="day-label" style="color:${isWeekend ? "#C0392B" : p.color};">${d.day}</div>
          <div class="day-content">${d.content}</div>
        `;
        body.appendChild(row);
      });

      card.appendChild(body);
    }

    container.appendChild(card);
  });
}

render();
</script>
</body>
</html>
