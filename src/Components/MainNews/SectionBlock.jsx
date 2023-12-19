/* eslint-disable react/prop-types */
const SectionBlock = ({ url, titleNews }) => {
  return (
    <div className="section-block-title">
      <a href={url}>
        <span>{titleNews}</span>
      </a>
    </div>
  );
};

export default SectionBlock;
