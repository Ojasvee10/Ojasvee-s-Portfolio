import { motion } from 'framer-motion';
import CursorGlow from '@/components/effects/CursorGlow';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import WhoIAm from '@/components/sections/WhoIAm';
import WhatIBuild from '@/components/sections/WhatIBuild';
import MyJourney from '@/components/sections/MyJourney';
import TechStack from '@/components/sections/TechStack';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe';
import CurrentlyLearning from '@/components/sections/CurrentlyLearning';
import BeyondCoding from '@/components/sections/BeyondCoding';
import FunFacts from '@/components/sections/FunFacts';
import TechPhilosophy from '@/components/sections/TechPhilosophy';
import WhyHireMe from '@/components/sections/WhyHireMe';
import FutureGoals from '@/components/sections/FutureGoals';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import SectionDivider from '@/components/ui/SectionDivider';

function App() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <Hero />
        <SectionDivider />
        <WhoIAm />
        <SectionDivider />
        <WhatIBuild />
        <SectionDivider />
        <MyJourney />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <FeaturedProjects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <WhyWorkWithMe />
        <SectionDivider />
        <CurrentlyLearning />
        <SectionDivider />
        <BeyondCoding />
        <SectionDivider />
        <FunFacts />
        <SectionDivider />
        <TechPhilosophy />
        <SectionDivider />
        <WhyHireMe />
        <SectionDivider />
        <FutureGoals />
        <SectionDivider />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}

export default App;
