import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <HeroSection />
      <FeatureSection />
    </main>
  )
}