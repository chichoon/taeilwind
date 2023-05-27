interface Props {
  className?: string;
}

export const BriefcaseIcon = ({ className }: Props) => {
  return (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      className={className}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60,16H48V4c0-2.211-1.789-4-4-4H20c-2.211,0-4,1.789-4,4v12H4
   c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V20C64,17.789,62.211,16,60,16z M24,8h16v8H24V8z"
      />
    </svg>
  );
};
