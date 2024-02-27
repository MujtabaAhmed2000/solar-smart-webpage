import Image from "next/image";

import renewableSvg from "/public/svgs/solar-panel-renewable-energy.svg";
import machineSvg from "/public/svgs/chip-ai.svg";
import efficiencySvg from "/public/svgs/efficiency-performance-speedometer-web-performance-speed-dashboard.svg";
import dataSvg from "/public/svgs/data-line.svg";
import monitorSvg from "/public/svgs/monitor-recorder.svg";
import maintanenceSvg from "/public/svgs/maintenance-info.svg";

const HowItWorks = () => {
  const Section = ({ heading, image, children }) => {
    return (
      <div className="flex h-full flex-col bg-secondary p-5">
        <h2 className="pb-2 text-center text-4xl font-semibold text-primary lg:text-xl">
          {heading}
        </h2>
        <p className="text-xl font-medium text-secondary-100 lg:text-2xl">
          {children}
        </p>
        {image && (
          <Image src={image} alt="image" className="m-auto h-1/2 w-1/2 pt-10" />
        )}
      </div>
    );
  };

  return (
    <section id="why-solar-smart">
      <h3 className="pb-10 text-center text-5xl font-bold text-secondary">
        Why SolarSmart?
      </h3>
      <div className="container-width flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-6">
        <Section heading="Renewable Energy Focus" image={renewableSvg}>
          Contribute to a greener future with SolarSmart&apos;s accurate energy
          insights, supporting sustainability goals.
        </Section>
        <Section heading="Technological Innovation" image={machineSvg}>
          Explore data visualization, machine learning, and optimization with
          SolarSmart, optimizing PV farm efficiency.
        </Section>
        <Section heading="Efficiency Improvement" image={efficiencySvg}>
          Enhance PV panel farm performance with SolarSmart&apos;s meticulous
          monitoring, ensuring longevity and uninterrupted energy production.
        </Section>
        <Section heading="Data-Driven Decision Making" image={dataSvg}>
          Empower operators with detailed insights for informed decisions,
          optimizing operations based on real-time and historical data.
        </Section>
        <Section heading="Remote Monitoring" image={monitorSvg}>
          Conveniently monitor and manage panel efficiency remotely, reducing
          manual intervention and enhancing safety.
        </Section>
        <Section heading="Predictive Maintenance" image={maintanenceSvg}>
          Bid farewell to breakdowns. SolarSmart&apos;s smart algorithms predict
          panel issues, enabling proactive maintenance for a smooth,
          cost-effective, sustainable energy future.
        </Section>
      </div>
    </section>
  );
};

export default HowItWorks;
