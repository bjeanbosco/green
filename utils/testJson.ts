interface Section {
  id: number;
  slug: string;
  content: {
    [key: string]: string;
  };
}

const sections: Section[] = [
  {
    id: 1,
    slug: "image",
    content: {
      url: "/icons/whiteflip_h0mlnm.svg"
    }
  },
  {
    id: 2,
    slug: "high-school",
    content: {
      title: "High School",
      subtitle: "International Baccalaureate Middle Years, Diploma and Career-related Programmes",
      backgroundImage: "https://greenhillsacademy.rw:8081/images/67295345_2400658930204296_2041273394504074210_n_qybvz2.jpg"
    }
  },
  {
    id: 3,
    slug: "note-from-principal",
    content: {
      title: "Note from the Principal",
      description: "Greetings!! A warm welcome to the Green Hills Academy High School page. Through our school's core values of Integrity, Intellectual curiosity, and Inclusivity, we are a community that embodies high-quality education and nurtures an ambitious, caring next generation..."
    }
  },
  {
    id: 4,
    slug: "curriculum-description",
    content: {
      title: "Curriculum Description",
      description: "Green Hills Academy offers a comprehensive curriculum designed to nurture students' intellectual curiosity and prepare them for success in a rapidly changing world..."
    }
  },
  {
    id: 5,
    slug: "career-related-programme",
    content: {
      title: "Career-Related Programme",
      description: "The Career-related Programme (CP) is designed for students interested in pursuing a career-focused education that combines academic rigor with practical, real-world experience..."
    }
  },
  {
    id: 6,
    slug: "diploma-programme",
    content: {
      title: "Diploma Programme",
      description: "The Diploma Programme (DP) at Green Hills Academy offers students a rigorous and balanced education, preparing them for success in university and beyond..."
    }
  }
];

export default sections;
