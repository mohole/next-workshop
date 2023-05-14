export const Hero = () => {
  const bg = { backgroundImage: "url('/img/hero.jpeg')" };

  return (
    <section className="hero min-h-fit bg-base-200" style={bg}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">La tua guida definitiva</h1>
          <p className="py-6">
            I <i>Moholemon</i> sono creature sfuggenti che catturano
            l&apos;attenzione di diversi ricercatori Moholiani da decenni...
          </p>
          <p>
            Qui troverai tutto quello che è stato scoperto su di loro fino ad
            oggi
          </p>
        </div>
      </div>
    </section>
  );
};
