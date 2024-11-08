import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type FilterOption = { label: string; value: string };

type FilterProps = {
  label: string;
  options: FilterOption[];
  queryParam: string;
};

export default function Filter({ label, options, queryParam }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParam = searchParams.get(queryParam) || 'all';
  const [activeOption, setActiveOption] = useState(currentParam);

  useEffect(() => {
    setActiveOption(currentParam);
  }, [currentParam]);

  const handleFilterChange = (value: string) => {
    setActiveOption(value);

    // Create a new URLSearchParams instance to update the query parameter
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(queryParam); // Remove the filter if "all" is selected
    } else {
      params.set(queryParam, value); // Set the filter value
    }

    // Update the URL with the new query parameter
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex space-x-4 items-center p-4 border border-primary-50">
      <span className="font-semibold">{label}:</span>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleFilterChange(option.value)}
          className={`px-2 py-1 rounded ${
            activeOption === option.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-black'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
