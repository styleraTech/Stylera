interface Dictionary {
  nav?: {
    home: string
    services: string
    about: string
    contact: string
    join: string
  }

  homeHero?: {
    title: string
    subtitle: string
    description: string
    cta: {
      primary: string
      secondary: string
    }
    stats: {
      projects: string
      clients: string
      experience: string
      team: string
    }
  }

  services?: {
    title: string
    subtitle: string
    [key: string]: any
  }

  technologies?: {
    title: string
    subtitle: string
  }

  projects?: {
    title: string
    subtitle: string
    viewAll: string
    items: Record<
      string,
      {
        title: string
        description: string
      }
    >
  }

  testimonials?: {
    title: string
    subtitle: string
    items: {
      name: string
      position: string
      content: string
    }[]
  }

  whoWeAre?: {
    title: string
    subtitle: string
    story: {
      title: string
      paragraphs: string[]
    }
    mission: {
      title: string
      text: string
    }
    vision: {
      title: string
      text: string
    }
    values: {
      title: string
      subtitle: string
      items: Record<
        string,
        {
          title: string
          description: string
        }
      >
    }
    timeline: {
      title: string
      subtitle: string
      items: Record<string, string>
    }
  }

  teamSection?: {
    team: {
      title: string
      description: string
      join_title: string
      join_description: string
      apply_button: string
      members: {
        role: string
        name: string
        position: string
        bio: string
        image?: string
        social: {
          linkedin?: string
          github?: string
          behance?: string
        }
      }[]
    }
  }
  ApplyForm?: {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    roleLabel: string
    rolePlaceholder: string
    coverLetterLabel: string
    coverLetterPlaceholder: string
    submit: string
    sending: string
    success: string
    nameError: string
    emailError: string
    roleError: string
    frontend: string
    backend: string
    fullstack: string
    uiux: string
    mobile: string
    other: string
    dialogButton: string
    dialogDescription: string
    dialogConfirm: string
  }

  cta?: {
    title: string
    subtitle: string
    startProject: string
    freeConsultation: string
  }
  contactUs?: {
    title: string
    subtitle: string
    phone: string
    email: string
    location: string
    whatsapp: string
    businessHours: {
      title: string
      subtitle: string
      weekdays: string
      weekdaysTime: string
      weekend: string
      weekendTime: string
    }
    locationSection: {
      title: string
      subtitle: string
      officeTitle: string
      address: string
      mapPlaceholder: string
      mapSubtext: string
    }
    faq: {
      title: string
      subtitle: string
      questions: {
        question: string
        answer: string
      }[]
      cta: {
        title: string
        subtitle: string
        whatsappButton: string
        emailButton: string
      }
    }
    form: {
      title: string
      subtitle: string
      name: string
      email: string
      phone: string
      company: string
      projectType: string
      projectTypeOptions: {
        placeholder: string
        web: string
        mobile: string
        ai: string
        design: string
        other: string
      }
      message: string
      messagePlaceholder: string
      submit: string
      sending: string
      required: string
      placeholders: {
        name: string
        email: string
        phone: string
        company: string
        message: string
      }
      successMessage: string
    }
  }
  OurServicesPage?: {
    title: string
    subtitle: string
    requestQuote: string
    [key: string]: any
    startProject?: string
    freeConsultation?: string
  }
  footer?: {
    description: string
    quickLinks: string
    links: {
      home: string
      services: string
      about: string
      contact: string
    }
    contactInfo: string
    address: string
    rights: string
    privacy: string
    terms: string
  }
  HomeWhoWeAre?: {
    about: {
      title: string
      description: string
      more: string
    }
    vision: {
      title: string
      description: string
    }
    mission: {
      title: string
      description: string
    }
    coreValues: {
      title: string
      values: {
        [key: string]: string
      }
    }
    stats: {
      projectsCompleted: string
      happyClients: string
      yearsExperience: string
      clientSatisfaction: string
    }
  }
  allProjects?: {
    title: string
    brand: string
    description: string
    featuredTitle: string
    featuredSubtitle: string
    cta: {
      consultation: string
      viewProjects: string
      startProject: string
    }
    searchPlaceholder: string
    selectCategory: string
    projects: Record<
      string,
      {
        title: string
        description: string
        category: string
        image: string
        technologies: string[]
        github?: string
        live?: string
      }
    >
    contactForm: {
      heading: string
      subheading: string
      nameLabel: string
      namePlaceholder: string
      phoneLabel: string
      phonePlaceholder: string
      sendButton: string
    }
    footerTitle: string
    footerSubtitle: string
  }
  appointments?: {
    title: string
    selectDateTitle: string
    selectDateSubtitle: string
    chooseTimePlatformTitle: string
    availableTimeSlots: string
    selectPlatform: string
    alertSelectTime: string
    toastSuccessTitle: string
    toastSuccessDescription: string
    successAlert: string
    dialogTitle: string
    dialogDescription: string
    fullNameLabel: string
    fullNamePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    whatsappLabel: string
    whatsappPlaceholder: string
    infoText: string
    cancel: string
    confirm: string
  }
  privacy?: {
    title: string
    intro: string
    sections: {
      heading: string
      paragraph?: string
      list?: string[]
    }[]
  }
  terms?: {
    title: string
    intro: string
    sections: {
      heading: string
      paragraph?: string
      list?: string[]
    }[]
  }
}
