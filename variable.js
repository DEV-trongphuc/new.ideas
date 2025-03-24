let showform = null;
let comparePopup = null;
let renderAlert = null;
let renderMedia = null;
const IDEAS_DATA = {
  year_count: 14,
  students_count: 2451,
  courses_count: 70,
  teachers_count: 25,
  facebook_link: "https://www.facebook.com/?locale=vi_VN",
  youtube_link: "https://www.facebook.com/?locale=vi_VN",
  zalo_link: "https://www.facebook.com/?locale=vi_VN",
  linkedin_link: "https://www.facebook.com/?locale=vi_VN",
  programmes: {
    IDEAS01: {
      avatar: "./avatar/8.jpg",
      name: "Global MBA",
      highlight: [
        "Trực tuyến 100%",
        "MBA",
        "Linh hoạt trên Flatform của trường",
        "2 buổi chuyên đề/môn (Chủ nhật)",
      ],
      school: "Ascencia Business School",
      country: "Pháp",
      subjects: "<b>75</b> tín chỉ - <b>12</b> môn và Capstone",
      duration: "14-16 tháng",
      tagline: "Là trường thành viên của tổ chức giáo dục College de Paris",
      link: "#",
      experience: [
        "Tốt nghiệp cử nhân",
        "Tối thiểu 2 năm kinh nghiệm ở cấp độ quản lý",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      test: [
        "Chương trình học tập, làm bài và nộp trên flatform của trường, dựa trên tài liệu và hướng dẫn của giáo sư.",
        "Kiến thức quản trị chuyên sâu, kết hợp với case study thực tiễn",
        "Học phí linh hoạt có thể chia nhỏ thành nhiều đợt hoặc trả góp",
      ],
      fee_course: [
        {
          name: "Standard",
          icon: "icon6.png",
          price: "2800 Euro",
          benefits: [
            "Tài khoản truy cập tài liệu học tập, môn học theo chương trình gốc của trường",
            "Hệ thống LMS lưu trữ record các lớp chuyên đề của môn học được Enroll, lưu file PDF tài liệu môn học, hướng dẫn bài Final exam.",
            "Tham gia các buổi hướng dẫn tập trung của Viện đối với bài luận văn",
            "Học viên có thể tham gia buổi hướng dẫn luận văn của Viện IDEAS và đăng ký hỗ trợ qua hệ thống LMS tích hợp I-AI. Ngoài ra, có thể tham gia lớp chuyên đề (2.5 ngày/môn) và đăng ký đánh giá sơ bộ bài Final với phí: 100 Euro/môn, 300 Euro/Capstone.",
          ],
        },
        {
          name: "High Quality",
          icon: "icon5.png",
          price: "7000 Euro",
          benefits: [
            "Bao gồm chương trình Standard",
            "Hệ thống LMS: ứng dụng I-AI để hỗ trợ trong quá trình học tập.",
            "Nhân viên trợ lý chương trình nhắc deadline, hỗ trợ hệ thống, kết nối giảng viên",
            "Lớp chuyên đề: mỗi môn sẽ có 2,5 ngày Chủ nhật, được hướng dẫn bởi các Giảng viên của Viện IDEAS",
            "Đánh giá sơ bộ bài Final: Được hội đồng chuyên môn của Viện IDEAS đánh giá, góp ý bài Final đã đi đúng hướng, tránh lạc đề, học viên nắm được điểm đánh giá sơ bộ và hạn chế được khả năng rớt môn.",
          ],
        },
      ],

      description:
        "Global MBA là một trong những chương trình nổi bật của Ascencia Business School, được thiết kế để phù hợp với những người muốn nâng cao kiến thức và kỹ năng quản lý quốc tế, phát triển sự nghiệp toàn cầu và mở rộng mạng lưới quan hệ.",
      demographic: {
        jobs: [
          {
            jobname: "Quản trị kinh doanh",
            percent: 30,
          },
          {
            jobname: "Ngân hàng",
            percent: 22,
          },
          {
            jobname: "Công nghệ thông tin",
            percent: 20,
          },
          {
            jobname: "Start-up",
            percent: 16,
          },
          {
            jobname: "Khác",
            percent: 12,
          },
        ],
        ages: [
          {
            jobname: "18 - 24",
            percent: 7,
          },
          {
            jobname: "25 - 30",
            percent: 27,
          },
          {
            jobname: "31 - 40",
            percent: 55,
          },
          {
            jobname: "41 - 50",
            percent: 10,
          },
          {
            jobname: "51+",
            percent: 1,
          },
        ],
      },
      degree: {
        front:
          "https://ideas.edu.vn/wp-content/uploads/2024/11/MBA-Ascencia-Diploma-EN-MOFA-1.webp",
        back: "https://ideas.edu.vn/wp-content/uploads/2024/11/MBA-Ascencia-Diploma-EN-MOFA-2.webp",
      },
      accreditation: [
        {
          name: "W",
          logo: "https://www.collegedeparis.com/wp-content/uploads/2021/06/fcomp-logo-site.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://www.collegedeparis.com/wp-content/uploads/2021/06/fle-logo-site.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://www.collegedeparis.com/wp-content/uploads/2021/07/qualiopirogne.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://www.collegedeparis.com/wp-content/uploads/2021/06/erasmus-logo-site.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://www.collegedeparis.com/wp-content/uploads/2021/06/fcomp-logo-site.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://www.collegedeparis.com/wp-content/uploads/2021/06/bpi-logosite.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://ideas.edu.vn/wp-content/uploads/2023/12/vnanric.jpg",
          link: "#",
        },
      ],
      require: [
        "Bằng cử nhân và bảng điểm",
        "Sơ yếu lí lịch (CV)",
        "Thư động lực (Motivation Letter)",
        "Ảnh hộ chiếu (4×6)",
        "Passport",
        "Application Form <a class='text_download'>(Download)</a>",
      ],
      faq: [
        {
          q: "Chính sách bảo lưu và hoàn phí?",
          a: "Chương trình EMBA Online - Swiss UMEF hỗ trợ bởi Viện IDEAS có đầy đủ chính sách hỗ trợ bảo lưu và hoàn phí theo từng trường hợp cụ thể vui lòng để lại thông liên hệ ở ô bên phải hoặc Hotline <b>028 2244 2244</b> để được tư vấn chi tiết.",
        },
        {
          q: "Hình thức và ngôn ngữ của EMBA Online?",
          a: "Chương trình EMBA của trường Swiss UMEF sẽ học trực tuyến bằng tiếng Anh với giảng viên Quốc tế, bên cạnh đó viện IDEAS tại Việt Nam sẽ tổ chức các buổi chuyên đề vào cuối tuần để giúp học viên cũng cố kiến thức trên lớp học.",
        },
        {
          q: "Bằng cấp sau khi hoàn thành chương trình?",
          a: "Bằng nhận được sau khi hoàn thành là <b>Bằng Tốt Nghiệp cấp độ Thạc sĩ</b> do trường Swiss UMEF cấp. Được công nhận bởi nhiều quốc gia trên thế giới.",
        },
      ],
      this_subjects: [
        {
          name: "7SMG01. Strategic Management, Competitiveness & Globalization",
          description:
            "Học cách xây dựng chiến lược marketing, định vị thương hiệu, nghiên cứu thị trường và quản lý khách hàng.",
          link: "",
        },
        {
          name: "7BSU01. Business Sustainability, Ethics and Social Responsibility",
          description:
            "Nâng cao kỹ năng quản lý nhân sự và phát triển tài năng trong tổ chức, giúp tối ưu hóa nguồn nhân lực.",
          link: "",
        },
        {
          name: "7BIS02. Managing a Contemporary Business Information System",
          description:
            "Khám phá các nguyên tắc khởi nghiệp và đổi mới sáng tạo để phát triển doanh nghiệp thành công.",
          link: "",
        },
        {
          name: "7FMG01. Financial Management Theory and Practice",
          description:
            "Nắm vững kiến thức tài chính doanh nghiệp, tối ưu hóa dòng tiền và chiến lược tài chính.",
          link: "",
        },
        {
          name: "7SCM01. Operations, Supply Chain and Project Management",
          description:
            "Cung cấp các nguyên tắc kế toán quan trọng giúp nhà quản lý đưa ra quyết định kinh doanh hiệu quả.",
          link: "",
        },
        {
          name: "7MTI02. The Management of Technology and Innovation",
          description:
            "Khám phá cách công nghệ số đang thay đổi mô hình kinh doanh và phương pháp quản lý.",
          link: "",
        },
        {
          name: "7MST01. Marketing Strategy",
          description:
            "Phát triển chiến lược kinh doanh toàn cầu, giúp doanh nghiệp mở rộng và cạnh tranh hiệu quả.",
          link: "",
        },
        {
          name: "7BAN02. Business Analytics, Data Analysis & Decision Making",
          description:
            "Học cách lập kế hoạch, thực hiện và kiểm soát dự án để đạt được mục tiêu kinh doanh.",
          link: "",
        },
        {
          name: "7HRM01. Strategic Human Resources Management",
          description:
            "Nghiên cứu hành vi tổ chức để cải thiện hiệu suất và môi trường làm việc.",
          link: "",
        },
        {
          name: "7MOD01. Managing Organizational Diversity",
          description:
            "Phát triển kỹ năng lãnh đạo để điều hành tổ chức một cách hiệu quả và truyền cảm hứng cho đội ngũ.",
          link: "",
        },
        {
          name: "7ELE01. Executive Leadership",
          description:
            "Hướng dẫn phương pháp nghiên cứu và viết luận văn thạc sĩ chuyên sâu.",
          link: "",
        },
        {
          name: "7MEC01. Managerial Economics",
          description:
            "Trang bị kỹ năng đàm phán kinh doanh để đạt được thỏa thuận có lợi nhất.",
          link: "",
        },
        {
          name: "CAP. Capstone Project",
          description:
            "Hoàn thành luận văn MBA dựa trên nghiên cứu thực tế và ứng dụng kiến thức học được.",
          link: "",
        },
      ],
    },
    IDEAS02: {
      avatar: "./avatar/9.jpg",
      name: "Online MBA",
      school: "Swiss UMEF",
      subjects: "<b>90</b> tín chỉ - <b>12</b> môn và luận văn",
      duration: "14-16 tháng",
      country: "Thuỵ Sĩ",
      experience: [
        "Tốt nghiệp cử nhân",
        "Tối thiểu 3 năm kinh nghiệm làm việc",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      highlight: [
        "Trực tuyến 100%",
        "Thạc sĩ (Master)",
        "20:00 - 23:00 (Vietnam)",
        "2 buổi chuyên đề/môn (Chủ nhật)",
      ],
      tagline:
        "Trường tư thục đầu tiên tại Geneva đạt kiểm định Swiss Accreditation Council",
      link: "#",
      description:
        "Chương trình MBA Online phù hợp cho người bận rộn. Bằng cấp được công nhận bởi Hội đồng kiểm định liên bang Thụy Sĩ, đảm bảo giá trị quốc tế, mang đến kiến thức thực tiễn và cập nhật theo xu hướng kinh doanh toàn cầu.",
      demographic: {
        jobs: [
          {
            jobname: "Quản trị kinh doanh",
            percent: 30,
          },
          {
            jobname: "Ngân hàng",
            percent: 22,
          },
          {
            jobname: "Công nghệ thông tin",
            percent: 20,
          },
          {
            jobname: "Start-up",
            percent: 16,
          },
          {
            jobname: "Khác",
            percent: 12,
          },
        ],
        ages: [
          {
            jobname: "18 - 24",
            percent: 7,
          },
          {
            jobname: "25 - 30",
            percent: 27,
          },
          {
            jobname: "31 - 40",
            percent: 55,
          },
          {
            jobname: "41 - 50",
            percent: 10,
          },
          {
            jobname: "51+",
            percent: 1,
          },
        ],
      },
      degree: {
        back: "https://ideas.edu.vn/wp-content/uploads/2024/10/Quan-Tang-Vi-Diploma-1_page-0002.jpg",
        front:
          "https://ideas.edu.vn/wp-content/uploads/2025/03/UMEF-EMBA-Degree-2025.png",
      },
      fee_course: [
        {
          name: "Standard",
          icon: "icon6.png",
          price: "4100 CHF",
          benefits: [
            "Tài khoản truy cập tài liệu học tập, môn học theo chương trình gốc của trường",
            "Nhân viên trợ lý chương trình nhắc deadline, hỗ trợ hệ thống, kết nối giảng viên",
            "I-AI: Chatbot hỗ trợ nội dung MBA online (Viện IDEAS)",
            "1 ngày lớp chuyên đề vào chủ nhật tuần 4 mỗi môn - review và hướng dẫn Final exam",
          ],
        },
        {
          name: "High Quality",
          icon: "icon5.png",
          price: "9400 CHF",
          benefits: [
            "Bao gồm chương trình Standard và Hệ thống học tập eAcademy",
            "Lớp trực tuyến: Giảng viên quốc tế, Thứ 4 và Thứ 6 (20h00 – 23h00). Mỗi môn 4 tuần, 8 buổi Zoom",
            "Học phí đã bao gồm chuyến đi Thụy Sĩ (trị giá 2.000 CHF), gồm vé máy bay, ăn ở, học tập, tham quan các doanh nghiệp quốc tế",
            "Đánh giá sơ bộ bài Final: Được hội đồng chuyên môn của Viện IDEAS đánh giá, góp ý bài Final đã đi đúng hướng, tránh lạc đề, học viên nắm được điểm đánh giá sơ bộ và hạn chế được khả năng rớt môn.",
          ],
        },
      ],

      accreditation: [
        {
          name: "W",
          logo: "./kdumef1.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef3.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef4.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef5.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://ideas.edu.vn/wp-content/uploads/2023/12/vnanric.jpg",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef2.png",
          link: "#",
        },
      ],
      require: [
        "Bằng cử nhân và bảng điểm",
        "Sơ yếu lí lịch (CV)",
        "Thư động lực (Motivation Letter)",
        "Ảnh hộ chiếu (4×6)",
        "Passport",
        "Application Form <a class='text_download'>(Download)</a>",
      ],
      faq: [
        {
          q: "Chính sách bảo lưu và hoàn phí?",
          a: "Chương trình EMBA Online - Swiss UMEF hỗ trợ bởi Viện IDEAS có đầy đủ chính sách hỗ trợ bảo lưu và hoàn phí theo từng trường hợp cụ thể vui lòng để lại thông liên hệ ở ô bên phải hoặc Hotline <b>028 2244 2244</b> để được tư vấn chi tiết.",
        },
        {
          q: "Hình thức và ngôn ngữ của EMBA Online?",
          a: "Chương trình EMBA của trường Swiss UMEF sẽ học trực tuyến bằng tiếng Anh với giảng viên Quốc tế, bên cạnh đó viện IDEAS tại Việt Nam sẽ tổ chức các buổi chuyên đề vào cuối tuần để giúp học viên cũng cố kiến thức trên lớp học.",
        },
        {
          q: "Bằng cấp sau khi hoàn thành chương trình?",
          a: "Bằng nhận được sau khi hoàn thành là <b>Bằng Tốt Nghiệp cấp độ Thạc sĩ</b> do trường Swiss UMEF cấp. Được công nhận bởi nhiều quốc gia trên thế giới.",
        },
      ],
      this_subjects: [
        {
          name: "MBA 400. Marketing Management",
          description:
            "Học cách xây dựng chiến lược marketing, định vị thương hiệu, nghiên cứu thị trường và quản lý khách hàng.",
          link: "https://www.youtube.com/watch?v=CebD5PCML6w",
        },
        {
          name: "MBA 401. Human Capital and Talent Management",
          description:
            "Nâng cao kỹ năng quản lý nhân sự và phát triển tài năng trong tổ chức, giúp tối ưu hóa nguồn nhân lực.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 402. Entrepreneurship and Innovation",
          description:
            "Khám phá các nguyên tắc khởi nghiệp và đổi mới sáng tạo để phát triển doanh nghiệp thành công.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 403. Corporate Finance",
          description:
            "Nắm vững kiến thức tài chính doanh nghiệp, tối ưu hóa dòng tiền và chiến lược tài chính.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 404. Accounting for Managers",
          description:
            "Cung cấp các nguyên tắc kế toán quan trọng giúp nhà quản lý đưa ra quyết định kinh doanh hiệu quả.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 405. Digital Transformation",
          description:
            "Khám phá cách công nghệ số đang thay đổi mô hình kinh doanh và phương pháp quản lý.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 406. Global Strategy",
          description:
            "Phát triển chiến lược kinh doanh toàn cầu, giúp doanh nghiệp mở rộng và cạnh tranh hiệu quả.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 407. Project Management",
          description:
            "Học cách lập kế hoạch, thực hiện và kiểm soát dự án để đạt được mục tiêu kinh doanh.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 408. Organizational Behaviour",
          description:
            "Nghiên cứu hành vi tổ chức để cải thiện hiệu suất và môi trường làm việc.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 409. Leadership Development",
          description:
            "Phát triển kỹ năng lãnh đạo để điều hành tổ chức một cách hiệu quả và truyền cảm hứng cho đội ngũ.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 500. Thesis Methodology",
          description:
            "Hướng dẫn phương pháp nghiên cứu và viết luận văn thạc sĩ chuyên sâu.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 501. Business Negotiation",
          description:
            "Trang bị kỹ năng đàm phán kinh doanh để đạt được thỏa thuận có lợi nhất.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MBA 505. MBA Thesis",
          description:
            "Hoàn thành luận văn MBA dựa trên nghiên cứu thực tế và ứng dụng kiến thức học được.",
          link: "https://ideas.edu.vn/mba-umef",
        },
      ],
    },
    IDEAS03: {
      avatar: "./avatar/10.jpg",
      name: "Executive MBA",
      school: "Swiss UMEF",
      subjects: "<b>60</b> tín chỉ - <b>10</b> môn không luận văn",
      duration: "14-16 tháng",
      country: "Thuỵ Sĩ",
      experience: [
        "Tốt nghiệp cử nhân",
        "Tối thiểu 2 năm kinh nghiệm làm việc",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      highlight: [
        "Trực tuyến 100%",
        "Thạc sĩ (Master)",
        "20:00 - 23:00 (Vietnam)",
        "2 buổi chuyên đề/môn (Chủ nhật)",
      ],
      tagline:
        "Trường tư thục đầu tiên tại Geneva đạt kiểm định Swiss Accreditation Council",
      link: "#",
      description:
        "Chương trình EMBA Online phù hợp cho người bận rộn. Bằng cấp được công nhận bởi Hội đồng kiểm định liên bang Thụy Sĩ, đảm bảo giá trị quốc tế, mang đến kiến thức thực tiễn và cập nhật theo xu hướng kinh doanh toàn cầu.",
      demographic: {
        jobs: [
          {
            jobname: "Quản trị kinh doanh",
            percent: 30,
          },
          {
            jobname: "Ngân hàng",
            percent: 22,
          },
          {
            jobname: "Công nghệ thông tin",
            percent: 20,
          },
          {
            jobname: "Start-up",
            percent: 16,
          },
          {
            jobname: "Khác",
            percent: 12,
          },
        ],
        ages: [
          {
            jobname: "18 - 24",
            percent: 7,
          },
          {
            jobname: "25 - 30",
            percent: 27,
          },
          {
            jobname: "31 - 40",
            percent: 55,
          },
          {
            jobname: "41 - 50",
            percent: 10,
          },
          {
            jobname: "51+",
            percent: 1,
          },
        ],
      },
      degree: {
        back: "https://ideas.edu.vn/wp-content/uploads/2024/10/Quan-Tang-Vi-Diploma-1_page-0002.jpg",
        front:
          "https://ideas.edu.vn/wp-content/uploads/2025/03/UMEF-EMBA-Degree-2025.png",
      },
      fee_course: [
        {
          name: "Standard",
          icon: "icon6.png",
          price: "3400 CHF",
          benefits: [
            "Tài khoản truy cập tài liệu học tập, môn học theo chương trình gốc của trường",
            "Nhân viên trợ lý chương trình nhắc deadline, hỗ trợ hệ thống, kết nối giảng viên",
            "I-AI: Chatbot hỗ trợ nội dung MBA online (Viện IDEAS)",
            "2 ngày lớp chuyên đề vào chủ nhật tuần 4 mỗi môn - review và hướng dẫn Final exam",
          ],
        },
        {
          name: "High Quality",
          icon: "icon5.png",
          price: "8400 CHF",
          benefits: [
            "Bao gồm chương trình Standard và Hệ thống học tập eAcademy",
            "Lớp trực tuyến: Giảng viên quốc tế, Thứ 4 và Thứ 6 (20h00 – 23h00). Mỗi môn 4 tuần, 8 buổi Zoom",
            "Học phí đã bao gồm chuyến đi Thụy Sĩ (trị giá 2.000 CHF), gồm vé máy bay, ăn ở, học tập, tham quan các doanh nghiệp quốc tế",
            "Đánh giá sơ bộ bài Final: Được hội đồng chuyên môn của Viện IDEAS đánh giá, góp ý bài Final đã đi đúng hướng, tránh lạc đề, học viên nắm được điểm đánh giá sơ bộ và hạn chế được khả năng rớt môn.",
          ],
        },
      ],
      accreditation: [
        {
          name: "W",
          logo: "./kdumef1.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef3.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef4.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef5.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://ideas.edu.vn/wp-content/uploads/2023/12/vnanric.jpg",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef2.png",
          link: "#",
        },
      ],
      require: [
        "Bằng cử nhân và bảng điểm",
        "Sơ yếu lí lịch (CV)",
        "Thư động lực (Motivation Letter)",
        "Ảnh hộ chiếu (4×6)",
        "Passport",
        "Application Form <a class='text_download'>(Download)</a>",
      ],
      faq: [
        {
          q: "Chính sách bảo lưu và hoàn phí?",
          a: "Chương trình EMBA Online - Swiss UMEF hỗ trợ bởi Viện IDEAS có đầy đủ chính sách hỗ trợ bảo lưu và hoàn phí theo từng trường hợp cụ thể vui lòng để lại thông liên hệ ở ô bên phải hoặc Hotline <b>028 2244 2244</b> để được tư vấn chi tiết.",
        },
        {
          q: "Hình thức và ngôn ngữ của EMBA Online?",
          a: "Chương trình EMBA của trường Swiss UMEF sẽ học trực tuyến bằng tiếng Anh với giảng viên Quốc tế, bên cạnh đó viện IDEAS tại Việt Nam sẽ tổ chức các buổi chuyên đề vào cuối tuần để giúp học viên cũng cố kiến thức trên lớp học.",
        },
        {
          q: "Bằng cấp sau khi hoàn thành chương trình?",
          a: "Bằng nhận được sau khi hoàn thành là <b>Bằng Tốt Nghiệp cấp độ Thạc sĩ</b> do trường Swiss UMEF cấp. Được công nhận bởi nhiều quốc gia trên thế giới.",
        },
      ],
      this_subjects: [
        {
          name: "EMBA 400. Marketing Management",
          description:
            "Học cách xây dựng chiến lược marketing, định vị thương hiệu, nghiên cứu thị trường và quản lý khách hàng.",
          link: "https://www.youtube.com/watch?v=CebD5PCML6w",
        },
        {
          name: " EMBA 401. Human Capital and Talent Management",
          description:
            "Quản lý nhân sự, tuyển dụng, phát triển tài năng và tạo động lực cho đội ngũ.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 402. Entrepreneurship and Innovation",
          description:
            "Phát triển tư duy khởi nghiệp, sáng tạo sản phẩm/dịch vụ mới và quản lý rủi ro kinh doanh.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 403. Corporate Finance",
          description:
            "Hiểu về tài chính doanh nghiệp, quản lý dòng tiền, đầu tư và tối ưu hóa lợi nhuận.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 404. Accounting for Managers",
          description:
            "Kiến thức kế toán dành cho quản lý, giúp đọc hiểu báo cáo tài chính và ra quyết định kinh doanh.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 405. Digital Transformation",
          description:
            "Ứng dụng công nghệ số trong kinh doanh, chuyển đổi số và tối ưu quy trình làm việc.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 406. Global Strategy",
          description:
            "Chiến lược kinh doanh quốc tế, phân tích thị trường toàn cầu và mở rộng hoạt động kinh doanh.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 407. Project Management",
          description:
            "Quản lý dự án, lập kế hoạch, theo dõi tiến độ và đảm bảo kết quả đạt mục tiêu.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 408. Organizational Behaviour",
          description:
            "Hiểu hành vi tổ chức, văn hóa doanh nghiệp và cách xây dựng môi trường làm việc hiệu quả.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "EMBA 409. Leadership Development",
          description:
            "Phát triển kỹ năng lãnh đạo, xây dựng đội ngũ và ra quyết định chiến lược.",
          link: "https://ideas.edu.vn/mba-umef",
        },
      ],
    },
    IDEAS04: {
      avatar: "./avatar/11.jpg",
      name: "MSc AI",
      school: "Swiss UMEF",
      subjects: "<b>90</b> tín chỉ - <b>12</b> môn và luận văn",
      duration: "14-16 tháng",
      country: "Thuỵ Sĩ",
      experience: [
        "Tốt nghiệp cử nhân",
        "Tối thiểu 2 năm kinh nghiệm ở cấp độ quản lý",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      highlight: [
        "Trực tuyến 100%",
        "Thạc sĩ (Master)",
        "20:00 - 23:00 (Vietnam)",
        "2 buổi chuyên đề/môn (Chủ nhật)",
      ],
      tagline:
        "Trường tư thục đầu tiên tại Geneva đạt kiểm định Swiss Accreditation Council",
      link: "#",
      description:
        "Chương trình AI được thiết kế đặc biệt cho những nhà quản trị kinh doanh, những người muốn khám phá và khai thác tiềm năng của trí tuệ nhân tạo trong quản lý doanh nghiệp.",
      demographic: {
        jobs: [
          {
            jobname: "Công nghệ thông tin",
            percent: 40,
          },
          {
            jobname: "Quản trị kinh doanh",
            percent: 30,
          },
          {
            jobname: "Ngân hàng",
            percent: 12,
          },

          {
            jobname: "Start-up",
            percent: 10,
          },
          {
            jobname: "Khác",
            percent: 8,
          },
        ],
        ages: [
          {
            jobname: "18 - 24",
            percent: 7,
          },
          {
            jobname: "25 - 30",
            percent: 27,
          },
          {
            jobname: "31 - 40",
            percent: 55,
          },
          {
            jobname: "41 - 50",
            percent: 10,
          },
          {
            jobname: "51+",
            percent: 1,
          },
        ],
      },
      degree: {
        back: "https://ideas.edu.vn/wp-content/uploads/2024/10/Quan-Tang-Vi-Diploma-1_page-0002.jpg",
        front:
          "https://ideas.edu.vn/wp-content/uploads/2025/03/UMEF-EMBA-Degree-2025.png",
      },
      fee_course: [
        {
          name: "High Quality",
          icon: "icon5.png",
          price: "11.400 CHF",
          benefits: [
            "Tài khoản truy cập tài liệu học tập, môn học theo chương trình gốc của trường, hệ thống học tập eAcademy",
            "Nhân viên trợ lý chương trình nhắc deadline, hỗ trợ hệ thống, kết nối giảng viên",
            "I-AI: Chatbot hỗ trợ nội dung MBA online (Viện IDEAS)",
            "Lớp trực tuyến: Giảng viên quốc tế, Thứ 4 và Thứ 6 (20h00 – 23h00). Mỗi môn 4 tuần, 8 buổi Zoom",
            "Học phí đã bao gồm chuyến đi Thụy Sĩ (trị giá 2.000 CHF), gồm vé máy bay, ăn ở, học tập, tham quan các doanh nghiệp quốc tế",
            "Đánh giá sơ bộ bài Final: Được hội đồng chuyên môn của Viện IDEAS đánh giá, góp ý bài Final đã đi đúng hướng, tránh lạc đề, học viên nắm được điểm đánh giá sơ bộ và hạn chế được khả năng rớt môn.",
          ],
        },
      ],
      accreditation: [
        {
          name: "W",
          logo: "./kdumef1.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef3.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef4.png",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef5.png",
          link: "#",
        },
        {
          name: "W",
          logo: "https://ideas.edu.vn/wp-content/uploads/2023/12/vnanric.jpg",
          link: "#",
        },
        {
          name: "W",
          logo: "./kdumef2.png",
          link: "#",
        },
      ],
      require: [
        "Bằng cử nhân và bảng điểm",
        "Sơ yếu lí lịch (CV)",
        "Thư động lực (Motivation Letter)",
        "Ảnh hộ chiếu (4×6)",
        "Passport",
        "Application Form <a class='text_download'>(Download)</a>",
      ],
      faq: [
        {
          q: "Chính sách bảo lưu và hoàn phí?",
          a: "Chương trình EMBA Online - Swiss UMEF hỗ trợ bởi Viện IDEAS có đầy đủ chính sách hỗ trợ bảo lưu và hoàn phí theo từng trường hợp cụ thể vui lòng để lại thông liên hệ ở ô bên phải hoặc Hotline <b>028 2244 2244</b> để được tư vấn chi tiết.",
        },
        {
          q: "Hình thức và ngôn ngữ của EMBA Online?",
          a: "Chương trình EMBA của trường Swiss UMEF sẽ học trực tuyến bằng tiếng Anh với giảng viên Quốc tế, bên cạnh đó viện IDEAS tại Việt Nam sẽ tổ chức các buổi chuyên đề vào cuối tuần để giúp học viên cũng cố kiến thức trên lớp học.",
        },
        {
          q: "Bằng cấp sau khi hoàn thành chương trình?",
          a: "Bằng nhận được sau khi hoàn thành là <b>Bằng Tốt Nghiệp cấp độ Thạc sĩ</b> do trường Swiss UMEF cấp. Được công nhận bởi nhiều quốc gia trên thế giới.",
        },
      ],
      this_subjects: [
        {
          name: "MAI 400. Machine Learning and Deep Learning",
          description:
            "Nghiên cứu các thuật toán học máy và học sâu, ứng dụng trong phân tích dữ liệu, dự đoán và ra quyết định kinh doanh.",
          link: "https://www.youtube.com/watch?v=CebD5PCML6w",
        },
        {
          name: "MAI 401. Advanced Project Management in AI",
          description:
            "Quản lý dự án trong lĩnh vực AI, bao gồm lập kế hoạch, theo dõi tiến độ, quản lý rủi ro và tối ưu hóa nguồn lực.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 402. Data Management & Governance",
          description:
            "Học cách tổ chức, quản trị dữ liệu và tuân thủ các quy định về dữ liệu để đảm bảo tính bảo mật và hiệu quả khai thác dữ liệu AI.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 403. AI in Business Decision Making",
          description:
            "Ứng dụng AI trong phân tích và hỗ trợ ra quyết định doanh nghiệp, từ chiến lược kinh doanh đến tối ưu hóa vận hành.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 404. Advanced study of ethical considerations",
          description:
            "Khám phá các vấn đề đạo đức trong AI, bao gồm quyền riêng tư, thiên vị thuật toán và trách nhiệm doanh nghiệp.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 405. Reinforcement Learning and AI Optimization",
          description:
            "Tìm hiểu về học tăng cường (Reinforcement Learning) và cách tối ưu hóa AI trong các quy trình kinh doanh và tự động hóa.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 406. Global AI policies and regulatory frameworks",
          description:
            "Phân tích các chính sách và khung pháp lý toàn cầu về AI, tác động của chúng đến doanh nghiệp và công nghệ.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 407. Change management strategies for AI transition",
          description:
            "Xây dựng chiến lược chuyển đổi AI trong doanh nghiệp, bao gồm quản lý sự thay đổi và đào tạo nhân lực.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 408. AI Innovation and Entrepreneurship",
          description:
            "Phát triển sáng tạo và khởi nghiệp trong lĩnh vực AI, từ ý tưởng công nghệ đến mô hình kinh doanh khả thi.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 409. Economic Forecasting and AI-Driven Market Dynamics",
          description:
            "Ứng dụng AI trong dự báo kinh tế và phân tích động lực thị trường để đưa ra quyết định chiến lược.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 500. Financial Intelligence and Algorithmic Trading",
          description:
            "Tìm hiểu về trí tuệ tài chính, giao dịch thuật toán và cách AI tối ưu hóa chiến lược đầu tư.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "MAI 503. AI-Driven Marketing Strategies & Communication Systems",
          description:
            "Áp dụng AI vào chiến lược marketing, cá nhân hóa trải nghiệm khách hàng và tối ưu hóa truyền thông.",
          link: "https://ideas.edu.vn/mba-umef",
        },
        {
          name: "CAP 501. Capstone Project",
          description:
            "Dự án tốt nghiệp tổng hợp, nơi học viên áp dụng kiến thức và kỹ năng đã học vào một dự án AI thực tế.",
          link: "https://ideas.edu.vn/mba-umef",
        },
      ],
    },
  },
  graduation_ceremony: [
    {
      title: "Lễ tốt nghiệp",
      location: "Viện IDEAS - Việt Nam",
      avatar:
        "https://ideas.edu.vn/wp-content/uploads/2024/11/8X1A9328-1-1.jpg",
      school: "Ascencia Business School",
      name: "Global MBA - DBA",
      time: "23/11/2024",
      link: "https://youtu.be/hmVxOq5jkeM?si=gR-YOgFi2KQJftr9",
    },
    {
      title: "Lễ tốt nghiệp",
      location: "Viện IDEAS - Việt Nam",
      avatar:
        "https://ideas.edu.vn/wp-content/uploads/2024/10/Totnghiepumef.jpg",
      school: "Swiss UMEF",
      name: "EMBA & Online MBA",
      time: "26/10/2024",
      link: "https://youtu.be/fBf5YcaMxDY?si=eJDfqKWc4HxT_TmS",
    },
    {
      title: "Lễ tốt nghiệp",
      location: "Paris - Pháp",
      avatar: "./avatar/image.png",
      school: "Ascencia Business School",
      name: "Global MBA - DBA",
      time: "18/07/2024",
      link: "https://www.facebook.com/share/r/14UHtxBTZQ/",
    },
    {
      title: "Lễ tốt nghiệp",
      location: "Viện IDEAS - Việt Nam",
      avatar:
        "https://ideas.edu.vn/wp-content/uploads/2024/01/416256674_837845658141991_5379123310787471174_n.jpg",
      school: "Ascencia Business School",
      name: "Global MBA - DBA",
      time: "06/01/2024",
      link: "https://youtu.be/Dc78ClToNRo?si=kfg00KZ6gYpOWwTI",
    },
  ],
  student_quote: [
    {
      name: "Nguyễn Thanh Bình",
      title:
        "Tiến sĩ QTKD Pháp – Ascencia Business School - Director of Information & Environment technology application Institute",
      avatar: "https://ideas.edu.vn/wp-content/uploads/2025/02/casc1.jpg",
      content:
        "Cảm ơn sự hổ trợ rất nhiệt tình của đội ngũ cán bộ và nhân viên của Viện IDEAS, đã đồng hành cùng chúng tôi trong suốt quá trình nghiên cứu, hỗ trợ không quản ngày đêm để chúng tôi hoàn thành mục tiêu nghiên cứu Tiến Sĩ – cấp bậc cao nhất của Học vị.",
    },
    {
      name: "Nguyễn Huỳnh Phương",
      title:
        "Thạc Sĩ QTKD Pháp (Global MBA) – Ascencia Business School UNIT MANAGER in Hanwha Life Việt Nam",
      avatar: "https://ideas.edu.vn/wp-content/uploads/2025/02/huynhphuong.jpg",
      content:
        "Đối với những bạn chọn chương trình trực tuyến, tôi khuyên bạn nên chọn nơi đáng tin cậy như Viện IDEAS. Bạn nên chia sẻ mọi căng thẳng hoặc khó khăn với giảng viên vì họ sẽ đưa ra những gợi ý hữu ích để giúp bạn vượt qua những khó khăn đó.",
    },
    {
      name: "Nguyễn Thị Hà Miên",
      title:
        "Thạc Sĩ QTKD Pháp (Global MBA) – Ascencia Business School Deputy Project Manager",
      avatar: "https://ideas.edu.vn/wp-content/uploads/2025/02/hamien.jpg",
      content:
        "Tôi chọn chương trình trực tuyến vì nó linh hoạt hơn. Bên cạnh đó, sự hỗ trợ 24/7 của Viện IDEAS đã giúp tôi hoàn thành tốt nhất về thời hạn nộp bài tập liên tục cũng như nhắc nhở thường xuyên về lớp học.",
    },
    {
      name: "Lê Ngọc Thương",
      title:
        "Thạc Sĩ QTKD Thụy Sĩ (Executive MBA) – Swiss UMEF Head of Commercial Operations – Boehringer Ingelheim",
      avatar: "https://ideas.edu.vn/wp-content/uploads/2025/02/cumef.jpg",
      content:
        " Chương trình đã kết nối tôi với nhiều bạn cùng lớp ở các ngành nghề khác nhau, giúp tôi tiếp nhận những chia sẻ và kinh nghiệm quý báu. Tôi đặc biệt cảm ơn Viện IDEAS vì sự hỗ trợ suốt 1 năm qua, từ kiến thức chuyên gia đến hỗ trợ hành chính 24/7, giúp tôi cân bằng việc học và công việc để đạt được mục tiêu.",
    },
    {
      name: "Lê Chí Thành",
      title:
        "Tiến sĩ QTKD Pháp – Ascencia Business School Channel Business Manager (Indochina) | Leica Biosystems (an OpCo of Danaher).",
      avatar: "https://ideas.edu.vn/wp-content/uploads/2025/02/casc2.jpg",
      content:
        "Hành trình học trực tuyến từ năm 2016 chương trình MBA và sau đó tiếp bước lựa chọn DBA của tôi luôn được hỗ trợ và đồng hành bởi đội ngũ của Viện IDEAS. Có thể học online là sự lựa chọn phù hợp cho tôi để sắp xếp giữa công việc và gia đình. Lời cảm ơn sâu sắc của tôi gửi đến Dr. Pham Quang Vinh và đội ngũ hỗ trợ IDEAS, đã luôn động viên, nhắc nhở trong suốt chặng đường dài này.",
    },
    {
      name: "Chu Hoàng Thái",
      title:
        "Thạc Sĩ QTKD Thụy Sĩ (Executive MBA) – Swiss UMEF Director Of Housekeeping – REGENT PHU QUOC",
      avatar:
        "https://ideas.edu.vn/wp-content/uploads/2025/02/chu_hoang_thai.jpg",
      content:
        "Lựa chọn chương trình EMBA của Swiss UMEF – hỗ trợ bởi IDEAS là một quyết định đúng đắn đối với tôi, vì nó thuận tiện cho việc vừa đi học vừa đi làm cũng như phù hợp về khả năng tài chính của tôi. Ngoài kiến thức từ các giáo sư Thụy sĩ và châu âu, giá trị lớn nhất đối với tôi là mạng lưới quan hệ (networking).",
    },
  ],
  school: {
    "Swiss UMEF": {
      link: "/umef",
      logo: "https://ideas.edu.vn/wp-content/uploads/2023/07/Logo-Swiss-UMEF.webp",
      small_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSoIjIIW_XlfCq3nbCxt--s3zt2lxrO74_A&amp;s",
    },
    "Ascencia Business School": {
      link: "/umef",
      logo: "https://ideas.edu.vn/wp-content/uploads/2024/03/Logo-Ascencia-Business-School-1.png",
      small_logo: "./avatar/Ascencia-Favicon.png",
    },
    "College de Paris": {
      link: "/umef",
      logo: "https://www.collegedeparis.com/wp-content/uploads/2021/06/cdp-formation-continue.png",
      small_logo: "./avatar/Ascencia-Favicon.png",
    },
    SBS: {
      link: "/umef",
      logo: "https://ideas.edu.vn/wp-content/uploads/2024/11/SBS.png",
      small_logo: "./avatar/Ascencia-Favicon.png",
    },
    Estiam: {
      link: "/umef",
      logo: "https://ideas.edu.vn/wp-content/uploads/2025/03/estiam.png",
      small_logo: "./avatar/Ascencia-Favicon.png",
    },
  },
  partner: [
    {
      name: "ChiefAI",
      link: "#",
      logo: "https://chiefaiofficer.vn/wp-content/uploads/2024/09/cao-logo.png",
    },
    {
      name: "ChiefAI",
      link: "#",
      logo: "https://ideas.edu.vn/wp-content/uploads/2023/07/tssac-2.webp",
    },
    {
      name: "ChiefAI",
      link: "#",
      logo: "https://ideas.edu.vn/wp-content/uploads/2023/07/Untitled-design-1-e1657270193979.webp",
    },
    {
      name: "ChiefAI",
      link: "#",
      logo: "https://ideas.edu.vn/wp-content/uploads/2023/07/1646029406269.webp",
    },
    {
      name: "ChiefAI",
      link: "#",
      logo: "https://ideas.edu.vn/wp-content/uploads/2025/03/estiam.png",
    },
  ],
  faq: [
    {
      q: "Hình thức và ngôn ngữ học tập của các chương trình như thế nào?",
      a: "Học viên sẽ được cấp tài khoản hệ thống từ trường Đại học đã đăng ký. Hình thức học tập Online 100%. Các bài học được mở và giảng dạy bằng tiếng Anh. Viện IDEAS sẽ tổ chức các buổi học, review, chuyên đề bằng tiếng Việt song song với chương trình học để các học viên có thể nắm bắt và theo kịp tiến độ của chương trình. Ngoài ra độ ngũ chuyên môn hỗ trợ học viên review các bài Final Exam của mỗi môn học",
    },
    {
      q: "Viện IDEAS có phải là trường Đại học không?",
      a: "Viện IDEAS không phải là một trường đại học mà là một đơn vị hỗ trợ học thuật, hợp tác với các chương trình học của các trường Đại học liên quan đến các chương trình đào tạo Thạc sĩ Online quốc tế. Đội ngũ tư vấn, hỗ trợ chuyên nghiệp và các giảng viên chuyên môn với nhiều năm kinh nghiệm sẽ cùng học viên ôn tập các môn học song song chương trình trên lớp khi học viên chọn theo học chương trình Quốc tế dưới sự hỗ trợ từ IDEAS.",
    },
    {
      q: "Các chương trình đào tạo Thạc Sĩ tại IDEAS là gì?",
      a: "Các chương trình đào tạo thạc sĩ chủ yếu thuộc chuyên ngành thạc sĩ Quản trị kinh doanh Online đến từ các trường đại học danh giá các nước: Hoa Kỳ, Thụy Sĩ, Pháp, Canada,… Được IDEAS chọn lọc chất lượng và phù hợp với việc vừa học vừa làm của các học viên Việt Nam. Bên cạnh đó các chương trình phải có đầy đủ những kiểm định từ các tổ chức kiểm định giáo dục quốc tế và đất nước sở tại. Học viên có thể yên tâm và lựa chọn học tập dưới sự hỗ trợ từ Viện IDEAS.",
    },
  ],
};
const IDEAS_TEST = {
  MBA: [
    {
      id: 1,
      q: "Bạn thích học online như thế nào?",
      a: [
        "Tôi thích lớp học tương tác sôi nổi cùng giáo sư và mọi người",
        "Tôi thích tự nghiên cứu và làm bài trên hệ thống, cùng với sự hướng dẫn của giáo sư",
      ],
    },
    {
      id: 2,
      q: "Mục tiêu kiến thức sau khi tốt nghiệp?",
      a: [
        "Tôi muốn học kiến thức quản trị chuyên sâu",
        "Tôi muốn quản trị kết hợp cùng với công nghệ AI",
        "Tôi cần tốt nghiệp một chương trình thạc sĩ nhanh chóng",
      ],
    },
    {
      id: 3,
      q: "Khả năng tài chính và đóng học phí?",
      a: [
        "Tài chính không thành vấn đề",
        "Tài chính ổn, muốn đóng phí chia thành nhiều đợt",
        "Tài chính trung bình, tôi muốn trả góp học phí",
      ],
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const ideas_alert_title = document.querySelector(".ideas_alert h3");
  const ideas_alert_close = document.querySelectorAll(".ideas_alert_close");
  const ideas_form_textarea = document.querySelector(".ideas_form_textarea");
  const ideas_media_popup_title = document.querySelector(
    ".ideas_media_popup h3"
  );
  const ideas_media_popup = document.querySelector(".ideas_media_popup");
  const test_btn = document.querySelector(".test_btn");

  const ideas_alert_content = document.querySelector(".ideas_alert_content");
  const ideas_header_menu_i = document.querySelector(".ideas_header_menu i");
  const ideas_media_content = document.querySelector(".ideas_media_content");
  const ideas_alert = document.querySelector(".ideas_alert");
  const ideas_form_choose_list = document.querySelector(
    ".ideas_form_choose ul"
  );
  const ideas_form = document.querySelector(".ideas_form");
  const ideas_form_choose_text = document.querySelector(
    ".ideas_form_choose_text"
  );
  const ideas_form_choose_span = document.querySelector(
    ".ideas_form_choose span"
  );
  const ideas_form_header_title = document.querySelector(
    ".ideas_form_header h2"
  );
  const ideas_form_choose = document.querySelector(".ideas_form_choose");
  const ideas_form_close = document.querySelector(".ideas_form_close");
  const comparebtns = document.querySelectorAll(".compare_course");
  const compare_block_title = document.querySelectorAll(".compare_block h3");
  const compare_block_imgs = document.querySelectorAll(".compare_block img");
  const comparebtns_container = document.querySelector(".compare_render > div");
  const compareActive = document.querySelector(".compare_active");
  const compare = document.querySelector(".compare");
  const compare_close = document.querySelector(".compare_close");
  const compare_btn = document.querySelector(".compare_btn");
  const testContainer = document.querySelector("#test");
  const testQuestion = testContainer.querySelector(".test_q");
  const testAnswers = testContainer.querySelector(".test_a");
  const test_head_close = testContainer.querySelector(".test_container > i");
  const testBackBtn = testContainer.querySelector(".test_btns p:first-child");
  const testInner = testContainer.querySelector(".test_inner");
  const testProgressInner = document.querySelector(".test_progress_inner"); // Lấy progress bar từ HTML
  const ideas_header_right = document.querySelector(".ideas_header_right"); // Lấy progress bar từ HTML
  // ??????
  let compareID = 0;
  let program1 = null;
  let program2 = null;
  showform = function showForm(text, text2) {
    ideas_form.classList.add("active");
    ideas_form_choose_text.textContent = text || "Tư vấn chung";
    if (text2) {
      ideas_form_choose_text.textContent = text2 || "Tư vấn chung";
      ideas_form_textarea.textContent = text2;
    }
  };
  ideas_form_choose.addEventListener("click", () => {
    ideas_form_choose.classList.toggle("active");
  });
  ideas_header_menu_i.addEventListener("click", () => {
    ideas_header_right.classList.toggle("active");

    if (ideas_header_menu_i.classList.contains("fa-bars")) {
      ideas_header_menu_i.classList.replace("fa-bars", "fa-xmark");
    } else {
      ideas_header_menu_i.classList.replace("fa-xmark", "fa-bars");
    }
  });

  ideas_alert_close.forEach((btn) => {
    btn.addEventListener("click", () => {
      ideas_alert && ideas_alert.classList.remove("active");
      ideas_media_popup && ideas_media_popup.classList.remove("active");
    });
  });
  ideas_form_close.addEventListener("click", () => {
    ideas_form.classList.remove("active");
  });

  ideas_form_choose_list.addEventListener("click", (event) => {
    const clickedItem = event.target.closest("li"); // Kiểm tra nếu click vào <li>
    if (clickedItem) {
      ideas_form_choose_span.textContent = clickedItem.textContent.trim(); // In ra nội dung của <li>
    }
  });

  comparebtns_container.innerHTML = "";

  Object.entries(IDEAS_DATA.programmes).forEach(([id, program]) => {
    const div = document.createElement("div");
    div.className = "compare_item";
    div.innerHTML = `
      <div><h5>${program.name}</h5></div>
      <div>
        <div>
          <img src="${IDEAS_DATA.school[program.school].small_logo}" alt="${
      program.school
    }">
          <span>${program.school}</span>
        </div>
      </div>
    `;

    // Gán sự kiện click
    div.onclick = () => handleCompareClick(program);

    comparebtns_container.appendChild(div);
  });

  compare_close.addEventListener("click", () => {
    compare.classList.remove("active");
    compareActive.classList.remove("active");
    comparebtns[0].classList.remove("chosed");
    comparebtns[1].classList.remove("chosed");
    compare_block_title[0].textContent = "Chương trình 1";
    compare_block_title[1].textContent = "Chương trình 2";
    program1 = null;
    program2 = null;
  });
  compare_btn.addEventListener("click", () => {
    const ID = document.querySelector("h1").dataset.program;
    if (ID) {
      comparePopup(ID);
    } else {
      comparePopup();
    }
  });
  comparePopup = function showCompare(ID) {
    console.log(123);

    compare.classList.add("active");
    if (ID) {
      const program = IDEAS_DATA.programmes[ID];
      if (!program) {
        return;
      }
      program1 = program;
      compare_render.classList.remove("active");
      comparebtns[0].classList.add("chosed");
      compare_block_title[0].textContent = program.name;
      compare_block_imgs[0].src = program.avatar;
    }
  };
  function handleCompareClick(program) {
    compare_render.classList.remove("active");
    if (compareID === 0) {
      program1 = program;
    } else {
      program2 = program;
    }
    if (program1 === program2) {
      const content = `
      <i class="fa-solid fa-clone main_clr"></i>
      <p>Hãy chọn 2 chương trình khác nhau</p>
      `;
      renderAlert("So sánh chương trình", content);
      comparebtns[compareID].classList.remove("chosed");
    } else {
      comparebtns[compareID].classList.add("chosed");
      compare_block_title[compareID].textContent = program.name;
      compare_block_imgs[compareID].src = program.avatar;
      if (program1 && program2) {
        renderComparison();
      }
    }
  }
  function renderComparison() {
    compareActive.innerHTML = `
      <div>
        <p>${program1.school}</p>
        <p>Trường</p>
        <p>${program2.school}</p>
      </div>
      <div>
        <p>${program1.country}</p>
        <p>Quốc gia</p>
        <p>${program2.country}</p>
      </div>
      <div>
        <p>${program1.description}</p>
        <p>Thông tin</p>
        <p>${program2.description}</p>
      </div>
      <div>
        <p>${program1.duration}</p>
        <p>Thời gian dự kiến</p>
        <p>${program2.duration}</p>
      </div>
       <div>
        <p>${program1.subjects}</p>
        <p>Tổng môn học</p>
        <p>${program2.subjects}</p>
      </div>
       <div>
        <p>${program1.highlight[2] || "N/A"}</p>
        <p>Thời gian</p>
        <p>${program2.highlight[2] || "N/A"}</p>
      </div>
      <div>
        <p>${program1.highlight[0] || "N/A"}</p>
        <p>Hình thức</p>
        <p>${program2.highlight[0] || "N/A"}</p>
      </div>
      <div>
        <p>${program1.highlight[1] || "N/A"}</p>
        <p>Cấp độ</p>
        <p>${program2.highlight[1] || "N/A"}</p>
      </div>
      <div>
        <p>${program1.highlight[3] || "N/A"}</p>
        <p>Hỗ trợ</p>
        <p>${program2.highlight[3] || "N/A"}</p>
      </div>
         <div>
       
          <p >
          ${program1.experience.map((exp) => `<span>${exp}</span>`).join("")}
        </p>
        <p>Yêu cầu</p>
        <p >
          ${program2.experience.map((exp) => `<span>${exp}</span>`).join("")}
        </p>
      </div>
      <div>
        <p><b>${
          program1.fee_course.find((f) => f.name === "Standard")?.price || "N/A"
        }</b></p>
        <p>Standard</p>
        <p><b>${
          program2.fee_course.find((f) => f.name === "Standard")?.price || "N/A"
        }</b></p>
      </div>
      <div>
        <p><b>${
          program1.fee_course.find((f) => f.name === "High Quality")?.price ||
          "N/A"
        }</b></p>
        <p>High Quality</p>
        <p><b>${
          program2.fee_course.find((f) => f.name === "High Quality")?.price ||
          "N/A"
        }</b></p>
      </div>
      <div class="compare_subjects">
        <p >
          ${program1.this_subjects
            .map((subject) => `<span>${subject.name}</span>`)
            .join("")}
        </p>
        <p>Danh sách môn học</p>
       <p >
          ${program2.this_subjects
            .map((subject) => `<span>${subject.name}</span>`)
            .join("")}
        </p>
      </div>
      <div>
        <p><a class="main_btn" href="#">Xem chương trình</a></p>
        <p></p>
        <p><a class="main_btn" href="#">Xem chương trình</a></p>
      </div>
    `;
    compareActive.classList.add("active");
    compareActive
      .querySelector("div:first-child")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const compare_render = document.querySelector(".compare_render");
  const test_result_wrapper = document.querySelector(".test_result_wrapper");
  comparebtns &&
    comparebtns.forEach((item, index) => {
      item.addEventListener("click", () => {
        compareID = index;
        compare_render.classList.add("active");
        compareActive.classList.remove("active");
      });
    });
  renderAlert = function renderAlert(title, content) {
    ideas_alert.classList.add("active");
    ideas_alert_title.textContent = title;
    ideas_alert_content.innerHTML = content;
  };
  renderMedia = function renderMedia(title, content) {
    ideas_media_popup_title.textContent = title;
    ideas_media_content.innerHTML = content;
    ideas_media_popup.classList.add("active");
  };
  /// TEST

  let currentQuestionIndex = 0;
  test_head_close.addEventListener("click", () => {
    testContainer.classList.remove("active");
    testInner.classList.remove("show");
    currentQuestionIndex = 0;
  });
  const questions = IDEAS_TEST.MBA;
  let userAnswers = new Array(questions.length).fill(null);

  function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    testProgressInner.style.width = `${progress}%`;
  }

  function renderQuestion(index) {
    testInner.classList.add("fade");
    setTimeout(() => {
      testInner.classList.remove("fade");
    }, 500);
    const questionData = questions[index];
    if (!questionData) return;

    testQuestion.textContent = questionData.q;
    testAnswers.innerHTML = questionData.a
      .map(
        (answer, i) =>
          `<p data-index="${i}" class="${
            userAnswers[index] === i ? "selected" : ""
          }">${answer}</p>`
      )
      .join("");

    // Gán sự kiện click cho mỗi đáp án
    testAnswers.querySelectorAll("p").forEach((answer) => {
      answer.addEventListener("click", (e) => {
        userAnswers[index] = parseInt(e.target.dataset.index);
        nextQuestion();
      });
    });

    // Ẩn nút "Trở lại" nếu ở câu đầu tiên
    testBackBtn.classList.toggle("disable", index === 0);

    updateProgress(); // Cập nhật thanh tiến trình
  }
  testBackBtn.addEventListener("click", prevQuestion);
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
    }
  }
  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
    } else {
      showResult();
    }
  }

  function showResult() {
    // alert(userAnswers);
    testBackBtn.classList.add("disable");
    testInner.classList.add("show");
    test_result_wrapper.innerHTML = `
      <div class="test_loading">
        <p>🔄 Đang phân tích câu trả lời của bạn...</p>
      </div>
    `;
    setTimeout(() => {
      const matchedPrograms = [IDEAS_DATA.programmes["IDEAS01"]];
      test_result_wrapper.innerHTML = `
        <div class="test_result">
          <h3>️🎉 Chương trình phù hợp với bạn có thể là:</h3>
          <div class="test_result_inner">
            ${matchedPrograms
              .map(
                (program) => `
              <div class="test_result_item">
                <img src="${program.avatar}" />
                <div class="test_result_item_info">
                  <p>${program.name}</p>
                  <span>${`${program.school} - ${program.country}`}</span>
                  <ul>
                    ${program.test
                      .map(
                        (desc) =>
                          `<li><i class="fa-solid fa-star"></i> ${desc}</li>`
                      )
                      .join("")}
                  </ul>
                  <div class="test_result_item_info_btns">
                    <a><i class="fa-solid fa-graduation-cap"></i> Chi tiết chương trình</a>
                    <a onclick="comparePopup('IDEAS01')" class="sub"><i class="fa-solid fa-clone"></i> So sánh</a>
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }, 800);
  }

  // Xử lý nút "Trở lại"
  test_btn &&
    test_btn.addEventListener("click", () => {
      testContainer.classList.add("active");
      renderQuestion(0);
    });

  // END TEST
});

let lastScrollTop = 0;
const header = document.querySelector(".ideas_header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Cuộn xuống -> Ẩn header
    header.classList.add("hide");
  } else {
    // Cuộn lên -> Hiện header
    header.classList.remove("hide");
  }
  lastScrollTop = scrollTop;
});
