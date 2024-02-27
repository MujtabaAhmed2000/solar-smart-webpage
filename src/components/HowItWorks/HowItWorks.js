// import CoinFalling from "../LottieAnimations/CoinFalling"
// import MoneyIncreasing from "../LottieAnimations/MoneyIncreasing"

const HowItWorks = () => {
  const Section = ({ heading, animation, children }) => {
    return (
      <div className="flex h-full flex-col  bg-secondary p-4">
        <h2 className="pb-2 text-center text-4xl font-semibold text-primary lg:text-xl">
          {heading}
        </h2>
        <p className="text-xl font-medium text-secondary-100 lg:text-2xl">
          {children}
        </p>
        {animation && <div className="pt-4 lg:mt-auto">{animation}</div>}
      </div>
    );
  };

  return (
    <section className="container-width flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-6">
      <Section heading="Renewable Energy Focus">
        Contribute to a greener future with SolarSmart&apos;s accurate energy
        insights, supporting sustainability goals.
      </Section>
      <Section heading="Technological Innovation">
        Explore data visualization, machine learning, and optimization with
        SolarSmart, optimizing PV farm efficiency.
      </Section>
      <Section heading="Efficiency Improvement">
        Enhance PV panel farm performance with SolarSmart&apos;s meticulous
        monitoring, ensuring longevity and uninterrupted energy production.
      </Section>
      <Section heading="Data-Driven Decision Making">
        Empower operators with detailed insights for informed decisions,
        optimizing operations based on real-time and historical data.
      </Section>
      <Section heading="Remote Monitoring">
        Conveniently monitor and manage panel efficiency remotely, reducing
        manual intervention and enhancing safety.
      </Section>
      <Section heading="Industry Relevance">
        SolarSmart leads in renewable energy tech, providing skills crucial in
        the evolving sustainable energy solutions field.
      </Section>
      <Section heading="Market Demand">
        Seize opportunities in renewable energy and beyond. SolarSmart adapts to
        various industries, offering global energy consumption insights.
      </Section>
      <Section heading="Predictive Maintenance">
        Bid farewell to breakdowns. SolarSmart&apos;s smart algorithms predict
        panel issues, enabling proactive maintenance for a smooth,
        cost-effective, sustainable energy future.
      </Section>
    </section>
  );
};

export default HowItWorks;
