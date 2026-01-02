// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hansika-41', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Hansika', description: '', imageURL: '' },
  social: {
    linkedin: 'Hansika Kanamarlapudi',
    x: 'kan5134_hansika',
    researchGate: '',
    facebook: 'Hansika Kanamarlapudi',
    instagram: '_hansika.4127',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    phone: '',
    email: '24jr1a0579@gmail.com',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'CSS',
    'MySQL',
    'C',
    'Java',
    'Python',
    'C++',
  ],

  educations: [
    {
     institution: 'Loyola Public School',
     degree: 'School',
     from: '2012',
     to: '2022',
    },
    {
      institution: 'Arka Vidwan Junior College',
      degree: 'Intermediate',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'KKR & KSR Institute Of Technology and Sciences',
      degree: 'B.Tech',
      from: '2024',
      to: '2028',
    },
  ],

certifications: [
  {
    name: 'Ethical Hacking (NPTEL)',
    body: 'Earned a consolidated score of 57% in this NPTEL course, gaining insights into network security and system vulnerabilities.',
    year: 'October 2023',
    link: 'https://hansika-41.github.io/gitprofile/Nptel.jpg', 
  },
  {
    name: 'Full Stack Development',
    body: 'Completed a Skill-Oriented Course on Full Stack Development organized by APSSDC in collaboration with the Dept. of CSE at KITS.',
    year: '2023',
    link: 'https://hansika-41.github.io/gitprofile/fsd.png',
  },
  {
    name: 'Internet of Things (IOT)',
    body: 'Completed 40 hours of hands-on experience with microcontrollers and real-time systems.',
    year: 'August 2025',
    link: 'https://hansika-41.github.io/gitprofile/iot-cer.jpg',
  },
],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.


  enablePWA: true,
};

export default CONFIG;
