type Step = {
  step: string;
  title: string;
  description: string;
};

type StepListProps = {
  steps: readonly Step[];
  className?: string;
};

export function StepList({ steps, className = "" }: StepListProps) {
  return (
    <ol className={`grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-4 ${className}`.trim()}>
      {steps.map((item) => (
        <li key={item.step} className="bg-white p-6 sm:p-8">
          <p className="font-condensed text-5xl font-semibold text-accent">{item.step}</p>
          <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-ink/70">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
