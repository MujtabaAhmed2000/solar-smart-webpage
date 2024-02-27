const AboutUs = () => {
  return (
    <section className="container-width">
      <h2 className="text-center text-4xl font-semibold">About Us</h2>
      <div className="flex flex-col">
        <p className="text-3xl font-medium italic">Dinar</p>
        <div className="flex flex-row items-center">
          <span className="material-symbols-outlined text-sm">volume_up</span>
          <p>[di·nar]</p>
          <p className="font-medium italic">noun</p>
        </div>
        <p className="pt-2 text-xl">
          The dinar was a <span className="font-medium text-primary">gold</span>{" "}
          coin, struck mainly for purposes of{" "}
          <span className="font-medium text-background-hero">prestige.</span>
        </p>
      </div>
    </section>
  )
}

export default AboutUs
