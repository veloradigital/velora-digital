import ServicePageTemplate, { ServiceContent } from '../../components/ServicePageTemplate'
import { SERVICES } from '../../lib/site'

const content: ServiceContent = {
  meta: SERVICES[5],
  intro:
    'WhatsApp is the preferred communication channel for customers in India. We set up WhatsApp Business automation and chatbots so you capture every enquiry, respond instantly and never lose a lead — even outside business hours.',
  problems: [
    'You miss WhatsApp enquiries because you cannot respond fast enough.',
    'You get repetitive questions that take up your time.',
    'You have no system to follow up with leads who did not convert.',
    'You cannot send promotions or updates to your customers efficiently.',
    'You lose track of conversations and leads across multiple chats.',
  ],
  solutions: [
    'WhatsApp Business API setup and configuration',
    'Custom chatbot for automated FAQs and lead qualification',
    'Automated welcome messages and instant replies',
    'Appointment and booking automation',
    'Broadcast message campaigns for promotions and updates',
    'CRM integration for lead tracking and follow-up',
    'Catalog and product showcase setup',
    'Analytics and conversation monitoring',
  ],
  features: [
    { title: '24/7 Instant Responses', desc: 'Your chatbot responds immediately, even at 2 AM — so no enquiry goes unanswered.' },
    { title: 'Lead Qualification', desc: 'The chatbot collects key information — name, phone, service needed — before you even join the conversation.' },
    { title: 'Bookings on WhatsApp', desc: 'Customers can book appointments or tables directly through automated WhatsApp flows.' },
    { title: 'Broadcast Promotions', desc: 'Send offers, festivals greetings and updates to your customer list in one click.' },
    { title: 'Never Lose a Lead', desc: 'Every conversation is logged in your CRM, so you can follow up with anyone who did not convert.' },
    { title: 'Save Time', desc: 'Automated answers to common questions free you up to focus on running your business.' },
  ],
  process: [
    { title: 'Discover', desc: 'We map your customer journey, common questions and automation opportunities.' },
    { title: 'Build', desc: 'We set up WhatsApp Business API, build your chatbot flows and integrate your CRM.' },
    { title: 'Launch', desc: 'We test every flow, train your team and go live with your WhatsApp automation.' },
    { title: 'Optimize', desc: 'We monitor conversations, refine chatbot responses and add new flows as needed.' },
  ],
  faqs: [
    { question: 'What is WhatsApp Business automation?', answer: 'It is the use of WhatsApp Business API and chatbots to automatically respond to customer messages, qualify leads, book appointments and send updates — without manual effort for every message.' },
    { question: 'Do I need the WhatsApp Business API?', answer: 'For advanced automation like chatbots, broadcasts and CRM integration, yes. We handle the entire setup process for you. For basic auto-replies, the free WhatsApp Business app may be sufficient.' },
    { question: 'Can the chatbot handle complex questions?', answer: 'The chatbot handles common questions and lead qualification. For complex queries, it seamlessly hands off to you or your team. We design the flows to make this transition smooth.' },
    { question: 'Is WhatsApp automation expensive?', answer: 'Costs depend on the WhatsApp Business API pricing (per conversation) and the complexity of your automation. We provide a clear quote after understanding your needs. Contact us for a free consultation.' },
  ],
}

export default function WhatsappAutomation() {
  return <ServicePageTemplate content={content} />
}
