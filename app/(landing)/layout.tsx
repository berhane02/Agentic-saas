const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full overflow-auto bg-[#0b1120] relative">
      {/* ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -top-40 left-1/2 -ml-[28rem] h-[32rem] w-[56rem] rounded-full bg-violet-600/20 blur-[128px]" />
        <div className="animate-float absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[128px]" style={{ animationDelay: "-5s" }} />
        <div className="animate-float absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[128px]" style={{ animationDelay: "-9s" }} />
      </div>
      <div className="relative mx-auto max-w-(--breakpoint-xl) h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
