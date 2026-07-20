// Ngân hàng câu hỏi - sửa trực tiếp nội dung tại đây
// Mỗi câu: text (nội dung câu hỏi), options {A,B,C,D}, correct (chữ cái đáp án đúng)
const ANSWER_HASH_ALGORITHM = 'SHA-512';
const ANSWER_HASH_SALT = 'RungChuongVang-2026-salt-vui-ve-chong-nhin-dap-an';
const QUESTIONS = [
    {
        text: "Đoàn Thanh niên Cộng sản Hồ Chí Minh được thành lập vào ngày, tháng, năm nào?",
        options: { A: "26/3/1931", B: "3/2/1930", C: "19/5/1941", D: "2/9/1945" },
        correct: "3faa8d3db292538508fcfccb525c6a472e0f27756b9c10c7e489017251b34abc893d2d31e36d4d820109bf221a536d4bee750d004abaf8494dea94325d9dae0c"
    },
    {
        text: "Bài hát chính thức của Đoàn Thanh niên Cộng sản Hồ Chí Minh có tên là gì?",
        options: { A: "Tiến quân ca", B: "Thanh niên làm theo lời Bác", C: "Nối vòng tay lớn", D: "Lên đàng" },
        correct: "411d04f4a5268e087201b332dfda4cf552fdc3d6abc37415726e1ddfc631b44fcc6e53ac68dcb8bd3eed3dce62a36c98d26057370db3836b29bfd57010eefe78"
    },
    {
        text: "Đội Thiếu niên Tiền phong Hồ Chí Minh được thành lập vào năm nào?",
        options: { A: "1930", B: "1941", C: "1945", D: "1954" },
        correct: "80a9cdf1061b1e8b7cc1bfc12772fb5ad2673c8e6556fac2d5af7d8f79e97a32c432746eacd6425e98f41ea672b92dac4661be2fb6993beec3852387b8db70c5"
    },
    {
        text: "Đà Lạt được mệnh danh là thành phố gì?",
        options: { A: "Thành phố hoa", B: "Thành phố biển", C: "Thành phố cảng", D: "Thành phố sông nước" },
        correct: "5ac5a421b2229934599ae38d7b0d73bb298b3c09dc6c4d1e902a399ed706c03f0bc0fc34c2e25e2113b7ff1684cf4b629577ca25e137669286ef855759fc40c1"
    },
    {
        text: "Chiến dịch Điện Biên Phủ kết thúc thắng lợi vào ngày tháng năm nào?",
        options: { A: "30/4/1975", B: "7/5/1954", C: "2/9/1945", D: "10/10/1954" },
        correct: "a57e385d7978c5526b03926af3883b5090f1c019ae9f644adc2efe9f08a5ebddc9242fc43f6385d9bc488740dd42647f62789e5d476ace0f1b7eb8c2737510e1"
    },
    {
        text: "Ai là người sáng lập Đảng Cộng sản Việt Nam?",
        options: { A: "Chủ tịch Hồ Chí Minh", B: "Đại tướng Võ Nguyên Giáp", C: "Tổng Bí thư Trường Chinh", D: "Chủ tịch Tôn Đức Thắng" },
        correct: "5d74abf297781368e7ac94b609eae7244fbd960908816479ca25770f6fe2d0525113d6571e6011daa5de2d49d8e5ebe42d3852c8b6b6c18f1af63ea25042f263"
    },
    {
        text: "Ngày Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là ngày nào?",
        options: { A: "30/4", B: "19/8", C: "2/9", D: "7/5" },
        correct: "644967f99a7b9c8d24c7ee0b4f2b106c1a251a523e6dba74bea75c6e2b97cc190c87756ca0966440a9421022270ca3cf604ba788bf3ee03410d483485dac7d36"
    },
    {
        text: "Phong trào \"Ba sẵn sàng\" ra đời gắn liền với giai đoạn lịch sử nào?",
        options: { A: "Kháng chiến chống Pháp", B: "Kháng chiến chống Mỹ", C: "Xây dựng CNXH sau 1975", D: "Đổi mới 1986" },
        correct: "20ad5f34a61b10b35582dad8df6f703894be6541e551c0e36261d7d6933664c78932744b67bf646f18c7d19936dd8df38473fb36f7dbea95d8f0a6ceb78ec09e"
    },
    {
        text: "Huy hiệu Đoàn Thanh niên Cộng sản Hồ Chí Minh có hình gì ở chính giữa?",
        options: { A: "Ngôi sao vàng", B: "Bó lúa", C: "Cờ đỏ sao vàng", D: "Búa liềm" },
        correct: "e46e59fd0622635aebe4de1310a2696e93aadec6d1a5f586c051ba8defc36236230da619c9beee4694233dd2346676cb55f8fd3a65111a5a60497df7cd7955c0"
    },
    {
        text: "\"Đâu cần thanh niên có, đâu khó có thanh niên\" là khẩu hiệu gắn với phong trào nào?",
        options: { A: "Thanh niên xung phong", B: "Mùa hè xanh", C: "Tiếp sức mùa thi", D: "Kế hoạch nhỏ" },
        correct: "f63ec56466ca817d0cdc5c962bb4ea3b8fc95d334eaff6dcd518744cc4f38d510cd118ad656ddfd0e994a27e1d2bb29c098226717763166b02f415494317f9e5"
    },
    {
        text: "Đà Lạt thuộc tỉnh nào của Việt Nam?",
        options: { A: "Lâm Đồng", B: "Đắk Lắk", C: "Khánh Hòa", D: "Bình Thuận" },
        correct: "59249b46618e371ef36aa9fb45365376bb24a69fbe3052ae2294b7bc0e2c868c1bc9960bc5e28230e4fd6a8249b272aca9ed1a6be4da06af1d356d30b4b4df09"
    },
    {
        text: "Bác Hồ ra đi tìm đường cứu nước vào năm nào, tại bến cảng nào?",
        options: { A: "1911, Bến Nhà Rồng", B: "1920, Bến Bạch Đằng", C: "1930, Bến Ninh Kiều", D: "1941, Bến Thủy" },
        correct: "ce251b0d685bd7162fd7c0a039332694c91a0ab9db3aba02a3d1325c60531fc4eb87f2cc6916453fa3eb8f98a9bdd2c72e6f91c8c932693b4a8caf87b4aa993c"
    },
    {
        text: "Chiến dịch Hồ Chí Minh lịch sử giải phóng miền Nam diễn ra vào năm nào?",
        options: { A: "1968", B: "1972", C: "1975", D: "1979" },
        correct: "536492cdcfb51f9b708be778ad8b1575dc1f42045c8d96fd916e6f888d620ccab98dbc30d6c4a668a15cf5d7a1377518a13dccceb4b0b8e138a1217e0e166101"
    },
    {
        text: "Phong trào \"Mùa hè xanh\" chủ yếu dành cho đối tượng nào?",
        options: { A: "Học sinh tiểu học", B: "Sinh viên, thanh niên tình nguyện", C: "Cán bộ hưu trí", D: "Công nhân nhà máy" },
        correct: "43c1480f780201cf58552ddbcdc95751f596697232220911af744fc8e3197393b7e55fbd5bd3b8b1bea960fa740449e9ece2a43d620af0668052b446b6c0d1ab"
    },
    {
        text: "Ngày thành lập Hội Liên hiệp Thanh niên Việt Nam là ngày nào?",
        options: { A: "15/10/1956", B: "26/3/1931", C: "9/1/1950", D: "6/1/1946" },
        correct: "7dcd7c5a417fa93e423120adadd19cddca8c5b22b55252337838cc8974679ad4c001cb7dc29b06a4e9042bee3e53861332932a63322869428ccf3e50d67df56c"
    },
    {
        text: "Theo Luật Nghĩa vụ quân sự 2015, độ tuổi gọi nhập ngũ trong thời bình đối với công dân đào tạo trình độ cao đẳng, đại học đã được tạm hoãn là đến hết bao nhiêu tuổi?",
        options: { A: "25 tuổi", B: "27 tuổi", C: "28 tuổi", D: "30 tuổi" },
        correct: "324364155e5c387325c690695241a4dfd7c368363fcaa216dbc1cd6fdba764d49e64186e284f062672857a51370e0bb7dfc8f9ea80e2b79bd0dc97757e43dc53"
    },
    {
        text: "Theo Luật Giao thông đường bộ, khái niệm \"Phương tiện giao thông cơ giới đường bộ\" gồm những loại nào?",
        options: { A: "Ô tô, máy kéo, xe mô tô hai bánh, ba bánh, xe gắn máy", B: "Xe đạp, xe xích lô, xe lăn", C: "Xe máy nông nghiệp, lâm nghiệp", D: "Tất cả các loại xe di chuyển trên đường" },
        correct: "b69313d985f7f91d8638cb6f594621f9f3f5cf82d4820d0df9c2e509fccccb2e19969d083f7aa3b33ed2ba68652bca49cba0a4edca0e598074e0a50230ee1029"
    },
    {
        text: "Luật Trẻ em quy định trẻ em là người dưới bao nhiêu tuổi?",
        options: { A: "Dưới 15 tuổi", B: "Dưới 16 tuổi", C: "Dưới 18 tuổi", D: "Từ 16 đến dưới 18 tuổi" },
        correct: "b1f2a9124b530aa73ed389c0c4843c3096a7798dc6664bfb93eeb0d1adae5ecb1b08691b71bf90e375387fc7b2fdf03ae02baa518c851d4868c86dadeb9a677d"
    },
    {
        text: "Theo Luật Phòng, chống ma túy, hành vi nào sau đây bị nghiêm cấm?",
        options: { A: "Trồng cây có chứa chất ma túy", B: "Giao nhận, vận chuyển chất ma túy trái phép", C: "Sử dụng trái phép chất ma túy", D: "Tất cả các hành vi trên" },
        correct: "c7ab2d9daba8d916af09389a743364a30db1a5b1198355836de079b55a6e09be5666d94aa263c149bf1d7d88fdbc39ad46ab4cd60d81a3515f96794563ec7d4c"
    },
    {
        text: "Luật Thanh niên (sửa đổi) được Quốc hội thông qua vào năm nào?",
        options: { A: "2015", B: "2018", C: "2020", D: "2022" },
        correct: "b66da8c3b4b2a25343166d0ca4df6bdeb083e0fb7dd1247bbd1fec09e61d7133f9b6cc426001fdd5dfc68e7f01a14c3110d510b43a2e1563b7c6ff507e8be58a"
    },
    {
        text: "Mục tiêu cơ bản của Luật Bình đẳng giới là gì?",
        options: { A: "Ưu tiên nữ giới trong mọi lĩnh vực", B: "Xóa bỏ phân biệt đối xử về giới", C: "Nâng cao quyền lực của nam giới", D: "Hạn chế quyền lợi của phụ nữ" },
        correct: "11d0a3e7c19fb1452c03ae86eea120d798b92a162fff310503add4ee3023f73c139ab5b2e2e6a70cb9e7cb99a3dfa27ea5db5094e340e144781a8ce163ea67a3"
    }
];

window.QUESTIONS = QUESTIONS;
