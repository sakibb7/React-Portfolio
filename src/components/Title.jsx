import React from "react";

const Title = ({ sectionHeading, sectionTitle }) => {
  return (
    <div>
      <h3 className="text-linkColor text-xl font-semibold">{sectionHeading}</h3>
      <h1 className="text-[32px] font-semibold pt-[10px] leading-[1.5]">
        {sectionTitle}
      </h1>
    </div>
  );
};

export default Title;
