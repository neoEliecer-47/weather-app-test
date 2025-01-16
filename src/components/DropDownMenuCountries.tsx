"use client";

import { DropDownMenuCountriesProps } from "@/types";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";

const DropDownMenuCountries = ({
  placeholder,
  countries,
}: DropDownMenuCountriesProps) => {
  const dropMenuRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState<number | null>(null);
  return (
    <section
      className="cursor-pointer"
      ref={dropMenuRef}
      onClick={() => setOpen(!open)}
    >
      <div className="relative flex justify-center w-24 text-[1rem] py-[10px] transition-all duration-300 ease-linear bg-gray-200 rounded-[5px]">
        {placeholder}
      </div>
      {/* <div
        className={classNames(
          styles.placeholderContainer,
          option && styles.placeholderContainerSelected
        )}
        
      >
        {buildPlaceholder("tooltip")?.length > 10 && (
          <div className={styles.tooltipContainer}>
            <span className={styles.tooltipText}>
              {buildPlaceholder("tooltip")}
            </span>
          </div>
        )}

        <h2 className={styles.placeholder}>
          {option === null
            ? buildValuesIfParams("placeholderIfParam")
            : buildPlaceholder()}
        </h2>
        <ChevronDownIcon
          className={classNames(styles.icon, open && styles.iconRotate)}
        />
      </div> */}

      <div
        className="absolute bg-white rounded-[0.5rem] z-[9999px] transition-all duration-200 ease-linear shadow-sm overflow-scroll overflow-x-hidden"
        style={{
          padding: `${open ? "10px 0px" : "0px"}`,
          width: "8rem",
          maxHeight: `${open ? "10rem" : "0px"}`,
          scrollbarWidth: "thin",
        }}
      >
        {open &&
          countries.map(({ name }, index) => (
            <div
              key={index}
              onClick={() => {
                setOption(index);
              }}
              className="bg-white margin-0 flex justify-between items-center"
            >
              <div style={{ width: "1.3rem" }}>
                {option === index && <CheckIcon />}
              </div>
              <div className="bg-white/35">{name?.common}</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default DropDownMenuCountries;
