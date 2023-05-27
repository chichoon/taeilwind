interface Props {
  className?: string;
}

export const TriangleIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      xmlSpace="preserve">
      <path d="M6.5,8.5l6,7l6-7H6.5z" />
    </svg>
  );
};
