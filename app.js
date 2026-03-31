// 링크 데이터를 여기서 수정하세요
const profileData = {
  name: "이름을 입력하세요",
  bio: "한 줄 소개를 입력하세요",
  avatar: "https://github.com/github.png",
};

const links = [
  {
    icon: "🐙",
    label: "GitHub",
    url: "https://github.com/",
    primary: false,
  },
  {
    icon: "💼",
    label: "포트폴리오",
    url: "#",
    primary: false,
  },
  {
    icon: "✉️",
    label: "이메일",
    url: "mailto:your@email.com",
    primary: false,
  },
  {
    icon: "📝",
    label: "블로그",
    url: "#",
    primary: false,
  },
  {
    icon: "🚀",
    label: "주요 프로젝트",
    url: "#",
    primary: true,
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
    <a class="link-card${link.primary ? " link-card--primary" : ""}"
       href="${link.url}"
       target="_blank"
       rel="noopener noreferrer">
      <span class="link-icon">${link.icon}</span>
      <span class="link-label">${link.label}</span>
      <span class="link-arrow">→</span>
    </a>
  `
    )
    .join("");
}

render();
