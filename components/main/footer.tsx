import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 md:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap gap-6 md:gap-0">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start text-center md:text-left"
            >
              <h3 className="font-bold text-[14px] md:text-[16px] mb-2 md:mb-0">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[10px] md:my-[15px] justify-center md:justify-start"
                >
                  {Icon && <Icon />}
                  <span className="text-[13px] md:text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[13px] md:text-[15px] text-center mt-4 md:mt-0">
          &copy;Trithanka  {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
