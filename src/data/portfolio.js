// eslint-disable-next-line import/prefer-default-export
export const portfolio = {
  about: {
    aboutMe: {
      currentStatus:
        'I am currently working at <a href="http://www.amazeelabs.com" title="Visit AmazeeLabs" target="_blank" rel="noopener noreferrer">AmazeeLabs</a> in Zurich.',
      summary:
        '<p>I am a passionate and proficient web developer with experience producing code to a consistently high standard. I take pride in what I create, and motivated by a lifelong love of learning of new skills. I am a quick learner who can absorb new ideas and can communicate clearly and effectively in any situation.</p><p>Since I have held the position of many Developer/Engineering roles, I have demonstrated an ability to work across each department as both a lead and team player, and to establish strong working relationships with colleagues.</p><p>In addition to HTML5 and CSS3, I code not only with vanilla JavaScript or TypeScript, but I also have experience working with many frameworks and libraries, such as Angular, React, and jQuery. I also have knowledge with many backend technologies such as C#, PHP, and Node.JS.</p><p>To make sure that I follow the developing trends and the cutting edge technologies, I love to attend conferences and meetups.</p>',
    },
    interests: [
      'Travelling, especially in winter.',
      'Classical music, opera, and ballet.',
      'Playing sports including badminton, squash, tennis, and going to the gym.',
      'Art, portfolio coming soon.',
      'Visiting museums.',
      'Organising and attending meetups/conferences, and meeting new people.',
      'Watching documentaries and too many TV shows.',
      'Keeping up to date with the latest technology in media and web.',
    ],
    socialConnect: [
      {
        address: 'mailto:vijaydubbonline@gmail.com',
        name: 'Outlook',
      },
      {
        address: 'https://www.linkedin.com/in/vijay-dubb',
        name: 'LinkedIn',
      },
      {
        address: 'https://www.github.com/VD39',
        name: 'GitHub',
      },
      {
        address: 'https://www.drupal.org/u/vd39',
        name: 'Drupal',
      },
    ],
    technicalSkills: [
      {
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP'],
        title: 'Languages',
      },
      {
        skills: [
          'MEAN Stack',
          'Node.JS',
          'Responsive Web',
          'jQuery',
          'AngularJS',
          'Angular 4',
          'SASS',
          'PostCSS',
          'Bootstrap',
          'Accessibility',
          'React',
          'Webpack',
          'Vue.js',
        ],
        title: 'Frameworks Architecture',
      },
      {
        skills: ['Git', 'JIRA', 'NPM', 'SVN', 'Confluence'],
        title: 'Source and Project Tracking Software',
      },
      {
        skills: [
          'Agile practices (continuous delivery, deployment, and integration, automated testing, pair programming, etc) in both Kanban and Scrum processes.',
        ],
        title: 'Methodologies',
      },
      {
        skills: ['GraphQL'],
        title: 'Learning',
      },
    ],
    workExperience: [
      {
        company: 'Amazee Labs',
        endDate: 'Present',
        jobTitle: 'Developer',
        startDate: 'December 2017',
      },
      {
        company: 'Winners Group ApS',
        endDate: 'September 2017',
        jobTitle: 'Frontend Engineer',
        startDate: 'June 2017',
      },
      {
        company: 'Kindred Group (Formally Unibet Group)',
        endDate: 'June 2017',
        jobTitle: 'Frontend Engineer',
        startDate: 'January 2016',
      },
      {
        company: 'Social Care Institute for Excellence (SCIE)',
        endDate: 'December 2016',
        jobTitle: 'Web/Digital Developer',
        startDate: 'October 2013',
      },
      {
        company: 'Blue Lemon Studios',
        endDate: 'June 2016',
        jobTitle: 'Freelance Web Developer',
        startDate: 'June 2013',
      },
      {
        company: 'The University Of Kent',
        endDate: 'June 2013',
        jobTitle: 'Various Roles',
        startDate: 'June 2012',
      },
    ],
  },
  projects: [
    {
      description:
        'Commercial work I have worked on, outside of the jobs I have had over my professional career.',
      title: 'Commercial_Work',
      project: [
        {
          description:
            'A website was made as a part of a project I undertook for the University Of Kent fashion students.',
          name: 'Fusion 2012 - Website',
          technologies: ['HTML5', 'CSS3', 'PayPal'],
          visitSiteUrl: 'https://run.plnkr.co/plunks/pIzXiwdmr5c5uWh6o9Gq/',
        },
        {
          description:
            'To create an admin section to display the clients music and allow users to filter the results and add songs to a hot track list. This was done for a client who used the company <a href="http://www.bluelemonstudios.com/" target="_blank" rel="noopener noreferrer">BlueLemonStudios</a>.',
          name: 'Olddogsnewtrax Admin',
          technologies: [
            'PHP',
            'MySQL',
            'JavaScript',
            'AngularJS',
            'Bootstrap',
          ],
          visitSiteUrl: 'http://olddogsnewtrax.com/admin/#/',
        },
        {
          description:
            'I lead the development of the authoring tool to create an e-learning courses with ease.',
          name: 'e-learning Authoring Tool',
          technologies: ['AngularJS', 'JSON', 'SCORM'],
          visitSiteUrl:
            'http://www.scie.org.uk/assets/elearning/adult-safeguarding/web/#/index',
        },
        {
          description: 'A website I built dedicated to Nikhar Rooplal.',
          name: 'Nikhar Rooplal Charitable Trust',
          technologies: ['PHP', 'WordPress'],
          visitSiteUrl: 'http://www.nikharrooplalcharitabletrust.org/',
        },
      ],
    },
    {
      description:
        'Open source work I have developed, available on NPM as well.',
      title: 'Open_Source',
      project: [
        {
          codeURL: 'https://github.com/VD39/videojs-iplayer-skin',
          description: 'A Video.JS skin modelled on iPlayer.',
          name: 'Video.JS iPlayer Skin',
          technologies: ['CSS3'],
          visitSiteUrl: 'https://vd39.github.io/videojs-iplayer-skin/example/',
        },
        {
          codeURL: 'https://github.com/VD39/youtube-chapter-generator',
          description:
            'A chapters markers generator plugin for a YouTube video, built using JavaScript.',
          name: 'A YouTube Chapter Generator',
          technologies: ['JavaScript'],
          visitSiteUrl: 'https://vd39.github.io/youtube-chapters/example/',
        },
        {
          codeURL: 'https://github.com/VD39/es6-webpack-boilerplate',
          description:
            'My personal ES6 boilerplate built with Babel 7, Webpack 4, PostCSS, Jest, ESLint, and Stylelint. This portfolio site is built with this boilerplate.',
          name: 'ES6 Boilerplate',
          technologies: [
            'Babel',
            'Boilerplate',
            'ES6',
            'ESLint',
            'Husky',
            'Jest',
            'PostCSS',
            'Stylelint',
            'Webpack 4',
          ],
          visitSiteUrl: 'https://github.com/VD39/es6-webpack-boilerplate',
        },
        {
          codeURL: 'https://github.com/VD39/videojs-iplayer-skin-1',
          description: 'A Video.JS skin modelled on iPlayer.',
          name: 'Video.JS iPlayer Skin (2017)',
          technologies: ['CSS3'],
          visitSiteUrl:
            'https://vd39.github.io/videojs-iplayer-skin-1/example/',
        },
        {
          codeURL: 'https://www.drupal.org/project/floating_action_buttons',
          description:
            'A theme that replaces Drupal core action buttons (by default: save, view, delete) and the settings sidebar, from the node edition form, by floating buttons.',
          name: 'Floating Action Buttons',
          technologies: ['CSS3', 'jQuery'],
          visitSiteUrl:
            'https://www.drupal.org/project/floating_action_buttons',
        },
      ],
    },
    {
      description:
        'My personal work I have developed when I get a few hours to myself.',
      title: 'Personal',
      project: [
        {
          codeURL:
            'https://github.com/VD39/fun-with-frontend/tree/master/pokemon-map',
          description:
            'Build your own Pokémon area and control Pikachu. Sorry there are no battles here, maybe I can build that into later. ;)',
          name: 'Pokémon Map',
          technologies: ['HTML5', 'CSS3', 'jQuery'],
          visitSiteUrl: 'https://vd39.github.io/fun-with-frontend/pokemon-map/',
        },
        {
          codeURL:
            'https://github.com/VD39/fun-with-frontend/tree/master/ie-alpha-transparent-background-generator',
          description:
            'An app to get the Alpha Transparent Background colour. I don’t recommend you support old browsers, please look to the future. ;)',
          name: 'IE Alpha Transparent Background Generator',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          visitSiteUrl:
            'https://vd39.github.io/fun-with-frontend/ie-alpha-transparent-background-generator/',
        },
        {
          codeURL: 'https://github.com/VD39/zpaiz',
          description:
            'The goal is to implement a small word puzzle game that presents the user with a mangled word and asks he/she to enter the correct, unmangled word, all within 40 seconds.',
          name: 'ZPAIZ: An Angular Word Game',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
          visitSiteUrl: 'https://word-game-e597c.firebaseapp.com/',
        },
        {
          codeURL: 'https://github.com/VD39/react-memory-card-game',
          description:
            'An update of my own Zelda Memory Game which I built with vanilla JavaScript, now built in React with flip animation.',
          name: 'A React Memory Card Game',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
          visitSiteUrl: 'https://github.com/VD39/react-memory-card-game',
        },
      ],
    },
  ],
};
