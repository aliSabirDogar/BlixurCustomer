import * as React from 'react';
import Svg, {
  Circle,
  Rect,
  Path,
  Ellipse,
  Defs,
  Stop,
  RadialGradient,
  G,
  Pattern,
  Image,
  LinearGradient,
  ClipPath,
} from 'react-native-svg';

export default function AddLink() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="329.683"
      height="205.898"
      viewBox="0 0 329.683 205.898">
      <Defs>
        <ClipPath id="clipPath">
          <Rect
            id="Rectangle_1721"
            dataName="Rectangle 1721"
            width="172.319"
            height="152.046"
          />
        </ClipPath>
        <LinearGradient
          id="linear-gradient"
          x1="14.4"
          y1="0.284"
          x2="13.306"
          y2="1.487"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#ff928e" />
          <Stop offset="1" stopColor="#feb3b1" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-2"
          x1="16.671"
          y1="2.992"
          x2="16.638"
          y2="5.303"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#fe7062" />
          <Stop offset="1" stopColor="#ff928e" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-3"
          x1="1.201"
          y1="-0.308"
          x2="-0.989"
          y2="2.768"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-4"
          x1="-139.047"
          y1="14.152"
          x2="-140.152"
          y2="12.874"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-5"
          x1="-386.786"
          y1="50.062"
          x2="-389.872"
          y2="45.321"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-6"
          x1="0.514"
          y1="0.504"
          x2="-1.454"
          y2="0.651"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-7"
          x1="33.545"
          y1="0.521"
          x2="34.54"
          y2="0.521"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#09005d" />
          <Stop offset="1" stopColor="#1a0f91" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-8"
          x1="3.511"
          y1="-0.133"
          x2="1.395"
          y2="0.334"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-9"
          x1="28.068"
          y1="0.528"
          x2="29.061"
          y2="0.528"
          xlinkHref="#linear-gradient-7"
        />
        <LinearGradient
          id="linear-gradient-10"
          x1="18.053"
          y1="1.47"
          x2="21.023"
          y2="-0.707"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-11"
          x1="-35.215"
          y1="-23.954"
          x2="-33.405"
          y2="-22.684"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-12"
          x1="-104.216"
          y1="-18.614"
          x2="-98.845"
          y2="-17.626"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-13"
          x1="-0.492"
          y1="-4.962"
          x2="-0.41"
          y2="-1.165"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-14"
          x1="-4.949"
          y1="-4.017"
          x2="-4.707"
          y2="-0.85"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-15"
          x1="-2.851"
          y1="58.528"
          x2="-3.194"
          y2="62.936"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#50e7b7" />
          <Stop offset="0.996" stopColor="#323992" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-16"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#dae3fe" />
          <Stop offset="1" stopColor="#e9effd" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-17"
          x1="-2.631"
          y1="58.538"
          x2="-2.974"
          y2="62.947"
          xlinkHref="#linear-gradient-15"
        />
        <LinearGradient
          id="linear-gradient-18"
          x1="0"
          y1="0.5"
          x2="1.001"
          y2="0.5"
          xlinkHref="#linear-gradient-16"
        />
        <LinearGradient
          id="linear-gradient-19"
          x1="2.907"
          y1="17.451"
          x2="3.578"
          y2="16.673"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#e1473d" />
          <Stop offset="1" stopColor="#e9605a" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-20"
          x1="4.075"
          y1="16.642"
          x2="2.024"
          y2="19.741"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-21"
          x1="-8.088"
          y1="1.284"
          x2="-10.361"
          y2="4.266"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-22"
          x1="1.846"
          y1="10.919"
          x2="2.517"
          y2="10.14"
          xlinkHref="#linear-gradient-19"
        />
        <LinearGradient
          id="linear-gradient-23"
          x1="2.978"
          y1="9.885"
          x2="0.927"
          y2="12.984"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-24"
          x1="-3.859"
          y1="0.85"
          x2="-6.133"
          y2="3.832"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-25"
          x1="1.32"
          y1="10.931"
          x2="1.99"
          y2="10.153"
          xlinkHref="#linear-gradient-19"
        />
        <LinearGradient
          id="linear-gradient-26"
          x1="2.434"
          y1="9.897"
          x2="0.382"
          y2="12.997"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-27"
          x1="-4.166"
          y1="1.096"
          x2="-6.44"
          y2="4.077"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-28"
          x1="2.406"
          y1="14.749"
          x2="3.077"
          y2="13.97"
          xlinkHref="#linear-gradient-19"
        />
        <LinearGradient
          id="linear-gradient-29"
          x1="3.557"
          y1="13.847"
          x2="1.506"
          y2="16.947"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-30"
          x1="-5.496"
          y1="1.799"
          x2="-7.77"
          y2="4.78"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-31"
          x1="-0.017"
          y1="1.03"
          x2="0.905"
          y2="0.068"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-32"
          x1="0.002"
          y1="0.995"
          x2="0.861"
          y2="0.124"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-33"
          x1="0.882"
          y1="0.487"
          x2="-0.049"
          y2="0.563"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-34"
          x1="3.583"
          y1="0.326"
          x2="0.525"
          y2="0.492"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-35"
          x1="32.399"
          y1="0.5"
          x2="33.399"
          y2="0.5"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#f9b776" />
          <Stop offset="1" stopColor="#f47960" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-36"
          x1="29.027"
          y1="0.5"
          x2="30.027"
          y2="0.5"
          xlinkHref="#linear-gradient-35"
        />
        <LinearGradient
          id="linear-gradient-37"
          x1="0.901"
          y1="0.003"
          x2="-0.264"
          y2="1.683"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-38"
          x1="0.241"
          y1="-1.082"
          x2="0.917"
          y2="3.051"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-39"
          x1="-60.217"
          y1="-24.123"
          x2="-61.196"
          y2="-22.714"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-40"
          x1="-85.423"
          y1="5.486"
          x2="-85.189"
          y2="6.625"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#3c4c5a" />
          <Stop offset="1" stopColor="#131617" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-41"
          x1="-199.21"
          y1="-120.285"
          x2="-202.402"
          y2="-113.454"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-42"
          x1="0.747"
          y1="0.208"
          x2="-1.765"
          y2="3.902"
          xlinkHref="#linear-gradient-2"
        />
        <LinearGradient
          id="linear-gradient-43"
          x1="0.008"
          y1="0.958"
          x2="1.429"
          y2="-0.146"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-44"
          x1="0"
          y1="0.5"
          x2="1"
          y2="0.5"
          xlinkHref="#linear-gradient-16"
        />
        <LinearGradient
          id="linear-gradient-45"
          x1="-107.253"
          y1="112.177"
          x2="-103.215"
          y2="109.35"
          xlinkHref="#linear-gradient"
        />
        <LinearGradient
          id="linear-gradient-46"
          x1="-145.494"
          y1="3.157"
          x2="-134.835"
          y2="-2.25"
          xlinkHref="#linear-gradient-19"
        />
        <LinearGradient
          id="linear-gradient-47"
          x1="1.751"
          y1="-4.12"
          x2="-0.071"
          y2="2.488"
          xlinkHref="#linear-gradient-19"
        />
      </Defs>
      <G id="Illustration" transform="translate(-3080.556 -353.2)">
        <G
          id="Group_1091"
          dataName="Group 1091"
          transform="translate(3080.556 353.2)">
          <Path
            id="Path_1153"
            dataName="Path 1153"
            d="M3430.969,545.41c14.954-3.956,27.128-12.642,29.963-28.866,3.726-21.323-6.3-36.589-18.9-52.2-8.354-10.35-10.437-20.337-8.351-32.933,3.032-18.316,7.424-35.386-6.24-50.847-9.047-10.238-22.949-15.556-36.521-15.062-19.557.712-31.994,13.935-48.683,21.831-15.708,7.433-35.142,12.781-52.382,8.11-21.175-5.737-35.954-24.677-58.851-25.9-9.585-.512-19.779,2.525-26.969,9.1-7.578,6.931-10.9,17.65-21.53,21.079-4.911,1.584-10.225.958-15.341,1.6-20.805,2.612-28.613,23.273-25.825,41.816a335.084,335.084,0,0,0,21.589,77.524c2.933,7.125,6.159,14.232,10.94,20.273,11.251,14.217,26.59,13.769,43.231,13.958,20.782.235,41.542-.937,62.307-1.59q44.7-1.406,89.364-3.6C3388.509,548.728,3411.684,550.511,3430.969,545.41Z"
            transform="translate(-3132.038 -363.689)"
            fill="#afb5b8"
          />
          <G
            id="Group_1033"
            dataName="Group 1033"
            transform="translate(141.67 0)">
            <G id="Group_1032" dataName="Group 1032" clipPath="url(#clipPath)">
              <G
                id="Group_1018"
                dataName="Group 1018"
                transform="translate(58.3 22.951)">
                <Path
                  id="Path_1154"
                  dataName="Path 1154"
                  d="M4461.088,519.859a2.908,2.908,0,0,1,2.867-2.869h59.083a3.18,3.18,0,0,1,3.139,2.958V662.516a3.119,3.119,0,0,1-3.079,2.888l-61.775-.17a2.9,2.9,0,0,1-2.06-.868,2.948,2.948,0,0,1-.827-2.091Z"
                  transform="translate(-4458.437 -516.99)"
                />
                <G
                  id="Group_1017"
                  dataName="Group 1017"
                  transform="translate(7.305 8.09)"
                  opacity="0.5">
                  <G
                    id="Group_1007"
                    dataName="Group 1007"
                    transform="translate(1.144)">
                    <Path
                      id="Path_1155"
                      dataName="Path 1155"
                      d="M4776.06,581.36l16.832-.023.134-8.687h-16.848Z"
                      transform="translate(-4738.346 -572.65)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1156"
                      dataName="Path 1156"
                      d="M4646.25,581.356l16.814-.023.116-8.683h-16.832Z"
                      transform="translate(-4627.402 -572.65)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1157"
                      dataName="Path 1157"
                      d="M4516.57,581.352l16.8-.023.1-8.678h-16.813Z"
                      transform="translate(-4516.57 -572.65)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1009"
                    dataName="Group 1009"
                    transform="translate(1 15.662)">
                    <Path
                      id="Path_1158"
                      dataName="Path 1158"
                      d="M4774.61,689.137l16.8.01.134-8.63-16.818-.007Z"
                      transform="translate(-4736.962 -680.495)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1159"
                      dataName="Path 1159"
                      d="M4645.03,689.082l16.785.012.115-8.626-16.8-.007Z"
                      transform="translate(-4626.215 -680.453)"
                      fill="#fff"
                    />
                    <G id="Group_1008" dataName="Group 1008">
                      <Path
                        id="Path_1160"
                        dataName="Path 1160"
                        d="M4515.58,689.027l16.768.012.1-8.623-16.785-.006Z"
                        transform="translate(-4515.58 -680.41)"
                        fill="#fff"
                      />
                    </G>
                  </G>
                  <G
                    id="Group_1010"
                    dataName="Group 1010"
                    transform="translate(0.855 31.161)">
                    <Path
                      id="Path_1161"
                      dataName="Path 1161"
                      d="M4773.17,795.867l16.773.017.133-8.6-16.79-.013Z"
                      transform="translate(-4735.586 -787.238)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1162"
                      dataName="Path 1162"
                      d="M4643.81,795.752l16.756.017.115-8.6-16.772-.015Z"
                      transform="translate(-4625.028 -787.144)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1163"
                      dataName="Path 1163"
                      d="M4514.58,795.638l16.741.019.1-8.592-16.757-.015Z"
                      transform="translate(-4514.58 -787.05)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1011"
                    dataName="Group 1011"
                    transform="translate(0.712 46.608)">
                    <Path
                      id="Path_1164"
                      dataName="Path 1164"
                      d="M4771.73,902.218l16.745.025.132-8.571-16.76-.022Z"
                      transform="translate(-4734.213 -893.604)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1165"
                      dataName="Path 1165"
                      d="M4642.6,902.053l16.727.025.113-8.566-16.743-.022Z"
                      transform="translate(-4623.852 -893.467)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1166"
                      dataName="Path 1166"
                      d="M4513.6,901.889l16.71.025.1-8.562-16.727-.022Z"
                      transform="translate(-4513.6 -893.33)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1012"
                    dataName="Group 1012"
                    transform="translate(0.568 62.002)">
                    <Path
                      id="Path_1167"
                      dataName="Path 1167"
                      d="M4770.3,1008.207l16.715.032.131-8.542-16.73-.028Z"
                      transform="translate(-4732.847 -999.609)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1168"
                      dataName="Path 1168"
                      d="M4641.39,1007.993l16.7.032.114-8.537-16.714-.028Z"
                      transform="translate(-4622.673 -999.429)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1169"
                      dataName="Path 1169"
                      d="M4512.61,1007.779l16.682.031.095-8.531-16.7-.028Z"
                      transform="translate(-4512.61 -999.25)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1013"
                    dataName="Group 1013"
                    transform="translate(0.426 77.341)">
                    <Path
                      id="Path_1170"
                      dataName="Path 1170"
                      d="M4768.87,1113.828l16.687.038.131-8.511-16.7-.035Z"
                      transform="translate(-4731.483 -1105.243)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1171"
                      dataName="Path 1171"
                      d="M4640.19,1113.564l16.669.038.113-8.508-16.686-.033Z"
                      transform="translate(-4621.505 -1105.021)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1172"
                      dataName="Path 1172"
                      d="M4511.63,1113.289l16.653.038.094-8.5-16.669-.035Z"
                      transform="translate(-4511.63 -1104.79)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1014"
                    dataName="Group 1014"
                    transform="translate(0.283 92.629)">
                    <Path
                      id="Path_1173"
                      dataName="Path 1173"
                      d="M4767.45,1219.089l16.657.044.131-8.482-16.673-.041Z"
                      transform="translate(-4730.127 -1210.518)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1174"
                      dataName="Path 1174"
                      d="M4638.99,1218.765l16.64.045.113-8.478-16.657-.042Z"
                      transform="translate(-4620.337 -1210.245)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1175"
                      dataName="Path 1175"
                      d="M4510.65,1218.449l16.624.045.094-8.473-16.64-.041Z"
                      transform="translate(-4510.65 -1209.98)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1015"
                    dataName="Group 1015"
                    transform="translate(0.141 107.864)">
                    <Path
                      id="Path_1176"
                      dataName="Path 1176"
                      d="M4766.03,1323.98l16.628.051.13-8.453-16.645-.048Z"
                      transform="translate(-4728.771 -1315.424)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1177"
                      dataName="Path 1177"
                      d="M4637.79,1323.614l16.612.052.112-8.45-16.628-.046Z"
                      transform="translate(-4619.169 -1315.116)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1178"
                      dataName="Path 1178"
                      d="M4509.67,1323.241l16.6.051.094-8.444-16.611-.048Z"
                      transform="translate(-4509.67 -1314.8)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1016"
                    dataName="Group 1016"
                    transform="translate(0 123.046)">
                    <Path
                      id="Path_1179"
                      dataName="Path 1179"
                      d="M4764.62,1428.521l16.6.058.13-8.425-16.617-.054Z"
                      transform="translate(-4727.425 -1419.978)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1180"
                      dataName="Path 1180"
                      d="M4636.6,1428.1l16.583.058.112-8.421-16.6-.054Z"
                      transform="translate(-4618.011 -1419.619)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1181"
                      dataName="Path 1181"
                      d="M4508.7,1427.672l16.567.058.095-8.417-16.583-.054Z"
                      transform="translate(-4508.7 -1419.26)"
                      fill="#fff"
                    />
                  </G>
                </G>
              </G>
              <G
                id="Group_1029"
                dataName="Group 1029"
                transform="translate(110.886 69.453)">
                <Path
                  id="Path_1182"
                  dataName="Path 1182"
                  d="M4822.581,838.556c.026-.881,1.146-1.606,2.517-1.606h51.86c1.391,0,2.755.763,2.755,1.656v79.787a1.572,1.572,0,0,1-.859,1.144,3.584,3.584,0,0,1-1.844.472l-54.222-.095a3.387,3.387,0,0,1-1.807-.485,1.4,1.4,0,0,1-.726-1.17Z"
                  transform="translate(-4820.256 -836.95)"
                />
                <G
                  id="Group_1028"
                  dataName="Group 1028"
                  transform="translate(6.41 4.529)"
                  opacity="0.5">
                  <G
                    id="Group_1019"
                    dataName="Group 1019"
                    transform="translate(1.003)">
                    <Path
                      id="Path_1183"
                      dataName="Path 1183"
                      d="M5099.021,872.985l14.773-.013.118-4.862h-14.789Z"
                      transform="translate(-5065.918 -868.11)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1184"
                      dataName="Path 1184"
                      d="M4985.09,872.982l14.758-.013.1-4.859h-14.774Z"
                      transform="translate(-4968.546 -868.11)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1185"
                      dataName="Path 1185"
                      d="M4871.26,872.979l14.745-.012.084-4.857h-14.757Z"
                      transform="translate(-4871.26 -868.11)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1020"
                    dataName="Group 1020"
                    transform="translate(0.876 8.764)">
                    <Path
                      id="Path_1186"
                      dataName="Path 1186"
                      d="M5097.75,933.3l14.749.006.116-4.83-14.762,0Z"
                      transform="translate(-5064.706 -928.461)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1187"
                      dataName="Path 1187"
                      d="M4984.01,933.265l14.734.007.1-4.828-14.748,0Z"
                      transform="translate(-4967.497 -928.436)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1188"
                      dataName="Path 1188"
                      d="M4870.391,933.234l14.718.006.085-4.825-14.733,0Z"
                      transform="translate(-4870.391 -928.41)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1021"
                    dataName="Group 1021"
                    transform="translate(0.75 17.439)">
                    <Path
                      id="Path_1189"
                      dataName="Path 1189"
                      d="M5096.49,993.031l14.721.01.118-4.814-14.738-.007Z"
                      transform="translate(-5063.502 -988.203)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1190"
                      dataName="Path 1190"
                      d="M4982.951,992.968l14.707.01.1-4.811-14.721-.007Z"
                      transform="translate(-4966.465 -988.151)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1191"
                      dataName="Path 1191"
                      d="M4869.52,992.906l14.692.01.084-4.809-14.707-.007Z"
                      transform="translate(-4869.52 -988.1)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1022"
                    dataName="Group 1022"
                    transform="translate(0.624 26.084)">
                    <Path
                      id="Path_1192"
                      dataName="Path 1192"
                      d="M5095.23,1052.553l14.7.015.117-4.8-14.711-.012Z"
                      transform="translate(-5062.299 -1047.734)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1193"
                      dataName="Path 1193"
                      d="M4981.88,1052.462l14.682.013.1-4.793-14.7-.012Z"
                      transform="translate(-4965.423 -1047.657)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1194"
                      dataName="Path 1194"
                      d="M4868.65,1052.369l14.667.015.084-4.792-14.682-.012Z"
                      transform="translate(-4868.65 -1047.58)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1023"
                    dataName="Group 1023"
                    transform="translate(0.499 34.698)">
                    <Path
                      id="Path_1195"
                      dataName="Path 1195"
                      d="M5093.97,1111.867l14.67.017.117-4.779-14.685-.016Z"
                      transform="translate(-5061.097 -1107.055)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1196"
                      dataName="Path 1196"
                      d="M4980.82,1111.746l14.657.017.1-4.777-14.671-.016Z"
                      transform="translate(-4964.392 -1106.953)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1197"
                      dataName="Path 1197"
                      d="M4867.79,1111.623l14.641.018.085-4.775-14.656-.016Z"
                      transform="translate(-4867.79 -1106.85)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1024"
                    dataName="Group 1024"
                    transform="translate(0.372 43.284)">
                    <Path
                      id="Path_1198"
                      dataName="Path 1198"
                      d="M5092.72,1170.981l14.646.02.114-4.763-14.66-.019Z"
                      transform="translate(-5059.902 -1166.176)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1199"
                      dataName="Path 1199"
                      d="M4979.76,1170.828l14.631.022.1-4.761-14.646-.019Z"
                      transform="translate(-4963.36 -1166.048)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1200"
                      dataName="Path 1200"
                      d="M4866.92,1170.677l14.617.02.084-4.758-14.631-.019Z"
                      transform="translate(-4866.92 -1165.92)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1025"
                    dataName="Group 1025"
                    transform="translate(0.247 51.84)">
                    <Path
                      id="Path_1201"
                      dataName="Path 1201"
                      d="M5091.47,1229.885l14.62.025.115-4.747-14.635-.023Z"
                      transform="translate(-5058.709 -1225.089)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1202"
                      dataName="Path 1202"
                      d="M4978.71,1229.7l14.607.026.1-4.745-14.62-.023Z"
                      transform="translate(-4962.337 -1224.935)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1203"
                      dataName="Path 1203"
                      d="M4866.06,1229.53l14.592.025.083-4.742-14.605-.022Z"
                      transform="translate(-4866.06 -1224.79)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1026"
                    dataName="Group 1026"
                    transform="translate(0.124 60.365)">
                    <Path
                      id="Path_1204"
                      dataName="Path 1204"
                      d="M5090.22,1288.589l14.6.029.113-4.731-14.609-.028Z"
                      transform="translate(-5057.517 -1283.8)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1205"
                      dataName="Path 1205"
                      d="M4977.66,1288.376l14.58.029.1-4.728-14.595-.028Z"
                      transform="translate(-4961.317 -1283.621)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1206"
                      dataName="Path 1206"
                      d="M4865.21,1288.173l14.566.029.083-4.726-14.58-.026Z"
                      transform="translate(-4865.21 -1283.45)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_1027"
                    dataName="Group 1027"
                    transform="translate(0 68.862)">
                    <Path
                      id="Path_1207"
                      dataName="Path 1207"
                      d="M5088.98,1347.092l14.57.033.115-4.715-14.585-.031Z"
                      transform="translate(-5056.334 -1342.312)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1208"
                      dataName="Path 1208"
                      d="M4976.61,1346.859l14.556.033.1-4.712-14.569-.031Z"
                      transform="translate(-4960.296 -1342.115)"
                      fill="#fff"
                    />
                    <Path
                      id="Path_1209"
                      dataName="Path 1209"
                      d="M4864.36,1346.618l14.542.033.083-4.71-14.556-.031Z"
                      transform="translate(-4864.36 -1341.91)"
                      fill="#fff"
                    />
                  </G>
                </G>
              </G>
              <G
                id="Group_1031"
                dataName="Group 1031"
                transform="translate(5.63 78.979)">
                <Path
                  id="Path_1210"
                  dataName="Path 1210"
                  d="M4098.489,903.391c.018-.5.769-.9,1.69-.9h55.908c.935,0,1.926.414,1.926.92v70.721c0,.378-.4.74-.888,1.007a4.268,4.268,0,0,1-1.918.416l-56.52-.084a4.054,4.054,0,0,1-1.884-.427,1.214,1.214,0,0,1-.755-1.023Z"
                  transform="translate(-4096.047 -902.49)"
                  fill="#707070"
                />
                <G
                  id="Group_1030"
                  dataName="Group 1030"
                  transform="translate(8.53 3.737)"
                  opacity="0.51">
                  <Path
                    id="Path_1211"
                    dataName="Path 1211"
                    d="M4333.76,929.475l18.289-.035-.007-1.24-18.268.032Z"
                    transform="translate(-4307.742 -928.2)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1212"
                    dataName="Path 1212"
                    d="M4333.42,960.785l18.364-.045-.007-1.25-18.343.042Z"
                    transform="translate(-4307.451 -954.942)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1213"
                    dataName="Path 1213"
                    d="M4333.07,992.347l18.439-.057-.006-1.26-18.419.054Z"
                    transform="translate(-4307.151 -981.898)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1214"
                    dataName="Path 1214"
                    d="M4332.72,1024.17l18.516-.068-.007-1.272-18.495.065Z"
                    transform="translate(-4306.853 -1009.077)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1215"
                    dataName="Path 1215"
                    d="M4332.37,1056.262l18.592-.08-.006-1.282-18.573.077Z"
                    transform="translate(-4306.553 -1036.485)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1216"
                    dataName="Path 1216"
                    d="M4331.65,1121.248l18.749-.1-.007-1.3-18.727.1Z"
                    transform="translate(-4305.938 -1091.987)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1217"
                    dataName="Path 1217"
                    d="M4330.55,1220.8l18.988-.141-.007-1.337-18.967.138Z"
                    transform="translate(-4304.998 -1177.009)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1218"
                    dataName="Path 1218"
                    d="M4332.01,1088.624l18.67-.092-.007-1.292-18.648.089Z"
                    transform="translate(-4306.246 -1064.125)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1219"
                    dataName="Path 1219"
                    d="M4331.29,1154.151l18.827-.116-.007-1.315-18.806.113Z"
                    transform="translate(-4305.63 -1120.088)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1220"
                    dataName="Path 1220"
                    d="M4330.92,1187.335l18.909-.129-.007-1.325-18.888.125Z"
                    transform="translate(-4305.314 -1148.429)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1221"
                    dataName="Path 1221"
                    d="M4330.18,1254.551l19.07-.154-.007-1.347-19.048.15Z"
                    transform="translate(-4304.682 -1205.837)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1222"
                    dataName="Path 1222"
                    d="M4329.81,1288.586l19.15-.167-.007-1.359-19.128.163Z"
                    transform="translate(-4304.366 -1234.903)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1223"
                    dataName="Path 1223"
                    d="M4329.43,1322.912l19.233-.18-.007-1.372-19.211.177Z"
                    transform="translate(-4304.041 -1264.218)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1224"
                    dataName="Path 1224"
                    d="M4329.05,1357.538l19.315-.195-.007-1.384-19.294.19Z"
                    transform="translate(-4303.716 -1293.79)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1225"
                    dataName="Path 1225"
                    d="M4168.79,929.759l18.4-.035.02-1.244-18.382.032Z"
                    transform="translate(-4166.748 -928.439)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1226"
                    dataName="Path 1226"
                    d="M4167.76,961.169l18.48-.045.019-1.254-18.458.042Z"
                    transform="translate(-4165.867 -955.267)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1227"
                    dataName="Path 1227"
                    d="M4166.72,992.833l18.557-.058.021-1.264-18.535.054Z"
                    transform="translate(-4164.979 -982.309)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1228"
                    dataName="Path 1228"
                    d="M4165.68,1024.763l18.634-.068.02-1.275-18.612.065Z"
                    transform="translate(-4164.09 -1009.581)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1229"
                    dataName="Path 1229"
                    d="M4164.63,1056.956l18.711-.08.02-1.286-18.689.077Z"
                    transform="translate(-4163.192 -1037.075)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1230"
                    dataName="Path 1230"
                    d="M4162.49,1122.161l18.871-.1.021-1.307-18.848.1Z"
                    transform="translate(-4161.364 -1092.765)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1231"
                    dataName="Path 1231"
                    d="M4159.23,1222.044l19.112-.142.021-1.342-19.089.138Z"
                    transform="translate(-4158.577 -1178.068)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1232"
                    dataName="Path 1232"
                    d="M4163.56,1089.419l18.791-.093.021-1.3-18.768.089Z"
                    transform="translate(-4162.278 -1064.8)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1233"
                    dataName="Path 1233"
                    d="M4161.41,1155.175l18.951-.116.02-1.318-18.927.113Z"
                    transform="translate(-4160.441 -1120.96)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1234"
                    dataName="Path 1234"
                    d="M4160.32,1188.469l19.03-.129.022-1.33-19.009.125Z"
                    transform="translate(-4159.509 -1149.395)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1235"
                    dataName="Path 1235"
                    d="M4158.12,1255.907l19.193-.154.021-1.353-19.171.151Z"
                    transform="translate(-4157.629 -1206.99)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1236"
                    dataName="Path 1236"
                    d="M4157,1290.062l19.278-.167.022-1.365-19.255.164Z"
                    transform="translate(-4156.671 -1236.16)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1237"
                    dataName="Path 1237"
                    d="M4155.87,1324.508l19.361-.182.023-1.376-19.339.179Z"
                    transform="translate(-4155.706 -1265.577)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_1238"
                    dataName="Path 1238"
                    d="M4154.74,1359.254l19.445-.2.022-1.388-19.422.192Z"
                    transform="translate(-4154.74 -1295.251)"
                    fill="#fff"
                  />
                </G>
              </G>
            </G>
          </G>
          <G
            id="Group_1036"
            dataName="Group 1036"
            transform="translate(0 35.605)">
            <G
              id="Group_1034"
              dataName="Group 1034"
              transform="translate(15.978)">
              <Path
                id="Path_1239"
                dataName="Path 1239"
                d="M3274.247,682.348c-3.62-13.6-11.338-24.669-20.779-31.421a39.925,39.925,0,0,1-16.148-25.276q-.293-1.609-.723-3.229c-4.354-16.351-17.9-26.937-30.26-23.647s-18.848,19.214-14.493,35.565a39.723,39.723,0,0,0,3.735,9.236,40.11,40.11,0,0,1,4.184,29.3,58.853,58.853,0,0,0,.523,29.17c4.048,15.2,13.22,27.251,24.195,33.632a39.318,39.318,0,0,1,10.858,9.3c5,6.21,12.31,9.373,19.247,7.526,7.485-1.993,12.443-9.261,13.185-17.989a41.961,41.961,0,0,1,3.911-14.224C3276.651,709.685,3277.908,696.094,3274.247,682.348Z"
                transform="translate(-3190.489 -598.176)"
                fill="#707070"
              />
              <Path
                id="Path_1240"
                dataName="Path 1240"
                d="M3358.5,714.05c4.492,10.376,8.646,20.888,12.692,31.444,1.013,2.638,1.982,5.293,2.961,7.944l1.467,3.977,1.433,3.989c.946,2.663,1.927,5.314,2.843,7.988l2.747,8.021c1.763,5.372,3.571,10.728,5.234,16.131.836,2.7,1.722,5.385,2.5,8.1l2.378,8.14c3.061,10.886,5.85,21.852,8.08,32.94l-.477.1-1.984-8.232-.491-2.058-.542-2.046-1.093-4.09-1.085-4.091c-.359-1.365-.769-2.715-1.151-4.074-.782-2.712-1.542-5.428-2.343-8.135-3.269-10.8-6.681-21.565-10.316-32.254-1.857-5.331-3.67-10.677-5.565-15.995l-1.41-3.992-1.443-3.981c-.961-2.654-1.921-5.309-2.91-7.953q-2.9-7.96-5.911-15.874-2.976-7.929-6.068-15.816Z"
                transform="translate(-3333.697 -697.209)"
              />
            </G>
            <G
              id="Group_1035"
              dataName="Group 1035"
              transform="translate(0 84.093)">
              <Path
                id="Path_1241"
                dataName="Path 1241"
                d="M3142.387,1203.861a33.1,33.1,0,0,0-19.507-10.389,23.47,23.47,0,0,1-15.4-8.515q-.6-.748-1.277-1.462c-6.828-7.21-16.77-8.882-22.205-3.735s-4.309,15.166,2.519,22.376a23.4,23.4,0,0,0,4.513,3.716,23.588,23.588,0,0,1,10.371,13.929,34.6,34.6,0,0,0,8.453,14.887c6.347,6.7,14.448,10.351,21.885,10.575a23.061,23.061,0,0,1,8.2,1.762c4.315,1.8,8.965,1.392,12.017-1.5,3.292-3.117,3.8-8.248,1.738-12.953a24.612,24.612,0,0,1-1.978-8.422A33.028,33.028,0,0,0,3142.387,1203.861Z"
                transform="translate(-3080.556 -1176.773)"
                fill="#afb5b8"
              />
              <Path
                id="Path_1242"
                dataName="Path 1242"
                d="M3166.23,1237.69c5.222,4.093,10.309,8.35,15.352,12.659,1.262,1.077,2.5,2.174,3.753,3.267l1.871,1.639,1.857,1.656c1.234,1.109,2.482,2.2,3.7,3.323l3.664,3.367c2.414,2.276,4.847,4.53,7.219,6.851,1.188,1.158,2.4,2.293,3.561,3.477l3.507,3.53c4.629,4.754,9.14,9.627,13.4,14.719l-.217.185-3.33-3.689-.83-.923-.853-.9-1.709-1.8-1.706-1.805c-.569-.6-1.157-1.184-1.735-1.777-1.163-1.179-2.317-2.366-3.489-3.538q-7.07-6.983-14.357-13.74c-2.452-2.228-4.883-4.477-7.351-6.689l-1.846-1.664-1.86-1.648c-1.24-1.1-2.478-2.2-3.728-3.286q-3.724-3.292-7.5-6.53-3.757-3.255-7.559-6.456Z"
                transform="translate(-3153.624 -1228.836)"
              />
            </G>
          </G>
          <G
            id="Group_1037"
            dataName="Group 1037"
            transform="translate(34.2 73.59)">
            <Path
              id="Path_1243"
              dataName="Path 1243"
              d="M3524.641,949.1a.415.415,0,0,0-.767.081c-.372,1.34-1.273,3.677-3.163,4.507-.094.042-.186.084-.272.126a.962.962,0,0,1,.117-.869c.588-.9-.473-2.125-.473-2.125a2.734,2.734,0,0,1-.891,1.76,2.629,2.629,0,0,0-.564,2.959c1.023,3.972,2.555,9.228-3.411,13.066s-14.367-7.244-14.367-7.244l4.17,13.22s6.436,4.75,13.923-1.929,2.525-16.4,2.525-16.4S3527.177,953.953,3524.641,949.1Z"
              transform="translate(-3473.965 -935.895)"
              fill="url(#linear-gradient)"
            />
            <Path
              id="Path_1244"
              dataName="Path 1244"
              d="M3341.709,865.577s1.728-7.752-7.152-5.7c0,0-4.311-.7-4.531,3.365,0,0-2.779,1.831-.744,5.353,0,0-8.258-3.19-11.857,4.049s-.291,11.222,3.177,12.259a3.452,3.452,0,0,0-1.479,4.6c1.33,3.186,8.063,5.43,12.041,1.557,0,0,11.319,1.5,11.092-6.5,0,0,5.264-3.4-.265-10.007S3341.709,865.577,3341.709,865.577Z"
              transform="translate(-3315.869 -859.531)"
            />
            <Path
              id="Path_1245"
              dataName="Path 1245"
              d="M3421.093,1021.976a12.181,12.181,0,0,0-11.924,3.039,3.061,3.061,0,0,0-.883,3.049c1.327,4.888,4.83,19.326,1.759,25.574,0,0,5.412,5.966,11.316,1.157,0,0,2.65-11.546,6.119-16.614,2.4-3.5-3.82-13.14-5.392-15.47A1.847,1.847,0,0,0,3421.093,1021.976Z"
              transform="translate(-3394.764 -997.959)"
              fill="url(#linear-gradient-2)"
            />
            <Path
              id="Path_1246"
              dataName="Path 1246"
              d="M3446.419,957.97s-2.639,7.466-2.839,10.759a5.642,5.642,0,0,0,5.665-.913s.288-7.457.705-8.792Z"
              transform="translate(-3425.019 -943.663)"
              fill="url(#linear-gradient-3)"
            />
            <Path
              id="Path_1247"
              dataName="Path 1247"
              d="M3447.442,887.617s6.9,9.661,2.776,12.467-9.04-4.059-9.04-4.059-1.6-5.287.073-7.081S3447.442,887.617,3447.442,887.617Z"
              transform="translate(-3422.375 -883.488)"
              fill="url(#linear-gradient-4)"
            />
            <Path
              id="Path_1248"
              dataName="Path 1248"
              d="M3432.952,871.292s3.171.751,3.616,2.186-4.5,2.766-5.882,2.831l-1.116,5.79s-3.3-5.447-1.991-8.592S3432.952,871.292,3432.952,871.292Z"
              transform="translate(-3411.082 -869.473)"
            />
            <Path
              id="Path_1249"
              dataName="Path 1249"
              d="M3431.175,930.483s-2.687-3.112-3.756-1.083,2.419,3.552,3.626,2.555Z"
              transform="translate(-3411.035 -918.659)"
              fill="url(#linear-gradient-5)"
            />
            <Path
              id="Path_1250"
              dataName="Path 1250"
              d="M3421.331,1417.39c-.02.525.9,4.681,1.4,6.9a3.656,3.656,0,0,1-.392,2.62l-17.345,29.193a4,4,0,0,0-.455,1.135,25.03,25.03,0,0,0-.632,7.781l.9,1.863-3.881-.881-.844-10.421,1.1-.67a5.225,5.225,0,0,0,2.112-2.472c1.568-3.809,5.463-13.508,6.468-18.233,1.141-5.372,7.106-9.733,7.106-9.733l-1.048-2.478Z"
              transform="translate(-3387.84 -1336.311)"
              fill="url(#linear-gradient-6)"
            />
            <Path
              id="Path_1251"
              dataName="Path 1251"
              d="M3376.2,1682.3s2.1-3.323,2.343-4.616.933-3.577,2.225-2.889a75.7,75.7,0,0,1,.4,8.736c-.209,2.455,2.775,2.376,2.775,2.376a2.8,2.8,0,0,1,1.426.718.7.7,0,0,1-.468,1.176,16.779,16.779,0,0,1-4.156-.235,1.272,1.272,0,0,1-1.026-1.173l-.43-7.23-2.644,3.339Z"
              transform="translate(-3367.432 -1556.199)"
              fill="url(#linear-gradient-7)"
            />
            <Path
              id="Path_1252"
              dataName="Path 1252"
              d="M3424.335,1445.243s-.612,26.112-.695,29.821.586,11.928,4.3,14.384l-1.618,1.2a21.61,21.61,0,0,1-4-5.026,30.65,30.65,0,0,0-2.889-4.393l.737-1.507a3.314,3.314,0,0,0,.269-2.126c-.8-3.888-3.482-16.822-4.213-19.608a12.546,12.546,0,0,1,2.079-11.354C3421.31,1442.956,3424.335,1445.243,3424.335,1445.243Z"
              transform="translate(-3401.205 -1359.515)"
              fill="url(#linear-gradient-8)"
            />
            <Path
              id="Path_1253"
              dataName="Path 1253"
              d="M3437.722,1703.882a.228.228,0,0,1-.229-.2,33.539,33.539,0,0,0-1.061-5.264c-.483-1.035-2.059-5.391,0-5.761,0,0,5.123,7.485,6.107,8.493a1.93,1.93,0,0,0,2.225.353,3.705,3.705,0,0,1,1.68,1.206.679.679,0,0,1-.535,1.09l-3.45.033a2.426,2.426,0,0,1-2.276-1.529c-.607-1.517-1.651-3.743-2.867-4.729l.632,6.051a.229.229,0,0,1-.227.253Z"
              transform="translate(-3418.027 -1571.574)"
              fill="url(#linear-gradient-9)"
            />
            <Path
              id="Path_1254"
              dataName="Path 1254"
              d="M3398.5,1221.161a12.248,12.248,0,0,0,.417,6.561l7.411,25.878a.8.8,0,0,1-.5.975,49.444,49.444,0,0,1-19.451,2.359,1.127,1.127,0,0,1-1.029-.879c-.656-2.95-2.893-13.017-3.352-15.085-1.754-7.88-3.713-16.38,4.905-21.519C3390.867,1221.153,3394.57,1222.155,3398.5,1221.161Z"
              transform="translate(-3371.082 -1167.14)"
            />
            <Path
              id="Path_1255"
              dataName="Path 1255"
              d="M3347,1048.846s-8.431,7.007-10.524,16.582,12.321,10.592,12.321,10.592,1.956-2.184,4.28-1.405.18-3.814-2.537-3.8-1.459,2.161-5.3.42c-3.745-1.7-6.061-6.943,3.5-14.9a4.334,4.334,0,0,0,1.261-1.718C3351.851,1049.943,3350.379,1046.881,3347,1048.846Z"
              transform="translate(-3333.306 -1020.814)"
              fill="url(#linear-gradient-10)"
            />
          </G>
          <G
            id="Group_1038"
            dataName="Group 1038"
            transform="translate(89.357 79.085)">
            <Path
              id="Path_1256"
              dataName="Path 1256"
              d="M3722.254,916.24c13.332,7.584,24.462,7.11,37.049.5a2.369,2.369,0,0,0,1.266-2.206l-.025-.532a2.362,2.362,0,0,0-3.25-2.076c-10.928,4.453-19.148,6.9-32.832.142a2.361,2.361,0,0,0-3.4,1.962h0A2.357,2.357,0,0,0,3722.254,916.24Z"
              transform="translate(-3717.326 -909.651)"
              fill="url(#linear-gradient-11)"
            />
            <Path
              id="Path_1257"
              dataName="Path 1257"
              d="M3702.825,910.072l-7.36-10.431a.514.514,0,0,1,.357-.807l12.191-1.491a.6.6,0,0,1,.622.821,26.309,26.309,0,0,0-4.92,11.81A.512.512,0,0,1,3702.825,910.072Z"
              transform="translate(-3695.371 -897.339)"
              fill="url(#linear-gradient-12)"
            />
          </G>
          <G
            id="Group_1039"
            dataName="Group 1039"
            transform="translate(89.163 12.467)">
            <Path
              id="Path_1258"
              dataName="Path 1258"
              d="M3734.792,447.069c-13.867-8.566-25.7-8.492-39.324-1.952a2.514,2.514,0,0,0-1.428,2.293l.006.567a2.51,2.51,0,0,0,3.372,2.328c11.777-4.309,20.6-6.587,34.873,1.112a2.509,2.509,0,0,0,3.683-1.953h0A2.512,2.512,0,0,0,3734.792,447.069Z"
              transform="translate(-3694.039 -440.199)"
              fill="url(#linear-gradient-13)"
            />
            <Path
              id="Path_1259"
              dataName="Path 1259"
              d="M3918.281,439.226l7.415,11.36a.546.546,0,0,1-.411.843l-13,1.115a.633.633,0,0,1-.629-.9,27.945,27.945,0,0,0,5.678-12.352A.544.544,0,0,1,3918.281,439.226Z"
              transform="translate(-3879.974 -438.979)"
              fill="url(#linear-gradient-14)"
            />
          </G>
          <G
            id="Group_1064"
            dataName="Group 1064"
            transform="translate(83.273 23.635)">
            <G id="Group_1054" dataName="Group 1054" transform="translate(0 0)">
              <G
                id="Group_1043"
                dataName="Group 1043"
                transform="translate(7.894 4.23)">
                <G
                  id="Group_1042"
                  dataName="Group 1042"
                  transform="translate(0 0)">
                  <Rect
                    id="Rectangle_1722"
                    dataName="Rectangle 1722"
                    width="43.349"
                    height="20.212"
                    transform="translate(0 42.889) rotate(-81.668)"
                  />
                  <Path
                    id="Path_1260"
                    dataName="Path 1260"
                    d="M3735.524,565.27l11.443,1.676a1.82,1.82,0,0,0,1.614,1.968c.032,0,.11.015.11.013l-5.069,34.62s-.077-.015-.109-.019a1.791,1.791,0,0,0-2.1,1.411.108.108,0,0,1-.01.031l-11.185-1.638c.231-1.578-.795-1.879-1.815-2.029-.032,0-.041.009-.041.01l5.07-34.62s.006,0,.038.009A1.771,1.771,0,0,0,3735.524,565.27Z"
                    transform="translate(-3725.376 -562.313)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <G
                    id="Group_1041"
                    dataName="Group 1041"
                    transform="translate(6.728 16.495)">
                    <Circle
                      id="Ellipse_95"
                      dataName="Ellipse 95"
                      cx="6.359"
                      cy="6.359"
                      r="6.359"
                      fill="url(#linear-gradient-15)"
                    />
                    <G
                      id="Group_1040"
                      dataName="Group 1040"
                      transform="translate(1.691 3.625)">
                      <Path
                        id="Path_1261"
                        dataName="Path 1261"
                        d="M3774.571,687.354l-.666-.1a5.49,5.49,0,0,1-.678,1.808.391.391,0,0,1-.486.147l-.594-.26a.393.393,0,0,1-.177-.564,4.555,4.555,0,0,0,.615-1.67c.1-.669-.055-1.2-.52-1.267-.418-.061-.724.288-1.109,1.179-.557,1.272-1.273,2.138-2.439,1.968a2.195,2.195,0,0,1-1.763-2.41l-.666-.1a.393.393,0,0,1-.332-.445l.057-.391a.393.393,0,0,1,.445-.331l.6.087a4.98,4.98,0,0,1,.483-1.44.389.389,0,0,1,.5-.173l.551.24a.389.389,0,0,1,.186.548,4.078,4.078,0,0,0-.475,1.413c-.116.792.179,1.067.474,1.11.362.054.682-.387,1.148-1.369.657-1.407,1.357-1.929,2.456-1.769a2.294,2.294,0,0,1,1.818,2.51l.744.109a.393.393,0,0,1,.332.445l-.057.391A.393.393,0,0,1,3774.571,687.354Z"
                        transform="translate(-3765.752 -683.364)"
                        fill="#fff"
                      />
                    </G>
                  </G>
                </G>
                <Path
                  id="Path_1262"
                  dataName="Path 1262"
                  d="M3720.719,771.2a.048.048,0,0,1-.014,0l-3.75-.549a.1.1,0,0,1-.083-.112l1.551-10.591a.1.1,0,0,1,.112-.083.1.1,0,0,1,.083.112l-1.536,10.493,3.653.535a.1.1,0,0,1,.083.112A.1.1,0,0,1,3720.719,771.2Z"
                  transform="translate(-3715.557 -728.62)"
                  fill="url(#linear-gradient-16)"
                />
                <Path
                  id="Path_1263"
                  dataName="Path 1263"
                  d="M3853.971,578.874a.048.048,0,0,1-.014,0,.1.1,0,0,1-.083-.112l1.517-10.363-3.916-.573a.1.1,0,0,1-.083-.112.1.1,0,0,1,.112-.083l4.013.587a.1.1,0,0,1,.065.039.1.1,0,0,1,.019.073l-1.532,10.46A.1.1,0,0,1,3853.971,578.874Z"
                  transform="translate(-3830.526 -564.329)"
                  fill="#fff"
                />
              </G>
              <G
                id="Group_1047"
                dataName="Group 1047"
                transform="translate(6.527 2.553)">
                <G
                  id="Group_1046"
                  dataName="Group 1046"
                  transform="translate(0 0)">
                  <Rect
                    id="Rectangle_1723"
                    dataName="Rectangle 1723"
                    width="43.349"
                    height="20.345"
                    transform="translate(0 42.889) rotate(-81.668)"
                    fill="#afb5b8"
                  />
                  <Path
                    id="Path_1264"
                    dataName="Path 1264"
                    d="M3726.163,553.77l11.442,1.676a1.859,1.859,0,0,0,1.661,1.969c.032,0,.025,0,.157.015l-5.069,34.62c-.131-.02-.124-.022-.156-.026a1.819,1.819,0,0,0-2.125,1.414c0,.013-.035.032-.035.032l-11.185-1.638c.231-1.578-.814-1.888-1.834-2.038a.156.156,0,0,0-.06,0l5.07-34.62a.189.189,0,0,0,.057.018A1.787,1.787,0,0,0,3726.163,553.77Z"
                    transform="translate(-3715.975 -550.807)"
                    fill="#fff"
                    opacity="0.5"
                  />
                  <G
                    id="Group_1045"
                    dataName="Group 1045"
                    transform="translate(6.77 16.488)">
                    <Circle
                      id="Ellipse_96"
                      dataName="Ellipse 96"
                      cx="6.359"
                      cy="6.359"
                      r="6.359"
                      fill="url(#linear-gradient-17)"
                    />
                    <G
                      id="Group_1044"
                      dataName="Group 1044"
                      transform="translate(1.691 3.625)">
                      <Path
                        id="Path_1265"
                        dataName="Path 1265"
                        d="M3765.452,675.764l-.666-.1a5.484,5.484,0,0,1-.679,1.808.39.39,0,0,1-.485.147l-.594-.26a.393.393,0,0,1-.177-.564,4.564,4.564,0,0,0,.614-1.67c.1-.669-.055-1.2-.52-1.267-.418-.061-.724.288-1.109,1.179-.557,1.272-1.273,2.138-2.438,1.968a2.195,2.195,0,0,1-1.763-2.41l-.666-.1a.393.393,0,0,1-.332-.445l.057-.391a.393.393,0,0,1,.445-.331l.6.087a4.981,4.981,0,0,1,.482-1.44.39.39,0,0,1,.5-.173l.551.24a.39.39,0,0,1,.186.548,4.085,4.085,0,0,0-.475,1.413c-.116.792.179,1.067.474,1.11.362.052.682-.387,1.148-1.369.657-1.407,1.357-1.929,2.456-1.769a2.294,2.294,0,0,1,1.818,2.51l.744.109a.393.393,0,0,1,.331.445l-.057.391A.391.391,0,0,1,3765.452,675.764Z"
                        transform="translate(-3756.633 -671.774)"
                        fill="#fff"
                      />
                    </G>
                  </G>
                </G>
                <Path
                  id="Path_1266"
                  dataName="Path 1266"
                  d="M3711.567,759.535a.047.047,0,0,1-.014,0l-3.882-.568a.1.1,0,0,1-.065-.039.1.1,0,0,1-.019-.073l1.532-10.46a.1.1,0,0,1,.112-.083.1.1,0,0,1,.083.112l-1.518,10.363,3.783.554a.1.1,0,0,1,.083.112A.1.1,0,0,1,3711.567,759.535Z"
                  transform="translate(-3706.254 -717.072)"
                  fill="url(#linear-gradient-18)"
                />
                <Path
                  id="Path_1267"
                  dataName="Path 1267"
                  d="M3845.349,567.435a.049.049,0,0,1-.015,0,.1.1,0,0,1-.083-.112l1.517-10.363-3.783-.554a.1.1,0,0,1-.083-.112.1.1,0,0,1,.112-.083l3.882.568a.1.1,0,0,1,.083.112l-1.532,10.46A.1.1,0,0,1,3845.349,567.435Z"
                  transform="translate(-3821.903 -552.891)"
                  fill="#fff"
                />
              </G>
              <G id="Group_1053" dataName="Group 1053" transform="translate(0)">
                <G id="Group_1051" dataName="Group 1051">
                  <G id="Group_1050" dataName="Group 1050">
                    <Path
                      id="Path_1352"
                      dataName="Path 1352"
                      d="M0,0H43.349V20.345H0Z"
                      transform="matrix(0.437, -0.9, 0.9, 0.437, 0, 39.001)"
                    />
                    <Path
                      id="Path_1268"
                      dataName="Path 1268"
                      d="M3698.816,543.57l10.405,5.048A1.856,1.856,0,0,0,3710.2,551c.029.015.012.009.132.065l-15.272,31.481c-.119-.06-.1-.054-.131-.067a1.8,1.8,0,0,0-2.443.7c-.006.013-.033.013-.033.013l-10.171-4.934c.7-1.436-.221-2.041-1.148-2.491a.14.14,0,0,0-.071-.012l15.272-31.481s.033.014.063.029A1.8,1.8,0,0,0,3698.816,543.57Z"
                      transform="translate(-3677.056 -539.537)"
                      fill="#fff"
                      opacity="0.5"
                    />
                    <G
                      id="Group_1049"
                      dataName="Group 1049"
                      transform="translate(12.199 17.537)">
                      <Path
                        id="Path_1269"
                        dataName="Path 1269"
                        d="M3746.581,637.121a6.359,6.359,0,1,1-8.5,2.946A6.36,6.36,0,0,1,3746.581,637.121Z"
                        transform="translate(-3737.446 -636.482)"
                        fill="#afb5b8"
                      />
                      <G
                        id="Group_1048"
                        dataName="Group 1048"
                        transform="translate(2.013 2.911)">
                        <Path
                          id="Path_1270"
                          dataName="Path 1270"
                          d="M3759.225,662.408l-.6-.294a5.5,5.5,0,0,1-1.192,1.519.388.388,0,0,1-.507-.007l-.488-.427a.392.392,0,0,1,0-.59,4.567,4.567,0,0,0,1.09-1.407c.3-.608.308-1.16-.113-1.365-.381-.185-.778.055-1.413.789-.915,1.045-1.859,1.655-2.919,1.141a2.195,2.195,0,0,1-.955-2.828l-.6-.294a.391.391,0,0,1-.181-.523l.173-.356a.392.392,0,0,1,.523-.182l.543.263a4.986,4.986,0,0,1,.894-1.228.388.388,0,0,1,.529-.013l.452.394a.391.391,0,0,1,.012.58,4.061,4.061,0,0,0-.88,1.2c-.35.721-.151,1.071.116,1.2.33.16.766-.163,1.509-.959,1.051-1.144,1.876-1.43,2.875-.945a2.294,2.294,0,0,1,.977,2.942l.677.328a.392.392,0,0,1,.182.523l-.173.356A.393.393,0,0,1,3759.225,662.408Z"
                          transform="translate(-3751.299 -656.508)"
                          fill="#fff"
                        />
                      </G>
                    </G>
                  </G>
                  <Path
                    id="Path_1271"
                    dataName="Path 1271"
                    d="M3667.646,725.518a.1.1,0,0,1-.044-.01l-3.529-1.712a.1.1,0,0,1-.045-.132l4.672-9.63a.1.1,0,1,1,.177.087l-4.629,9.542,3.44,1.669a.1.1,0,0,1,.045.132A.1.1,0,0,1,3667.646,725.518Z"
                    transform="translate(-3662.491 -685.177)"
                    fill="#bdd0fb"
                  />
                  <Path
                    id="Path_1272"
                    dataName="Path 1272"
                    d="M3865.667,579.869a.1.1,0,0,1-.088-.142l4.571-9.422-3.44-1.669a.1.1,0,1,1,.087-.177l3.529,1.712a.1.1,0,0,1,.051.057.093.093,0,0,1,0,.076l-4.614,9.511A.1.1,0,0,1,3865.667,579.869Z"
                    transform="translate(-3834.748 -560.799)"
                    fill="#bdd0fb"
                  />
                </G>
                <G
                  id="Group_1052"
                  dataName="Group 1052"
                  transform="translate(11.617 8.984)">
                  <Path
                    id="Path_1273"
                    dataName="Path 1273"
                    d="M3736.031,750.194a1.8,1.8,0,1,1-2.407.834A1.8,1.8,0,0,1,3736.031,750.194Z"
                    transform="translate(-3733.442 -724.96)"
                  />
                  <Circle
                    id="Ellipse_97"
                    dataName="Ellipse 97"
                    cx="1.801"
                    cy="1.801"
                    r="1.801"
                    transform="matrix(0.556, -0.831, 0.831, 0.556, 11.126, 2.994)"
                  />
                </G>
              </G>
            </G>
            <G
              id="Group_1063"
              dataName="Group 1063"
              transform="translate(16.019 16.31)">
              <G
                id="Group_1056"
                dataName="Group 1056"
                transform="translate(0 17.872)">
                <Circle
                  id="Ellipse_98"
                  dataName="Ellipse 98"
                  cx="5.418"
                  cy="5.418"
                  r="5.418"
                  transform="translate(0.163 0.296)"
                  fill="url(#linear-gradient-19)"
                />
                <Circle
                  id="Ellipse_99"
                  dataName="Ellipse 99"
                  cx="5.238"
                  cy="5.238"
                  r="5.238"
                  transform="translate(0.343 0.476)"
                  fill="url(#linear-gradient-20)"
                />
                <Path
                  id="Path_1274"
                  dataName="Path 1274"
                  d="M3767.9,762.437a.157.157,0,0,1-.079.02.175.175,0,0,1-.178-.172,4.986,4.986,0,0,1,2.663-4.532,5.079,5.079,0,0,1,.837-.352.175.175,0,0,1,.219.113.173.173,0,0,1-.114.219,4.741,4.741,0,0,0-.779.327,4.641,4.641,0,0,0-2.477,4.215A.175.175,0,0,1,3767.9,762.437Z"
                  transform="translate(-3767.074 -756.465)"
                  fill="#fff"
                  opacity="0.68"
                />
                <Circle
                  id="Ellipse_100"
                  dataName="Ellipse 100"
                  cx="4.434"
                  cy="4.434"
                  r="4.434"
                  transform="translate(0 3.215) rotate(-21.253)"
                  fill="#fff"
                  opacity="0.68"
                />
                <G
                  id="Group_1055"
                  dataName="Group 1055"
                  transform="translate(3.441 2.891)">
                  <Path
                    id="Path_1275"
                    dataName="Path 1275"
                    d="M3790.858,776.882l-.227-.426a3.938,3.938,0,0,1-1.333.375.279.279,0,0,1-.291-.219l-.1-.455a.281.281,0,0,1,.251-.342,3.281,3.281,0,0,0,1.227-.353c.427-.227.67-.541.512-.839-.143-.269-.474-.3-1.153-.141-.971.218-1.777.172-2.173-.576a1.574,1.574,0,0,1,.646-2.042l-.227-.426a.281.281,0,0,1,.116-.379l.25-.132a.28.28,0,0,1,.379.116l.2.382a3.563,3.563,0,0,1,1.038-.333.28.28,0,0,1,.313.217l.094.42a.281.281,0,0,1-.238.34,2.937,2.937,0,0,0-1.019.324c-.508.269-.541.557-.44.746.124.233.511.23,1.281.083,1.093-.218,1.692-.033,2.065.67a1.645,1.645,0,0,1-.68,2.118l.253.477a.281.281,0,0,1-.116.379l-.25.132A.282.282,0,0,1,3790.858,776.882Z"
                    transform="translate(-3787.404 -770.895)"
                    fill="url(#linear-gradient-21)"
                  />
                </G>
              </G>
              <G
                id="Group_1058"
                dataName="Group 1058"
                transform="translate(5.685 0)">
                <Circle
                  id="Ellipse_101"
                  dataName="Ellipse 101"
                  cx="9.433"
                  cy="9.433"
                  r="9.433"
                  transform="translate(1.078 1.249)"
                  fill="url(#linear-gradient-22)"
                />
                <Circle
                  id="Ellipse_102"
                  dataName="Ellipse 102"
                  cx="9.119"
                  cy="9.119"
                  r="9.119"
                  transform="translate(1.392 1.563)"
                  fill="url(#linear-gradient-23)"
                />
                <Path
                  id="Path_1276"
                  dataName="Path 1276"
                  d="M3816.276,653.629a.156.156,0,0,1-.079.02.175.175,0,0,1-.178-.172,8.556,8.556,0,0,1,4.567-7.773,8.647,8.647,0,0,1,1.434-.6.175.175,0,0,1,.106.333,8.31,8.31,0,0,0-1.376.578,8.21,8.21,0,0,0-4.381,7.456A.173.173,0,0,1,3816.276,653.629Z"
                  transform="translate(-3814.103 -642.615)"
                  fill="#fff"
                  opacity="0.68"
                />
                <Circle
                  id="Ellipse_103"
                  dataName="Ellipse 103"
                  cx="7.719"
                  cy="7.719"
                  r="7.719"
                  transform="matrix(0.811, -0.585, 0.585, 0.811, 0, 9.036)"
                  fill="#fff"
                  opacity="0.68"
                />
                <G
                  id="Group_1057"
                  dataName="Group 1057"
                  transform="translate(6.786 5.765)">
                  <Path
                    id="Path_1277"
                    dataName="Path 1277"
                    d="M3855.546,678.13l-.394-.741a6.817,6.817,0,0,1-2.321.653.486.486,0,0,1-.506-.381l-.179-.791a.49.49,0,0,1,.438-.594,5.677,5.677,0,0,0,2.136-.615c.744-.4,1.166-.942.893-1.459-.247-.466-.824-.517-2.007-.246-1.692.379-3.093.3-3.783-1-.624-1.174-.24-2.526,1.122-3.556l-.394-.741a.488.488,0,0,1,.2-.661l.436-.231a.489.489,0,0,1,.661.2l.353.666a6.272,6.272,0,0,1,1.807-.578.486.486,0,0,1,.543.376l.166.731a.488.488,0,0,1-.414.593,5.118,5.118,0,0,0-1.775.564c-.884.469-.942.969-.767,1.3.214.4.892.4,2.228.144,1.9-.378,2.946-.058,3.6,1.166.6,1.123.3,2.575-1.183,3.686l.441.83a.488.488,0,0,1-.2.661l-.436.231A.489.489,0,0,1,3855.546,678.13Z"
                    transform="translate(-3849.532 -667.707)"
                    fill="url(#linear-gradient-24)"
                  />
                </G>
              </G>
              <G
                id="Group_1060"
                dataName="Group 1060"
                transform="translate(22.111 16.54)">
                <Circle
                  id="Ellipse_104"
                  dataName="Ellipse 104"
                  cx="9.706"
                  cy="9.706"
                  r="9.706"
                  fill="url(#linear-gradient-25)"
                />
                <Circle
                  id="Ellipse_105"
                  dataName="Ellipse 105"
                  cx="9.383"
                  cy="9.383"
                  r="9.383"
                  transform="translate(0.323 0.323)"
                  fill="url(#linear-gradient-26)"
                />
                <Path
                  id="Path_1278"
                  dataName="Path 1278"
                  d="M3922.076,759.347a.159.159,0,0,1-.079.02.175.175,0,0,1-.178-.172,8.8,8.8,0,0,1,4.7-7.994,8.924,8.924,0,0,1,1.475-.621.175.175,0,0,1,.106.333,8.565,8.565,0,0,0-1.417.6,8.452,8.452,0,0,0-4.51,7.677A.176.176,0,0,1,3922.076,759.347Z"
                  transform="translate(-3920.952 -749.304)"
                  fill="#fff"
                  opacity="0.68"
                />
                <Circle
                  id="Ellipse_106"
                  dataName="Ellipse 106"
                  cx="7.941"
                  cy="7.941"
                  r="7.941"
                  transform="translate(0.216 4.213) rotate(-15.219)"
                  fill="#fff"
                  opacity="0.68"
                />
                <G
                  id="Group_1059"
                  dataName="Group 1059"
                  transform="translate(5.873 4.643)">
                  <Path
                    id="Path_1279"
                    dataName="Path 1279"
                    d="M3962.454,784.513l-.406-.763a7.006,7.006,0,0,1-2.388.671.5.5,0,0,1-.521-.392l-.183-.814a.5.5,0,0,1,.449-.612,5.856,5.856,0,0,0,2.2-.632c.766-.407,1.2-.969.917-1.5-.254-.481-.849-.532-2.065-.253-1.74.391-3.183.307-3.892-1.03-.641-1.208-.247-2.6,1.156-3.66l-.406-.763a.5.5,0,0,1,.209-.68l.449-.238a.5.5,0,0,1,.68.209l.363.686a6.47,6.47,0,0,1,1.859-.6.5.5,0,0,1,.56.388l.17.751a.5.5,0,0,1-.427.61,5.229,5.229,0,0,0-1.826.581c-.91.483-.969,1-.791,1.334.221.416.917.411,2.292.148,1.958-.39,3.03-.06,3.7,1.2.613,1.155.307,2.65-1.218,3.792l.453.855a.5.5,0,0,1-.209.68l-.449.238A.5.5,0,0,1,3962.454,784.513Z"
                    transform="translate(-3956.266 -773.785)"
                    fill="url(#linear-gradient-27)"
                  />
                </G>
              </G>
              <G
                id="Group_1062"
                dataName="Group 1062"
                transform="translate(29.508 1.618)">
                <Circle
                  id="Ellipse_107"
                  dataName="Ellipse 107"
                  cx="7.111"
                  cy="7.111"
                  r="7.111"
                  fill="url(#linear-gradient-28)"
                />
                <Circle
                  id="Ellipse_108"
                  dataName="Ellipse 108"
                  cx="6.875"
                  cy="6.875"
                  r="6.875"
                  transform="translate(0.237 0.237)"
                  fill="url(#linear-gradient-29)"
                />
                <Path
                  id="Path_1280"
                  dataName="Path 1280"
                  d="M3971.059,651.77a.159.159,0,0,1-.079.02.175.175,0,0,1-.178-.172,6.5,6.5,0,0,1,3.465-5.9,6.65,6.65,0,0,1,1.088-.458.175.175,0,0,1,.219.113.173.173,0,0,1-.113.219,6.264,6.264,0,0,0-1.03.433,6.147,6.147,0,0,0-3.279,5.582A.176.176,0,0,1,3971.059,651.77Z"
                  transform="translate(-3970.213 -644.37)"
                  fill="#fff"
                  opacity="0.68"
                />
                <Circle
                  id="Ellipse_109"
                  dataName="Ellipse 109"
                  cx="5.819"
                  cy="5.819"
                  r="5.819"
                  transform="translate(1.402 12.893) rotate(-89.123)"
                  fill="#fff"
                  opacity="0.68"
                />
                <G
                  id="Group_1061"
                  dataName="Group 1061"
                  transform="translate(4.304 3.403)">
                  <Path
                    id="Path_1281"
                    dataName="Path 1281"
                    d="M4000.909,670.441l-.3-.56a5.159,5.159,0,0,1-1.75.493.368.368,0,0,1-.382-.288l-.134-.6a.368.368,0,0,1,.33-.448,4.291,4.291,0,0,0,1.61-.464c.561-.3.879-.711.673-1.1-.188-.352-.622-.39-1.513-.185-1.275.286-2.333.225-2.852-.756a2.069,2.069,0,0,1,.846-2.682l-.3-.56a.368.368,0,0,1,.152-.5l.329-.174a.368.368,0,0,1,.5.153l.266.5a4.694,4.694,0,0,1,1.362-.436.367.367,0,0,1,.41.283l.125.551a.368.368,0,0,1-.312.448,3.824,3.824,0,0,0-1.337.426c-.666.353-.711.731-.578.978.161.305.673.3,1.68.109,1.435-.285,2.221-.044,2.711.879a2.159,2.159,0,0,1-.892,2.779l.332.626a.368.368,0,0,1-.153.5l-.328.174A.372.372,0,0,1,4000.909,670.441Z"
                    transform="translate(-3996.377 -662.581)"
                    fill="url(#linear-gradient-30)"
                  />
                </G>
              </G>
            </G>
          </G>
          <G
            id="Group_1073"
            dataName="Group 1073"
            transform="translate(89.816 116.996)">
            <G
              id="Group_1070"
              dataName="Group 1070"
              transform="translate(0 34.005)">
              <Path
                id="Path_1287"
                dataName="Path 1287"
                d="M3698.53,1434.359v-34a8.145,8.145,0,0,1,8.057-8.151c13.408-.145,41.06-.153,63.685,1.753a6.125,6.125,0,0,1,5.6,5.888l2.115,32.875a7.784,7.784,0,0,1-7.632,8.063l-64.04,1.216A7.641,7.641,0,0,1,3698.53,1434.359Z"
                transform="translate(-3698.53 -1392.148)"
                fill="url(#linear-gradient-31)"
              />
              <Path
                id="Path_1288"
                dataName="Path 1288"
                d="M3751.851,1458.871c-.056,2.894.029,7.483.1,10.45a2.618,2.618,0,0,0,2.925,2.539l11.034-1.293a2.621,2.621,0,0,0,2.286-2.991l-1.354-9.034a2.618,2.618,0,0,0-2.591-2.231h-9.778A2.616,2.616,0,0,0,3751.851,1458.871Z"
                transform="translate(-3744.086 -1446.985)"
                fill="#fff"
              />
              <Path
                id="Path_1289"
                dataName="Path 1289"
                d="M3939.472,1421.936l9.2.993a2.075,2.075,0,0,0,2.292-2.215l-2.011-27.379c-3.859-.122-7.664-.212-11.337-.275v26.812A2.072,2.072,0,0,0,3939.472,1421.936Z"
                transform="translate(-3902.871 -1392.927)"
                fill="#fff"
                opacity="0.37"
              />
              <Path
                id="Path_1290"
                dataName="Path 1290"
                d="M3968.088,1417.678a.926.926,0,0,0,.923.872h.053a.924.924,0,0,0,.871-.978l-1.388-23.9c-.622-.016-1.24-.029-1.857-.043Z"
                transform="translate(-3927.716 -1393.415)"
                fill="#fff"
              />
              <G
                id="Group_1069"
                dataName="Group 1069"
                transform="translate(10.179 12.058)">
                <Path
                  id="Path_1291"
                  dataName="Path 1291"
                  d="M3782.452,1485.387a.308.308,0,0,1-.308-.289l-.477-7.527a.308.308,0,0,1,.289-.327.3.3,0,0,1,.327.289l.477,7.527a.308.308,0,0,1-.289.327Z"
                  transform="translate(-3779.762 -1476.933)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1292"
                  dataName="Path 1292"
                  d="M3790.547,1484.544a.308.308,0,0,1-.309-.3l-.25-7.671a.307.307,0,0,1,.3-.318.291.291,0,0,1,.318.3l.25,7.671a.308.308,0,0,1-.3.318Z"
                  transform="translate(-3786.875 -1476.09)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1293"
                  dataName="Path 1293"
                  d="M3798.958,1484.547a.308.308,0,0,1-.308-.294c-.06-1.261-.361-7.557-.361-7.685a.308.308,0,0,1,.616,0c0,.167.237,5.083.359,7.659a.309.309,0,0,1-.294.323Zm-.051-7.979h0Z"
                  transform="translate(-3793.969 -1476.093)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1294"
                  dataName="Path 1294"
                  d="M3812.2,1483.879a.617.617,0,0,1-.616-.6c-.261-7.433-.215-7.6-.184-7.71a.617.617,0,0,1,1.206.244c-.02.446.118,4.771.211,7.422a.617.617,0,0,1-.594.638Z"
                  transform="translate(-3805.152 -1475.117)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1295"
                  dataName="Path 1295"
                  d="M3824.438,1485.393a.308.308,0,0,1-.308-.308v-7.527a.308.308,0,0,1,.616,0v7.527A.308.308,0,0,1,3824.438,1485.393Z"
                  transform="translate(-3816.054 -1476.939)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1296"
                  dataName="Path 1296"
                  d="M3829.75,1485.292a.308.308,0,0,1-.309-.3c-.059-2.615-.2-6.888-.321-7.4a.309.309,0,0,1,.439-.408c.168.11.328.215.5,7.794a.309.309,0,0,1-.3.315Z"
                  transform="translate(-3820.286 -1476.837)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1297"
                  dataName="Path 1297"
                  d="M3769.593,1484.249a.618.618,0,0,1-.616-.586l-.411-7.9a.617.617,0,0,1,.584-.648.624.624,0,0,1,.648.584l.411,7.9a.617.617,0,0,1-.584.648Z"
                  transform="translate(-3768.564 -1475.11)"
                  fill="#91b3fa"
                />
              </G>
            </G>
            <G
              id="Group_1072"
              dataName="Group 1072"
              transform="translate(10.749)">
              <Path
                id="Path_1298"
                dataName="Path 1298"
                d="M3772.49,1187.826v-23.879a5.722,5.722,0,0,1,5.658-5.725c9.415-.1,28.835-.108,44.724,1.231a4.3,4.3,0,0,1,3.933,4.135l1.485,23.087a5.466,5.466,0,0,1-5.358,5.662l-44.974.855A5.366,5.366,0,0,1,3772.49,1187.826Z"
                transform="translate(-3772.49 -1158.181)"
                fill="url(#linear-gradient-32)"
              />
              <Path
                id="Path_1299"
                dataName="Path 1299"
                d="M3809.932,1205.049c-.041,2.032.02,5.255.07,7.338a1.839,1.839,0,0,0,2.054,1.783l7.748-.908a1.841,1.841,0,0,0,1.606-2.1l-.95-6.346a1.839,1.839,0,0,0-1.82-1.567h-6.867A1.838,1.838,0,0,0,3809.932,1205.049Z"
                transform="translate(-3804.478 -1196.7)"
                fill="#fff"
              />
              <Path
                id="Path_1300"
                dataName="Path 1300"
                d="M3941.682,1179.109l6.463.7a1.457,1.457,0,0,0,1.609-1.555l-1.412-19.229c-2.709-.086-5.382-.148-7.962-.193v18.83A1.46,1.46,0,0,0,3941.682,1179.109Z"
                transform="translate(-3915.979 -1158.736)"
                fill="#fff"
                opacity="0.37"
              />
              <Path
                id="Path_1301"
                dataName="Path 1301"
                d="M3961.8,1176.127a.649.649,0,0,0,.648.612.31.31,0,0,0,.038,0,.65.65,0,0,0,.612-.686l-.975-16.781-1.3-.031Z"
                transform="translate(-3933.448 -1159.086)"
                fill="#fff"
              />
              <G
                id="Group_1071"
                dataName="Group 1071"
                transform="translate(7.147 8.469)">
                <Path
                  id="Path_1302"
                  dataName="Path 1302"
                  d="M3831.42,1223.665a.218.218,0,0,1-.217-.2l-.336-5.286a.217.217,0,0,1,.2-.23.211.211,0,0,1,.229.2l.336,5.286a.216.216,0,0,1-.2.23A.04.04,0,0,1,3831.42,1223.665Z"
                  transform="translate(-3829.53 -1217.728)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1303"
                  dataName="Path 1303"
                  d="M3837.1,1223.077a.216.216,0,0,1-.217-.209l-.176-5.386a.217.217,0,0,1,.209-.224.2.2,0,0,1,.224.209l.176,5.386a.217.217,0,0,1-.209.224Z"
                  transform="translate(-3834.523 -1217.14)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1304"
                  dataName="Path 1304"
                  d="M3843.02,1223.079a.216.216,0,0,1-.216-.206c-.042-.885-.253-5.308-.253-5.4a.216.216,0,0,1,.433,0c0,.118.166,3.57.253,5.379a.216.216,0,0,1-.207.227A.023.023,0,0,0,3843.02,1223.079Zm-.036-5.6h0Z"
                  transform="translate(-3839.515 -1217.142)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1305"
                  dataName="Path 1305"
                  d="M3852.312,1222.6a.434.434,0,0,1-.433-.418c-.183-5.219-.151-5.337-.129-5.416a.433.433,0,0,1,.847.172c-.014.314.083,3.35.148,5.213a.431.431,0,0,1-.417.448Z"
                  transform="translate(-3847.363 -1216.452)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1306"
                  dataName="Path 1306"
                  d="M3860.906,1223.669a.217.217,0,0,1-.216-.217v-5.286a.216.216,0,1,1,.433,0v5.286A.215.215,0,0,1,3860.906,1223.669Z"
                  transform="translate(-3855.018 -1217.732)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1307"
                  dataName="Path 1307"
                  d="M3864.641,1223.589a.217.217,0,0,1-.216-.212c-.042-1.837-.138-4.837-.225-5.2a.217.217,0,0,1,.308-.288c.118.077.23.151.35,5.474a.219.219,0,0,1-.212.222h0Z"
                  transform="translate(-3857.994 -1217.652)"
                  fill="#91b3fa"
                />
                <Path
                  id="Path_1308"
                  dataName="Path 1308"
                  d="M3822.389,1222.871a.434.434,0,0,1-.433-.411l-.289-5.551a.432.432,0,0,1,.41-.455.438.438,0,0,1,.455.411l.289,5.551a.433.433,0,0,1-.41.455Z"
                  transform="translate(-3821.666 -1216.453)"
                  fill="#91b3fa"
                />
              </G>
            </G>
          </G>
          <G
            id="Group_1079"
            dataName="Group 1079"
            transform="translate(108.434 72.314)">
            <G
              id="Group_1074"
              dataName="Group 1074"
              transform="translate(0 22.743)">
              <Path
                id="Path_1309"
                dataName="Path 1309"
                d="M3892.568,1012.845l3.174,1.708a27.784,27.784,0,0,0,10.279,4c9.571,1.436,15.808-4.6,20.458-8.267,6.138-4.837,10.914-2.484,10.914-2.484l-6.545,12.491c-9.774,9.216-19.8,7.17-26.113,4.183a29.3,29.3,0,0,1-6.543-4.183C3891,1016.009,3892.568,1012.845,3892.568,1012.845Z"
                transform="translate(-3882.861 -1007.233)"
                fill="url(#linear-gradient-33)"
              />
              <Path
                id="Path_1310"
                dataName="Path 1310"
                d="M3826.986,1031.52a2.335,2.335,0,0,1,1.369-1.5l6.441-2.59s.1-.826-1.36-1.388a1.939,1.939,0,0,1-1.118-2.195s1.993.908,4.908,2.35a6.825,6.825,0,0,1,3.1,3.375l-1.658,2.18a29.477,29.477,0,0,1-12.039.948Z"
                transform="translate(-3826.63 -1021.435)"
                fill="url(#linear-gradient-34)"
              />
            </G>
            <Path
              id="Path_1311"
              dataName="Path 1311"
              d="M4117.64,1703.01s.49,2.776.731,5.523a1.893,1.893,0,0,1-1.811,2.051c-3.66.152-11.486.449-14.3.324a.617.617,0,0,1-.542-.844h0a1.384,1.384,0,0,1,.705-.743l12.93-5.943Z"
              transform="translate(-4061.702 -1579.143)"
            />
            <Path
              id="Path_1312"
              dataName="Path 1312"
              d="M4189.526,1688.781l-.394,3.321s-2.264,1.054-3.812-.132l.937-3.7Z"
              transform="translate(-4133.188 -1566.546)"
              fill="url(#linear-gradient-35)"
            />
            <Path
              id="Path_1313"
              dataName="Path 1313"
              d="M4187.722,1247.24c.169.9-.306,47.089-4.839,66.791-.074.321-.542.952-.38,1.229.394.673,3.289.484,4.922.541.506.017.777-.576.92-1.08,1.294-4.571,7.5-27.474,8.313-49.35.906-24.446,0-.833,0-.833l.4-15.487Z"
              transform="translate(-4130.751 -1189.615)"
            />
            <Path
              id="Path_1314"
              dataName="Path 1314"
              d="M4283.337,1712.97a19.979,19.979,0,0,1,1.536,5.125,1.155,1.155,0,0,1-1.016,1.384c-1.208.119-3.068.272-4.558.261a1.15,1.15,0,0,1-1.139-1.285,9.71,9.71,0,0,1,2.267-5.327Z"
              transform="translate(-4212.527 -1587.656)"
            />
            <Path
              id="Path_1315"
              dataName="Path 1315"
              d="M4297.19,1682.445l-.919,5.021a3.246,3.246,0,0,1-2.711.186l.439-5.4Z"
              transform="translate(-4225.697 -1561.401)"
              fill="url(#linear-gradient-36)"
            />
            <Path
              id="Path_1316"
              dataName="Path 1316"
              d="M4236.082,1246.323c3.707,23.352-.53,59.506-2.05,66.231a1.024,1.024,0,0,1-.811.8,6.466,6.466,0,0,1-2.9-.121.955.955,0,0,1-.663-.885c-.2-5.437.163-38.819-3.291-52.011a3,3,0,0,0-1.108-1.652l-5.684-4.632-.106-9.989Z"
              transform="translate(-4162.375 -1186.897)"
            />
            <Path
              id="Path_1317"
              dataName="Path 1317"
              d="M4102.906,1001.829c9.77-.161,20.549,2.565,20.549,2.565,2.4,14.006,1.436,29.53.938,34.642-.1,1.048.458,2.157-.581,2.325a48.474,48.474,0,0,1-15.643-.74c-.913-.264-.757-1.237-.952-2.167-1.676-8.04-6.469-25.773-6.469-25.773-2.324,2.99-5.6,7.172-10.45,8.286,2.471-2.863-2.268-8.867-1.762-11.021C4092.917,1005.024,4099.893,1001.88,4102.906,1001.829Z"
              transform="translate(-4050.439 -979.866)"
              fill="url(#linear-gradient-37)"
            />
            <Path
              id="Path_1318"
              dataName="Path 1318"
              d="M4218.508,947.292l3.109,8.989a.325.325,0,0,1-.148.39,7.309,7.309,0,0,1-7.58-.51,1.524,1.524,0,0,1-.7-1.089l-1.007-7.781h6.328Z"
              transform="translate(-4156.145 -933.259)"
              fill="url(#linear-gradient-38)"
            />
            <G
              id="Group_1075"
              dataName="Group 1075"
              transform="translate(52.584 2.888)">
              <Path
                id="Path_1319"
                dataName="Path 1319"
                d="M4191.449,890.02s-3.414,6.425-2.977,9.021,4.668,2.41,8.363.3l2.581-6.938Z"
                transform="translate(-4188.434 -887.201)"
                fill="url(#linear-gradient-39)"
              />
              <Path
                id="Path_1320"
                dataName="Path 1320"
                d="M4214.324,879.356a.267.267,0,0,1-.117-.388,6.9,6.9,0,0,0,.949-2.016s.613-.392-1.562-.914c-1.184-.283-3.284-.517-4.208-1.369-1.033-.953.873-2.754,1.673-3.237a4.645,4.645,0,0,1,3.535-.693,6.571,6.571,0,0,1,1.607.766,6.7,6.7,0,0,1,2.33,1.913,6.288,6.288,0,0,1,.719,1.826,9.152,9.152,0,0,1,.432,2.786c-.115,2.511-3.058,4.761-5.424,5.036a.268.268,0,0,1-.28-.353l.968-2.812a.266.266,0,0,0-.145-.33Z"
                transform="translate(-4206.085 -870.621)"
                fill="url(#linear-gradient-40)"
              />
              <Path
                id="Path_1321"
                dataName="Path 1321"
                d="M4238.012,928.616s2.43-1.667,2.607-.263-2.188,2.033-3.36,1.51Z"
                transform="translate(-4230.163 -919.481)"
                fill="url(#linear-gradient-41)"
              />
            </G>
            <G
              id="Group_1076"
              dataName="Group 1076"
              transform="translate(54.356)">
              <Path
                id="Path_1322"
                dataName="Path 1322"
                d="M4200.62,854.884c4.987-9.419,17.912-.862,11.9,7.074C4208.046,858.983,4202.991,854.562,4200.62,854.884Z"
                transform="translate(-4200.62 -850.753)"
              />
            </G>
            <Path
              id="Path_1323"
              dataName="Path 1323"
              d="M4177.4,881.862l-8.955-.278a.647.647,0,0,1-.545-.331,6.048,6.048,0,0,0-3.444-2.878.181.181,0,0,1,.049-.352l5.49-.374h.019c2.737.211,5.158,1.856,7.469,4.013A.116.116,0,0,1,4177.4,881.862Z"
              transform="translate(-4115.25 -873.741)"
            />
            <Path
              id="Path_1324"
              dataName="Path 1324"
              d="M4299.286,1033.736c-5.467-6.139-4.914-10.864,1.257-14.266,0,0,10.231,6.952,11.912,15.764a24.219,24.219,0,0,0-8.894,2.384C4302.806,1033.456,4299.286,1033.736,4299.286,1033.736Z"
              transform="translate(-4227.375 -994.949)"
              fill="url(#linear-gradient-42)"
            />
            <Path
              id="Path_1325"
              dataName="Path 1325"
              d="M4230.71,1132.759s11.486,6.491,15.361.949a4.359,4.359,0,0,0,.8-3.385,24.216,24.216,0,0,1,8.893-2.384,12.156,12.156,0,0,1-1.323,8.338c-6.789,12.418-25.251-.686-25.251-.686Z"
              transform="translate(-4170.682 -1087.654)"
              fill="url(#linear-gradient-43)"
            />
            <G
              id="Group_1077"
              dataName="Group 1077"
              transform="translate(32.716 27.482)">
              <Path
                id="Path_1326"
                dataName="Path 1326"
                d="M4080.421,1078.179l-6.269-21.891a.637.637,0,0,0-.539-.459c-1.135-.132-4.427-.5-8.226-.826a93.553,93.553,0,0,0-13.067-.435.64.64,0,0,0-.523.921c1.807,3.654,9.235,18.518,12.956,23.387a.645.645,0,0,0,.518.254l14.544-.135A.64.64,0,0,0,4080.421,1078.179Z"
                transform="translate(-4051.729 -1052.344)"
              />
              <Path
                id="Path_1327"
                dataName="Path 1327"
                d="M4112.259,1040.6l-4.545-.757a.326.326,0,0,0-.363.424l.45,1.363a.325.325,0,0,0,.266.221l4.373.584a.326.326,0,0,0,.36-.4l-.279-1.19A.322.322,0,0,0,4112.259,1040.6Z"
                transform="translate(-4099.252 -1039.838)"
                fill="url(#linear-gradient-44)"
              />
              <Path
                id="Path_1328"
                dataName="Path 1328"
                d="M4103.2,1052.451l-.375-1.95a.451.451,0,0,0-.4-.363l-9.179-.932a.45.45,0,0,0-.484.554l.584,2.43a.45.45,0,0,0,.415.344l8.971.452A.452.452,0,0,0,4103.2,1052.451Z"
                transform="translate(-4086.79 -1047.842)"
                fill="#bdd0fb"
              />
              <Path
                id="Path_1329"
                dataName="Path 1329"
                d="M4193.167,1137.32s.874-3.59.521-4.865-1.035-2.911-3.309-2.548a33.2,33.2,0,0,0-4.958,1.323,1.3,1.3,0,0,0,1.865,1.124l-1.073.83s.153,1.328,1.613.619l-1,1.1a1.161,1.161,0,0,0,1.7.391C4189.6,1134.594,4190.12,1137.752,4193.167,1137.32Z"
                transform="translate(-4165.99 -1116.773)"
                fill="url(#linear-gradient-45)"
              />
            </G>
            <G
              id="Group_1078"
              dataName="Group 1078"
              transform="translate(62.814 34.359)">
              <Path
                id="Path_1330"
                dataName="Path 1330"
                d="M4263.76,1087.16c.716.058,6.781.251,6.781.251l-.244,6.1-3.141,1.772-3.4-1.772v-6.356Z"
                transform="translate(-4263.042 -1087.16)"
                fill="url(#linear-gradient-46)"
              />
              <Path
                id="Path_1331"
                dataName="Path 1331"
                d="M4259.057,1087.16l7.249.253.3,2.341-3.773.981-4.01-1.788Z"
                transform="translate(-4258.82 -1087.16)"
                fill="url(#linear-gradient-47)"
              />
            </G>
          </G>
          <G
            id="Group_1090"
            dataName="Group 1090"
            transform="translate(191.407 145.485)">
            <Path
              id="Path_1351"
              dataName="Path 1351"
              d="M0,0H97.854V5.937H0Z"
              transform="translate(24.299 38.593)"
            />
            <Path
              id="Path_1332"
              dataName="Path 1332"
              d="M5237.99,1618.8H5239a.968.968,0,0,0,.968-.968v-7.168h-1.979Z"
              transform="translate(-5115.836 -1573.386)"
            />
            <Path
              id="Path_1333"
              dataName="Path 1333"
              d="M4576.05,1356.9c0-1.483,1.477-2.7,3.864-2.7h89.958c2.388,0,4.362,1.214,4.362,2.7v33.726c0,1.483-1.974,2.721-4.362,2.721h-89.958c-2.388,0-3.864-1.238-3.864-2.721Z"
              transform="translate(-4550.102 -1354.2)"
            />
            <Path
              id="Path_1334"
              dataName="Path 1334"
              d="M4591.18,1368.615c0-1.356,1.867-2.295,4.121-2.295h84.863c2.253,0,4.144.939,4.144,2.295v30.828c0,1.356-1.891,2.389-4.144,2.389H4595.3c-2.253,0-4.121-1.033-4.121-2.389Z"
              transform="translate(-4563.033 -1364.558)"
              fill="#9daaae"
            />
            <Path
              id="Path_1335"
              dataName="Path 1335"
              d="M4404.25,1454.388l4.436-13.535c.111-.343.432-.4.792-.4h17.964v32H4403.2Z"
              transform="translate(-4402.375 -1427.914)"
              fill="#707070"
            />
            <Path
              id="Path_1336"
              dataName="Path 1336"
              d="M4398.02,1626.984a1.829,1.829,0,0,1,.958-.235l18.628.358.105,5.28-18.743.456c-.68,0-1.449-.328-1.449-.788v-4.472C4397.52,1627.356,4397.781,1627.141,4398.02,1626.984Z"
              transform="translate(-4397.52 -1587.136)"
              fill="#858381"
            />
            <G
              id="Group_1080"
              dataName="Group 1080"
              transform="translate(1.875 14.274)">
              <Path
                id="Path_1337"
                dataName="Path 1337"
                d="M4434.1,1464.571l2.682-10.611a.852.852,0,0,1,.809-.65h10.484a.849.849,0,0,1,.6.275.865.865,0,0,1,.236.616l-.251,8.508a.836.836,0,0,1-.7.8l-12.915,2.089a.833.833,0,0,1-.94-1.028Z"
                transform="translate(-4430.635 -1453.179)"
                fill="#858381"
              />
              <Path
                id="Path_1338"
                dataName="Path 1338"
                d="M4414.418,1452.41l.137.023a.834.834,0,0,1,.669,1.038l-2.923,10.867a.835.835,0,0,1-.958.6l-.923-.173Z"
                transform="translate(-4410.42 -1452.41)"
                fill="#858381"
              />
            </G>
            <Path
              id="Path_1339"
              dataName="Path 1339"
              d="M4506.757,1544.1a.756.756,0,0,0-.755-.756h-3.326a.756.756,0,0,0-.756.756v.137a.756.756,0,0,0,.756.756H4506a.756.756,0,0,0,.755-.756Z"
              transform="translate(-4486.747 -1515.851)"
              fill="#858381"
            />
            <Path
              id="Path_1340"
              dataName="Path 1340"
              d="M4503.891,1374.025a1.345,1.345,0,0,1,.907.219c.206.19.47.411.47.692v8.738H4494.26S4494.844,1374.685,4503.891,1374.025Z"
              transform="translate(-4480.2 -1371.14)"
              fill="#707070"
            />
            <G
              id="Group_1082"
              dataName="Group 1082"
              transform="translate(5.338 36.95)">
              <G id="Group_1081" dataName="Group 1081">
                <Path
                  id="Path_1350"
                  dataName="Path 1350"
                  d="M8.449,0A8.449,8.449,0,1,1,0,8.449,8.449,8.449,0,0,1,8.449,0Z"
                />
                <Circle
                  id="Ellipse_111"
                  dataName="Ellipse 111"
                  cx="6.861"
                  cy="6.861"
                  r="6.861"
                  transform="translate(0.212 13.592) rotate(-76.714)"
                />
                <Path
                  id="Path_1341"
                  dataName="Path 1341"
                  d="M4449.071,1632.506a.144.144,0,0,1-.132-.087,6.221,6.221,0,0,1,8.767-7.849.145.145,0,0,1,.055.195.143.143,0,0,1-.2.055,5.934,5.934,0,0,0-8.359,7.488.143.143,0,0,1-.076.188A.234.234,0,0,1,4449.071,1632.506Z"
                  transform="translate(-4446.386 -1621.549)"
                />
              </G>
              <Path
                id="Path_1342"
                dataName="Path 1342"
                d="M4470.73,1648.057a3.146,3.146,0,1,0,3.146-3.147A3.146,3.146,0,0,0,4470.73,1648.057Z"
                transform="translate(-4465.428 -1639.608)"
              />
            </G>
            <G
              id="Group_1084"
              dataName="Group 1084"
              transform="translate(85.716 37.185)">
              <G id="Group_1083" dataName="Group 1083">
                <Circle
                  id="Ellipse_112"
                  dataName="Ellipse 112"
                  cx="8.449"
                  cy="8.449"
                  r="8.449"
                />
                <Circle
                  id="Ellipse_113"
                  dataName="Ellipse 113"
                  cx="6.861"
                  cy="6.861"
                  r="6.861"
                  transform="translate(1.156 14.9) rotate(-86.417)"
                />
                <Path
                  id="Path_1343"
                  dataName="Path 1343"
                  d="M5002.111,1634.118a.146.146,0,0,1-.133-.087,6.222,6.222,0,0,1,8.767-7.85.143.143,0,0,1-.139.25,5.934,5.934,0,0,0-8.36,7.488.143.143,0,0,1-.076.188A.166.166,0,0,1,5002.111,1634.118Z"
                  transform="translate(-4999.425 -1623.16)"
                />
              </G>
              <Circle
                id="Ellipse_114"
                dataName="Ellipse 114"
                cx="3.147"
                cy="3.147"
                r="3.147"
                transform="translate(5.302 5.302)"
              />
            </G>
            <G
              id="Group_1086"
              dataName="Group 1086"
              transform="translate(38.102 37.185)">
              <G id="Group_1085" dataName="Group 1085">
                <Circle
                  id="Ellipse_115"
                  dataName="Ellipse 115"
                  cx="8.449"
                  cy="8.449"
                  r="8.449"
                />
                <Circle
                  id="Ellipse_116"
                  dataName="Ellipse 116"
                  cx="6.861"
                  cy="6.861"
                  r="6.861"
                  transform="translate(0.91 14.614) rotate(-84.347)"
                />
                <Path
                  id="Path_1344"
                  dataName="Path 1344"
                  d="M4674.5,1634.118a.145.145,0,0,1-.132-.087,6.221,6.221,0,0,1,8.767-7.85.143.143,0,1,1-.139.25,5.934,5.934,0,0,0-8.36,7.488.143.143,0,0,1-.075.188A.155.155,0,0,1,4674.5,1634.118Z"
                  transform="translate(-4671.816 -1623.16)"
                />
              </G>
              <Circle
                id="Ellipse_117"
                dataName="Ellipse 117"
                cx="3.147"
                cy="3.147"
                r="3.147"
                transform="translate(5.302 5.302)"
              />
            </G>
            <G
              id="Group_1088"
              dataName="Group 1088"
              transform="translate(105.044 37.185)">
              <G id="Group_1087" dataName="Group 1087">
                <Circle
                  id="Ellipse_118"
                  dataName="Ellipse 118"
                  cx="8.449"
                  cy="8.449"
                  r="8.449"
                />
                <Circle
                  id="Ellipse_119"
                  dataName="Ellipse 119"
                  cx="6.861"
                  cy="6.861"
                  r="6.861"
                  transform="translate(1.156 14.9) rotate(-86.417)"
                />
                <Path
                  id="Path_1345"
                  dataName="Path 1345"
                  d="M5135.091,1634.118a.146.146,0,0,1-.132-.087,6.222,6.222,0,0,1,8.768-7.85.143.143,0,0,1-.14.25,5.934,5.934,0,0,0-8.36,7.488.143.143,0,0,1-.075.188A.158.158,0,0,1,5135.091,1634.118Z"
                  transform="translate(-5132.406 -1623.16)"
                />
              </G>
              <Circle
                id="Ellipse_120"
                dataName="Ellipse 120"
                cx="3.147"
                cy="3.147"
                r="3.147"
                transform="translate(5.302 5.302)"
              />
            </G>
            <G
              id="Group_1089"
              dataName="Group 1089"
              transform="translate(0.549 34.305)">
              <Path
                id="Path_1346"
                dataName="Path 1346"
                d="M4405.259,1591.064a.834.834,0,0,0-.834-.834h-2.291a.834.834,0,0,0-.834.834v2.51a.834.834,0,0,0,.834.834h2.291a.834.834,0,0,0,.834-.834Z"
                transform="translate(-4401.3 -1590.23)"
                fill="#858381"
              />
              <Path
                id="Path_1347"
                dataName="Path 1347"
                d="M4417.95,1590.23v4.838h.595c.46,0,1.274-.49,1.274-.949v-2.744c0-.461-.815-1.144-1.274-1.144h-.595Z"
                transform="translate(-4415.53 -1590.23)"
                fill="#858381"
                opacity="0.8"
              />
            </G>
            <Path
              id="Path_1348"
              dataName="Path 1348"
              d="M4560.073,1472.059a.144.144,0,0,1-.144-.144v-19.461a.144.144,0,1,1,.288,0v19.461A.143.143,0,0,1,4560.073,1472.059Z"
              transform="translate(-4536.325 -1438.05)"
            />
            <Path
              id="Path_1349"
              dataName="Path 1349"
              d="M4507.158,1391.361a.171.171,0,0,1-.046-.007.144.144,0,0,1-.089-.182c.743-2.152,2.209-4.992,4.979-6.293a6.068,6.068,0,0,1,3.052-.629.143.143,0,0,1-.033.283,5.924,5.924,0,0,0-2.913.612c-2.668,1.263-4.091,4.026-4.813,6.12A.148.148,0,0,1,4507.158,1391.361Z"
              transform="translate(-4491.101 -1379.869)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
