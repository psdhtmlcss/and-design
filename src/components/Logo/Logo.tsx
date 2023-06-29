import './logo.scss';

interface LogoProps {
  text?: string;
}

const Logo = (props: LogoProps) => {
  return (
    <div className="logo">
      <svg
        width={45}
        height={45}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_179598_166253)">
          <rect width={45} height={45} rx={8} fill="white" />
          <path d="M0 0H45V45H0V0Z" fill="url(#paint0_radial_179598_166253)" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.49023 22.5137C5.49023 19.3968 13.8019 11.1621 23.3835 11.1621C32.965 11.1621 39.4874 19.3968 39.5066 22.5137C39.5259 25.6306 32.965 33.8654 23.3835 33.8654C13.8019 33.8654 5.49024 25.6306 5.49023 22.5137ZM23.2873 30.0173C27.442 30.0173 30.8101 26.6493 30.8101 22.4945C30.8101 18.3397 27.442 14.9716 23.2873 14.9716C19.1325 14.9716 15.7644 18.3397 15.7644 22.4945C15.7644 26.6493 19.1325 30.0173 23.2873 30.0173Z"
            fill="#4082E6"
          />
          <path
            d="M31.2334 22.5137C31.2334 26.9129 27.6672 30.4791 23.268 30.4791C18.8689 30.4791 15.3027 26.9129 15.3027 22.5137C15.3027 18.1146 18.8689 14.5484 23.268 14.5484C27.6672 14.5484 31.2334 18.1146 31.2334 22.5137Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.2865 27.6316C26.1237 27.6316 28.4236 25.3316 28.4236 22.4945C28.4236 22.2066 28.3999 21.9242 28.3544 21.6492C28.3092 21.376 27.9316 21.3319 27.7403 21.5322C27.2907 22.0031 26.6567 22.2964 25.9542 22.2964C24.5903 22.2964 23.4846 21.1908 23.4846 19.8269C23.4846 19.1244 23.778 18.4904 24.2489 18.0407C24.4491 17.8495 24.4051 17.4719 24.1319 17.4266C23.8569 17.3811 23.5745 17.3574 23.2865 17.3574C20.4494 17.3574 18.1494 19.6574 18.1494 22.4945C18.1494 25.3316 20.4494 27.6316 23.2865 27.6316Z"
            fill="#4082E6"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_179598_166253"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(22.5 22.5) rotate(90) scale(26.7847 29.3751)"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="#E0F4FF" />
          </radialGradient>
          <clipPath id="clip0_179598_166253">
            <rect width={45} height={45} rx={8} fill="white" />
          </clipPath>
        </defs>
      </svg>
      {props?.text && <span className="logo__text">{props.text}</span>}
    </div>
  )
}

export default Logo;