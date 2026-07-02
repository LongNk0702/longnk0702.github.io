// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Selected media articles and news features about my academic journey, research experience, scholarships, and international programs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "dropdown-publication",
              title: "publication",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-project",
              title: "project",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "post-hành-trình-theo-đuổi-khoa-học",
        
          title: "Hành trình theo đuổi khoa học",
        
        description: "Một vài chia sẻ về hành trình theo đuổi đam mê khoa học, từ những cuộc thi đầu tiên, ước mơ bước ra thế giới, đến trách nhiệm của một sinh viên Việt Nam trong môi trường quốc tế.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/research-story/";
          
        },
      },{id: "post-data-driven-modeling-for-smart-manufacturing-updating",
        
          title: "Data-Driven Modeling for Smart Manufacturing (Updating)",
        
        description: "Notes from my research experience on cutting force prediction using AI and data-driven methods.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/data-driven-smart-manufacturing/";
          
        },
      },{id: "post-research-experience-at-nanyang-technological-university-singapore-ntu-gcf-2026",
        
          title: "Research Experience at Nanyang Technological University, Singapore (NTU GCF 2026)",
        
        description: "Reflection on my research experience at NTU, where I worked on wireless power transfer for autonomous underwater vehicles and reshaped my research mindset.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ntu-gcf-research-experience/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-received-the-fighting-spirit-prize-at-the-south-east-asia-circuit-and-system-society-hackathon-2022",
          title: 'Received the Fighting Spirit Prize at the South-East Asia Circuit and System Society...',
          description: "",
          section: "News",},{id: "news-selected-for-the-temasek-foundation-specialist-s-community-action-amp-amp-leadership-exchange-programme-held-in-vietnam-and-singapore",
          title: 'Selected for the Temasek Foundation Specialist’s Community Action &amp;amp;amp; Leadership Exchange Programme, held...',
          description: "",
          section: "News",},{id: "news-selected-as-one-of-four-vnu-representatives-for-asean-in-today-s-world-2025-funded-by-kyushu-university-and-hosted-in-indonesia",
          title: 'Selected as one of four VNU representatives for ASEAN in Today’s World 2025,...',
          description: "",
          section: "News",},{id: "news-selected-for-the-fully-funded-taiwan-experience-education-program-scholarship-supported-by-the-ministry-of-education-taiwan",
          title: 'Selected for the fully funded Taiwan Experience Education Program Scholarship, supported by the...',
          description: "",
          section: "News",},{id: "news-started-my-research-internship-at-aisc-lab-aim-hi-institute-national-chung-cheng-university-taiwan-working-on-smart-sensing-technology-for-smart-manufacturing",
          title: 'Started my research internship at AISC Lab, AIM-HI Institute, National Chung Cheng University,...',
          description: "",
          section: "News",},{id: "news-received-the-toshiba-scholarship-funded-by-the-toshiba-international-foundation-as-one-of-20-excellent-vnu-students",
          title: 'Received the TOSHIBA Scholarship, funded by the TOSHIBA International Foundation, as one of...',
          description: "",
          section: "News",},{id: "news-started-my-semester-exchange-at-the-national-university-of-singapore-through-the-discovernus-scholarship",
          title: 'Started my semester exchange at the National University of Singapore through the DiscoverNUS...',
          description: "",
          section: "News",},{id: "news-selected-as-one-of-39-young-scholars-worldwide-for-the-fully-funded-ntu-singapore-global-connect-fellowship-2026",
          title: 'Selected as one of 39 young scholars worldwide for the fully funded NTU...',
          description: "",
          section: "News",},{id: "news-selected-as-the-only-vnu-student-to-receive-the-kyushu-university-spring-semester-exchange-scholarship-2026-in-the-department-of-mechanical-engineering",
          title: 'Selected as the only VNU student to receive the Kyushu University Spring-Semester Exchange...',
          description: "",
          section: "News",},{id: "news-started-my-research-fellowship-at-the-water-amp-amp-energy-research-lab-school-of-electrical-and-electronic-engineering-nanyang-technological-university-working-on-an-advanced-3d-wireless-power-transfer-system-for-autonomous-underwater-vehicles",
          title: 'Started my research fellowship at the Water &amp;amp;amp; Energy Research Lab, School of...',
          description: "",
          section: "News",},{id: "news-received-the-most-popular-poster-award-at-the-ntu-global-connect-fellowship-2026-final-research-poster-presentation",
          title: 'Received the Most Popular Poster Award at the NTU Global Connect Fellowship 2026...',
          description: "",
          section: "News",},{id: "news-selected-for-the-nus-enterprise-summer-programme-in-entrepreneurship-2026-with-a-fully-funded-scholarship-from-the-nus-asean-spark-fellowship",
          title: 'Selected for the NUS Enterprise Summer Programme in Entrepreneurship 2026 with a fully...',
          description: "",
          section: "News",},{id: "news-selected-as-one-of-150-outstanding-young-researchers-for-the-13th-vietnam-summer-school-of-science-2026-vsss-2026-held-at-icise-quy-nhon-nam-gia-lai",
          title: 'Selected as one of 150 outstanding young researchers for the 13th Vietnam Summer...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Khac_Long_Nguyen_v02.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%6B.%6C%6F%6E%67%37%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HCHDS8oAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/longnk0702", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/longnk0702", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/k.long.72", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/84358036759", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
