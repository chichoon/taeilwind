interface Props {
  className?: string;
}

export const PencilIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512">
      <path
        d="M70.2,337.4l104.4,104.4L441.5,175L337,70.5L70.2,337.4z M0.6,499.8c-2.3,9.3,2.3,13.9,11.6,11.6L151.4,465L47,360.6
   L0.6,499.8z M487.9,24.1c-46.3-46.4-92.8-11.6-92.8-11.6c-7.6,5.8-34.8,34.8-34.8,34.8l104.4,104.4c0,0,28.9-27.2,34.8-34.8
   C499.5,116.9,534.3,70.6,487.9,24.1z"
      />
    </svg>
  );
};
