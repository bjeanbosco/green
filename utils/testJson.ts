interface Section {
  slug: string;
  content: {
    title: string;
    subtitle?: string;
    description?: string | string[];
    imageUrl?: string | string[];
  };
}


const sections: Section[] = [
  {
    slug: "high-school",
    content: {
      title: "High School",
      subtitle: "International Baccalaureate Middle Years, Diploma and Career-related Programmes",
      imageUrl: "https://greenhillsacademy.rw:8081/images/67295345_2400658930204296_2041273394504074210_n_qybvz2.jpg"
    }
  },
  {
    slug: "note-from-principal",
    content: {
      title: "Note from the Principal",
      description: [
        `Greetings!!`,
        `A warm welcome to the Green Hills Academy High School page.
        Through our school's core values of Integrity, Intellectual
        curiosity, and Inclusivity, we are a community that embodies
        high-quality education and nurtures an ambitious, caring next
        generation.`,
        `The high school is composed of learners in grades 9 - 12 who are
        engaged in the IB Curriculum where we offer grades 9 and 10
        (ages 13 - 15) the Middle Years Program (MYP) and Diploma
        Programme (DP) or Career-related Programme (CP) to grades 11 and
        12 (ages 16 - 18). Many of our graduates are admitted to
        prestigious universities around the world with some being
        awarded education scholarships.`,
        `In addition to a wide range of subjects, learners can choose
        from at both the MYP, DP, and CP, there is a variety of
        extracurricular activities offered after school that include
        sports, Debate, Model United Nations (MUN), and indoor games, to
        mention a few. This vibrant after-school program is an extension
        of teaching and learning where 21st-century skills like
        communication, research, social, and thinking skills are honed
        and applied to real-life situations. We are excited for the
        opportunity to welcome you into this school community.
      `,
      ],
      imageUrl: [
        `https://greenhillsacademy.rw:8081/images/ad5_pxkjam.jpg`,
        `https://greenhillsacademy.rw:8081/images/GHA_24_1_sdsl7r.jpg`,
        `https://greenhillsacademy.rw:8081/images/GHA_54_mfz4zo.jpg`,
        `https://greenhillsacademy.rw:8081/images/272224630_629271885027072_768712889385596974_n_vwtd7z.jpg`,
      ]
    }
  },
  {
    slug: "curriculum-description",
    content: {
      title: "Curriculum Description",
      subtitle: `Middle Years Programme`,
      description: [
        ` The IB MYP is a programme of international education designed
        for learners aged 11 to 16, a period that is a particularly
        critical phase of personal and intellectual development. The
        programme aims to develop inquiring, knowledgeable, and caring
        young people with the knowledge, understanding, attitudes, and
        skills necessary to participate actively and responsibly in an
        interrelated, complex, and changing world. Learning how to
        learn and how to evaluate information critically is as
        important as learning facts. The IB MYP builds on the work of
        the Primary Years Programme and prepares learners for entry to
        the IB Diploma Programme and Career-related Programme, a
        universally recognized rigorous, academic course that allows
        learners to gain entry to universities and colleges worldwide.
      `,
        `Through the MYP, our learners are also challenged to excel in
        their personal development. MYP at GHA offers a broad rich
        curriculum that comprises eight subject groups. Teaching and
        learning involve learning concepts that act as a vehicle to
        inquire into issues and ideas of personal, local, and global
        significance and examine knowledge holistically and in a
        context that allows learners to connect to their lives and
        their experience of the world that they have experienced.
      `,
      ],
      imageUrl: [
        `https://greenhillsacademy.rw:8081/images/328034337_1909099572769974_2721711731069418267_n_l1l3aq.jpg`,
        `https://greenhillsacademy.rw:8081/images/317495882_2409737462512281_5552480113407587089_n_jca6nq.jpg`,
        `https://greenhillsacademy.rw:8081/images/285019652_426263605634814_2565775472001183078_n_pgo2ub.jpg`,
        `https://greenhillsacademy.rw:8081/images/283763627_380004234172318_4387226363188300358_n_rwrrrf.jpg`,
      ],
    }
  },
  {
    slug: "career-related-programme",
    content: {
      title: "Career-Related Programme",
      description: [
        `The IBCP is a framework of international education that
        incorporates the values of the IB into a unique programme
        addressing the needs of learners engaged in career-related
        education.`,
        `The programme leads to further/higher education,
        apprenticeships, or employment.  `,
        `Apart from the Career-Related Course, learners take 2-3 IB
        Diploma Subjects at high or standard levels. They do the
        mandatory core consisting of Service Learning, Reflective
        Projects, Language Development, and Personal & Professional
        Skills.`,
      ],
      imageUrl: [
        `https://greenhillsacademy.rw:8081/images/hs1_za54e8.jpg`,
        `https://greenhillsacademy.rw:8081/images/hs6_gqlihz.jpg`,
      ],
    }
  },
  {
    slug: "diploma-programme",
    content: {
      title: "Diploma Programme",
      description: [
        `The Diploma Programme (DP) provides a challenging,
        internationally focused, broad, and balanced educational
        experience for learners aged 16 to 19. learners are required
        to study six subjects and a curriculum core concurrently over
        two years. The programme is designed to equip learners with
        the basic academic skills needed for university study, further
        education, and their chosen profession. Additionally, the
        programme supports the development of the values and life
        skills needed to live a fulfilled and purposeful life.
      `,
        `A distinguishing characteristic of the DP is a concern with
        the whole educational experience of each learner. The
        curriculum framework, and the supporting structures and
        principles, are designed to ensure that each learner is
        necessarily exposed to a broad and balanced curriculum. The
        learner profile and the core are positioned at the center of
        the programme, reflecting the priority given to affective
        disposition as well as cognitive development, and concern with
        developing competent and active citizens as well as subject
        specialists. The core requirements of the theory of knowledge
        (TOK), the extended essay, and creativity, activity, and
        service (CAS) broaden the educational experience and challenge
        learners to apply their knowledge and understanding in
        real-life contexts.`,
        `Learners study six subjects concurrently. These include two
        languages, one subject from individuals and societies, one
        science, one mathematics subject, and one subject from the
        arts or another subject from the other groups. There are also
        interdisciplinary subjects such as environmental systems and
        societies, and literature and performance, available to
        learners. These options allow learners to satisfy the
        requirements for two groups of subjects by studying one
        subject, thus allowing them to select another subject from any
        group to make up a total of six.`,
      ],
      imageUrl: [
        `https://greenhillsacademy.rw:8081/images/279240852_335800991874257_4235888369446522509_n_ipftky.jpg`,
        `https://greenhillsacademy.rw:8081/images/287049530_765224377969496_6828609824704483441_n_lw3xgr.jpg`,
        `https://greenhillsacademy.rw:8081/images/290764019_165427935991484_5955662401332428878_n_f55kyk.jpg`,
      ],}
  }
];

export default sections;
