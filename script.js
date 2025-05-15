const projects = [
  {
    title: "Pet Follow System 🐱",
    description: "Pets that follow players and avoid collisions using PathfindingService in a simmilar fashion to pet simulator.",
    image: "assets/images/PFS.png",
    link: "https://github.com/yourusername/roblox-pet-system",
    linkName: "Private"
  },
  {
    title: "Skill Tree UI 🤹‍♂️",
    description: "Dynamic GUI that handles skill dependencies and animations using TweenService.",
    image: "assets/images/UT.png",
    link: "https://github.com/yourusername/roblox-skill-tree",
    linkName: "Private"
  },
    {
    title: "Ladder to ADMIN! 👑",
    description: "Responsible for the complete UI design and scripting of core gameplay functionality.",
    image: "assets/images/LTA.png",
    link: "https://www.roblox.com/games/75696940007617/Ladder-to-ADMIN",
    linkName: "View On Roblox"
  },
    {
    title: "Egg Hatch System 🥚",
    description: "The egg hatching system can hatch multiple eggs at a time, doesn't use viewportFrames.",
    image: "assets/images/EHS.png",
    link: "https://www.roblox.com/games/77610535821759/Egg",
    linkName: "View On Roblox"
  },
  
];

const container = document.getElementById('portfolio');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="card-content">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" style="color: #00ffd5;">${project.linkName}</a>
    </div>
  `;
  container.appendChild(card);
});
