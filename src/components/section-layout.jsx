function SectionLayout({ children, className = "" }) {
  return (
    <section
      className={`relative py-20 sm:py-28 lg:py-36 overflow-hidden ${className}`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[700px] h-[700px] bg-gradient-to-bl from-[var(--color-accent)]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--color-secondary)]/30 to-transparent rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}

export default SectionLayout;
