import { useState } from 'react';
import { certificates } from '../data/certificates';

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<(typeof certificates)[number] | null>(null);

  return (
    <section id="certificates" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#24364B] mb-3">
          Certificates
        </h2>
        <p className="text-[#64748B] mb-10">
          Training, learning programs, and certifications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <button
              key={certificate.id}
              onClick={() => setSelectedCertificate(certificate)}
              className="text-left bg-white rounded-2xl border border-[#E9EDF2] p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-[#3979B9] mb-3">
                {certificate.category}
              </p>
              <h3 className="font-bold text-lg text-[#24364B] mb-2">
                {certificate.title}
              </h3>
              <p className="text-sm text-[#64748B]">
                {certificate.issuer}
              </p>
              <p className="text-sm text-[#64748B] mt-2">
                {certificate.date}
              </p>
              <p className="text-sm text-[#3979B9] mt-4">
                Lihat sertifikat →
              </p>
            </button>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          onClick={() => setSelectedCertificate(null)}
          className="fixed inset-0 z-50 bg-[#24364B]/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#24364B]">
                  {selectedCertificate.title}
                </h3>
                <p className="text-sm text-[#64748B] mt-1">
                  {selectedCertificate.issuer}
                </p>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-2xl text-[#24364B]"
                aria-label="Tutup"
              >
                ×
              </button>
            </div>

            <p className="text-sm text-[#64748B] mb-5">
              {selectedCertificate.description}
            </p>

            <div className="rounded-xl overflow-hidden border border-[#E9EDF2]">
              {selectedCertificate.file.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={selectedCertificate.file}
                  title={selectedCertificate.title}
                  className="w-full h-[550px]"
                />
              ) : (
                <img
                  src={selectedCertificate.file}
                  alt={selectedCertificate.title}
                  className="w-full max-h-[550px] object-contain"
                />
              )}
            </div>

            <a
              href={selectedCertificate.file}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-[#3979B9] underline"
            >
              Buka file sertifikat
            </a>
          </div>
        </div>
      )}
    </section>
  );
}