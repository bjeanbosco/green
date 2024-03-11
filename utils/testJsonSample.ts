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
