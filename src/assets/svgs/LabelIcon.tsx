interface Props {
  className?: string;
}

export const LabelIcon = ({ className }: Props) => {
  return (
    <svg
      className={`${className} coalition-flag--flag`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="banner"
      x="0px"
      y="0px"
      viewBox="0 0 68 104"
      // style="enable-background:new 0 0 68 104; fill: #c6c6c6;fill: #bb4140"
      xmlSpace="preserve">
      <g id="banner-content">
        <g
          id="UI-Intranet-banner-content"
          transform="translate(-96.000000, -60.000000)">
          <g
            id="banner-content-g-1"
            transform="translate(96.000000, 60.000000)">
            <polygon
              id="banner-content-polygon-1"
              points="0,0 0,80.5 34.3,104 68,80.5 68,0"></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
};
