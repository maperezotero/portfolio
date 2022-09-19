export function getAllProjects() {
  return projects;
}

export function getAllProjectsIds() {
  return projects.map((p) => {
    return {
      params: {
        id: p.id,
      },
    };
  });
}

export function getProjectData(id) {
  const project = projects.find((p) => p.id === id);
  return project;
}

export const projects = [
  {
    id: 1,
    name: "Chuchez - Ecommerce",
    img: "chuchez.jpg",
    url: "https://chuchez.com",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
    featured: true,
  },
  {
    id: 2,
    name: "Sbai Express",
    img: "sbai-express.jpg",
    url: "https://sbai-express.com",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
    featured: false,
  },
  {
    id: 3,
    name: "Casa Rural Azahar",
    img: "casa-rural-azahar.jpg",
    url: "https://azahardepriego.es",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
    featured: false,
  },
  {
    id: 4,
    name: "Rural Camponubes",
    img: "rural-camponubes.jpg",
    url: "https://camponubes.com",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
    featured: false,
  },
];
