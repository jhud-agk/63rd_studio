//

import React from "react";

type dd = {
  children: React.ReactNode;
  className?: string;
  cross?: boolean;
};

function BorderBody({ cross = true, ...props }: dd) {
  return (
    <section className={`border-[#EBEBF2] border-t px-6 relative`}>
      {cross && (
        <div className="tablet:block hidden">
          <div className="h-[1px] bg-black w-[12px] absolute -top-[1px] left-[18px]"></div>
          <div className="h-[1px] bg-black w-[12px] absolute -top-[1px] right-[19px]"></div>
          <div className="w-[1px] h-[12px] bg-black absolute left-6 -top-[6px]"></div>
          <div className="w-[1px] h-[12px] bg-black absolute right-6 -top-[6px]"></div>
        </div>
      )}

      <div
        className={`${props.className} tablet:px-8 py-5 border-[#EBEBF2] tablet:border-r tablet:border-l`}
      >
        {props.children}
      </div>
    </section>
  );
}

export default BorderBody;
