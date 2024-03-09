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
    slug: "nursery-school",
    content: {
      title: "Nursery School",
      subtitle: "International Baccalaureate Primary Years Programme",
      imageUrl: " https://greenhillsacademy.rw:8081/images/393750569_18066720952431847_4398473948448346781_n_le6efl.jpg"
    }
  },
  {
    slug: "overview",
    content: {
      title: "Overview",
      description: [
        `Play is more than fun—it’s the key to unlocking a child’s
        potential to learn and grow. The PYP early years (for children
        aged 3 – 6) frees your child to play and learn, so they can
        build the proven curiosity, creativity, and confidence they’ll
        need to thrive today—and well into the future.
      `,
        `Learners explore their environment and learn about their world through play and relationships with peers, educators, family, and community members.

      `,
        `Educators are partners, nurturers, and guides who help facilitate the exploration of children’s interests as they work on long- and short-term projects.
      `,
        `Schools provide dynamic environments that nurture curiosity,
      creativity, and confidence.`,
      ],
      imageUrl: [
        `https://greenhillsacademy.rw:8081/images/256815676_873373666657483_3801095629152074343_n_oouqjy.jpg`,
        `https://greenhillsacademy.rw:8081/images/DSC_2388_uatnro.jpg`,
      ]
    }
  },
  
];

export default sections;
