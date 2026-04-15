export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-dark/60 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
