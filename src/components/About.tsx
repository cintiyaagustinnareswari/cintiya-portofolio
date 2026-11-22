import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">GET TO KNOW ME</span>
            <h2 className="section-title">
              Curious Mind,
              <span> Data-Driven Perspective.</span>
            </h2>

            <div className="about-accent">
              <Sparkles size={19} />
              <span>Learning, exploring, and creating through data.</span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>
              Saya merupakan mahasiswa S1 Data Science di Universitas
              Negeri Surabaya dengan ketertarikan pada data analytics,
              machine learning, dan data visualization.
            </p>

            <p>
              Saya menikmati proses mengolah data, mengeksplorasi pola,
              serta menerjemahkan hasil analisis menjadi informasi yang
              lebih mudah dipahami. Melalui kegiatan akademik dan
              pengalaman praktis, saya terus mengembangkan kemampuan
              teknis sekaligus cara berpikir analitis.
            </p>

            <div className="about-info">
              <div className="about-info-item">
                <GraduationCap size={21} />
                <div>
                  <strong>Education</strong>
                  <span>Undergraduate Student — Data Science</span>
                </div>
              </div>

              <div className="about-info-item">
                <MapPin size={21} />
                <div>
                  <strong>University</strong>
                  <span>Universitas Negeri Surabaya</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}