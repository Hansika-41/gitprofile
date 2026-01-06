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

avatar: {
 src: '/gitprofile/rlo.png', // This points to the file in your public folder
 display: true,
 ring: false,
 },

projects: {
 github: {
 display: true, // Display GitHub projects?
 header: 'Github Projects',
 mode: 'manual', // Mode can be: 'automatic' or 'manual'
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
 projects: ['hansika-41/TODO'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
 },
 },
 external: {
 header: 'My Projects',
 projects: [
 {
 title: '3D Globe Country Explorer',
 description: 'An interactive 3D globe built to visualize countries and geographical data.',
 link: 'https://3d-globe-country-exp-epei.bolt.host/',
 },
 ],
 },
},
seo: {
 title: 'Portfolio of Hansika | CSE Student & Full Stack Developer',
 description: '2nd-year CSE student specializing in Full Stack Development and Ethical Hacking.',

},
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

resume: {
 about: {
 description: "As a 2nd-year Computer Science student, I view coding as more than just building applications—it's about understanding how they think and how to keep them safe. My journey started with Full Stack Development, where I learned the art of creating seamless user experiences. However, my curiosity led me to Ethical Hacking (NPTEL), giving me a 'security-first' mindset. Whether I am writing a React component or analyzing network vulnerabilities, I aim to build software that is both innovative and resilient. I am currently seeking opportunities to collaborate on projects that challenge my problem-solving skills and expand my knowledge of the modern tech stack.",
 },
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
 name: 'Ethical Hacking',
 body: 'NPTEL Online Certification - IIT Kharagpur (Jul-Oct 2025)',
 year: '2025', 
 },
 {
 name: 'Full Stack Development - 1',
 body: '6-Day Skill-Oriented Course organized by Techno Future India and KITS.',
 year: '2025',
 },
 {
 name: 'IoT Applications Bootcamp',
 body: 'Completed 40 hours online course of IoT Applications Bootcamp 2025.',
 year: '2025',
 },
],

// Display articles from your medium or dev account. (Optional)
 blog: {
 source: 'dev', // medium | dev
 username: '', // to hide blog section, keep it empty
 limit: 2,
 display: false, // How many articles to display. Max is 10.
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
 'retro',
 'cyberpunk',
'valentine',
 'halloween',
 'garden',
 'forest',
 'aqua',
 'pastel',
 'fantasy',
 'wireframe',
 'black',
 'luxury',
 'dracula',
 'autumn',
 'lemonade',
 'night',
 'coffee',
'winter',
 'dim',
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
 "YOU UPDATE MY CODE SO THAT I WILL COPY PATSE"