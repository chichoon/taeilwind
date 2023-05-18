interface Props {
  className?: string;
}

export const FtIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <title>42</title>
      <path d="M24 12.42l-4.428 4.415H24zm-4.428-4.417l-4.414 4.418v4.414h4.414V12.42L24 8.003V3.575h-4.428zm-4.414 0l4.414-4.428h-4.414zM0 15.996h8.842v4.43h4.412V12.42H4.428l8.826-8.846H8.842L0 12.421z" />
    </svg>
  );
};
