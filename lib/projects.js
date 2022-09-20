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
    name: "Chuchez - Online Shop WordPress & WooCommerce",
    img: "chuchez.jpg",
    url: "https://chuchez.com",
    excerpt:
      "Online candy store developed with WordPress and WooCommerce. Custom WP theme and Woo Commerce plugin.",
    description:
      "Online candy store with product catalog and payment gateway. The Spanish regulations regarding the sale of food products require showing the ingredients and nutritional information of the products, so I had to develop a plugin for WooCommerce so that this information could be easily added to the backend in the product section and also display such information on the public part of the website.",
    tech: [
      "WordPress",
      "WooCommerce",
      "Custom WP Theme",
      "Custom plugin development for WooCommerce",
      "Payment gateway implementation",
      "PHP",
      "HTML5",
      "Sass",
      "JavaScript",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Sbai Express",
    img: "sbai-express.jpg",
    url: "https://sbai-express.com",
    excerpt:
      "Website design and development using WordPress and WPBakery for Sbai Express, S.L. a transport company based in Spain and France.",
    description:
      "<p>The client wanted an exact copy of his company website in France which he couldn't access, don't ask me why, and the biggest challenge was to use the browser developer tools in order to guess what WP Bakery component was  used for each section of the page.</p>",
    tech: [
      "WordPress",
      "WPBakery Page Builder",
      "Contact Form 7",
      "WP Optimize",
    ],
    featured: false,
  },
  {
    id: 3,
    name: "Casa Rural Azahar",
    img: "casa-rural-azahar.jpg",
    url: "https://azahardepriego.es",
    excerpt:
      "Custom WordPress theme development for this rural house in Priego de Cordoba, Spain.",
    description:
      "<p>Website design and development for this rural house for vacation rental. I developed a custom WordPress theme in order to get the best performance possible. The target was to get a clean and usable design with a good download speed.</p>",
    tech: ["WordPress", "PHP", "HTML5", "Sass", "JavaScript"],
    featured: false,
  },
  {
    id: 4,
    name: "Rural Camponubes",
    img: "rural-camponubes.jpg",
    url: "https://camponubes.com",
    excerpt:
      "Website for vacation rental company of rural houses with information on their accommodations. Custom WordPress theme.",
    description:
      "Web design and development for Rural Camponubes, a vacation rental company for rural houses. I developed a fast and clean custom WordPress theme to display information about their accommodations. The goal was to achieve a clean and usable design with a good download speed and a good user experience.",
    tech: ["WordPress", "PHP", "HTML5", "Sass", "JavaScript"],
    featured: false,
  },
];
