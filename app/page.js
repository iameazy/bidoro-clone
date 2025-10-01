import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageGrid from '../components/ImageGrid';
import Features from "../components/Features";
import TrustFeatures from '../components/TrustFeatures';
import Waitlist from '../components/Waitlist';
import LaunchingSoon from '../components/LaunchingSoon';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5E8]">
      <Header />
      <Hero />
      <ImageGrid />
      <Features />
      <TrustFeatures />
      <Waitlist />
      <LaunchingSoon />
    </main>
  );
}