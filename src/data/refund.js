// data/refund.js

import contactInfo from "./contactInfo";

export const refundData = {
  meta: {
    title: "Refund Policy",
    lastUpdated: "January 2025",
  },
  intro: `At ${contactInfo.companyNameShort}, we are committed to delivering exceptional service quality and ensuring client satisfaction. Our refund policy is designed to be fair and transparent while recognizing the specialized nature of strategic digital marketing services.`,
  importantNotice:
    "Important: Due to the specialized nature of strategic marketing services, which involve comprehensive planning, ongoing implementation, and campaign optimization, refunds are evaluated on a case-by-case basis and are subject to the conditions outlined below.",
  sections: [
    {
      id: "1",
      title: "1. General Refund Framework",
      content:
        "We strive to be fair partners. Our policies reflect the irrevocable nature of time and intellectual property while protecting our clients' investments.",
    },
    {
      id: "2",
      title: "2. Monthly Service Plans",
      content: "For monthly recurring service subscriptions:",
      list: [
        {
          label: "First Month Guarantee",
          text: "If you are not satisfied with our services within the first 30 days, you may request a refund for the current month's service fee.",
        },
        {
          label: "Service Cancellation",
          text: "You may cancel your monthly subscription at any time with 30 days written notice.",
        },
        {
          label: "No Partial Refunds",
          text: "We do not provide partial refunds for unused portions of a billing cycle.",
        },
        {
          label: "Work Delivery",
          text: "Any work completed during the billing period will be delivered regardless of cancellation.",
        },
      ],
    },
    {
      id: "3",
      title: "3. Annual Service Plans",
      content: "For annual prepaid service subscriptions:",
      list: [
        {
          label: "60-Day Guarantee",
          text: "If you are not satisfied within the first 60 days, you may request a prorated refund for the unused portion.",
        },
        {
          label: "After 60 Days",
          text: "No refunds are available after the initial 60-day period.",
        },
      ],
    },
    {
      id: "4",
      title: "4. Setup Fees and One-Time Projects",
      list: [
        { label: "Setup Fees", text: "Non-refundable once work has begun." },
        {
          label: "Project-Based Work",
          text: "Refunds considered only if we fail to deliver agreed-upon deliverables.",
        },
        {
          label: "Completed Work",
          text: "No refunds for work that has been completed and delivered.",
        },
      ],
    },
    {
      id: "5",
      title: "5. Advertising Spend",
      content: "For paid advertising campaigns:",
      list: [
        {
          label: "Ad Spend",
          text: "Advertising budget paid to platforms (Google, Facebook, etc.) is non-refundable.",
        },
        {
          label: "Platform Policies",
          text: "Refunds for advertising spend are subject to the respective platform's policies.",
        },
      ],
    },
    {
      id: "6",
      title: "6. Refund Exclusions",
      content: "Refunds will NOT be provided in the following situations:",
      simpleList: [
        "Failure to provide necessary access, information, or approvals",
        "Changes in business circumstances or priorities",
        "Dissatisfaction with results due to factors beyond our control",
        "Violation of our Partnership Terms",
        "Services already delivered and accepted",
      ],
    },
    {
      id: "7",
      title: "7. Refund Request Process",
      simpleList: [
        "Contact us in writing at steirariyomf@outlook.com",
        "Include your account information and reason for the refund request",
        "Allow 5-10 business days for review and response",
        "If approved, refunds will be processed within 10-15 business days to the original payment method",
      ],
    },
  ],
  contact: {
    title: "Need Assistance?",
    description:
      "Before requesting a refund, please contact us to discuss your concerns. Our team is dedicated to finding solutions and ensuring your satisfaction with our services.",
    email: contactInfo.email,
    phone: contactInfo.phone,
    address: contactInfo.address,
    hours: "Mon-Fri: 9:00 AM - 6:00 PM CST",
  },
};
