// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Academic CV of Long Nguyen Khac, covering research experience, education, publications, awards, engineering projects, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-media",
          title: "Media",
          description: "Selected media articles and news features about my academic journey, research experience, scholarships, and international programs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-people-evidence-and-context-lessons-from-nussp-2026",
        
          title: "People, Evidence, and Context: Lessons from NUSSP 2026",
        
        description: "Reflections from NUSSP 2026 on leadership, customer discovery, local context, and building ventures that create meaningful value.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nussp-entrepreneurship-lessons/";
          
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
      },{id: "news-received-the-fighting-spirit-prize-at-the-south-east-asia-circuit-and-system-society-hackathon-2022",
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
          section: "News",},{id: "projects-adaptive-fuzzy-backstepping-control-for-a-3-dof-delta-robot",
          title: 'Adaptive Fuzzy Backstepping Control for a 3-DOF Delta Robot',
          description: "Design, prototyping, and robust trajectory control of a three-degree-of-freedom parallel robot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adaptive-fuzzy-delta-robot/";
            },},{id: "projects-cutting-force-and-tool-wear-prediction",
          title: 'Cutting Force and Tool Wear Prediction',
          description: "Data-driven and machine-learning models for predicting cutting forces and tool wear in CNC milling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cutting-force-tool-wear-prediction/";
            },},{id: "projects-personal-protective-equipment-detection-with-yolov5s",
          title: 'Personal Protective Equipment Detection with YOLOv5s',
          description: "Computer-vision research comparing activation functions for construction-site safety-equipment detection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ppe-detection-yolov5/";
            },},{id: "projects-underwater-wireless-power-transfer-for-autonomous-underwater-vehicles",
          title: 'Underwater Wireless Power Transfer for Autonomous Underwater Vehicles',
          description: "Relay-coil-enhanced spatial wireless power transfer for long-endurance autonomous underwater vehicle charging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/underwater-wireless-power-transfer/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Khac_Long_Nguyen_v06.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%6B.%6C%6F%6E%67%37%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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
