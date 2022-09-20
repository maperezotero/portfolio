export const Technologies = ({ tech }) => {
  return (
    <div>
      <p className="text-lg py-4 underline-offset-2 underline">
        Technologies & Tools
      </p>
      <ul className="pl-6 list-disc">
        {tech.map((t, index) => (
          <li key={index} className="pr-4">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};
