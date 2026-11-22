export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  gpa?: string;
  category: string;
  description: string;
  file: string;
}

export const certificates: Certificate[] = [
  {
    id: 'jagochamp',
    title: 'JagoCHAMP Data Analytics Mentee',
    issuer: 'AjakJago (JagoCHAMP Batch 4)',
    date: 'Desember 2024 – Februari 2025',
    gpa: '3.88 / 4.00 (Program GPA)',
    category: 'Data Analytics',
    description: 'Program mentoring dan pembelajaran Data Analytics.',
    file: '/certificates/sertifikat%20ajak%20jago.jpg',
  },
  {
    id: 'excel-bootcamp',
    title: 'Microsoft Excel Intensive Bootcamp',
    issuer: 'Karirnex by PT Ebiz Karisma Internasional',
    date: '6, 8, 10, & 13 April 2026',
    gpa: 'Predicate: Expert',
    category: 'Data Analytics',
    description: 'Pelatihan intensif Microsoft Excel.',
    file: '/certificates/Sertifikat%20Excel%20Batch%207.pdf',
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    date: '19 Juli 2026',
    gpa: 'Certified Completion',
    category: 'Cloud Computing',
    description: 'Pembelajaran dasar-dasar layanan dan konsep cloud AWS.',
    file: '/certificates/Sertif%20aws%20modul.pdf',
  },
];