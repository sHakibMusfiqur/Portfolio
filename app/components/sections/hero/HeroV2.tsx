export default function HeroV2() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-[#09090B] to-[#0C0C0F]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.04)_0%,transparent_70%)]" />
        <div className="absolute right-[6%] top-[15%] size-[550px] rounded-full bg-[radial-gradient(circle,rgba(220,20,60,0.1)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute -left-20 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(220,20,60,0.03)_0%,transparent_70%)] blur-[100px]" />
      </div>
    </section>
  );
}
