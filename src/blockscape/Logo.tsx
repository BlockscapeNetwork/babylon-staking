import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  width = 159,
  height = 40,
}) => (
  <Link href="/">
    <div className="flex flex-cols-2 gap-4 place-content-center items-center">
      <svg
        width="200px"
        height="48px"
        viewBox="0 0 297 48"
        version="1.1"
        id="pageLogo"
        className="aspect-[6/1]"
      >
        <g>
          <path
            id="text"
            d="M291.079156,24.1306715 L280.108179,24.1306715 L280.108179,23.6950998 C280.108179,20.8203267 280.804749,17.5970962 285.593668,17.5970962 C290.469657,17.5970962 291.079156,20.8203267 291.079156,23.6950998 L291.079156,24.1306715 Z M297,28.0508167 L297,26.0471869 C297,18.3811252 294.039578,12.892922 285.593668,12.892922 C278.01847,12.892922 274.187335,16.9872958 274.187335,25.5245009 L274.187335,27.092559 C274.187335,35.9782214 277.408971,39.4627949 286.551451,39.4627949 C290.730871,39.4627949 294.039578,38.8529946 295.955145,38.4174229 L295.955145,33.9745917 C292.646438,34.323049 289.511873,34.584392 286.812665,34.584392 C280.630607,34.584392 280.108179,32.2323049 280.108179,28.4863884 L280.108179,28.0508167 L297,28.0508167 Z M263.825858,27.092559 C263.825858,33.277677 261.736148,34.4972777 258.166227,34.4972777 C256.773087,34.4972777 255.205805,34.323049 253.46438,33.9745917 L253.46438,19.3393829 C255.902375,18.2940109 257.295515,18.0326679 258.949868,18.0326679 C262.258575,18.0326679 263.825858,19.600726 263.825858,24.8275862 L263.825858,27.092559 L263.825858,27.092559 Z M269.659631,27.092559 L269.659631,24.7404719 C269.659631,16.0290381 266.176781,12.8058076 260.51715,12.8058076 C258.079156,12.8058076 255.379947,13.5027223 253.116095,15.0707804 L253.116095,13.415608 L247.630607,13.415608 L247.630607,47.9128857 L253.551451,47.9128857 L253.551451,38.8529946 C254.85752,39.2014519 257.034301,39.3756806 258.601583,39.3756806 C265.131926,39.4627949 269.659631,36.5009074 269.659631,27.092559 M235.614776,33.6261343 C234.744063,34.1488203 232.218997,35.1941924 229.868074,35.1941924 C227.778364,35.1941924 226.298153,34.584392 226.298153,32.2323049 L226.298153,31.1869328 C226.298153,27.876588 228.126649,27.353902 232.480211,27.353902 L235.614776,27.353902 L235.614776,33.6261343 Z M241.361478,38.7658802 L241.361478,22.1270417 C241.361478,15.6805808 239.271768,12.892922 231.174142,12.892922 C227.081794,12.892922 223.337731,13.8511797 222.205805,14.2867514 L222.205805,18.2940109 C224.992084,17.9455535 227.604222,17.7713249 230.129288,17.7713249 C234.656992,17.7713249 235.353562,18.4682396 235.353562,22.0399274 L235.353562,23.6079855 L232.480211,23.6079855 C225.427441,23.6079855 220.551451,24.4791289 220.551451,31.2740472 L220.551451,32.2323049 C220.551451,37.1107078 223.25066,39.4627949 227.952507,39.4627949 C231.522427,39.4627949 234.395778,38.2431942 235.963061,37.1107078 L235.963061,38.7658802 L241.361478,38.7658802 L241.361478,38.7658802 Z M216.720317,38.5045372 L216.720317,33.9745917 C213.498681,34.2359347 211.3219,34.4101633 209.92876,34.4101633 C206.271768,34.4101633 204.182058,33.1905626 204.182058,27.7023593 L204.182058,24.4791289 C204.182058,18.9909256 206.271768,17.8584392 209.92876,17.8584392 C211.3219,17.8584392 213.498681,18.0326679 216.720317,18.2940109 L216.720317,13.7640653 C215.588391,13.415608 212.802111,12.8058076 208.883905,12.8058076 C201.656992,12.8058076 198.261214,16.7259528 198.261214,24.4791289 L198.261214,27.7023593 C198.261214,35.2813067 201.656992,39.3756806 208.883905,39.3756806 C212.71504,39.4627949 215.501319,38.8529946 216.720317,38.5045372 M194.255937,31.7967332 C194.168865,27.615245 192.340369,25.8729583 186.854881,23.6950998 L184.852243,22.9110708 C181.717678,21.6914701 180.846966,21.2558984 180.846966,19.600726 C180.846966,17.7713249 182.153034,17.5099819 185.200528,17.5099819 C187.377309,17.5099819 190.163588,17.6842105 193.036939,17.9455535 L193.036939,13.8511797 C191.817942,13.415608 187.986807,12.892922 185.113456,12.892922 C178.408971,12.892922 175.013193,14.722323 175.013193,19.7749546 C175.013193,23.6950998 177.189974,25.8729583 181.978892,27.7023593 L183.894459,28.4863884 C187.638522,29.9673321 188.422164,30.4029038 188.422164,32.1451906 C188.422164,33.9745917 187.46438,34.7586207 183.720317,34.7586207 C180.498681,34.7586207 176.667546,34.2359347 175.361478,34.1488203 L175.361478,38.3303085 C176.493404,38.6787659 180.498681,39.2885662 183.98153,39.2885662 C191.034301,39.4627949 194.255937,36.5880218 194.255937,31.7967332 M172.401055,38.7658802 L162.387863,25.6116152 L172.139842,13.5027223 L165.435356,13.5027223 L156.467018,24.7404719 L156.467018,3.83303085 L150.546174,3.83303085 L150.546174,38.6787659 L156.467018,38.6787659 L156.467018,26.831216 L165.435356,38.8529946 L172.401055,38.8529946 L172.401055,38.7658802 Z M145.496042,38.5045372 L145.496042,33.9745917 C142.274406,34.2359347 140.097625,34.4101633 138.704485,34.4101633 C135.047493,34.4101633 132.957784,33.1905626 132.957784,27.7023593 L132.957784,24.4791289 C132.957784,18.9909256 135.047493,17.8584392 138.704485,17.8584392 C140.097625,17.8584392 142.274406,18.0326679 145.496042,18.2940109 L145.496042,13.7640653 C144.364116,13.415608 141.577836,12.8058076 137.659631,12.8058076 C130.432718,12.8058076 127.036939,16.7259528 127.036939,24.4791289 L127.036939,27.7023593 C127.036939,35.2813067 130.432718,39.3756806 137.659631,39.3756806 C141.490765,39.4627949 144.277045,38.8529946 145.496042,38.5045372 M116.588391,27.7023593 C116.588391,32.5807623 114.934037,34.4101633 111.102902,34.4101633 C107.271768,34.4101633 105.617414,32.5807623 105.617414,27.7023593 L105.617414,24.5662432 C105.617414,19.6878403 107.358839,17.9455535 111.102902,17.9455535 C114.934037,17.9455535 116.588391,19.7749546 116.588391,24.5662432 L116.588391,27.7023593 Z M122.422164,27.7023593 L122.422164,24.5662432 C122.422164,16.6388385 118.416887,12.892922 111.015831,12.892922 C103.614776,12.892922 99.6094987,16.6388385 99.6094987,24.5662432 L99.6094987,27.7023593 C99.6094987,35.7168784 103.614776,39.4627949 111.015831,39.4627949 C118.416887,39.4627949 122.422164,35.7168784 122.422164,27.7023593 M93.9498681,3.92014519 L88.0290237,3.92014519 L88.0290237,38.7658802 L93.9498681,38.7658802 L93.9498681,3.92014519 Z M76.3614776,27.615245 C76.3614776,32.9292196 74.5329815,34.4101633 70.4406332,34.4101633 C68.6121372,34.4101633 67.0448549,34.2359347 66.0870712,34.2359347 L66.0870712,18.8166969 C67.6543536,18.0326679 70.1794195,17.8584392 71.3113456,17.8584392 C75.055409,17.8584392 76.3614776,19.4264973 76.3614776,24.0435572 L76.3614776,27.615245 Z M82.2823219,27.615245 L82.2823219,24.1306715 C82.2823219,16.4646098 79.060686,12.892922 72.0949868,12.892922 C70.1794195,12.892922 68.0026385,13.2413793 66.1741425,14.1125227 L66.1741425,3.92014519 L60.2532982,3.92014519 L60.2532982,38.7658802 C64.7810026,39.2885662 67.0448549,39.4627949 70.353562,39.4627949 C78.1899736,39.4627949 82.2823219,36.0653358 82.2823219,27.615245"
            fill="#FFFFFF"
          ></path>
          <path
            id="logo"
            d="M24,7.10542736e-15 C37.248,7.10542736e-15 48,10.752 48,24 C48,37.248 37.248,48 24,48 C10.752,48 0,37.248 0,24 C0,10.752 10.752,7.10542736e-15 24,7.10542736e-15 Z M35.424,29.664 L24,36.288 L12.576,29.664 L10.08,31.104 L10.08,34.656 L24,42.72 L24,39.168 L37.92,31.104 L35.424,29.664 Z M35.424,20.832 L24,27.456 L12.576,20.832 L10.176,22.272 L10.08,25.728 L24,33.792 L24,30.24 L37.92,22.272 L35.424,20.832 Z M24,5.28 L10.176,13.344 L10.08,16.896 L24,24.96 L24,21.408 L37.92,13.344 L24,5.28 Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
      <div className="pt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 800 240"
          className={twMerge("text-primary-contrast", className)}
        >
          <path
            className="fill-current"
            d="M640.53,96.32c-.57-1.64-1.45-3.16-2.65-4.55-1.2-1.39-2.69-2.56-4.45-3.51-1.77-.94-3.86-1.42-6.26-1.42-1.26,0-2.36-.41-3.31-1.23s-1.42-1.99-1.42-3.5c0-3.92-1.39-7.27-4.17-10.05-2.78-2.77-6.12-4.16-10.04-4.16h-37.88c-3.92,0-7.26,1.38-10.04,4.16-2.78,2.78-4.17,6.13-4.17,10.05h.01v18.94c0-3.91-1.4-7.26-4.17-10.04-2.78-2.78-6.13-4.17-10.04-4.17-1.26,0-2.37-.44-3.32-1.32-.94-.89-1.42-2.02-1.42-3.41,0-3.92-1.39-7.27-4.16-10.05-2.78-2.77-6.13-4.16-10.04-4.16h-28.42c-3.91,0-7.25,1.38-10.03,4.16-2.78,2.78-4.17,6.13-4.17,10.05,0,1.13-.45,2.21-1.33,3.22-.88,1.01-2.02,1.51-3.41,1.51-3.91,0-7.26,1.39-10.04,4.17s-4.16,6.13-4.16,10.04v37.9c0,3.23,.94,6.08,2.84,8.54-2.7-2.53-5.92-3.81-9.66-3.81h-9.47c-1.14,0-2.21-.4-3.22-1.23-1.01-.82-1.52-1.99-1.52-3.5V44.21c0-3.91-1.39-7.26-4.17-10.04-2.77-2.78-6.12-4.17-10.03-4.17s-7.26,1.39-10.04,4.17c-2.78,2.78-4.17,6.13-4.17,10.04v37.9c0-3.92-1.39-7.27-4.17-10.05-2.78-2.77-6.12-4.16-10.04-4.16s-7.26,1.38-10.04,4.16c-2.78,2.78-4.16,6.13-4.16,10.05v56.84c0,1.39-.45,2.53-1.33,3.41s-2.02,1.32-3.41,1.32h-28.41c-1.39,0-2.53-.44-3.41-1.32-.88-.88-1.33-2.02-1.33-3.41v-56.84c0-3.92-1.39-7.27-4.16-10.05-2.78-2.77-6.13-4.16-10.04-4.16s-7.26,1.38-10.04,4.16c-2.78,2.78-4.17,6.13-4.17,10.05v18.71c-.05-3.81-1.44-7.09-4.16-9.81-2.78-2.78-6.13-4.17-10.04-4.17-1.39,0-2.53-.44-3.41-1.32-.89-.89-1.33-2.02-1.33-3.42,0-3.91-1.39-7.26-4.17-10.04-2.77-2.77-6.12-4.17-10.03-4.17h-28.42c-1.13,0-2.21-.4-3.22-1.23-1.01-.82-1.51-1.99-1.51-3.5v-18.95c0-3.91-1.39-7.26-4.17-10.04-2.78-2.78-6.12-4.17-10.04-4.17s-7.26,1.39-10.04,4.17c-2.78,2.78-4.16,6.13-4.16,10.04v56.84c0-3.91-1.4-7.26-4.17-10.04-2.78-2.78-6.13-4.17-10.04-4.17-1.01,0-2.06-.41-3.13-1.23s-1.61-1.99-1.61-3.5c0-3.92-1.39-7.27-4.17-10.05-2.77-2.77-6.12-4.16-10.04-4.16h-47.35c-3.91,0-7.26,1.38-10.04,4.16-2.78,2.78-4.16,6.13-4.16,10.05s1.39,7.26,4.16,10.04c2.78,2.78,6.13,4.17,10.04,4.17h47.35c1.02,0,2.06,.41,3.13,1.23s1.61,1.99,1.61,3.5-.54,2.69-1.61,3.51-2.11,1.23-3.13,1.23h-47.35c-3.91,0-7.26,1.39-10.04,4.17-2.74,2.74-4.13,6.05-4.16,9.9v-18.81c0-3.91-1.4-7.26-4.17-10.04-2.78-2.78-6.13-4.17-10.04-4.17-1.39,0-2.53-.44-3.41-1.32-.88-.89-1.32-2.02-1.32-3.42,0-3.91-1.4-7.26-4.17-10.04-2.78-2.77-6.13-4.17-10.04-4.17h-28.41c-1.14,0-2.21-.4-3.22-1.23-1.01-.82-1.52-1.99-1.52-3.5v-18.95c0-3.91-1.39-7.26-4.17-10.04-2.77-2.78-6.12-4.17-10.03-4.17s-7.26,1.39-10.04,4.17c-2.78,2.78-4.17,6.13-4.17,10.04v113.69c0,3.91,1.39,7.26,4.17,10.04,2.77,2.78,6.12,4.17,10.04,4.17h47.35c3.91,0,7.26-1.4,10.04-4.17,2.77-2.78,4.17-6.13,4.17-10.04,0-1.52,.5-2.69,1.51-3.51,1.01-.82,2.08-1.23,3.22-1.23,3.91,0,7.26-1.39,10.04-4.17,2.78-2.78,4.17-6.13,4.17-10.04,0,3.91,1.39,7.26,4.17,10.04,2.77,2.78,6.12,4.17,10.03,4.17,1.14,0,2.21,.44,3.22,1.33,1.01,.88,1.52,2.02,1.52,3.41,0,3.91,1.39,7.26,4.17,10.04,2.77,2.78,6.12,4.17,10.03,4.17h47.36c3.91,0,7.26-1.39,10.04-4.17,2.78-2.78,4.17-6.13,4.17-10.04,0,3.91,1.39,7.26,4.16,10.04,2.78,2.78,6.13,4.17,10.04,4.17h47.36c3.91,0,7.26-1.4,10.03-4.17,2.78-2.78,4.17-6.13,4.17-10.04,0-1.52,.51-2.69,1.52-3.51,1.01-.82,2.08-1.23,3.22-1.23,3.91,0,7.26-1.39,10.04-4.17,2.73-2.74,4.12-6.03,4.16-9.88,.04,3.85,1.43,7.14,4.17,9.88,2.77,2.78,6.12,4.17,10.04,4.17,1.39,0,2.52,.47,3.41,1.42,.88,.95,1.32,2.06,1.32,3.32,0,3.91,1.39,7.26,4.17,10.04s6.12,4.17,10.04,4.17h28.41c1.39,0,2.53,.44,3.41,1.32,.88,.89,1.33,2.02,1.33,3.41s-.45,2.53-1.33,3.41c-.88,.89-2.02,1.33-3.41,1.33h-47.35c-3.92,0-7.27,1.39-10.04,4.17-2.78,2.77-4.17,6.13-4.17,10.04s1.39,7.27,4.17,10.04c2.77,2.78,6.12,4.17,10.04,4.17h47.35c3.91,0,7.26-1.39,10.04-4.17,2.78-2.78,4.17-6.13,4.17-10.04,0-1.26,.44-2.37,1.32-3.31,.88-.95,2.02-1.43,3.41-1.43,3.91,0,7.26-1.39,10.04-4.16,2.78-2.78,4.17-6.13,4.17-10.05v-37.89c0,3.91,1.39,7.26,4.17,10.04,2.77,2.78,6.12,4.17,10.04,4.17,1.13,0,2.2,.41,3.22,1.23,1,.82,1.51,1.99,1.51,3.51,0,3.91,1.39,7.26,4.17,10.04,2.77,2.78,6.12,4.17,10.04,4.17h9.47c3.91,0,7.26-1.4,10.03-4.17,2.78-2.78,4.17-6.13,4.17-10.04,0-3.24-.95-6.09-2.85-8.55,2.7,2.54,5.93,3.81,9.67,3.81,1.39,0,2.53,.44,3.41,1.33,.88,.88,1.33,2.02,1.33,3.41,0,3.91,1.39,7.26,4.17,10.04,2.77,2.78,6.12,4.17,10.03,4.17h28.42c3.91,0,7.26-1.4,10.04-4.17,2.77-2.78,4.16-6.13,4.16-10.04,0-1.01,.41-2.06,1.24-3.13,.81-1.07,1.98-1.61,3.5-1.61,3.91,0,7.26-1.39,10.04-4.17,2.78-2.78,4.17-6.13,4.17-10.04v18.95c0,3.91,1.38,7.26,4.16,10.04,2.78,2.78,6.13,4.17,10.04,4.17s7.26-1.4,10.04-4.17c2.78-2.78,4.17-6.13,4.17-10.04v-56.85c0-1.26,.44-2.37,1.32-3.31,.89-.95,2.02-1.42,3.41-1.42h18.94c1.14,0,2.21,.44,3.22,1.32,1.01,.89,1.52,2.02,1.52,3.41v56.85c0,3.91,1.39,7.26,4.17,10.04,2.77,2.78,6.12,4.17,10.03,4.17s7.27-1.4,10.04-4.17c2.78-2.78,4.17-6.13,4.17-10.04v-56.85c0-1.51-.28-3.09-.85-4.73ZM99.46,138.95c0,1.64-.5,2.84-1.51,3.6s-2.08,1.13-3.22,1.13h-28.41c-1.27,0-2.37-.44-3.32-1.32-.94-.88-1.42-2.02-1.42-3.41v-37.9c0-1.13,.44-2.21,1.33-3.22,.88-1.01,2.02-1.51,3.41-1.51h28.41c1.39,0,2.52,.47,3.41,1.42,.88,.94,1.32,2.05,1.32,3.31v37.9Zm93.2,3.41c-1.02,.88-2.09,1.32-3.23,1.32h-28.41c-1.13,0-2.21-.44-3.22-1.32s-1.51-2.02-1.51-3.41c0-1.14,.44-2.21,1.32-3.22,.89-1.01,2.02-1.52,3.41-1.52h28.41c1.39,0,2.53,.51,3.41,1.52,.89,1.01,1.33,2.08,1.33,3.22,0,1.39-.51,2.53-1.51,3.41Zm96.22-3.41c0,1.64-.51,2.84-1.51,3.6-1.02,.76-2.09,1.13-3.22,1.13h-28.41c-1.27,0-2.37-.44-3.32-1.32s-1.42-2.02-1.42-3.41v-37.9c0-1.13,.44-2.21,1.32-3.22,.89-1.01,2.02-1.51,3.41-1.51h28.42c1.38,0,2.52,.47,3.41,1.42,.88,.94,1.32,2.05,1.32,3.31v37.9Zm238.85,0c0,1.64-.51,2.84-1.51,3.6-1.02,.76-2.09,1.13-3.22,1.13h-28.41c-1.27,0-2.37-.44-3.32-1.32-.95-.88-1.42-2.02-1.42-3.41v-37.9c0-1.13,.44-2.2,1.33-3.22,.88-1.01,2.01-1.51,3.4-1.51h28.42c1.38,0,2.52,.47,3.41,1.42,.88,.94,1.32,2.05,1.32,3.31v37.9Zm142.59-91.14c-.47-1.28-.16-2.71,.81-3.68l13.11-13.11c.96-.96,2.4-1.28,3.68-.81l27.96,10.27c.69,.25,1.14,.91,1.14,1.64v6.12c0,.46-.18,.91-.51,1.23l-6.8,6.8c-.48,.48-1.2,.64-1.84,.4l-7.51-2.77-8.25-3.04c-.7-.26-1.38,.42-1.12,1.12l5.81,15.76c.24,.64,.08,1.36-.4,1.84l-6.05,6.05c-.68,.68-.68,1.79,0,2.47l6.08,6.08c.48,.48,.64,1.2,.4,1.84l-5.81,15.76c-.26,.7,.42,1.38,1.12,1.12l15.76-5.81c.64-.24,1.36-.08,1.84,.4l6.77,6.77c.33,.33,.51,.77,.51,1.23v6.12c0,.73-.45,1.38-1.14,1.64l-27.92,10.3c-1.28,.47-2.71,.16-3.68-.81l-13.11-13.11c-.96-.96-1.28-2.4-.81-3.68l10.27-27.83c.29-.78,.29-1.64,0-2.42l-10.3-27.92Zm96.3,58.16c.47,1.28,.16,2.71-.81,3.68l-13.11,13.11c-.96,.96-2.4,1.28-3.68,.81l-27.96-10.27c-.69-.25-1.14-.91-1.14-1.64v-6.12c0-.46,.18-.91,.51-1.23l6.8-6.8c.48-.48,1.2-.64,1.84-.4l7.51,2.77,8.25,3.04c.7,.26,1.38-.42,1.12-1.12l-5.81-15.76c-.24-.64-.08-1.36,.4-1.84l6.05-6.05c.68-.68,.68-1.79,0-2.47l-6.08-6.08c-.48-.48-.64-1.2-.4-1.84l5.81-15.76c.26-.7-.42-1.38-1.12-1.12l-15.76,5.81c-.64,.24-1.36,.08-1.84-.4l-6.77-6.77c-.33-.33-.51-.77-.51-1.23v-6.12c0-.73,.46-1.38,1.14-1.64l27.92-10.3c1.28-.47,2.71-.16,3.68,.81l13.11,13.11c.96,.96,1.28,2.4,.81,3.68l-10.27,27.83c-.29,.78-.29,1.64,0,2.42l10.3,27.92h0Z"
          />
        </svg>
      </div>
    </div>
  </Link>
);
