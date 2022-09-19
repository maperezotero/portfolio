export async function getAllProjects() {
  const projects = projectsGenerator();
  return projects;
}

export function getAllProjectsIds() {
  const projects = projectsGenerator();
  return projects.map((p) => {
    return {
      params: {
        id: p.id,
      },
    };
  });
}

export function getProjectData(id) {}

function projectsGenerator() {
  return [
    {
      id: 1,
      name: "Chuchez - Ecommerce",
      img: "chuchez.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
      featured: true,
    },
    {
      id: 2,
      name: "Sbai Express - Web",
      img: "sbai-express.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
      featured: false,
    },
    {
      id: 3,
      name: "Casa Rural Azahar - Web",
      img: "casa-rural-azahar.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
      featured: false,
    },
    {
      id: 4,
      name: "Rural Camponubes - Web",
      img: "rural-camponubes.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore nam quod vel officia temporibus ducimus provident nesciunt fuga aliquid cumque.",
      featured: false,
    },
  ];
}
