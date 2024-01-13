export const Hero = () => {
  
  // const bg = { backgroundImage: "url('')" }
  const bg = { backgroundImage: "url('https://images.unsplash.com/photo-1685846381529-bb40809f8c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }

  return (
    <section
      className="hero min-h-fit bg-base-200"
      style={bg}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">La tua guida definitiva</h1>
          <p className="py-6">
            La guida ai Moholemon.
          </p>
          <p>
            Qui troverati tutto quello che ti serve.
          </p>
        </div>
      </div>
    </section>
  );
};
