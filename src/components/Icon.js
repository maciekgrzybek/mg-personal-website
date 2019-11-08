import React from 'react';

const Icon = ({ type, color = '#332f30' }) => {
  switch (type) {
    case 'devto':
      return (
        <svg
          viewBox="0 0 124 83"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
        >
          <path
            d="M38.053 30.992c-.967-.789-2.356-1.15-4.34-1.15h-2.955l.117 12.49.178 12.538 2.9-.061c2.11 0 3.194-.361 4.216-1.322 1.267-1.267 1.328-1.873 1.328-11.34 0-9.766-.06-10.01-1.444-11.155"
            fill={color}
            fill-rule="nonzero"
          />
          <path
            d="M93.956 57.767c-.845 2.172-3.262 4.044-5.134 4.044-.905 0-2.283-.789-3.433-1.994-1.628-1.628-2.289-3.256-4.222-10.673-1.267-4.822-3.311-12.605-4.584-17.366l-2.289-8.567h3.856c2.111 0 3.867.122 3.867.245 0 .3 5.966 23.277 6.45 24.783.244.783 1.627-3.556 3.744-11.761l3.367-12.967 3.805-.178c2.045-.122 3.734 0 3.734.178 0 .728-8.561 32.683-9.161 34.256m-24-27.923H57.283v9.05h7.845v6.573l-3.74.183-3.8.178v9.044l6.212.184 6.156.177v6.578H61.81c-7.9 0-8.261-.061-9.65-1.511l-1.505-1.45V42.628c0-15.495.06-16.278 1.266-17.845 1.206-1.572 1.267-1.572 9.65-1.572h8.384v6.633zM43.9 57.884c-2.294 2.96-5.422 3.927-12.967 3.927h-6.81v-38.6h7.233c8.505 0 11.038.906 13.327 4.645 1.328 2.172 1.45 3.016 1.628 13.144.245 11.461-.122 13.994-2.411 16.883m78.572-53.422A7.24 7.24 0 00118.55.544 7.162 7.162 0 00115.783 0H7.24a7.19 7.19 0 00-2.772.544 7.135 7.135 0 00-2.345 1.573A6.952 6.952 0 00.556 4.46 7.099 7.099 0 000 7.233v67.54c0 .96.183 1.883.556 2.771a7.007 7.007 0 001.566 2.345 7.12 7.12 0 002.345 1.567 7.2 7.2 0 002.772.555h108.544c.956 0 1.884-.189 2.767-.555a7.224 7.224 0 002.356-1.567 7.356 7.356 0 001.566-2.345 7.19 7.19 0 00.545-2.772V7.233a7.19 7.19 0 00-.545-2.772"
            fill={color}
            fill-rule="nonzero"
          />
        </svg>
      );
    case 'github':
      return (
        <svg
          viewBox="0 0 93 90"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
        >
          <path
            d="M92.078 46.039c0-25.428-20.617-46.04-46.04-46.04C20.618 0 0 20.612 0 46.04 0 66.217 12.989 83.367 31.06 89.578c1.1-.795 2.367-1.772 2.367-3.422 0-2.534-.05-9.05-.05-9.05s-2.006.344-4.85.344c-7.19 0-9.467-4.561-10.545-7.111-1.405-3.328-3.233-4.889-5.172-6.133-1.189-.773-1.461-1.673-.083-1.934 6.355-1.189 7.983 7.178 12.233 8.511 3.033.95 6.928.54 8.872-.71.256-2.55 2.106-4.762 3.645-5.929-10.8-1.027-17.211-4.76-20.528-10.76l-.361-.673-.828-1.905-.25-.684c-1.044-3.044-1.5-6.528-1.5-10.428 0-6.916 2.167-9.522 5.072-13.21-2.222-7.884.8-13.273.8-13.273s4.678-.967 13.517 5.333c4.794-2.044 17.567-2.21 23.611-.455 3.706-2.44 10.495-5.9 13.233-4.928.74 1.183 2.34 4.644.967 12.244.928 1.667 5.761 5.223 5.778 15.262-.072 3.7-.461 6.827-1.183 9.466l-.395 1.356s-.228.639-.478 1.244l-.294.673c-3.206 7-9.778 9.616-20.406 10.7 3.45 2.155 4.434 4.86 4.434 12.177 0 7.317-.1 8.3-.073 9.984.017 1.489 1.206 2.555 2.278 3.366 18.145-6.172 31.206-23.355 31.206-43.594"
            fill={color}
            fill-rule="nonzero"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
