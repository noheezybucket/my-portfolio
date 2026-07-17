const ProfileSummary = () => {
  return (
    <aside className="mb-10 flex items-center gap-4 sm:gap-5">
      <img
        src="/assets/me.webp"
        width={72}
        height={72}
        alt="Muhammad Gueye"
        className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-[72px] sm:w-[72px]"
      />
      <div className="min-w-0">
        <p className="text-xs tracking-wide text-muted sm:text-sm">
          Software Engineer
        </p>
        <h1 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
          Muhammad
        </h1>
        <p className="mt-0.5 text-sm leading-relaxed text-muted">
          I design and ship web experiences — 40+ projects delivered for
          agencies and founders.
        </p>
      </div>
    </aside>
  );
};

export default ProfileSummary;
