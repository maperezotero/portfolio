export const AsideLanguages = () => {
  return (
    <aside className="mb-8">
      <div className="bg-[#1e2124] p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Languages</h2>
        <ul className="text-base leading-7">
          <li className="mb-4">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">Spanish</h4>
            </div>
            <span className="text-base font-light pl-7">Native Speaker</span>
          </li>

          <li className="mb-4">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">English</h4>
            </div>
            <span className="text-base font-light pl-7">B2 Certificate</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
