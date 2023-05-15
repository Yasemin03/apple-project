import React from "react";

export default function Tree({ className }) {
  return (
    <g>
      <path
        fill="#591f0f"
        strokeWidth="1.192"
        d="M900.98 480.35c59.37-30.53 96.17-120.4 96.17-127.18-9.04-9.05-47.47-20.35-84.77-29.39-29.39-38.43-64.57-57.3-77.99-85.9.5-10.8.19-20.31 3.39-19.21 16.25 45.19 129.93 106 140.15 89.9-7.88-12.39-21.75-26.53-28.25-45.82-8.12-24.07-24.14-53.09-35.04-74.6 4.01-5.33 5.36-4.62 12.43-4.52 4.07 17.59 61.46 141.57 82.53 127.72-1.9-21.15-10.68-120.24-18.46-156.96-1.77-8.35 14.36-1.74 18.46-3.54.6 17.7 19.2 145.8 19.2 145.8l27.7-86.17 31.1 2.53-33.9 70.08s-14.7 55.38-6.8 50.86 22.6-13.56 22.6-13.56l4.5 15.82c-28.8 5.14-69.2 112.05-54 143.54-6.3-4.06-103.73-5.08-119.02.6z"
      ></path>
      <g className={className}>
        <path
          fill="#008500"
          strokeWidth="1.192"
          d="M797.09 154.24c47.67-8 90.36-72.014 101.73 13.56 11.01 82.95-40.69 145.81-132.24 149.2s-54.98.87-55.39-55.38c-.53-74.62 39.43-99.57 85.9-107.38z"
        ></path>
        <path
          fill="#008500"
          strokeWidth="1.192"
          d="M1104.3 132.68c26 15.71 90.1 147.15 4.9 133.21-85.2-13.93-85.5 30.22-140.31-43.17-54.84-73.38-47.69-121.66 7.29-133.56 55.02-11.894 102.92 28.25 128.12 43.52z"
        ></path>
        <path
          fill="#008500"
          strokeWidth="1.363"
          d="M1051.6 150.25c6.9 23.6-96.28 127.54-167.52 68.7-71.24-58.85-128.7-37.21-91.08-106.88 37.61-69.663 107.67-89.122 180.71-61.452 73.09 27.67 71.19 76.702 77.89 99.632z"
        ></path>
      </g>
    </g>
  );
}
