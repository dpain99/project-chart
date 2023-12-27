import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart1 from "./screens/chart-1";

function App() {
  return (
    <div className="App">
      <div>
        <Chart1
          title={"Tính cách khuynh hướng"}
          detail={[
            {
              label1: "Thực tế / Không thích mạo hiểm",
              value1: 30,
              label2: "Phiêu lưu / Tinh thần mạo hiểm",
              value2: 70,
            },
            {
              label1: "Tuân theo tự nhiên",
              value1: 40,
              label2: "Kế hoạch / Tự chủ",
              value2: 60,
            },
            {
              label1: "Hướng ngoại / Dễ gần",
              value1: 48,
              label2: "Hướng nội / Không thích chú ý",
              value2: 52,
            },
            {
              label1: "Tư duy nhóm",
              value1: 35,
              label2: "Tư duy độc lập",
              value2: 65,
            },
            {
              label1: "Dễ đồng cảm",
              value1: 70,
              label2: "Thích thao túng",
              value2: 30,
            },
            {
              label1: "Nhạy cảm / Hay suy nghĩ",
              value1: 36,
              label2: "Giỏi xử lý căng thẳng",
              value2: 64,
            },
          ]}
          type="thuy"
        />
      </div>
    </div>
  );
}

export default App;
