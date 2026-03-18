import { useState } from "react";

const phases = [
  {
    id: 1,
    label: "1단계",
    title: "개념 완성",
    period: "3/19 – 4/22",
    days: "35일",
    color: "#4A7C59",
    bg: "#EDF4F0",
    desc: "교재 정독 · 핵심 개념 정리",
    weeks: [
      {
        week: "Week 1",
        period: "3/19 – 3/25",
        tag: "디자인론",
        days: [
          { day: "목 3/19", content: "디자인의 정의, 조형의 원리" },
          { day: "금 3/20", content: "형태 · 비례 · 균형 · 리듬" },
          { day: "토 3/21", content: "통일 · 강조 · 대비 · 조화" },
          { day: "일 3/22", content: "디자인의 분류 (시각/환경/제품)" },
          { day: "월 3/23", content: "타이포그래피 기초" },
          { day: "화 3/24", content: "편집 디자인 · 아이덴티티 디자인" },
          { day: "수 3/25", content: "Week 1 복습 + 오답 정리" },
        ],
      },
      {
        week: "Week 2",
        period: "3/26 – 4/1",
        tag: "디자인론 / 색채론",
        days: [
          { day: "목 3/26", content: "광고·포장·UI 디자인 개론" },
          { day: "금 3/27", content: "디자인론 기출 유형 파악" },
          { day: "토 3/28", content: "디자인론 전체 요약 정리" },
          { day: "일 3/29", content: "색의 3속성 (색상·명도·채도)" },
          { day: "월 3/30", content: "색의 분류 · 무채색·유채색" },
          { day: "화 3/31", content: "먼셀 / 오스트발트 표색계" },
          { day: "수 4/1",  content: "Week 2 복습 + 오답 정리" },
        ],
      },
      {
        week: "Week 3",
        period: "4/2 – 4/8",
        tag: "색채론",
        days: [
          { day: "목 4/2", content: "색의 혼합 (가법·감법·중간)" },
          { day: "금 4/3", content: "색의 대비 (명도·채도·보색 등)" },
          { day: "토 4/4", content: "색채 심리·색채 연상·색채 감정" },
          { day: "일 4/5", content: "배색 원리·배색 기법" },
          { day: "월 4/6", content: "한국의 전통색·관용색명" },
          { day: "화 4/7", content: "색채 기출 집중 풀기" },
          { day: "수 4/8", content: "색채론 전체 요약 정리" },
        ],
      },
      {
        week: "Week 4",
        period: "4/9 – 4/15",
        tag: "디자인사",
        days: [
          { day: "목 4/9",  content: "산업혁명 이전 ~ 아르누보" },
          { day: "금 4/10", content: "독일 공작연맹 · 바우하우스" },
          { day: "토 4/11", content: "아르데코 · 모더니즘" },
          { day: "일 4/12", content: "스위스 국제 타이포그래피 · 팝아트" },
          { day: "월 4/13", content: "포스트모더니즘 · 현대 디자인" },
          { day: "화 4/14", content: "한국 디자인사 흐름" },
          { day: "수 4/15", content: "디자인사 전체 요약 + 연대표 암기" },
        ],
      },
      {
        week: "Week 5",
        period: "4/16 – 4/22",
        tag: "CG / 인쇄편집",
        days: [
          { day: "목 4/16", content: "비트맵 vs 벡터 · 해상도 · 색상모드" },
          { day: "금 4/17", content: "포토샵 기능 (레이어·채널·필터)" },
          { day: "토 4/18", content: "일러스트레이터 기능 (패스·오브젝트)" },
          { day: "일 4/19", content: "인쇄 4도 분판 · 별색 · 색상모드 CMYK" },
          { day: "월 4/20", content: "인쇄 용지·제본·후가공 종류" },
          { day: "화 4/21", content: "편집 디자인 (레이아웃·마진·그리드)" },
          { day: "수 4/22", content: "CG/인쇄 전체 요약 정리" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "2단계",
    title: "기출 정복",
    period: "4/23 – 5/2",
    days: "10일",
    color: "#C17A3A",
    bg: "#FDF4EC",
    desc: "과목별 기출풀기 · 오답 집중 분석",
    weeks: [
      {
        week: "Week 6",
        period: "4/23 – 4/29",
        tag: "기출",
        days: [
          { day: "목 4/23", content: "디자인론 기출 2회분 풀기" },
          { day: "금 4/24", content: "디자인론 오답 집중 분석" },
          { day: "토 4/25", content: "색채론 기출 2회분 풀기" },
          { day: "일 4/26", content: "색채론 오답 집중 분석" },
          { day: "월 4/27", content: "디자인사 기출 2회분 풀기" },
          { day: "화 4/28", content: "디자인사 오답 + 연대 재암기" },
          { day: "수 4/29", content: "CG/인쇄 기출 2회분 + 오답" },
        ],
      },
      {
        week: "Week 7",
        period: "4/30 – 5/2",
        tag: "실전",
        days: [
          { day: "목 4/30", content: "합본 모의고사 1회 (전 과목 실전)" },
          { day: "금 5/1",  content: "오답 집중 약점 과목 재정리" },
          { day: "토 5/2",  content: "합본 모의고사 2회 + 시간 체크" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "3단계",
    title: "최종 마무리",
    period: "5/3 – 5/8",
    days: "6일",
    color: "#6B3FA0",
    bg: "#F4EFFE",
    desc: "핵심 암기 완성 · 컨디션 관리",
    weeks: [
      {
        week: "Week 8",
        period: "5/3 – 5/8",
        tag: "마무리",
        days: [
          { day: "일 5/3", content: "디자인론 핵심 요약 노트 1회독" },
          { day: "월 5/4", content: "색채론 표색계·대비 집중 암기" },
          { day: "화 5/5", content: "디자인사 연대표·인물 최종 암기" },
          { day: "수 5/6", content: "CG/인쇄 용어·수치 최종 정리" },
          { day: "목 5/7", content: "전 과목 핵심 키워드 훑기" },
          { day: "금 5/8", content: "🌙 오답 노트 마지막 점검 · 일찍 취침" },
        ],
      },
    ],
  },
];

const tagColors = {
  "디자인론":          { bg: "#E8F0FB", text: "#2D5BB9" },
  "색채론":            { bg: "#FDE8E8", text: "#B92D2D" },
  "디자인사":          { bg: "#E8FBF0", text: "#2DB95A" },
  "CG / 인쇄편집":    { bg: "#FBF4E8", text: "#B97A2D" },
  "디자인론 / 색채론": { bg: "#F0E8FB", text: "#7A2DB9" },
  "기출":              { bg: "#FFF3CD", text: "#856404" },
  "실전":              { bg: "#FFECEC", text: "#C0392B" },
  "마무리":            { bg: "#E8E8FB", text: "#3A3AB9" },
};

const weekendPrefixes = ["토", "일"];

export default function StudyPlanner() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const phase = phases[activePhase];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F7F5F2",
      fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
      paddingBottom: 60,
    }}>
      {/* Header */}
      <div style={{
        background: "#1A1A2E", padding: "32px 24px 28px",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 30% 50%, rgba(74,124,89,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(107,63,160,0.25) 0%, transparent 60%)",
        }} />
        <div style={{ position: "relative" }}>
          <p style={{ color: "#8B9AB0", fontSize: 12, letterSpacing: 3, marginBottom: 8, textTransform: "uppercase" }}>
            시각디자인 산업기사 필기 2회
          </p>
          <h1 style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 800, margin: "0 0 8px", letterSpacing: -0.5 }}>
            📅 51일 완성 스터디 플랜
          </h1>
          <p style={{ color: "#A0B0C0", fontSize: 14, margin: 0 }}>
            2026. 3. 19 (목) 시작 → 2026. 5. 9 (토) 시험일
          </p>
        </div>
      </div>

      {/* Summary Bar */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1, background: "#E0DDD8", borderBottom: "1px solid #E0DDD8",
      }}>
        {[
          { label: "총 기간", value: "51일" },
          { label: "하루 학습", value: "1~2시간" },
          { label: "교재", value: "예문사" },
          { label: "시험일", value: "5월 9일" },
        ].map((item, i) => (
          <div key={i} style={{ background: "#fff", padding: "14px 8px", textAlign: "center" }}>
            <p style={{ color: "#888", fontSize: 11, margin: "0 0 4px" }}>{item.label}</p>
            <p style={{ color: "#1A1A2E", fontSize: 15, fontWeight: 700, margin: 0 }}>{item.value}</p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 16px" }}>

        {/* Phase Tabs */}
        <div style={{ display: "flex", gap: 8, margin: "24px 0 20px" }}>
          {phases.map((p, i) => (
            <button key={i}
              onClick={() => { setActivePhase(i); setExpandedWeek(null); }}
              style={{
                flex: 1, padding: "10px 6px", borderRadius: 10,
                border: "none", cursor: "pointer",
                background: activePhase === i ? p.color : "#ECEAE6",
                color: activePhase === i ? "#fff" : "#666",
                fontWeight: activePhase === i ? 700 : 500,
                fontSize: 13, transition: "all 0.2s",
              }}>
              <div style={{ fontSize: 10, opacity: 0.8, marginBottom: 2 }}>{p.label}</div>
              <div>{p.title}</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>{p.period}</div>
            </button>
          ))}
        </div>

        {/* Phase Banner */}
        <div style={{
          background: phase.bg, border: `1.5px solid ${phase.color}30`,
          borderRadius: 12, padding: "14px 18px",
          marginBottom: 20, display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, background: phase.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: 14, flexShrink: 0,
          }}>
            {phase.id}
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, color: phase.color, fontSize: 15 }}>
              {phase.label} — {phase.title} ({phase.days})
            </p>
            <p style={{ margin: "2px 0 0", color: "#666", fontSize: 13 }}>{phase.desc}</p>
          </div>
        </div>

        {/* Week Accordion */}
        {phase.weeks.map((week, wi) => {
          const isOpen = expandedWeek === wi;
          const tagStyle = tagColors[week.tag] || { bg: "#f0f0f0", text: "#333" };
          return (
            <div key={wi} style={{
              background: "#fff", borderRadius: 12, marginBottom: 10,
              overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              border: isOpen ? `1.5px solid ${phase.color}40` : "1.5px solid transparent",
            }}>
              <button onClick={() => setExpandedWeek(isOpen ? null : wi)} style={{
                width: "100%", padding: "14px 16px", background: "none",
                border: "none", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "space-between", gap: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    background: phase.color, color: "#fff",
                    fontSize: 11, fontWeight: 700, padding: "3px 8px",
                    borderRadius: 6, whiteSpace: "nowrap",
                  }}>
                    {week.week}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#1A1A2E" }}>{week.period}</p>
                    <div style={{ marginTop: 3 }}>
                      <span style={{
                        background: tagStyle.bg, color: tagStyle.text,
                        fontSize: 11, fontWeight: 600, padding: "2px 7px", borderRadius: 4,
                      }}>{week.tag}</span>
                    </div>
                  </div>
                </div>
                <span style={{
                  color: phase.color, fontSize: 18, display: "inline-block",
                  transition: "transform 0.2s",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}>›</span>
              </button>

              {isOpen && (
                <div style={{ borderTop: `1px solid ${phase.color}20`, padding: "4px 0 8px" }}>
                  {week.days.map((d, di) => {
                    const isWeekend = weekendPrefixes.some(w => d.day.startsWith(w));
                    return (
                      <div key={di} style={{
                        display: "flex", alignItems: "flex-start", gap: 12,
                        padding: "9px 16px",
                        background: di % 2 === 0 ? "transparent" : "#FAFAF9",
                      }}>
                        <div style={{
                          minWidth: 64, fontSize: 12, fontWeight: 600,
                          color: isWeekend ? "#C0392B" : phase.color,
                          paddingTop: 1,
                        }}>
                          {d.day}
                        </div>
                        <div style={{ fontSize: 13, color: "#333", lineHeight: 1.5 }}>
                          {d.content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Tips */}
        <div style={{
          background: "#1A1A2E", borderRadius: 12, padding: "20px", marginTop: 24, color: "#fff",
        }}>
          <p style={{ margin: "0 0 14px", fontWeight: 700, fontSize: 15 }}>💡 학습 팁</p>
          {[
            ["📖", "하루 1~2시간", "짧더라도 매일 꾸준히! 주 6일 공부 + 하루는 복습 or 휴식"],
            ["✏️", "오답 노트 필수", "틀린 문제는 반드시 기록하고 시험 전날 다시 확인"],
            ["🔁", "기출이 답", "예문사 교재 기출 파트 → 최소 3회독 목표"],
            ["📊", "색채론 숫자 주의", "먼셀 명도(0~10), 채도 수치 등 자주 출제되는 수치 암기"],
            ["🗓️", "디자인사는 연대표", "시대 흐름·운동명·인물 세트로 외우면 효율적"],
          ].map(([icon, bold, text], i) => (
            <div key={i} style={{
              display: "flex", gap: 10, marginBottom: i < 4 ? 10 : 0, fontSize: 13,
            }}>
              <span>{icon}</span>
              <span><strong style={{ color: "#7ECBA8" }}>{bold}</strong> — {text}</span>
            </div>
          ))}
        </div>

        {/* Exam Day Banner */}
        <div style={{
          background: "linear-gradient(135deg, #6B3FA0, #4A7C59)",
          borderRadius: 12, padding: "20px", marginTop: 10,
          textAlign: "center", color: "#fff",
        }}>
          <p style={{ margin: "0 0 4px", fontSize: 22 }}>🎯</p>
          <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 16 }}>
            시험일 D-0 · 2026년 5월 9일 (토)
          </p>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.85 }}>
            합격 커트라인 60점 이상 / 전 과목 40점 이상
          </p>
        </div>

      </div>
    </div>
  );
}
