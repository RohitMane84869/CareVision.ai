export const onboardingSlides = [
  {
    id: 1,
    title: "Stay Informed",
    description: "Get real-time alerts about diseases and health emergencies in your area",
    icon: "Bell",
  },
  {
    id: 2,
    title: "Discover Benefits",
    description: "Access verified government health schemes and vaccination programs easily",
    icon: "FileText",
  },
  {
    id: 3,
    title: "Meet CareBot",
    description: "Your AI health assistant available 24/7 to answer health queries",
    icon: "Bot",
  },
];

export const governmentSchemes = [
  {
    id: 1,
    title: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana",
    description: "Free health insurance coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization",
    type: "Health Insurance",
    region: "National",
    benefits: [
      "Cashless treatment at empanelled hospitals",
      "Coverage for pre and post hospitalization expenses",
      "No restrictions on family size and age",
    ],
    eligibility: "Families listed in SECC database and identified as per deprivation criteria",
    link: "https://pmjay.gov.in/",
  },
  {
    id: 2,
    title: "Pradhan Mantri Matru Vandana Yojana",
    description: "Cash incentive of ₹5,000 for pregnant women and lactating mothers for first live birth",
    type: "Maternal Health",
    region: "National",
    benefits: [
      "Financial assistance during pregnancy",
      "Support for nutrition and healthcare",
      "Three installments of cash benefit",
    ],
    eligibility: "Pregnant women and lactating mothers (excluding government employees)",
    link: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
  },
  {
    id: 3,
    title: "Janani Suraksha Yojana",
    description: "Safe motherhood intervention promoting institutional delivery among poor pregnant women",
    type: "Maternal Health",
    region: "National",
    benefits: [
      "Cash assistance for institutional delivery",
      "Free delivery services",
      "Postnatal care support",
    ],
    eligibility: "All pregnant women delivering in government or accredited private institutions",
    link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309",
  },
  {
    id: 4,
    title: "Rashtriya Bal Swasthya Karyakram",
    description: "Child health screening and early intervention services for children from 0-18 years",
    type: "Child Health",
    region: "National",
    benefits: [
      "Free health screening at schools",
      "Early detection of birth defects",
      "Treatment and management support",
    ],
    eligibility: "All children aged 0-18 years",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=819&lid=221",
  },
  {
    id: 5,
    title: "Mission Indradhanush",
    description: "Immunization programme targeting all unvaccinated children and pregnant women",
    type: "Vaccination",
    region: "National",
    benefits: [
      "Free vaccination for children",
      "Protection against 12 vaccine-preventable diseases",
      "Regular immunization drives",
    ],
    eligibility: "Children and pregnant women who are partially vaccinated or unvaccinated",
    link: "https://nhm.gov.in/New_Updates_2018/NHM_Components/Immunization/Guildelines_for_IMI/IMI_Operational_Guidelines.pdf",
  },
];

export const diseaseAlerts = [
  {
    id: 1,
    disease: "Dengue Fever",
    riskLevel: "High",
    location: "Mumbai, Maharashtra",
    updatedAt: "2025-11-06",
    symptoms: ["High fever", "Severe headache", "Pain behind eyes", "Joint pain", "Rash"],
    prevention: [
      "Use mosquito repellents",
      "Eliminate stagnant water",
      "Wear protective clothing",
      "Use mosquito nets",
    ],
    color: "destructive",
  },
  {
    id: 2,
    disease: "Malaria",
    riskLevel: "Medium",
    location: "Odisha",
    updatedAt: "2025-11-05",
    symptoms: ["Fever and chills", "Headache", "Nausea", "Fatigue", "Sweating"],
    prevention: [
      "Sleep under treated bed nets",
      "Apply mosquito repellent",
      "Wear long-sleeved clothing",
      "Keep surroundings clean",
    ],
    color: "warning",
  },
  {
    id: 3,
    disease: "Chikungunya",
    riskLevel: "Medium",
    location: "Delhi NCR",
    updatedAt: "2025-11-04",
    symptoms: ["Joint pain", "Fever", "Headache", "Muscle pain", "Rash"],
    prevention: [
      "Prevent mosquito breeding",
      "Use mosquito repellents",
      "Wear protective clothing",
      "Use window screens",
    ],
    color: "warning",
  },
  {
    id: 4,
    disease: "Hepatitis A",
    riskLevel: "Low",
    location: "Kerala",
    updatedAt: "2025-11-03",
    symptoms: ["Fatigue", "Nausea", "Abdominal pain", "Loss of appetite", "Fever"],
    prevention: [
      "Practice good hygiene",
      "Drink safe water",
      "Get vaccinated",
      "Avoid contaminated food",
    ],
    color: "info",
  },
  {
    id: 5,
    disease: "Seasonal Flu",
    riskLevel: "Low",
    location: "Pan India",
    updatedAt: "2025-11-02",
    symptoms: ["Fever", "Cough", "Sore throat", "Body aches", "Fatigue"],
    prevention: [
      "Get annual flu vaccine",
      "Wash hands frequently",
      "Avoid close contact with sick people",
      "Cover coughs and sneezes",
    ],
    color: "info",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    role: "Chief Medical Officer",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Technical Lead",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Health Policy Advisor",
    image: "/placeholder.svg",
  },
];

export const healthTips = [
  "Drink at least 8 glasses of water daily",
  "Take a 10-minute walk after every meal",
  "Practice deep breathing for 5 minutes daily",
  "Wash your hands regularly for 20 seconds",
  "Get 7-8 hours of quality sleep each night",
];
