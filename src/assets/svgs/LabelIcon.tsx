interface Props {
  className?: string;
}

export const LabelIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none" />
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <path d="M33.5,9H4a2,2,0,0,0-2,2V37a2,2,0,0,0,2,2H33.5a.9.9,0,0,0,.8-.4L45.6,25.2a2.1,2.1,0,0,0,0-2.4L34.3,9.4a.9.9,0,0,0-.8-.4Z" />
        </g>
      </g>
    </svg>
  );
};
