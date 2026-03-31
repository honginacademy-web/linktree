// ── 프로필 ──
const profileData = {
  name: "일반기계기사 홍교수",
  bio: "안녕하세요! 일반기계기사 학습에 꼭 필요한 정보만을 제공해드리고 있습니다.",
  avatar: "images/profile.png",
};

// ── 주요 링크 (pill 버튼) ──
const links = [
  { icon: "🏫", label: "일반기계기사 홍인학원",   url: "#" },
  { icon: "💬", label: "일반기계기사 단톡방",      url: "#" },
  { icon: "📞", label: "일반기계기사 수강 상담",   url: "#" },
  { icon: "⚙️", label: "기계공학 강의 기계스토리", url: "#" },
];

// ── 하단 소셜/아이콘 링크 ──
// type: "fa" → Font Awesome 클래스 / "img" → 이미지 URL
const socialLinks = [
  { type: "fa",  icon: "fab fa-youtube",                                    label: "유튜브",   url: "#" },
  { type: "fa",  icon: "ii ii-nblog",                                        label: "블로그",   url: "#" },
  { type: "fa",  icon: "fas fa-globe",                                      label: "홈페이지", url: "#" },
];

// ── 렌더링 ──
function render() {
  document.querySelector(".name").textContent = profileData.name;
  document.querySelector(".bio").textContent = profileData.bio;
  document.querySelector(".avatar img").src = profileData.avatar;
  document.querySelector(".avatar img").alt = profileData.name;
  document.title = profileData.name + " | Links";

  // 주요 링크
  document.querySelector(".links").innerHTML = links
    .map((link) => `
      <a class="link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
        <span class="link-icon">${link.icon}</span>
        <span class="link-label">${link.label}</span>
      </a>
    `)
    .join("");

  // 소셜 아이콘
  document.querySelector(".social-links").innerHTML = socialLinks
    .map((s) => `
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
