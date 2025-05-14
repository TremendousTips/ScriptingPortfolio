const projects = [
  {
    title: "Pet Follow System",
    description: "Little NPCs that follow players and avoid collisions using PathfindingService.",
    image: "assets/images/LTA.png",
    link: "https://github.com/yourusername/roblox-pet-system"
  },
  {
    title: "Skill Tree UI",
    description: "Dynamic GUI that handles skill dependencies and animations using TweenService.",
    image: "assets/images/LTA.png",
    link: "https://github.com/yourusername/roblox-skill-tree"
  },
    {
    title: "Ladder to ADMIN! 👑",
    description: "Designed GUI, and scripted all functionality with in the game.",
    image: "assets/images/LTA.png",
    link: ""
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
      <a href="${project.link}" target="_blank" style="color: #00ffd5;">View Project</a>
    </div>
  `;
  container.appendChild(card);
});
