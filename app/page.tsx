import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SplitFeature from '@/components/SplitFeature';
import StatStrip from '@/components/StatStrip';
import ServiceCards from '@/components/ServiceCards';
import PathPlatform from '@/components/PathPlatform';
import CoverageAreas from '@/components/CoverageAreas';
import InsightsPreview from '@/components/InsightsPreview';
import ClosingCTA from '@/components/ClosingCTA';
import ReportPromo from '@/components/ReportPromo';
import Reviews from '@/components/Reviews';
import Awards from '@/components/Awards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SplitFeature />
        <StatStrip />
        <ServiceCards />
        <PathPlatform />
        <CoverageAreas />
        <InsightsPreview />
        <ClosingCTA />
        <ReportPromo />
        <Reviews />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
