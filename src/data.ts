interface DataType {
  title: string,
  job: string,
  image: string,
  video: string,
  summary: string,
  responsibilities: string[],
  skills: string[],
}

const data: DataType[] = [
  {
    "title": "WeightWatchers.com",
    "job": "WW International",
    "image": "weightwatchers.jpg",
    "video": '',
    "summary": "Website for the WW (Formerly Weight Watchers) App. Offers information about how to sign up for a WW subscription, as well as free recipes and articles on wellness.",
    "responsibilities": [
      "Core developer responsible for the moving the old Drupal 7 website off Acquia Cloud onto WW's internal AWS infrastructure.",
      "Led the conversion of legacy React class components into functional components with TypeScript.",
      "Set up CI/CD pipelines for linting, testing, and Docker deployments with Github Actions."
    ],
    "skills": [
      "React",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "Apollo GraphQL",
      "Node.js",
      "Hapi",
      "Drupal 7/8/9",
      "PHP",
      "SQL",
      "Storybook",
      "Memcached",
      "Redis",
      "Fastly",
      "Docker",
      "Kubernetes",
      "Jest",
      "Webpack",
      "Github Actions",
      "Git"
    ]
  },
  {
    "title": "MIT and FIT Remote Learning Hub",
    "job": "Cynda Media Lab",
    "image": "remotelearninghub.jpg",
    "video": "https://player.vimeo.com/video/501330026?title=0&byline=0&portrait=0",
    "summary": "An online learning platform used by teachers to create syllabuses and students to track coursework.",
    "responsibilities": [
      "Set up Auth0 for login. Users with a teacher role could edit and create lesson units, while users with a student role would have a read-only view of courses they were enrolled in.",
      "Built front-end components in Storybook for the user dashboard, course edit pages, and a subsection of the site with a dynamic workshop schedule."
    ],
    "skills": [
      "React",
      "SCSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Storybook",
      "Git"
    ]
  },
  {
    "title": "Vincent Di Fate",
    "job": "Cynda Media Lab",
    "image": "vincentdifate.jpg",
    "video": '',
    "summary": "Portfolio website for Vincent Di Fate, an illustrator working in the specialties of science fiction, fantasy, and aerospace art.",
    "responsibilities": [
      "Front-end developer for the public site. Developed gallery and grid views for each major section.",
      "Built the front-end for a custom CMS with Angular Material, allowing the client to upload new art pieces and edit their project and biography pages.",
      "Added a general contact form and a purchase form for individual pieces of artwork."
    ],
    "skills": [
      "Angular 4",
      "Angular Material",
      "SCSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Git"
    ]
  },
  {
    "title": "#HowDoYouHug Campaign",
    "job": "Cynda Media Lab",
    "image": "howdoyouhug.png",
    "video": "https://player.vimeo.com/video/262565656?title=0&byline=0&portrait=0",
    "summary": "A social media campaign for GUND. The campaign's core goal was to encourage social shares of their promotional website. Visitors could share custom avatars they built on the site, and GUND would donate toys to charities after milestones were reached.",
    "responsibilities": [
      "Created an animated meter with HTML canvas that gets updated when a user shares their avatar or posts to social media.",
      "Developed a custom avatar builder with HTML canvas that allows users to pick a plush silhouette and pan/zoom it on top of a background of their choosing. The canvas is then saved as an image, allowing users to share their new avatar.",
      "Built a slideshow and masonry layout for user generated posts curated by site admins."
    ],
    "skills": [
      "HTML",
      "HTML Canvas",
      "SCSS",
      "JavaScript",
      "GreenSock",
      "MongoDB",
      "Git"
    ]
  },
  {
    "title": "Tera Cloud Memory Extension",
    "job": "Cynda Media Lab",
    "image": "tera.jpg",
    "video": "https://player.vimeo.com/video/173573310?title=0&byline=0&portrait=0",
    "summary": "Multilingual marketing website for HB Mobile's Tera, a custom Android phone with additional cloud storage capacity of 1TB.",
    "responsibilities": [
      "Set up front end and utilized Gulp for tasks such as SASS compilation, JS minification, Babel, and auto-prefixing.",
      "Set up components with the ability to get flat data from multiple sources by path for multilingual support."
    ],
    "skills": [
      "HTML",
      "SCSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Gulp",
      "Git"
    ]
  },
  {
    "title": "InStyle.com",
    "job": "Meredith",
    "image": "instyle.jpg",
    "video": '',
    "summary": "Website for a celebrity fashion magazine. The site contains landing pages for beauty product shopping, celebrity outfit galleries, and general fashion news.",
    "responsibilities": [
      "Key developer for the Best Beauty Buys section of the website. Utilized a custom object-oriented Drupal 7 module to build out a data API with support for pagination, data filtering, and editor curated content.",
      "Built the Best Beauty Buys front-end template with a Handlebars/Node.js setup. Used AJAX to implement a load more button and added support for filtering by tag.",
      "Worked on several other features of the site, including critical CSS implementation with Penthouse, lazy loading additional articles on scroll, and preparing the site (code and Drush scripts) for a HTTPS migration.",
      "Helped build a regression test suite for the site with Nightmare and Mocha/Chai. Testing included tasks such as typing text into a search field, checking results, and ensuring that pagination worked as expected."
    ],
    "skills": [
      "Handlebars",
      "SCSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Drupal 7",
      "PHP",
      "SQL",
      "Nightmare",
      "Mocha/Chai",
      "Jenkins",
      "CircleCI",
      "Grunt",
      "Git"
    ]
  },
  {
    "title": "Senate Intelligence Committee",
    "job": "Lockheed Martin Desktop Solutions, Inc.",
    "image": "senate.jpg",
    "video": '',
    "summary": "Website for the Senate Intelligence Committee. The site serves as a repository for the committee's publications and bills. It also contains the committee's hearing schedule and a live stream of their public hearings.",
    "responsibilities": [
      "Back-end developer. Set up a vanilla Drupal 7 site as the base. Utilized several key contributed modules such as Views, Akamai, Calendar, and Panels.",
      "Worked on several front-end features, including extending the Calendar module to display tooltips for events on hover.",
      "Responsible for monitoring Drupal core security advisories and patching the site, usually within 24 hours.",
      "Held training sessions for editors and responded directly to maintenance requests."
    ],
    "skills": [
      "Drupal 7",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL",
      "Jenkins",
      "Git"
    ]
  }
];

export default data;
