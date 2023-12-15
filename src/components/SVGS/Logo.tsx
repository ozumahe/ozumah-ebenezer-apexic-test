import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="44"
        viewBox="0 0 47 44"
        fill="none"
      >
        <g clipPath="url(#clip0_1_368)">
          <path
            d="M25.4309 34.2499C13.9767 35.93 3.02786 29.1669 0.104858 18.5532C2.77549 22.6 6.79592 25.6662 11.5285 27.3048C10.9798 26.2266 10.6235 25.0927 10.4306 23.9159C8.63598 13.0923 15.8463 2.74458 27.0625 0C22.7892 2.52054 19.5254 6.32918 17.8048 10.7816C18.9472 10.2633 20.1486 9.91331 21.4099 9.73125C32.864 8.05121 43.8124 14.8563 46.7359 25.428C44.0653 21.4232 40.0294 18.3145 35.3123 16.6906C35.846 17.7688 36.2173 18.931 36.4097 20.1073C38.1898 30.9167 30.9945 41.2366 19.7783 43.9949C24.0511 41.4743 27.3154 37.694 29.036 33.2269C27.8936 33.7316 26.6917 34.0674 25.4309 34.2499Z"
            fill="#605DEC"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_368">
            <rect
              width="46.6311"
              height="43.9949"
              fill="white"
              transform="translate(0.104858)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="156"
        height="32"
        viewBox="0 0 156 32"
        fill="none"
      >
        <g clipPath="url(#clip0_1_249)">
          <path
            d="M13.054 31.9145C7.90797 31.9145 3.79116 30.6047 0.703552 27.9849L2.20058 25.2033C3.82235 26.4984 5.48467 27.4257 7.18753 27.9849C8.88416 28.5442 10.8552 28.8238 13.1008 28.8238C15.7517 28.8238 17.7946 28.3382 19.2292 27.3668C20.6639 26.3954 21.3812 25.0267 21.3812 23.2606C21.3812 22.2303 21.0381 21.3914 20.352 20.7439C19.6658 20.0963 18.7614 19.5812 17.6386 19.1985C16.5159 18.8159 15.0032 18.4185 13.1008 18.0064C10.5434 17.4471 8.44753 16.8584 6.81328 16.2403C5.17279 15.6221 3.8473 14.7391 2.83681 13.5911C1.82008 12.4431 1.31172 10.9419 1.31172 9.08751C1.31172 7.32139 1.80449 5.75249 2.79003 4.38081C3.76933 3.01502 5.17279 1.95535 7.0004 1.20181C8.82178 0.45415 10.9332 0.0803223 13.3347 0.0803223C15.6114 0.0803223 17.7415 0.418829 19.7251 1.09584C21.7024 1.77285 23.3772 2.74421 24.7495 4.00993L23.2992 6.79156C21.7398 5.52584 20.1586 4.60452 18.5555 4.02759C16.9462 3.45655 15.206 3.17102 13.3347 3.17102C10.7773 3.17102 8.775 3.67731 7.32788 4.68988C5.87452 5.70834 5.14784 7.13006 5.14784 8.95505C5.14784 10.5151 5.78719 11.6925 7.0659 12.4873C8.34461 13.282 10.2783 13.959 12.8669 14.5183C15.705 15.1659 17.9349 15.7605 19.5567 16.3021C21.1785 16.8496 22.5289 17.6679 23.608 18.757C24.6809 19.8461 25.2173 21.3031 25.2173 23.1281C25.2173 24.8942 24.7276 26.4396 23.7483 27.7642C22.7628 29.0888 21.35 30.1102 19.5099 30.8284C17.6698 31.5525 15.5178 31.9145 13.054 31.9145ZM42.5734 31.5613H38.6905V3.52425H27.2289V0.433546H54.0818V3.52425H42.5734V31.5613ZM70.4555 31.9145C67.399 31.9145 64.7387 31.267 62.4745 29.9718C60.2164 28.6767 58.4793 26.837 57.2629 24.4527C56.0404 22.0684 55.4291 19.2574 55.4291 16.0195C55.4291 12.7522 56.031 9.91758 57.2349 7.51567C58.4387 5.11964 60.1697 3.27993 62.4277 1.99656C64.6919 0.719069 67.3679 0.0803223 70.4555 0.0803223C73.5368 0.0803223 76.2096 0.719069 78.4739 1.99656C80.7319 3.27993 82.4628 5.11964 83.6667 7.51567C84.8643 9.91758 85.4631 12.7375 85.4631 15.9754C85.4631 19.2132 84.8581 22.0302 83.648 24.4262C82.4316 26.8281 80.6913 28.6767 78.4271 29.9718C76.1691 31.267 73.5119 31.9145 70.4555 31.9145ZM70.4555 28.8238C73.9485 28.8238 76.6681 27.7112 78.6142 25.4859C80.5666 23.2665 81.5428 20.0963 81.5428 15.9754C81.5428 11.8544 80.576 8.69013 78.6423 6.48249C76.7086 4.27485 73.9797 3.17102 70.4555 3.17102C66.9624 3.17102 64.2397 4.28073 62.2873 6.50015C60.3412 8.72545 59.3681 11.8839 59.3681 15.9754C59.3681 20.0669 60.3412 23.2311 62.2873 25.4682C64.2397 27.7053 66.9624 28.8238 70.4555 28.8238ZM112.597 21.4062L118.351 31.5613H114.14L108.527 21.5828C107.84 20.3759 107.039 19.5429 106.122 19.0837C105.199 18.6304 103.942 18.4038 102.351 18.4038H96.1762V31.5613H92.3868V0.433546H105.954C109.54 0.433546 112.279 1.18414 114.169 2.68534C116.052 4.18654 116.994 6.39418 116.994 9.30827C116.994 11.722 116.271 13.6735 114.823 15.1629C113.37 16.6465 111.302 17.5796 108.62 17.9622C109.462 18.1977 110.205 18.5951 110.847 19.1544C111.483 19.7136 112.066 20.4642 112.597 21.4062ZM96.1762 15.4014H105.626C108.184 15.4014 110.095 14.901 111.362 13.9002C112.622 12.8994 113.252 11.3835 113.252 9.35242C113.252 7.35083 112.628 5.86435 111.38 4.89298C110.133 3.92162 108.215 3.43594 105.626 3.43594H96.1762V15.4014ZM140.151 22.9957L152.502 0.433546H155.636V31.5613H152.127L152.174 7.45385L141.461 26.6162H138.748L127.988 7.63046L128.035 31.5613H124.479V0.433546H127.66L140.151 22.9957Z"
            fill="#1A1A1A"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_249">
            <rect
              width="154.942"
              height="31.8342"
              fill="white"
              transform="translate(0.69873 0.0803223)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
