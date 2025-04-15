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
  },{id: "nav-publications",
          title: "publications",
          description: "For any questions, feel free to contact me :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Welcome! For a more complete resume, please refer to the pdf document :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-m-happy-to-share-i-m-starting-as-an-ird-postdoctoral-researcher-to-work-on-phytoplankton-community-responses-to-environmental-changes-in-the-humboldt-system-find-out-all-the-details-on-related-research-here-ocean",
          title: 'I’m happy to share I’m starting as an IRD postdoctoral researcher to work...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-announce-that-our-paper-on-the-use-of-cnns-for-diatom-detection-has-been-published-find-out-all-the-details-on-related-research-here",
          title: 'I’m happy to announce that our paper on the use of CNNs for...',
          description: "",
          section: "News",},{id: "news-our-new-pre-print-on-the-changes-affecting-phytoplankton-populations-in-the-mediterranean-sea-is-out-check-it-out-here",
          title: 'Our new pre-print on the changes affecting phytoplankton populations in the Mediterranean Sea...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-share-i-will-be-presenting-our-latest-results-on-mediterranean-plankton-at-the-egu-meeting-2025-in-vienna-the-talk-is-scheduled-on-monday-april-28-at-4-15pm-see-you-there",
          title: 'I am happy to share I will be presenting our latest results on...',
          description: "",
          section: "News",},{id: "projects-paleoclimate-reconstructions",
          title: 'Paleoclimate reconstructions',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_Paleoclimate-reconstructions/";
            },},{id: "projects-phytoplankton-sensitivity-to-environmental-changes",
          title: 'Phytoplankton sensitivity to environmental changes',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_Plankton/";
            },},{id: "projects-ready-to-use-image-classification-workflows",
          title: 'Ready-to-use image classification workflows',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_Low_cost/";
            },},{id: "projects-microfossil-extraction-methods",
          title: 'Microfossil extraction methods',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_Microfossil-separations/";
            },},{id: "projects-mineralisation-processes-and-vital-effects",
          title: 'Mineralisation processes and vital effects',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Biomineralisation_processes/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%6F%64%62%69%6C%6C%6F%74@%63%65%72%65%67%65.%66%72", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Camille-Godbillot/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rB1wXjMAAAAJ", "_blank");
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
