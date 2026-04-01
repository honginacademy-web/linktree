// ── 프로필 ──
const profileData = {
  name: "일반기계기사 홍교수",
  bio: "안녕하세요! 일반기계기사 학습에 꼭 필요한 정보만을 제공해드리고 있습니다.",
  avatar: "images/profile.png",
};

// ── 주요 링크 ──
// accordion: true → 클릭시 펼쳐지는 아코디언
// banner: 배너 이미지 URL (null이면 빈 영역)
// children: 하위 링크 목록
const links = [
  {
    icon: "",
    label: "일반기계기사 홍인학원",
    accordion: true,
    banner: null,
    children: [
      { label: "수강신청 페이지", url: "#" },
      { label: "수강후기 페이지", url: "#" },
      { label: "나의 강의실 미리보기", url: "#" },
    ],
  },
  {
    icon: "",
    label: "일반기계기사 단톡방",
    accordion: true,
    banner: null,
    children: [
      { label: "필기 프리패스 단톡방", url: "#" },
      { label: "필답형 프리패스 단톡방", url: "#" },
      { label: "작업형 프리패스 단톡방", url: "#" },
    ],
  },
  {
    icon: "",
    label: "일반기계기사 수강 상담",
    accordion: true,
    banner: null,
    children: [
      { label: "전화 상담", url: "#" },
    ],
  },
  {
    icon: "",
    label: "기계공학 강의 기계스토리",
    accordion: true,
    banner: null,
    children: [
      { label: "기계공학 기초이론", url: "#" },
      { label: "모멘트의 기초", url: "#" },
      { label: "SFD, BMD 그리기", url: "#" },
    ],
  },
];

// ── 하단 소셜/아이콘 링크 ──
const socialLinks = [
  { type: "fa",  icon: "fab fa-youtube", label: "유튜브",   url: "#" },
  { type: "fa",  icon: "ii ii-nblog",    label: "블로그",   url: "#" },
  { type: "fa",  icon: "fas fa-globe",   label: "홈페이지", url: "#" },
];

// ── 렌더링 ──
function render() {
  document.querySelector(".name").textContent = profileData.name;
  document.querySelector(".bio").textContent = profileData.bio;
  document.querySelector(".avatar img").src = profileData.avatar;
  document.querySelector(".avatar img").alt = profileData.name;
  document.title = profileData.name + " | Links";

  // 주요 링크
  const linksContainer = document.querySelector(".links");
  linksContainer.innerHTML = links.map((link, i) => {
    if (!link.accordion) {
      return `
        <a class="link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
          <span class="link-icon">${link.icon}</span>
          <span class="link-label">${link.label}</span>
        </a>
      `;
    }

    const bannerHtml = `
      <div class="accordion-banner-wrap">
        ${link.banner
          ? `<img src="${link.banner}" alt="배너" class="accordion-banner-img" />`
          : `<div class="accordion-banner-placeholder"></div>`
        }
      </div>`;

    const childrenHtml = link.children
      .map(c => `
        <a class="accordion-sub-link" href="${c.url}" target="_blank" rel="noopener noreferrer">
          ${c.label}
        </a>
      `)
      .join("");

    return `
      <div class="link-accordion" data-index="${i}">
        <button class="link-card accordion-trigger" type="button">
          ${link.icon ? `<span class="link-icon">${link.icon}</span>` : ""}
          <span class="link-label">${link.label}</span>
          <span class="accordion-chevron">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </button>
        <div class="accordion-panel">
          ${bannerHtml}
          <div class="accordion-sub-links">
            ${childrenHtml}
          </div>
        </div>
      </div>
    `;
  }).join("");

  // 아코디언 토글 이벤트
  linksContainer.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const accordion = trigger.closest(".link-accordion");
      const panel = accordion.querySelector(".accordion-panel");
      const isOpen = accordion.classList.contains("open");

      // 다른 아코디언 닫기 (선택사항 — 하나만 열리게 하려면 활성화)
      // linksContainer.querySelectorAll(".link-accordion.open").forEach(el => {
      //   el.classList.remove("open");
      //   el.querySelector(".accordion-panel").style.maxHeight = null;
      // });

      if (isOpen) {
        accordion.classList.remove("open");
        panel.style.maxHeight = null;
      } else {
        accordion.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // 소셜 아이콘
  document.querySelector(".social-links").innerHTML = socialLinks
    .map(s => `
      <a class="social-icon" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">
        ${s.type === "img"
          ? `<img src="${s.icon}" width="28" height="28" alt="${s.label}" />`
          : `<i class="${s.icon}"></i>`
        }
      </a>
    `)
    .join("");
}

render();
