interface Section {
  slug: string;
  content: {
    title?: string;
    subtitle?: string;
    slogan?:string;
    description?: string | string[];
    other?: { path: string; title: string; imageUrl: string }[];
    imageUrl?: string | string[];
    links?: { title: string; url: string }[];
  };
}


const sections: Section[] = [
  {
    slug: "header-text",
    content: {
      title: "Green Hills Academy At A Glimpse",
    }
  },
  {
    slug: "router-about",
    content: {
      other: [
        {
          path: "/about/learners_tab",
          title: " Learners life",
          imageUrl: "https://greenhillsacademy.rw:8081/images/GHA_121_fq5dcg.jpg",
        },
        {
          path: "/about/leadership_tab",
          title: "Leadership",
          imageUrl: "https://greenhillsacademy.rw:8081/images/GHA_43_uxvpi4.jpg",
        },
        {
          path: "/about/facilities_tab",
          title: "Facilities",
          imageUrl: "https://greenhillsacademy.rw:8081/images/infrastructures/GHA_44_sws6pa.jpg",
        },
        {
          path: "/about/accreditation",
          title: "Accreditation",
          imageUrl: "https://greenhillsacademy.rw:8081/images/GHA_63_kejfdv.jpg",
        },
      ],
    }
  },
  {
    slug: "who-we-are",
    content: {
      title: "Who We Are",
      description: [
        `Green Hills Academy is authorized by the International
        Baccalaureate (IB) organization to offer the Primary Years
        Programme for learners in Nursery 1 to Grade 5, the Middle
        Years Programme for learners in Grades 6 to 10, the
        Diploma and Career-related Programmes for learners in
        Grades 11 and 12. IB World Schools shares a common
        philosophy and commitment to providing a high quality,
        challenging, international education that prepares
        learners for further study in university and fulfilling
        lives. For further information about the IB and its
        programmes, visit &nbsp;`,
      ],
      links: [
        { title: "www.ibo.org", url: "www.ibo.org" },
        { title: "Watch Our Videos", url: "https://www.youtube.com/@GHA_rwanda/videos" }
      ]
      , imageUrl: [
        `https://greenhillsacademy.rw:8081/images/GHA_16.jpg`,
        `https://greenhillsacademy.rw:8081/images/DSC_2364.jpg`,
      ]
    }
  },
  {
    slug: "head-of-school",
    content: {
      title: "Welcome to Green Hills Academy",
      subtitle:"Daniel Holliger, PHD",
      slogan: "Head of School",
      description:`It is a great pleasure to welcome you to Green Hills Academy (GHA), the only International Baccalaureate World School in Rwanda. A full-continuum IB World School offering the Primary Years, Middle Years, Diploma, and Career-related Programmes, GHA offers both day and boarding options. 
      At GHA, learners excel academically and personally in a safe, caring, and vibrant learning community. We create engaging and empowering learning experiences that foster a love for learning and prepare learners for the future in a continuously changing world. Preparing learners for the uncertainties of our future world is a challenge that we embrace at GHA by developing critical thinking skills, creativity, emotional intelligence, self-confidence, resilience, and collaboration to solve real-world problems.
      At GHA, academic achievement and personal growth go hand in hand to ensure the development of the whole child. We provide our learners with engaging and challenging learning opportunities while encouraging them to do their personal best in every area of life. We inspire learners to reach their full potential, identify and develop interests and talents, and become independent and self-reliant individuals. We help learners develop excellent social skills, understanding and management of emotions, and healthy friendships. 
      Our active Prefects and learner Councils at all grade levels foster learner agency, leadership, and voice. In addition, learners have many opportunities in classes and extracurricular activities to develop artistic, cultural, sporting, creative, and leadership skills that will serve them well during their time at GHA and beyond.
      Central to the IB Programmes is the development of Approaches Learning (ATL) skills and IB Learner Profile attributes. The five ATL skills - Thinking, Communication, Research, Social, and Self-management Skills - are designed to help learners learn how to learn. The learner profile attributes promote lifelong learning, responsible citizenship, and respect for diverse cultures and perspectives. Developing the attributes - Inquirers, Knowledgeable, Thinkers, Communicators, Principled, Open-minded, Caring, Risk-takers, Balanced, and Reflective -  is essential for preparing learners to meet the challenges of the 21st century. 
      With talented learners from over 60 countries and wonderful educators from over 15 countries, GHA’s rich diversity prepares learners for the diverse societies they will join when they enter the workplace. Our learners learn to understand and respect multiple viewpoints, express empathy and compassion for others, and become ethical young people with global understanding and perspective.
      Recognizing the significant value of being multilingual, we offer a bilingual French-English program from Nursery through Middle School in addition to our English program from Nursery through Twelfth Grade. We also offer additional language study in Kinyarwanda, German, French, and Mandarin. 
      Widely recognized as one of the best high school programs of study, our International Baccalaureate Diploma Programme prepares learners for admission to excellent universities of choice worldwide. IB learners develop a superior breadth and depth of knowledge, essential skills for success and leadership in the 21st century, and attitudes and values based on a sense of shared responsibility for each other. After studying in excellent universities, our learners go on to become leaders in their areas of work and contribute to building a more peaceful and sustainable global society.
      Our boarding program provides an environment in which learners thrive and grow into well-rounded young adults. The program is designed to help learners excel in academics and extracurricular activities and prepare them for university and life. 
      
      While we are proud of the exemplary education we offer and the innumerable successes of our learners, faculty, and staff, we are keenly aware that our success is contingent upon the ongoing growth and development of our faculty and staff. To provide an exceptional learning experience for learners, the faculty and staff of a school must continuously learn and grow. Thus, we are constantly engaged in developing our professional practice through training, self-reflection, peer feedback, and mentoring.
      
      Our vibrant learning community’s home is a lush, beautifully landscaped 26-acre campus with purpose-built facilities in four separate divisions for Nursery School, Primary School, Middle School, and High School. Our facilities include classrooms flooded with natural light, science labs, libraries, a music hall, two swimming pools, sports fields, a spacious gymnasium, and more. We opened our new Primary School in September 2022 and our new Nursery School in September 2023. During the next few years, we will build a new High School, Gymnasium, Dining Hall, and Theater. In this gorgeous environment, we live and learn together.

      `,
      imageUrl: "https://greenhillsacademy.rw:8081/images/principles/Daniel.png",

    }
  },
  {
    slug: "gha-alumni",
    content: {
      title: "Green Hills Academy Alumni",
      subtitle:"Worldwide Reach",
      imageUrl: "https://greenhillsacademy.rw:8081/images/MAP_wbqpki.png",

    }
  },
  {
    slug: "universities",
    content: {
      title: "Prestigious Universities",
      description:[
        "Harvard University",
        "Yale University",
        "Berkeley University",
        "Stanford University",
        "Purdue University",
        "Rice University",
        "Cornell University",
        "Kent State University",
        "Umass Boston",
        "Reed College",
        "Sunny Plattsburgh University",
        "Hope College",
        "Pomona College",
        "Drexel University",
        "Drake University",
        "University of Buffalo",
        "North Carolina State University",
        "Michigan State University",
        "University of Kentucky",
        "Arkansas University",
        "Massachusetts Institute of Technology",
        "University of Oklahoma",
        "University of Houston",
        "Rollins University",
        "Lynn University",
        "Stony Brook University",
        "Arizona State University",
        "Texas A&M",
        "Oklahoma Christian University",
        "University of Miami",
        "Grand Canyon College",
        "Penn State University",
        "University of Cincinnati",
        "Rice University",
        "Northeastern University",
        "Pratt Institute",
        "University of Washington",
        "Boston University",
        "Marist College",
        "Brock University",
        "University of New Haven",
        "Temple University",
        "Sacred Heart University",
        "Johns Hopkins University",
        "Columbia College",
        "Auburn University",
        "Kansas State University",
        "Amherst College",
        "Princeton University",
        "University of Wisconsin",
        "Dartmouth College",
        "Lafayette University",
        "Williams College",
        "Connecticut College",
        "University of Richmond",
        "Swarthmore College",
        "Tufts College",
        "Colby College",
        "Union College",
        "Depauw University",
        "Western Michigan University",
        "Bucknell University",
        "Haverford College",
        "Rochester Institute of Technology",
        "Fordham University",
        "Nova Southeastern University",
        "Babson College",
        "New York University",
        "Syracuse University",
        "Baylor University",
        "Gustavus College",
        "Lehigh University",
        "Duquesne University",
        "University of Houston College",
        "University of Tampa",
        "Rider University",
        "Phoenix University",
        "Savannah School of Arts & Design",
        "College of Holy Cross",
        "Columbia University",
        "NYU Abu Dhabi",
        "Carnegie Mellon University",
        "Iowa State University",
        "Brown University",
        "Sunny Stony Brook University",
        "University of Hult",
        "College of Wooster",
        "Loyola University",
        "University of Connecticut",
        "University of Pittsburgh",
        "University of North Texas",
        "University of Houston",
        "Sunny Buffalo University",
        "Skidmore College",
        "University of Washington",
        "University of Southern Mississippi",
        "Birmingham Southern College",
        "Xavier University",
        "University of Massachusetts",
        "Florida Institute of Technology",
        "Florida Atlantic University",
        "Michigan Technological University",
        "University of Miami",
        "Rhode Island College",
        "Tulane University",
        "Carleton University",
        "University of British Columbia",
        "McGill University",
        "University of Toronto",
        "Prince Edward University",
        "Concordia University",
        "University of Windsor",
        "Manitoba University",
        "McMaster University",
        "McEwan University",
        "York University",
        "Lakehead University",
        "University of Calgary",
        "University of Ottawa",
        "Trent University",
        "Queens University",
        "University of Alberta",
        "Wilfred Laurier University",
        "University of Saskatchewan",
        "Simon Fraser University",
        "Toronto Metropolitan University",
        "Dalhousie University",
        "Western University",
        "Waterloo University",
        "Seneca College",
        "Ontario Tech University",
        "University of Guelph-Humber",
        "Algoma University",
        "Thompson Rivers University",
        "St. Mary's University",
        "Windsor University",
        "Mount Allison University",
        "University of Regina",
        "St. Mary's University",
        "Brock University",
        "University of Victoria",
        "University of Winnipeg",
        "Niagara College",
        "Fanshawe College",
        "Centennial College",
        "Great Lakes College of Toronto",
        "St. Thomas University",
        "University Canada West",
        "Douglas College",
        "Oxford University",
        "Nottingham Trent University",
        "University of Leicester",
        "University College London",
        "University of Kent",
        "University of Westminster",
        "University of Manchester",
        "University of Newcastle",
        "University of Leeds",
        "De Montfort University",
        "University of Cambridge",
        "Middlesex University",
        "London School of Economics",
        "Birmingham University",
        "Anglia Ruskin University",
        "Brunel University",
        "Essex University",
        "University of Roehampton",
        "University of York",
        "University of Edinburgh",
        "University of Glasgow",
        "Imperial College",
        "University of Portsmouth",
        "Dundee University",
        "University of Central Lancashire",
        "University of East London",
        "University of Aberdeen",
        "University of Plymouth",
        "University of London",
        "University of Birmingham",
        "University of Warwick",
        "University of Lancaster",
        "University of Southampton",
        "Coventry University",
        "University of Exeter",
        "University of East Anglia",
        "Westminster University",
        "London Metropolitan University",
        "EU Business School - Spain",
        "IE Business School - Spain",
        "Groningen University - Netherlands",
        "Maastricht University - Netherlands",
        "Utrecht University - Netherlands",
        "Leiden University - Netherlands",
        "University of Amsterdam - Netherlands",
        "Vrije University - Netherlands",
        "Delft University - Netherlands",
        "Radboud University - Netherlands",
        "University of Twente - Netherlands",
        "Tilburg University - Netherlands",
        "Hanze University - Netherlands",
        "ESSCA Business School - France",
        "SciencePo - France",
        "American Business School - France",
        "University of Debrecen - Hungary",
        "Szeged University - Hungary",
        "Debrecen University - Hungary",
        "Lund University - Sweden",
        "Linnaeus University - Sweden",
        "Malmo University - Sweden",
        "University of Galve - Sweden",
        "University of Warsaw - Poland",
        "Vistula University - Poland",
        "Bialystok University of Technology - Poland",
        "Warsaw School of Economics - Poland",
        "University of Liège - Belgium",
        "University of Luxembourg - Luxembourg",
        "Constructor University - Germany",
        "University of Göttingen - Germany",
        "Jacobs University - Germany",
        "EU Business School - Germany",
        "Adventist University of Central Africa - Rwanda",
        "African Leadership University - Rwanda",
        "University of Global Health Equity - Rwanda",
        "Catholic University - Kenya",
        "Nazarene University - Kenya",
        "Strathmore University - Kenya",
        "Daystar University - Kenya",
        "United States International University - Kenya",
        "Makerere University - Uganda",
        "University of Johannesburg - South Africa",
        "University of Pretoria - South Africa",
        "University of Cape Town - South Africa",
        "Griffith University - Australia",
        "Murdoch University - Australia",
        "Deakin University - Australia",
        "Monash University - Australia",
        "University of Sydney - Australia",
        "Edith Cowan University - Australia",
        "University of Melbourne - Australia",
        "University of Adelaide - Australia",
        "Middlesex University - Mauritius",
        "African Leadership University - Mauritius",
        "New York University- Abu Dhabi - UAE",
        "Heriot-Watt University - UAE",
        "Middlesex University - UAE",
        "Murdoch University - UAE",
        "Handong Global University - South Korea",
        "Nanjing University - China",
        "Huazhong University - China",
        "University of Nicosia - Cyprus",
        "Ateneo De Manila - Philippines",
      ],
    }
  },
  {
    slug: "alumni_registration_form",
    content: {
      title: "Let&apos;s Strengthen Our Community: Calling Our Alumni!",
      description:[
        `We aspire to further engage and strengthen the Green Hills
        Academy community. We recognize that you, our Alumni play a
        crucial role in this mission and we invite you to reconnect and
        participate in the ongoing journey of broadening and
        strengthening our community.`,
        ` We encourage our esteemed alumni to complete the Alumni
        Registration Form, to foster continued connection, updates, and
        participation in the Green Hills Academy community.`,
      ],
      links: [
        { title: "Alumni Registration Form", url: "https://forms.gle/xGyjBLuaxBpm2WE37" },
      ],

    }
  },

];

export default sections;
