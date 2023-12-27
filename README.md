Cách sử dụng chart:

Với Chart1 (Chart2) dùng như sau:

Import Component tên Chart1, truyền vào các props (thông số) để tạo đồ thị, như:

*title: Tên của đồ thị, kiểu string;
*detail: Dữ liệu của đồ thị, là một array với các phần tử là từng object, với các cặp key - value kiểu:
{
     label1: Tên của nhãn cọc đồ thị bên tay trái, kiểu string
     value1: Giá trị của cọc đồ thị bên tay trái, kiểu string | number
     label2: Tên của nhãn cọc đồ thị bên tay phải, kiểu string
     value2: Giá trị của cọc đồ thị bên tay phải, kiểu string | number
}

object này là 2 cọc đồ thị trái phải, thành 1 hàng ngàng trong đồ thị 1.

đưa nó vào array, cần bao nhiêu hàng ngang thì thêm từng đó các object như trên.
Ví dụ: 
detail=[
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
]
Tổng giá trị trong 1 object là 100. tự chia tỷ lệ theo đề bài đưa ra, như 30/70, 40/60...
*type: Kiểu của đồ thị, chỉnh màu sắc cho đồ thị, với các giá trị tương ứng: 'kim', 'moc', 'thuy', 'hoa', 'tho'

Ví dụ hoàn chỉnh:
    <Chart1
          title="Tính cách khuynh hướng"
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

        Good Luck!!!!
