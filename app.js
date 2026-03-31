// 링크 데이터를 여기서 수정하세요
const profileData = {
  name: "일반기계기사 홍교수",
  bio: "안녕하세요! 일반기계기사 학습에 꼭 필요한 정보만을 제공해드리고 있습니다.",
  avatar: "images/profile.png",
};

const links = [
  // ── 주요 링크 4개 ──
  {
    icon: "🏫",
    label: "일반기계기사 홍인학원",
    url: "#",
    primary: true,
  },
  {
    icon: "💬",
    label: "일반기계기사 단톡방",
    url: "#",
    primary: false,
  },
  {
    icon: "📞",
    label: "일반기계기사 수강 상담",
    url: "#",
    primary: false,
  },
  {
    icon: "⚙️",
    label: "기계공학 강의 기계스토리",
    url: "#",
    primary: false,
  },
  // ── SNS / 채널 ──
  {
    icon: "▶️",
    label: "유튜브",
    url: "#",
    primary: false,
  },
  {
    icon: "📝",
    label: "블로그",
    url: "#",
    primary: false,
  },
  {
    icon: "🔗",
    label: "미정",
    url: "#",
    primary: false,
  },
];

// 페이지 렌더링
function render() {
  document.querySelector(".name").textContent = profileData.name;
  document.querySelector(".bio").textContent = profileData.bio;
  document.querySelector(".avatar img").src = profileData.avatar;
  document.querySelector(".avatar img").alt = profileData.name;
  document.title = profileData.name + " | Links";

  const linksSection = document.querySelector(".links");
  linksSection.innerHTML = links
    .map(
      (link) => `
    <a class="link-card"
       href="${link.url}"
       target="_blank"
       rel="noopener noreferrer">
      <span class="link-icon">${link.icon}</span>
      <span class="link-label">${link.label}</span>
    </a>
  `
    )
    .join("");
}

render();
