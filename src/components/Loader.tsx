import React from "react";

const Loader = () => {
  return (
<div className=" w-[2rem] h-[1rem] p-0 m-0">
<svg
      fill="hsl(228, 97%, 42%)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <g>
        <circle cx="12" cy="3" r="1">
          <animate
            id="spinner_7Z73"
            begin="0;spinner_tKsu.end-0.5s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="16.50" cy="4.21" r="1">
          <animate
            id="spinner_Wd87"
            begin="spinner_7Z73.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="7.50" cy="4.21" r="1">
          <animate
            id="spinner_tKsu"
            begin="spinner_9Qlc.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="19.79" cy="7.50" r="1">
          <animate
            id="spinner_lMMO"
            begin="spinner_Wd87.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="4.21" cy="7.50" r="1">
          <animate
            id="spinner_9Qlc"
            begin="spinner_Khxv.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="21.00" cy="12.00" r="1">
          <animate
            id="spinner_5L9t"
            begin="spinner_lMMO.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="3.00" cy="12.00" r="1">
          <animate
            id="spinner_Khxv"
            begin="spinner_ld6P.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="19.79" cy="16.50" r="1">
          <animate
            id="spinner_BfTD"
            begin="spinner_5L9t.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="4.21" cy="16.50" r="1">
          <animate
            id="spinner_ld6P"
            begin="spinner_XyBs.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="16.50" cy="19.79" r="1">
          <animate
            id="spinner_7gAK"
            begin="spinner_BfTD.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="7.50" cy="19.79" r="1">
          <animate
            id="spinner_XyBs"
            begin="spinner_HiSl.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <circle cx="12" cy="21" r="1">
          <animate
            id="spinner_HiSl"
            begin="spinner_7gAK.begin+0.1s"
            attributeName="r"
            calcMode="spline"
            dur="0.6s"
            values="1;2;1"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="6s"
          values="360 12 12;0 12 12"
          repeatCount="indefinite"
        />
      </g>
    </svg>
</div>
  );
};

export default Loader;
