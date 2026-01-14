// data/privacy.js

import contactInfo from "./contactInfo";

export const privacyData = {
  meta: {
    title: "Privacy Policy",
    lastUpdated: "January 2025",
  },
  sections: [
    {
      id: "1",
      title: "1. Information Collection",
      content:
        "We collect information that you provide voluntarily when creating accounts, using our services, submitting inquiries, or interacting with our platforms. This includes:",
      list: [
        "Personal identification information (name, email, phone, address)",
        "Business details and company information",
        "Payment and billing information",
        "Communication history and feedback",
        "Marketing preferences and interests",
      ],
    },
    {
      id: "2",
      title: "2. How We Use Information",
      content: "We use collected information for business purposes, including:",
      list: [
        "Providing, maintaining, and improving our services",
        "Processing transactions and sending related notifications",
        "Sending technical updates, security alerts, and support messages",
        "Responding to comments, questions, and customer service requests",
        "Communicating about services, features, and opportunities",
        "Monitoring usage patterns and analyzing service performance",
      ],
    },
    {
      id: "3",
      title: "3. Information Sharing",
      content: "We may share your information in these situations:",
      list: [
        "With service providers and partners who assist in delivering our services",
        "When required by law or to respond to legal processes",
        `To protect the rights and safety of ${contactInfo.companyNameShort} and others`,
        "In connection with business transactions like mergers or acquisitions",
      ],
    },
    {
      id: "4",
      title: "4. Data Security",
      content:
        "We implement robust security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage method is completely secure.",
    },
    {
      id: "5",
      title: "5. Cookies and Tracking",
      content:
        "We use cookies and similar technologies to track website activity and store preferences. Cookies are small data files that may include unique identifiers. You can set your browser to refuse cookies or alert you when cookies are sent. However, some features may not function properly without cookies.",
    },
    {
      id: "6",
      title: "6. Your Rights",
      content: "You have certain rights regarding your personal information:",
      list: [
        "Right to access, update, or delete your information",
        "Right to correct inaccurate or incomplete information",
        "Right to object to processing of your personal information",
        "Right to data portability",
        "Right to withdraw consent where applicable",
      ],
    },
    {
      id: "7",
      title: "7. Data Retention",
      content:
        "We retain personal information as long as we have a legitimate business need. When no longer needed, we will delete or anonymize it, or securely store and isolate it from further processing.",
    },
    {
      id: "8",
      title: "8. International Transfers",
      content:
        "Your information may be transferred to and processed in locations outside your jurisdiction where data protection laws may differ.",
    },
    {
      id: "9",
      title: "9. Children's Privacy",
      content:
        "Our services are not intended for individuals under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.",
    },
    {
      id: "10",
      title: "10. Policy Updates",
      content:
        'We may update this Privacy Policy periodically. We will notify you of changes by posting the updated policy on this page and updating the "Last updated" date.',
    },
  ],
  contact: {
    sectionTitle: "11. Contact Us",
    intro:
      "If you have questions about this Privacy Policy, please contact us:",
    details: {
      email: contactInfo.email,
      phone: contactInfo.phone,
      address: contactInfo.address,
      companyName: contactInfo.companyName,
    },
  },
};
