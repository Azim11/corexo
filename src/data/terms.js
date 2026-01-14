// data/terms.js

import contactInfo from "./contactInfo";

export const termsData = {
  meta: {
    title: "Terms & Conditions",
    lastUpdated: "January 2025",
  },
  intro: `By accessing and using the services provided by ${contactInfo.companyNameShort}, you accept and agree to be bound by the terms and provision of this agreement.`,
  sections: [
    {
      id: "1",
      title: "1. Acceptance of Terms",
      content:
        "These terms apply to all visitors, users, and others who access or use our services. If you do not agree to abide by the above, please do not use our services. We reserve the right to change these terms at any time by posting updates on this page.",
    },
    {
      id: "2",
      title: "2. Service Description",
      content: `${contactInfo.companyNameShort} provides digital marketing services including but not limited to:`,
      list: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Website Development and Design",
        "Analytics and Reporting",
      ],
    },
    {
      id: "3",
      title: "3. Client Responsibilities",
      content: "Clients are responsible for:",
      list: [
        "Providing accurate and complete information necessary for service delivery",
        "Timely payment of all fees and charges",
        "Providing feedback and approvals within agreed timeframes",
        "Maintaining confidentiality of login credentials and account information",
        "Ensuring compliance with applicable laws and regulations",
      ],
    },
    {
      id: "4",
      title: "4. Payment Terms",
      content:
        "Our payment structure is designed to be transparent and predictable:",
      list: [
        "Monthly services are billed in advance on the same date each month",
        "Payment is due within 15 days of invoice date",
        "Late payments may incur additional fees",
        "Services may be suspended for non-payment",
        "All fees are non-refundable unless otherwise specified",
      ],
    },
    {
      id: "5",
      title: "5. Intellectual Property",
      content:
        "We respect your brand ownership while protecting our proprietary methods:",
      list: [
        "Client retains ownership of their brand, trademarks, and proprietary content",
        `${contactInfo.companyNameShort} retains ownership of methodologies, processes, and tools`,
        "Work products created specifically for clients become client property upon full payment",
        "Neither party may use the other's intellectual property without written consent",
      ],
    },
    {
      id: "6",
      title: "6. Confidentiality",
      content: "Both parties agree to maintain confidentiality of:",
      list: [
        "Business strategies and proprietary information",
        "Customer data and personal information",
        "Financial information and business metrics",
        "Technical processes and methodologies",
        "Any information marked as confidential",
      ],
    },
    {
      id: "7",
      title: "7. Limitation of Liability",
      content: `${contactInfo.companyNameShort} liability is limited as follows:`,
      list: [
        "Total liability shall not exceed the amount paid for services in the preceding 12 months",
        "We are not liable for indirect, incidental, or consequential damages",
        "We do not guarantee specific results or outcomes (e.g. Google Rankings)",
        "Client assumes responsibility for business decisions based on our recommendations",
      ],
    },
    {
      id: "8",
      title: "8. Termination",
      content: "Either party may terminate the agreement:",
      list: [
        "With 30 days written notice for convenience",
        "Immediately for material breach of contract",
        "Immediately for non-payment after notice period",
      ],
      footer:
        "Upon termination, all work completed will be delivered, and final payment will be due within 15 days.",
    },
    {
      id: "9",
      title: "9. Governing Law",
      content:
        "These terms are governed by the laws of the State of Washington, United States. Any legal action must be brought in the courts of Washington.",
    },
  ],
  contact: {
    title: "Questions about our Terms?",
    description:
      "If you need clarification on how these terms apply to your specific situation, please don't hesitate to contact us.",
    email: contactInfo.email,
    phone: contactInfo.phone,
    address: contactInfo.address,
  },
};
