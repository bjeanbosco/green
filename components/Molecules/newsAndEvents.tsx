import React from "react";
import NewsAndEventsSlider from "../Atoms/EventSlider";
import { CombinedData, Event, NewsEvent } from "../Atoms/types";

export default function NewsAndEvents() {
  const newsData: NewsEvent[] = [
    {
      title:
        "GHA Launches Exciting Chapter: Now Authorized to Offer International Baccalaureate Career-Related Program (IBCP)",
      date: "Dec 12 2023",
      description: `We are thrilled to announce that Green Hils Academy is now authorized to offer the International Baccalauriate Career Related Program (IBCP) since September. This innovative program seamlessly blends academic excellence with real-world experience, providing our learners with a unique and comprehensive educational journey. By integrating theoretical knowledge with practical application, the program not only enriches their academic pursuits but also opens a myriad of diverse opportunities, preparing them for success in both higher education and the professional world. We are excited about the growth and development this initiative promises for our learners, fostering a well-rounded and future-ready educational experience at GHA.`,
      imageUrl:
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301482/GHA/online_abmwqr.jpg",
      slug: "deploy_virtual",
      type: "news",
    },
    {
      title:
        "LEAP Rwanda 2024: Continuing the Empowerment of Young Entrepreneurs",
      date: "Dec 12 2023",
      description: `Following the success of LEAP Rwanda 2023, the first-ever program of its kind in Rwanda, Green Hills Academy is pleased to announce the upcoming LEAP Rwanda 2024. During LEAP Rwanda  2023, GHA hosted 49 students from seven schools, representing five countries. The program focused on developing entrepreneurial skills, resulting in the creation of eight projects and fostering valuable connections among students and professionals. LEAP Rwanda 2024 aims to build on this success, offering another year of skill development and empowerment for young women from diverse backgrounds. We look forward to this exciting journey of skill development and empowerment, building a future where our learners make meaningful contributions to society!`,
      imageUrl:
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301490/GHA/parental_vq51j7.jpg",
      slug: "parental_night",
      type: "news",
    },
  ];

  const eventData: Event[] = [
    {
      title: "Green Hills Academy Hosts the #InnovateEdu Africa Conference",
      date: "Dec 12 2023",
      description: `Green Hills Academy had the privilege of hosting the #InnovateEdu Africa conference, marking a significant moment in our commitment to educational excellence. Our dedicated educators had the amazing opportunity to participate in interactive workshops, where they gained invaluable skills and knowledge to further enhance their teaching skills. We extend our heartfelt gratitude to all the expert facilitators who generously shared their insights, contributing to the collective growth and innovation within our academic community.`,
      imageUrl:
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301468/GHA/rwandaday_mbgwbg.jpg",
      moreImages: [
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
      ],
      slug: "deploy_virtual",
      type: "event",
    },
    {
      title: "Pink Day and Bake Sale for Breast Cancer Awareness      ",
      date: "Dec 12 2023",
      description: `In the spirit of caring and inclusivity, Green Hills Academy stood together during Breast Cancer Awareness Month. Our learners joined hands for a Pink Day and Bake Sale to raise funds for the Breast Cancer Initiative East Africa (BCIEA). In this process, we were also privileged to have Mrs. Philippa Decuir, Founder of the Breast Cancer Initiative East Africa, who educated and inspired our learners, reinforcing the value of inclusivity in our community. 
      We were honored to join the Breast Cancer Initiative through the Ulinzi Breast Cancer Awareness Walk. We extend our heartfelt gratitude to all who participated and engaged in all the activities. 
      `,
      imageUrl:
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301465/GHA/multicultural_n8putw.jpg",
      moreImages: [
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
      ],
      slug: "parental_night",
      type: "event",
    },
    {
      title:
        "LEAP Rwanda 2024: Continuing the Empowerment of Young Entrepreneurs",
      date: "Dec 12 2023",
      description: `Following the success of LEAP Rwanda 2023, the first-ever program of its kind in Rwanda, Green Hills Academy is pleased to announce the upcoming LEAP Rwanda 2024. During LEAP Rwanda  2023, GHA hosted 49 students from seven schools, representing five countries. The program focused on developing entrepreneurial skills, resulting in the creation of eight projects and fostering valuable connections among students and professionals. LEAP Rwanda 2024 aims to build on this success, offering another year of skill development and empowerment for young women from diverse backgrounds. We look forward to this exciting journey of skill development and empowerment, building a future where our learners make meaningful contributions to society!`,
      imageUrl:
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301490/GHA/parental_vq51j7.jpg",
      moreImages: [
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
      ],
      slug: "parental_night",
      type: "event",
    },
    {
      title: "Celebrating Heritage Day",
      date: "Dec 12 2023",
      description: `Our Heritage Day celebrations were a testament to our inclusive community. The Nursery and Primary School Heritage Day was a wonderful celebration of our vibrant, beautiful, and rich Rwandan culture. We were happy to see the families and friends of our learners join us and engage during this celebration of our Rwandan culture.`,
      imageUrl:
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301465/GHA/multicultural_n8putw.jpg",
      moreImages: [
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
        "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301546/GHA/virtual_quufxw.png",
      ],
      slug: "parental_night",
      type: "event",
    },
  ];

  // Combine newsData and eventData
  const combinedData: CombinedData[] = [...newsData, ...eventData];
  return <NewsAndEventsSlider data={combinedData} />;
}
