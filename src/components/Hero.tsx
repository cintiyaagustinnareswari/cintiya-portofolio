import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-eyebrow">
            DATA SCIENCE STUDENT
          </span>

          <h1>
            Turning Data Into
            <span> Meaningful Insights.</span>
          </h1>

          <p className="hero-description">
            Halo! Saya mahasiswa Data Science di Universitas Negeri
            Surabaya yang tertarik pada data analytics, machine learning,
            dan data visualization. Saya senang mengeksplorasi data
            untuk menemukan pola dan menghasilkan insight yang bermakna.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>

            <a href="#about" className="secondary-button">
              More About Me
            </a>
          </div>

          <a href="#about" className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-center">
            <span>DS</span>
            <small>DATA SCIENCE</small>
          </div>

          <div className="floating-card card-top">
            <span className="floating-dot blue-dot" />
            DATA ANALYTICS
          </div>

          <div className="floating-card card-bottom">
            <span className="floating-dot yellow-dot" />
            MACHINE LEARNING
          </div>
        </motion.div>
      </div>
    </section>
  );
}