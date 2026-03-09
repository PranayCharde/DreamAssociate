import React from 'react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/Services/Services';
import { VideoIntro } from '../components/home/VideoIntro';
import { AboutValues } from '../components/home/AboutValues';
import { FunFacts } from '../components/home/FunFacts';
import { OutsourcingCTA } from '../components/home/OutsourcingCTA';
import { EventSchedule } from '../components/home/EventSchedule';
import { Testimonials } from '../components/home/Testimonials';
import { HomeContact } from '../components/home/HomeContact';
import { Partners } from '../components/home/Partners';
import { Process } from '../components/home/Process';
import { FAQ } from '../components/home/FAQ';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Team } from '../components/home/Team';
import { BlogPreview } from '../components/home/BlogPreview';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { Divider } from '../components/common/Divider';

export function Home() {
  return (
    <main className="font-sans text-slate-900">
      <ScrollProgress />
      <Hero />
      <Partners />
      <WhyChooseUs />
      <Divider color="fill-light" />
      <Services />
      <Divider color="fill-slate-900" />
      <Process />
      <Divider color="fill-slate-50" flip={true} />
      <VideoIntro />
      <AboutValues />
      <Team />
      <FunFacts />
      <OutsourcingCTA />
      <BlogPreview />
      <FAQ />
      <EventSchedule />
      <Testimonials />
      <HomeContact />
    </main>
  );
}
