import React, { useState } from "react";

const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b pb-2">
      <button
        className="w-full flex justify-between items-center text-lg font-semibold mb-2 focus:outline-none font-[beatrice]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="space-y-2">{children}</div>}
    </div>
  );
};

const Filters = ({
  categories,
  brands,
  selectedFilters,
  onFilterChange,
}) => {
  const handleCheckboxChange = (type, value) => {
    onFilterChange(type, value);
  };

  const handleRangeChange = (type, minOrMax, value) => {
    onFilterChange(type, { ...selectedFilters[type], [minOrMax]: Number(value) });
  };

  const handleRadioChange = (type, value) => {
    onFilterChange(type, value === selectedFilters[type] ? null : value);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 font-[beatrice]">Apply Filters:</h2>
      <p className="text-sm text-gray-500 mb-4 font-[beatrice]">Save your time and filter the products here</p>
      <FilterSection title="Category">
        {categories.map((cat) => (
          <label key={cat} className="block font-[Variable]">
            <input
              type="checkbox"
              checked={selectedFilters.categories.includes(cat)}
              onChange={() => handleCheckboxChange("categories", cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Brand">
        {brands.map((brand) => (
          <label key={brand} className="block font-[Variable]">
            <input
              type="checkbox"
              checked={selectedFilters.brands.includes(brand)}
              onChange={() => handleCheckboxChange("brands", brand)}
              className="mr-2"
            />
            {brand}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Price Range ($)">
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={selectedFilters.priceRange.min}
            onChange={(e) => handleRangeChange("priceRange", "min", e.target.value)}
            className="border p-1 w-full rounded font-[Variable]"
            min={0}
            placeholder="Min"
          />
          <span>–</span>
          <input
            type="number"
            value={selectedFilters.priceRange.max}
            onChange={(e) => handleRangeChange("priceRange", "max", e.target.value)}
            className="border p-1 w-full rounded font-[Variable]"
            placeholder="Max"
          />
        </div>
      </FilterSection>

      <FilterSection title="Availability">
        <label className="block font-[Variable]">
          <input
            type="radio"
            name="availability"
            checked={selectedFilters.availability === true}
            onChange={() => handleRadioChange("availability", true)}
            className="mr-2"
          />
          In Stock
        </label>
        <label className="block font-[Variable]">
          <input
            type="radio"
            name="availability"
            checked={selectedFilters.availability === false}
            onChange={() => handleRadioChange("availability", false)}
            className="mr-2"
          />
          Out of Stock
        </label>
        <label className="block font-[Variable]">
          <input
            type="radio"
            name="availability"
            checked={selectedFilters.availability === null}
            onChange={() => handleRadioChange("availability", null)}
            className="mr-2"
          />
          All
        </label>
      </FilterSection>

      <FilterSection title="Minimum Rating">
        <input
         type="range"
         min={0}
         max={5}
         step={0.5}
         value={selectedFilters.minRating}
         onChange={(e) =>
         onFilterChange("minRating", parseFloat(e.target.value))}
         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm accent-yellow-500 font-[beatrice]"
         style={{
        accentColor: "#000000"}}/>
        <p className="text-sm text-gray-700 mt-1 font-[beatrice]">
          {selectedFilters.minRating} ★ or more
        </p>
      </FilterSection>
    </div>
  );
};

export default Filters;
