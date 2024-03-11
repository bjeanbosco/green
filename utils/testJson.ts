interface Section {
  slug: string;
  content: {
    title?: string;
    subtitle?: string;
    slogan?: string;
    startYear?: number;
    description?: string | string[];
    subDescription?: string | string[];
    listItems?: string | string[];
    other?: { path: string; title: string; imageUrl: string }[];
    imageUrl?: string | string[];
    videoUrl?: string;
    links?: { title: string; url: string }[];
  };
}


const sections: Section[] = [
  {
    slug: "primary_school",
    content: {
      title:"Primary School",
      subtitle:"International Baccalaureate Primary Years Programme",
      imageUrl: "https://greenhillsacademy.rw:8081/images/266795736_4685877221497631_8323611157934163519_n_rrncgp.jpg",
    }
  },
  {
    slug: "overview",
    content: {
      title:"Overview",
      description:[
        `Our Primary School follows the IB Primary Years Programme
        (PYP) from Grades One to Five. Learners engage in
        interactive lessons and activities based on six Units of
        Inquiry. All subjects and events are interconnected with
        these Units to offer learners a chance for deep exploration
        and learning. The Units of Inquiry are:`,
        `In Grade Five, the final year of the PYP, learners
        demonstrate their overall knowledge of the Primary Years
        Programme by taking part in an extended, in-depth
        collaborative project known as the PYP Exhibition. This
        involves learning and working collaboratively to investigate
        real-life issues and pose solutions to problems. During the
        final presentations, learners collectively synthesize all of
        the essential elements of the PYP in ways that can be shared
        with the entire learning community.`,
      ],
      listItems:[
        "Who we are",
    "Where we are in place and time",
    "How we express ourselves",
    "How the world works",
    "How we organize ourselves",
    "Sharing the planet",
      ],
      imageUrl: [
        "https://greenhillsacademy.rw:8081/images/DSC_1369_ibr5ar.jpg",
        "https://greenhillsacademy.rw:8081/images/376739279_18061701070431847_5802953708720395779_n_kjsqau.jpg",
      ],
    }
  },
  {
    slug: "overview_cont",
    content: {
      description:[
        ` Our teaching and learning are proactive, inquiry-based,
        learner-centered, and led. Learners are interactive, collaborate,
        discuss, research, present, and reflect in groups. The
        communication, research, self-management, social, and thinking
        skills are crystal clear on a daily basis during teaching and
        learning. The Units of Inquiry are transdisciplinary themes. They
        include and transcend subject areas and connect the learners to
        the real world of which they are global citizens.`,
        `Collaboration is on our daily menu. Educators gather in their
        grade-level teams to plan and prepare lessons together, to discuss
        and exchange teaching and learning strategies in order to enhance
        their pedagogical methods and boost the learners’ academic
        performances.`,
        `Support is available across our primary division. Homeroom
        educators are supported by their team leaders. Science, Math,
        English French, Art/ICT, PE/Traditional Dance/Music, and Learner
        Support are supported by their Heads of Department. There are two
        vice principals (French and English) and the School Principal who
        are daily at the disposal of all staff and faculty to provide help
        and respond to all concerns.`,
      ],
      imageUrl: [
        "https://greenhillsacademy.rw:8081/images/285913554_2300484220104568_3567442786875876806_n_gdclvq.jpg",
        "https://greenhillsacademy.rw:8081/images/GIS_90.jpg"
      ],
      
    }
  },
  {
    slug: "overview_cont2",
    content: {
      description:[
        `Our 50/50 French-English Bilingual Program provides a unique
        opportunity for our learners to be linguistically balanced while
        studying Science, Math, French, and English in both languages, to
        smoothly access the best francophone and/or anglophone
        universities worldwide, to easily flow between different cultures,
        and embrace perspectives other than their own.`,
        `Teaching and learning go beyond the classroom. Our learners
        connect what they are learning or have learned in class to the
        real world. They take action by going into the community not only
        to interact with people but also to implement the knowledge they
        have acquired in their classrooms in order to solve some community
        issues and meet their needs. All our grade-level learners also go
        on field trips that line up and support our PYP curriculum.
      `,
      ],
      imageUrl: [
        "https://greenhillsacademy.rw:8081/images/407253799_901905251940600_5011519124696385143_n_bpvguu.jpg",
        "https://greenhillsacademy.rw:8081/images/GIS_93.jpg",
      ],
    }
  },
  {
    slug: "head_boarding",
    content: {
      title:
        "Welcome To Boarding School",
      subtitle: "Raymond Kiptum, Boarding School Director",
      imageUrl: [
        "https://greenhillsacademy.rw:8081/images/GHA_2_jhakmk.jpg"
      ],
      description: [
        `At Greenhills Academy, we are dedicated to providing an
        exceptional boarding experience, and our Head of Boarding is at
        the heart of this commitment. Their role is instrumental in
        shaping the experiences and future success of our learners,
        ensuring that every boarder feels valued, safe, and encouraged
        to reach their full potential.`,
        `Raymond Kiptum, the head of boarding is a trusted mentor and a
        compassionate advocate for our learners. They work closely with
        our boarding staff to create a home away from home, where
        learners can thrive both academically and socially. The Head of
        Boarding also collaborates with parents, educators, and
        administrators to build a strong support network for our
        borders. Raymond has over 12 years of experience in managing
        international boarding schools. He is also an experienced
        educator of Business Management and Economics.
      `,
        `Mr Raymond shares our passion for the well-being and success of
        our learners and upholds our school's values of excellence,
        respect, and community.`,
      ]
    }
  },
  {
    slug: "footer",
    content: {
      description:
        ["We provide a full-time program balanced in all areas, concentrating on providing learning opportunities for our learners. Our program caters to the holistic approach of a child’s development and focuses on:"],
    }
  },
  {
    slug: "academics",
    content: {
      description:[
        "Within our program, we hope to provide opportunities in the above areas always with an emphasis on fun and happiness. With passion and the willingness to support each other, we are establishing an atmosphere of joy, where learners are expected to learn and help in a way they enjoy. A house that allows silliness and expects laughter whilst we work hard and responsibly."],
        imageUrl:"https://greenhillsacademy.rw:8081/images/GHA_66_znyyge.jpg",
    }
  },
  {
    slug: "Life",
    content: {
      description:[`Learners learn to follow routines, manage their time gain
      confidence, and discuss issues within our boarding community. Under
      the guidance of our qualified staff, learners learn to manage conflict
      with each other and their own behaviors. The program is learner-focused and led. Older learners learn responsibility within the house
      and leadership amongst their peers. Extracurricular activities,
      opportunities for cooking, regular chores, access to a laundry, and
      other programs allow our learners to learn the skills for living
      independently in the future.`],

      imageUrl:"https://greenhillsacademy.rw:8081/images/Copy_of_DSC_0955_i7pyfc.jpg",
    }
  },
  {
    slug: "behaviour",
    content: {
      description:[`A high level of personal responsibility is expected from boarding
      learners. The environment is geared to learners understanding the need
      to follow routine meet behavioural expectations and take on
      opportunities of leadership. Learners are given the opportunities to
      discuss rules and boundaries, they learn to make smart choices and
      attempt to modify concerning behaviors. This environment allows
      learners to safely practice making decisions, and gain advice and
      experience in areas relevant to their age and maturity. Learners
      develop a strong foundation for the future and a knowledge of why
      their decisions will be important.`],imageUrl:"https://greenhillsacademy.rw:8081/images/Copy_of_DSC_1140_bngpca.jpg",
    }
  },
  {
    slug: "medical",
    content: {
      description:[`The boarding program uses qualified nurses and its own sickbay.
      Learners are taken to medical practitioners as needed. Through sport,
      games, and an activity program the learners participate in physical
      activity no less than three times a week. Our learners have access to
      the swimming pool, gym, and sports fields at scheduled times under the
      watchful eyes of qualified instructors and staff. Learners are also
      part of food committees and discuss issues of nutrition and menu
      planning. Learner’s health and fitness are tested, recorded, and
      evaluated regularly to allow for staff to discuss any concerns.`],imageUrl:"https://greenhillsacademy.rw:8081/images/Copy_of_DSC_2737_ee7h8w.jpg",
    }
  },
  {
    slug: "responsibility",
    content: {
      description:[`Learners are expected to be part of the boarding community,
      responsible for themselves and their actions, responsible for
      community property and belongings and the creation of an appropriate
      atmosphere based on joint values and goals. During the program
      learners are responsible for chores, duties, and each other. Each month
      learners participate in service to align with the IB and Round Square
      The ideals of the school include community projects, school projects and
      service amongst the boarding house that instills a sense of compassion,
      generosity and kindness in our learners. Service not only allows our
      learners to help others but allows our learners to understand the
      intrinsic value in putting others first.`],imageUrl:"https://greenhillsacademy.rw:8081/images/Copy_of_DSC_2473_yjqc1c.jpg",
    }
  },
  {
    slug: "fun",
    content: {
      description:[`Within our program, we hope to provide opportunities in the above areas
      always with an emphasis on fun and happiness. With passion and the
      willingness to support each other, we are establishing an atmosphere of
      joy, where learners are expected to learn and help in a way they
      enjoy. A house that allows silliness and expects laughter whilst we
      work hard and responsibly.`],imageUrl:"https://greenhillsacademy.rw:8081/images/mess-img1_rwmv0n.png",
    }
  },

];

export default sections;
