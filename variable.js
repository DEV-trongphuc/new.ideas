let showform = null;
let comparePopup = null;
let renderAlert = null;
let renderMedia = null;
const IDEAS_DATA = {
  year_count: 14,
  students_count: 2451,
  courses_count: 70,
  teachers_count: 25,
  facebook_link: "https://www.facebook.com/ideas.edu.vn/",
  youtube_link: "https://www.youtube.com/c/Vi%E1%BB%87nIDEAS",
  zalo_link: "https://zalo.me/3857867121882640296",
  linkedin_link: "https://www.linkedin.com/company/ideasinstitute/",
  tiktok_link: "https://www.tiktok.com/@ideas_institute",
  programmes: {
    IDEAS01: {
      listImgs: [
        "https://ideas.edu.vn/wp-content/uploads/2024/06/asc17-6-2.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/06/asc17-6-4.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/04/NHP_1903-1-1.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/11/8X1A9328-1-1.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8537.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8638.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8725.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8841.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A9322.jpg",
      ],
      level: "MBA",
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
      subjects: "<b>75</b> tín chỉ ETCS - <b>12</b> môn và Capstone",
      duration: "14-16 tháng",
      tagline: "Là trường thành viên của tổ chức giáo dục College de Paris",
      link: "#",
      experience: [
        "Tốt nghiệp cử nhân",
        "Tối thiểu 2 năm kinh nghiệm ở cấp độ quản lý",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      test: {
        high: [
          "Chương trình học tập, làm bài và nộp trên flatform của trường, dựa trên tài liệu và hướng dẫn của giáo sư.",
          "Thời gian học tập tự sắp xếp linh hoạt, hỗ trợ bởi các giảng viên Việt Nam trong quá trình học",
          "Học phí linh hoạt chia nhỏ hoặc trả góp",
        ],
      },
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
        "Apllication Form <a href='https://ideas.edu.vn/wp-content/uploads/2025/03/Application-Form-_-1.pdf' target='_blank' class='text_download'>(Download Here)</a>",
      ],
      faq: [
        {
          q: "Tiếng anh nghe nói chưa tốt có thể theo học chương trình không?",
          a: "Có. Chương trình không yêu cầu học viên phải giỏi tiếng Anh giao tiếp, vì phần lớn nội dung học tập là đọc tài liệu, làm bài tập và viết luận. Tuy nhiên, học viên cần có khả năng đọc hiểu tiếng Anh ở mức khá để theo kịp chương trình. Ngoài ra, các lớp chuyên đề của Viện IDEAS chủ yếu chia sẻ bằng Tiếng việt sẽ hỗ trợ học viên nắm được bài tốt hơn",
        },
        {
          q: "Nếu bận đi công tác không thể hoàn thành bài đúng hạn thì sao",
          a: "Chương trình Global MBA của Ascencia Business School được thiết kế linh hoạt để phù hợp với lịch trình bận rộn của học viên. Mỗi môn học đều có thời gian bài tập kéo dài 8 tuần và bài tập phân bổ giãn cách mỗi tuần. Deadline các bài tập thường vào lúc 16h Việt Nam. Học viên nắm được thông tin bài tập và deadline sẽ sắp xếp phù hợp. Trường hợp Học viên chưa thể hoàn thành đúng thời hạn sẽ được đăng ký <b>Resubmit</b> có tốn phí để được mở thêm 1 tuần nộp lại bài. ",
        },
        {
          q: "Học viên có thể tham gia lễ tốt nghiệp tại Paris - Pháp không?",
          a: "Có. Học viên hoàn thành chương trình có thể đăng ký tham gia lễ tốt nghiệp tại Pháp, cùng với các học viên quốc tế khác của Ascencia Business School. Mỗi năm có 2 đợt Lễ Tốt nghiệp vào tháng 6 và tháng 12. Viện IDEAS sẽ thông báo đến học viên về lịch thông báo từ Trường để học viên đăng kí",
        },
      ],
      this_subjects: [
        {
          name: "7SMG01. Strategic Management, Competitiveness & Globalization",
          description:
            "Học cách xây dựng chiến lược marketing, định vị thương hiệu, nghiên cứu thị trường và quản lý khách hàng.",
          link: "",
          credit: 5,
        },
        {
          name: "7BSU01. Business Sustainability, Ethics and Social Responsibility",
          description:
            "Nâng cao kỹ năng quản lý nhân sự và phát triển tài năng trong tổ chức, giúp tối ưu hóa nguồn nhân lực.",
          link: "",
          credit: 5,
        },
        {
          name: "7BIS02. Managing a Contemporary Business Information System",
          description:
            "Khám phá các nguyên tắc khởi nghiệp và đổi mới sáng tạo để phát triển doanh nghiệp thành công.",
          link: "",
          credit: 5,
        },
        {
          name: "7FMG01. Financial Management Theory and Practice",
          description:
            "Nắm vững kiến thức tài chính doanh nghiệp, tối ưu hóa dòng tiền và chiến lược tài chính.",
          link: "",
          credit: 5,
        },
        {
          name: "7SCM01. Operations, Supply Chain and Project Management",
          description:
            "Cung cấp các nguyên tắc kế toán quan trọng giúp nhà quản lý đưa ra quyết định kinh doanh hiệu quả.",
          link: "",
          credit: 5,
        },
        {
          name: "7MTI02. The Management of Technology and Innovation",
          description:
            "Khám phá cách công nghệ số đang thay đổi mô hình kinh doanh và phương pháp quản lý.",
          link: "",
          credit: 5,
        },
        {
          name: "7MST01. Marketing Strategy",
          description:
            "Phát triển chiến lược kinh doanh toàn cầu, giúp doanh nghiệp mở rộng và cạnh tranh hiệu quả.",
          link: "",
          credit: 5,
        },
        {
          name: "7BAN02. Business Analytics, Data Analysis & Decision Making",
          description:
            "Học cách lập kế hoạch, thực hiện và kiểm soát dự án để đạt được mục tiêu kinh doanh.",
          link: "",
          credit: 5,
        },
        {
          name: "7HRM01. Strategic Human Resources Management",
          description:
            "Nghiên cứu hành vi tổ chức để cải thiện hiệu suất và môi trường làm việc.",
          link: "",
          credit: 5,
        },
        {
          name: "7MOD01. Managing Organizational Diversity",
          description:
            "Phát triển kỹ năng lãnh đạo để điều hành tổ chức một cách hiệu quả và truyền cảm hứng cho đội ngũ.",
          link: "",
          credit: 5,
        },
        {
          name: "7ELE01. Executive Leadership",
          description:
            "Hướng dẫn phương pháp nghiên cứu và viết luận văn thạc sĩ chuyên sâu.",
          link: "",
          credit: 5,
        },
        {
          name: "7MEC01. Managerial Economics",
          description:
            "Trang bị kỹ năng đàm phán kinh doanh để đạt được thỏa thuận có lợi nhất.",
          link: "",
          credit: 5,
        },
        {
          name: "CAP. Capstone Project",
          description:
            "Hoàn thành luận văn MBA dựa trên nghiên cứu thực tế và ứng dụng kiến thức học được.",
          link: "",
          credit: 15,
        },
      ],
    },
    IDEAS02: {
      listImgs: [
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8537.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8638.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8725.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8841.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A9322.jpg",
      ],
      level: "MBA",
      avatar: "./avatar/9.jpg",
      name: "Online MBA",
      school: "Swiss UMEF",
      subjects: "<b>90</b> tín chỉ ETCS - <b>12</b> môn và luận văn",
      duration: "14-16 tháng",
      country: "Thuỵ Sĩ",
      experience: [
        "Tốt nghiệp cử nhân",
        "Tối thiểu 3 năm kinh nghiệm làm việc",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      test: {
        high: [
          "Lớp học tương tác trực tiếp, được trao đổi và thảo luận cùng Giảng viên và học viên",
          "Kiến thức quản trị chuyên sâu, kết hợp với case study thực tiễn",
          "Lộ trình học lên DBA với nhiều học bỗng từ trường và Viện IDEAS",
          "Học phí linh hoạt chia nhỏ hoặc trả góp",
        ],
        stand: [
          "Thời gian học tập, nghiên cứu tự sắp xếp linh hoạt, hỗ trợ bởi các giảng viên Việt Nam trong quá trình học",
          "Kiến thức quản trị chuyên sâu, kết hợp với case study thực tiễn",
          "Lộ trình học lên DBA với nhiều học bỗng từ trường và Viện IDEAS",
          "Học phí linh hoạt chia nhỏ hoặc trả góp",
        ],
      },
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
        "Admission Form <a href='https://ideas.edu.vn/wp-content/uploads/2025/03/ADMISSION-FORM_ENG_MBA-_UMEF.docx' target='_blank' class='text_download'>(Download Here)</a>",
      ],
      faq: [
        {
          q: "Luận văn của chương trình MBA yêu cầu như thế nào",
          a: "Đối với chương trình MBA của Swiss UMEF, học viên bắt buộc phải thực hiện luận văn tốt nghiệp để hoàn thành chương trình. Luận văn là một nghiên cứu chuyên sâu về một vấn đề quản trị thực tiễn, giúp học viên ứng dụng các kiến thức đã học vào giải quyết một vấn đề cụ thể trong doanh nghiệp hoặc ngành nghề của mình. <br/>  <br/> Học viên sẽ được Viện IDEAS hướng dẫn tập trung hoặc hướng dẫn 1-1 để xây dựng đề cương, thu thập dữ liệu, phân tích và trình bày kết quả. Luận văn cần tuân thủ các tiêu chuẩn học thuật về nội dung, hình thức và phương pháp nghiên cứu theo quy định của Swiss UMEF. Tối thiểu bài luận văn cần 20,000 từ, theo chuẩn APA format. Sau khi hoàn thành, luận văn sẽ được hội đồng thẩm định đánh giá",
        },
        {
          q: "Lễ tốt nghiệp sau khi hoàn thành Online MBA sẽ được tổ chức ở đâu, có thể qua Trường không?",
          a: "Sau khi hoàn thành chương trình EMBA, học viên sẽ được tham gia lễ tốt nghiệp do Swiss UMEF tổ chức. Thông thường, lễ tốt nghiệp sẽ diễn ra tại Geneva, Thụy Sĩ, nơi đặt trụ sở chính của Trường. Tuy nhiên, Swiss UMEF cũng có thể tổ chức buổi lễ tốt nghiệp tại Việt Nam hoặc các địa điểm khác tùy theo số lượng học viên và điều kiện tổ chức. Học viên có thể lựa chọn tham dự lễ tốt nghiệp tại Geneva hoặc tại địa điểm do Viện IDEAS phối hợp tổ chức.",
        },
        {
          q: "Bằng MBA của Swiss UMEF có giá trị như thế nào?",
          a: "Bằng MBA do Swiss UMEF(Thụy Sĩ) cấp, có giá trị quốc tế. Swiss UMEF là một trường đại học tư nhân đầu tiên tại Geneva có kiểm định Liên Bang và được công nhận tại nhiều quốc gia. Phù hợp với những người muốn nâng cao kiến thức quản trị, phát triển sự nghiệp ở môi trường quốc tế.",
        },
      ],
      this_subjects: [
        {
          name: "MBA 400. Marketing Management",
          description:
            "Học cách xây dựng chiến lược marketing, định vị thương hiệu, nghiên cứu thị trường và quản lý khách hàng.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 401. Human Capital and Talent Management",
          description:
            "Nâng cao kỹ năng quản lý nhân sự và phát triển tài năng trong tổ chức, giúp tối ưu hóa nguồn nhân lực.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 402. Entrepreneurship and Innovation",
          description:
            "Khám phá các nguyên tắc khởi nghiệp và đổi mới sáng tạo để phát triển doanh nghiệp thành công.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 403. Corporate Finance",
          description:
            "Nắm vững kiến thức tài chính doanh nghiệp, tối ưu hóa dòng tiền và chiến lược tài chính.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 404. Accounting for Managers",
          description:
            "Cung cấp các nguyên tắc kế toán quan trọng giúp nhà quản lý đưa ra quyết định kinh doanh hiệu quả.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 405. Digital Transformation",
          description:
            "Khám phá cách công nghệ số đang thay đổi mô hình kinh doanh và phương pháp quản lý.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 406. Global Strategy",
          description:
            "Phát triển chiến lược kinh doanh toàn cầu, giúp doanh nghiệp mở rộng và cạnh tranh hiệu quả.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 407. Project Management",
          description:
            "Học cách lập kế hoạch, thực hiện và kiểm soát dự án để đạt được mục tiêu kinh doanh.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 408. Organizational Behaviour",
          description:
            "Nghiên cứu hành vi tổ chức để cải thiện hiệu suất và môi trường làm việc.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 409. Leadership Development",
          description:
            "Phát triển kỹ năng lãnh đạo để điều hành tổ chức một cách hiệu quả và truyền cảm hứng cho đội ngũ.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 500. Thesis Methodology",
          description:
            "Hướng dẫn phương pháp nghiên cứu và viết luận văn thạc sĩ chuyên sâu.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 501. Business Negotiation",
          description:
            "Trang bị kỹ năng đàm phán kinh doanh để đạt được thỏa thuận có lợi nhất.",
          link: "",
          credit: 6,
        },
        {
          name: "MBA 505. MBA Thesis",
          description:
            "Hoàn thành luận văn MBA dựa trên nghiên cứu thực tế và ứng dụng kiến thức học được.",
          link: "",
          credit: 18,
        },
      ],
    },
    IDEAS03: {
      listImgs: [
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8537.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8638.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8725.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8841.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A9322.jpg",
      ],
      level: "MBA",
      avatar: "./avatar/10.jpg",
      name: "Executive MBA",
      school: "Swiss UMEF",
      subjects: "<b>60</b> tín chỉ ETCS - <b>10</b> môn không luận văn",
      duration: "14-16 tháng",
      country: "Thuỵ Sĩ",
      experience: [
        "Tốt nghiệp cử nhân",
        "Tối thiểu 2 năm kinh nghiệm làm việc",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      test: {
        high: [
          "Lớp học tương tác trực tiếp, được trao đổi và thảo luận cùng Giảng viên và học viên",
          "Kiến thức hướng đến thực hành giải quyết các vấn đề quản lý chuyên sâu",
          "Lộ trình học tinh gọn 10 môn - không làm luận văn",
          "Học phí linh hoạt chia nhỏ hoặc trả góp",
        ],
        stand: [
          "Thời gian học tập, nghiên cứu tự sắp xếp linh hoạt, hỗ trợ bởi các giảng viên Việt Nam trong quá trình học",
          "Kiến thức hướng đến thực hành giải quyết các vấn đề quản lý chuyên sâu",
          "Lộ trình học tinh gọn 10 môn - không làm luận văn",
          "Học phí linh hoạt chia nhỏ hoặc trả góp",
        ],
      },
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
        "Admission Form <a href='https://ideas.edu.vn/wp-content/uploads/2025/03/ADMISSION-FORM_ENG_EMBA-_UMEF.docx' target='_blank' class='text_download'>(Download Here)</a>",
      ],
      faq: [
        {
          q: "Không có bằng cử nhân về công nghệ hoặc khoa học máy tính, tôi có thể đăng ký học MSc AI không?",
          a: "Có! Bạn hoàn toàn có thể đăng ký học MSc AI ngay cả khi không có bằng cử nhân về công nghệ hoặc khoa học máy tính. Chương trình MSc AI của Swiss UMEF được thiết kế theo hướng ứng dụng, không chỉ dành cho những ai có nền tảng công nghệ mà còn phù hợp với các chuyên gia, nhà quản lý, hoặc những người muốn ứng dụng AI vào lĩnh vực kinh doanh, tài chính, marketing, quản lý… Nếu bạn chưa có nền tảng về lập trình hoặc dữ liệu, chương trình sẽ có những học phần giúp bạn làm quen với các công cụ AI mà không cần kiến thức quá chuyên sâu về kỹ thuật. Bạn sẽ được hướng dẫn từng bước để áp dụng AI vào công việc thực tế.",
        },
        {
          q: "Chương trình MSc AI có yêu cầu học viên phải có nền tảng hoặc sử dụng những ứng dụng đặc biệt nào không?",
          a: "Chương trình MSc AI của Swiss UMEF được thiết kế theo hướng ứng dụng, phù hợp với học viên từ nhiều lĩnh vực khác nhau, kể cả những người chưa có nền tảng công nghệ. Để đảm bảo học viên có sự chuẩn bị tốt nhất, Viện IDEAS hỗ trợ hai môn nền tảng: Machine Learning & Deep Learning – giúp học viên làm quen với các khái niệm cốt lõi trong AI. Quản trị AI – giúp học viên hiểu cách ứng dụng AI vào thực tế doanh nghiệp và quản lý công nghệ hiệu quả. Nhờ đó, dù bạn xuất phát từ lĩnh vực nào, bạn vẫn có thể theo học và áp dụng AI vào công việc của mình một cách vững vàng.",
        },
        {
          q: "Có thể vừa học vừa đi làm không? Cường độ học có quá nặng không?",
          a: "Hoàn toàn có thể! Chương trình MSc AI của Swiss UMEF được thiết kế linh hoạt, phù hợp với người đang đi làm. Học trực tuyến, giúp bạn chủ động sắp xếp thời gian, nhưng cần đảm bảo tham gia lớp học vì chương trình yêu cầu không được vắng quá 30% số giờ học. Thời gian vào buổi tối rất thuận tiện sắp xếp theo khung giờ của Việt Nam. Viện IDEAS hỗ trợ học viên thêm thông qua các lớp chuyên đề, chia sẻ bài tập và tổ chức workshop/seminar giúp học viên hiểu sâu hơn về ứng dụng thực tế của AI",
        },
      ],
      this_subjects: [
        {
          name: "EMBA 400. Marketing Management",
          description:
            "Học cách xây dựng chiến lược marketing, định vị thương hiệu, nghiên cứu thị trường và quản lý khách hàng.",
          link: "",
          credit: 6,
        },
        {
          name: " EMBA 401. Human Capital and Talent Management",
          description:
            "Quản lý nhân sự, tuyển dụng, phát triển tài năng và tạo động lực cho đội ngũ.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 402. Entrepreneurship and Innovation",
          description:
            "Phát triển tư duy khởi nghiệp, sáng tạo sản phẩm/dịch vụ mới và quản lý rủi ro kinh doanh.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 403. Corporate Finance",
          description:
            "Hiểu về tài chính doanh nghiệp, quản lý dòng tiền, đầu tư và tối ưu hóa lợi nhuận.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 404. Accounting for Managers",
          description:
            "Kiến thức kế toán dành cho quản lý, giúp đọc hiểu báo cáo tài chính và ra quyết định kinh doanh.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 405. Digital Transformation",
          description:
            "Ứng dụng công nghệ số trong kinh doanh, chuyển đổi số và tối ưu quy trình làm việc.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 406. Global Strategy",
          description:
            "Chiến lược kinh doanh quốc tế, phân tích thị trường toàn cầu và mở rộng hoạt động kinh doanh.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 407. Project Management",
          description:
            "Quản lý dự án, lập kế hoạch, theo dõi tiến độ và đảm bảo kết quả đạt mục tiêu.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 408. Organizational Behaviour",
          description:
            "Hiểu hành vi tổ chức, văn hóa doanh nghiệp và cách xây dựng môi trường làm việc hiệu quả.",
          link: "",
          credit: 6,
        },
        {
          name: "EMBA 409. Leadership Development",
          description:
            "Phát triển kỹ năng lãnh đạo, xây dựng đội ngũ và ra quyết định chiến lược.",
          link: "",
          credit: 6,
        },
      ],
    },
    IDEAS04: {
      listImgs: [
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8537.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8638.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8725.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A8841.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2025/03/8X1A9322.jpg",
      ],
      level: "MBA",
      avatar: "./avatar/11.jpg",
      name: "MSc AI",
      school: "Swiss UMEF",
      subjects: "<b>90</b> tín chỉ ETCS - <b>12</b> môn và luận văn",
      duration: "14-16 tháng",
      country: "Thuỵ Sĩ",
      test: {
        high: [
          "Vận dụng AI trong quản lý doanh nghiệp",
          "Hiểu biết chuyên sâu hơn về cách thức quản trị của các doanh nghiệp bằng AI trong thời đại mới",
          "Lớp học tương tác trực tiếp, được trao đổi và thảo luận cùng Giảng viên và học viên",
          "Học phí linh hoạt chia nhỏ hoặc trả góp",
        ],
      },
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
        "Admission Form <a href='https://ideas.edu.vn/wp-content/uploads/2025/03/ADMISSION-FORM_ENG_MSC_UMEF.docx' target='_blank' class='text_download'>(Download Here)</a>",
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
          link: "",
          credit: 6,
        },
        {
          name: "MAI 401. Advanced Project Management in AI",
          description:
            "Quản lý dự án trong lĩnh vực AI, bao gồm lập kế hoạch, theo dõi tiến độ, quản lý rủi ro và tối ưu hóa nguồn lực.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 402. Data Management & Governance",
          description:
            "Học cách tổ chức, quản trị dữ liệu và tuân thủ các quy định về dữ liệu để đảm bảo tính bảo mật và hiệu quả khai thác dữ liệu AI.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 403. AI in Business Decision Making",
          description:
            "Ứng dụng AI trong phân tích và hỗ trợ ra quyết định doanh nghiệp, từ chiến lược kinh doanh đến tối ưu hóa vận hành.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 404. Advanced study of ethical considerations",
          description:
            "Khám phá các vấn đề đạo đức trong AI, bao gồm quyền riêng tư, thiên vị thuật toán và trách nhiệm doanh nghiệp.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 405. Reinforcement Learning and AI Optimization",
          description:
            "Tìm hiểu về học tăng cường (Reinforcement Learning) và cách tối ưu hóa AI trong các quy trình kinh doanh và tự động hóa.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 406. Global AI policies and regulatory frameworks",
          description:
            "Phân tích các chính sách và khung pháp lý toàn cầu về AI, tác động của chúng đến doanh nghiệp và công nghệ.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 407. Change management strategies for AI transition",
          description:
            "Xây dựng chiến lược chuyển đổi AI trong doanh nghiệp, bao gồm quản lý sự thay đổi và đào tạo nhân lực.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 408. AI Innovation and Entrepreneurship",
          description:
            "Phát triển sáng tạo và khởi nghiệp trong lĩnh vực AI, từ ý tưởng công nghệ đến mô hình kinh doanh khả thi.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 409. Economic Forecasting and AI-Driven Market Dynamics",
          description:
            "Ứng dụng AI trong dự báo kinh tế và phân tích động lực thị trường để đưa ra quyết định chiến lược.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 500. Financial Intelligence and Algorithmic Trading",
          description:
            "Tìm hiểu về trí tuệ tài chính, giao dịch thuật toán và cách AI tối ưu hóa chiến lược đầu tư.",
          link: "",
          credit: 6,
        },
        {
          name: "MAI 503. AI-Driven Marketing Strategies & Communication Systems",
          description:
            "Áp dụng AI vào chiến lược marketing, cá nhân hóa trải nghiệm khách hàng và tối ưu hóa truyền thông.",
          link: "",
          credit: 6,
        },
        {
          name: "CAP 501. Capstone Project",
          description:
            "Dự án tốt nghiệp tổng hợp, nơi học viên áp dụng kiến thức và kỹ năng đã học vào một dự án AI thực tế.",
          link: "",
          credit: 18,
        },
      ],
    },
    IDEAS05: {
      listImgs: [
        "https://ideas.edu.vn/wp-content/uploads/2024/08/dba-1.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/08/DSC_1036.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/08/DSC_1039.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/08/DSC_1042.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/08/DSC_1054.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/08/DSC_1057.jpg",
        "https://ideas.edu.vn/wp-content/uploads/2024/08/DSC_1061.jpg",
      ],
      level: "DBA",
      avatar: "./avatar/12.jpg",
      name: "Online DBA",
      highlight: [
        "Trực tuyến 100%",
        "DBA",
        "Nghiên cứu với cố vấn",
        "2 buổi chuyên đề/môn (Chủ nhật)",
      ],
      school: "Ascencia Business School",
      country: "Pháp",

      subjects: "<b>4</b> giai đoạn | <b>2.5 - 4</b> năm - 1 luận văn",
      duration: "2.5 - 4 năm",
      tagline: "Là trường thành viên của tổ chức giáo dục College de Paris",
      link: "#",
      experience: [
        "Tốt nghiệp Thạc sĩ hoặc Global MBA",
        "Tiếng Anh giao tiếp tốt hoặc bằng cấp tương đương IELTS 6.0",
      ],
      // test: [
      //   "Chương trình học tập, làm bài và nộp trên flatform của trường, dựa trên tài liệu và hướng dẫn của giáo sư.",
      //   "Kiến thức quản trị chuyên sâu, kết hợp với case study thực tiễn",
      //   "Thời gian học tập tự sắp xếp linh hoạt",
      // ],
      fee_course: [
        {
          name: "High Quality",
          icon: "icon5.png",
          price: "14.000 Euro",
          benefits: [
            "Hệ thống sinh viên Quốc tế của College de Paris: <a target='_blank' href='https://online.cdp-global.org' class='text_link'>Online CDP Global</a>",
            "Thư viện tài liệu nghiên cứu: <a target='_blank' href='https://login.ebsco.com/' class='text_link'>EBSCO</a>",
            "Hệ thống LMS hỗ trợ: ứng dụng I-AI để hỗ trợ trong quá trình học tập.",
            "Thời gian nghiên cứu: 2.5 – 4 năm",
            "Nhân viên trợ lý chương trình nhắc deadline, hỗ trợ hệ thống, kết nối giảng viên",
            "Tự nghiên cứu với sự định hướng và hướng dẫn của giáo sư",

            "Đánh giá sơ bộ bài Final: Được hội đồng chuyên môn của Viện IDEAS đánh giá, góp ý bài Final đã đi đúng hướng, tránh lạc đề, học viên nắm được điểm đánh giá sơ bộ và hạn chế được khả năng rớt môn.",
          ],
        },
      ],

      description:
        "Chương trình DBA (Doctor of Business Administration) là một chương trình nghiên cứu dành cho các chuyên gia cao cấp trong lĩnh vực quản trị kinh doanh. Khác với MBA (Master of Business Administration) – một chương trình chú trọng vào kiến thức tổng quát, DBA nhấn mạnh vào việc phát triển kiến thức và nghiên cứu chuyên sâu trong lĩnh vực quản lý.",
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
        front: "https://ideas.edu.vn/wp-content/uploads/2024/08/dba.jpg",
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
        "Bằng và bảng điểm Thạc sĩ các chuyên ngành",
        "Sơ yếu lí lịch (CV)",
        "Thư động lực (Motivation Letter)",
        "Ảnh hộ chiếu (4×6)",
        "2 Thư giới thiệu",
        "Chứng chỉ tiếng Anh",
        "Passport",
        "Apllication Form <a href='https://ideas.edu.vn/wp-content/uploads/2025/03/Application-Form-_-1.pdf' target='_blank' class='text_download'>(Download Here)</a>",
      ],
      faq: [
        {
          q: "Tiếng anh nghe nói chưa tốt có thể theo học chương trình không?",
          a: "Có. Chương trình không yêu cầu học viên phải giỏi tiếng Anh giao tiếp, vì phần lớn nội dung học tập là đọc tài liệu, làm bài tập và viết luận. Tuy nhiên, học viên cần có khả năng đọc hiểu tiếng Anh ở mức khá để theo kịp chương trình. Ngoài ra, các lớp chuyên đề của Viện IDEAS chủ yếu chia sẻ bằng Tiếng việt sẽ hỗ trợ học viên nắm được bài tốt hơn",
        },
        {
          q: "Nếu bận đi công tác không thể hoàn thành bài đúng hạn thì sao",
          a: "Chương trình Global MBA của Ascencia Business School được thiết kế linh hoạt để phù hợp với lịch trình bận rộn của học viên. Mỗi môn học đều có thời gian bài tập kéo dài 8 tuần và bài tập phân bổ giãn cách mỗi tuần. Deadline các bài tập thường vào lúc 16h Việt Nam. Học viên nắm được thông tin bài tập và deadline sẽ sắp xếp phù hợp. Trường hợp Học viên chưa thể hoàn thành đúng thời hạn sẽ được đăng ký <b>Resubmit</b> có tốn phí để được mở thêm 1 tuần nộp lại bài. ",
        },
        {
          q: "Học viên có thể tham gia lễ tốt nghiệp tại Paris - Pháp không?",
          a: "Có. Học viên hoàn thành chương trình có thể đăng ký tham gia lễ tốt nghiệp tại Pháp, cùng với các học viên quốc tế khác của Ascencia Business School. Mỗi năm có 2 đợt Lễ Tốt nghiệp vào tháng 6 và tháng 12. Viện IDEAS sẽ thông báo đến học viên về lịch thông báo từ Trường để học viên đăng kí",
        },
      ],
      this_subjects: [
        {
          name: "Giai đoạn 1: Các modules cốt lõi",
          description:
            "<b>Khoảng 9 tháng</b> <br/> Giai đoạn nền tảng, rất quan trọng cho sự bắt đầu một lộ trình nghiên cứu. Giai đoạn này giúp Nghiên cưu sinh ôn lại những kiến thức nền tảng của môn học Research Methodology đối với chuyên ngành Business research. Kết thúc giai đoạn này, NCS được trang bị kiến thức và kỹ năng nghiên cứu, hiểu sâu và vững chắc các phương pháp nghiên cứu khoa học. <br/><i class='fa-solid fa-caret-right'></i> Học viên được cấp tài khoản trên hệ thống của Trường, có textbook để tham khảo nội dung <br/><i class='fa-solid fa-caret-right'></i> Có 6 buổi học tập trung, mỗi buổi 2 - 3 giờ. Ngôn ngữ: song ngữ, Giảng viên của Viện IDEAS <br/><i class='fa-solid fa-caret-right'></i> Ngoài 6 buổi chính thức và tập trung, nếu NCS nào có nhu cầu có thể đăng ký thêm những buổi phụ đạo 1-1. <br/><i class='fa-solid fa-caret-right'></i> Cuổi giai đoạn: nộp research proposal",
          link: "",
        },
        {
          name: "Giai đoạn 2: Lựa chọn Giáo sư hướng dẫn",
          description:
            "<b>Khoảng 3 tháng</b> <br/>  Lựa chọn giảng viên theo danh sách mà Viện IDEAS cung cấp, bao gồm giảng viên của Viện IDEAS và giảng viên là người nước ngoài của Trường Ascencia (Đối với cố vấn của Viện IDEAS đã được hỗ trợ 100% chi phí Đối với cố vấn của Trường ASC sẽ có phí riêng tùy vào mỗi Giảng viên ) <br/><i class='fa-solid fa-caret-right'></i> Học viên và giảng viên trao đổi lại với nhau về proposal, để hai bên cùng cân nhắc thay đổi, điều chỉnh, mở rộng hoặc thu hẹp phạm vi nghiên cứu. <br/><i class='fa-solid fa-caret-right'></i> Nếu xác định đề tài chưa phù hợp, ở giai đoạn này học viên được đăng kí điều chỉnh đề tài. <br/><i class='fa-solid fa-caret-right'></i> Cuối giai đoạn này, học viên đăng ký tên đề tài chính thức và kế hoạch nghiên cứu. Sau khi đăng ký chính thức thì không được phép thay đổi đề tài nghiên cứu, trừ trường hợp học lại từ đầu.",
          link: "",
        },
        {
          name: "Giai đoạn 3: Nghiên cứu cùng với sự hướng dẫn trực tiếp (1-1)",
          description:
            "<b>Khoảng 18 tháng</b> <br/> Có 12 session, mỗi session kéo dài 6 tuần. <br/><i class='fa-solid fa-caret-right'></i> Cuối mỗi session cần có báo cáo tiến độ thực hiện bài viết.<br/><i class='fa-solid fa-caret-right'></i> Được gặp giảng viên tối đa 2 giờ/tháng <br/><i class='fa-solid fa-caret-right'></i> Cuối giai đoạn, học viên hoàn thành toàn bộ bài viết. Bài viết được đánh giá ĐẠT hoặc VIẾT LẠI <br/> *Nếu giai đoạn này, học viên muốn đổi đề tài sẽ quay ngược lại về giai đoạn 01 Bài Thesis hoàn chỉnh cần 50.000 từ, khoảng 200 – 250 trang (không bao gồm trang bìa)",
          link: "",
        },
        {
          name: "Giai đoạn 4: Bảo vệ luận văn tốt nghiệp",
          description:
            "<b>Khoảng 3 tháng</b> <br/> Nếu giai đoạn 3 được đánh giá ĐẠT, học viên được đăng ký bảo vệ và nộp file PPT",
          link: "",
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
      q: "Đây có phải là chương trình liên kết đào tạo giữa Viện IDEAS và các Trường không?",
      a: "<b>Không,</b> <br/>Khi bắt đầu học một chương trình bạn sẽ chính thức là sinh viên của trường. Viện IDEAS không trực tiếp liên kết đào tạo với các trường mà đóng vai trò cầu nối, là đơn vị tư vấn và hỗ trợ học thuật trong suốt quá trình học và nhận bằng. <br/> <br/> IDEAS giúp học viên tiếp cận các <b>chương trình chính thức</b> từ các trường đại học quốc tế, đồng thời hỗ trợ trong suốt quá trình học và giúp giải quyết các vấn đề phát sinh (nếu có) để đảm bảo học viên có trải nghiệm học tập hiệu quả và thuận lợi nhất. <br/> Toàn bộ chương trình học, bằng cấp và chứng chỉ đều do các trường cấp trực tiếp và có <b>chứng nhận hợp pháp hoá lãnh sự của Đại sứ quán Việt Nam</b> ở quốc gia có trụ sở chính của trường.",
    },
    {
      q: "Viện IDEAS có tổ chức lớp học trực tiếp không hay chỉ hỗ trợ học online?",
      a: "Các chương trình do Viện IDEAS hỗ trợ chủ yếu được triển khai theo hình thức học trực tuyến, giúp học viên linh hoạt về thời gian và địa điểm. Tuy nhiên, IDEAS cũng thường xuyên tổ chức các buổi workshop, lớp chuyên đề và sự kiện kết nối trực tiếp để học viên có thể giao lưu và học hỏi thêm.",
    },
    {
      q: "Lớp chuyên đề của Viện IDEAS được tổ chức như thế nào và có bắt buộc không?",
      a: "Lớp chuyên đề của Viện IDEAS được tổ chức theo hình thức trực tuyến, do các giảng viên hoặc chuyên gia trong ngành hướng dẫn. Nội dung các buổi chuyên đề tập trung vào việc bổ trợ kiến thức, giải đáp thắc mắc và giúp học viên hiểu sâu hơn về môn học, cũng như áp dụng vào thực tiễn. Lớp chuyên đề không bắt buộc và không ảnh hưởng đến điểm số của chương trình, tuy nhiên IDEAS khuyến khích các học viên tham gia để có thể nâng cao kiến thức và đạt kết quả học tập tốt hơn. Đây cũng là cơ hội để học viên trao đổi trực tiếp với chuyên gia và giảng viên, kết nối với bạn bè là các cấp quản lý và những nhà lãnh đạo cùng khóa và nhận được những chia sẻ hữu ích từ thực tế công việc.",
    },
  ],
};
const IDEAS_TEST = {
  MBA: [
    {
      id: 1,
      q: "Trình độ tiếng Anh của bạn như thế nào?",
      a: [
        "Nghe, nói, đọc, viết tốt, có thể học bằng tiếng Anh mà không gặp khó khăn",
        "Có thể đọc hiểu tài liệu tiếng Anh nhưng nghe nói chưa tốt lắm",
        "Chưa tốt, cần học chương trình có hỗ trợ tiếng Việt",
      ],
    },
    {
      id: 2,
      q: "Mục tiêu trong quản lý doanh nghiệp",
      a: [
        "Tôi muốn tìm hiểu về AI để áp dụng vào công việc",
        "Tôi muốn tập trung vào quản lý và lãnh đạo chuyên sâu",
      ],
    },
    {
      id: 3,
      q: "Bạn có định hướng học tiếp lên Tiến sĩ không?",
      a: [
        "Có, tôi muốn học lên DBA sau khi hoàn thành chương trình",
        "Chưa có kế hoạch, tôi chỉ muốn nâng cao kỹ năng quản lý",
      ],
    },
    {
      id: 4,
      q: "Bạn có thể tham gia học online vào buổi tối không?",
      a: [
        "Có thể học vào buổi tối các ngày trong tuần",
        "Khó sắp xếp thời gian học buổi tối, chỉ có thể học linh hoạt",
      ],
    },
    {
      id: 5,
      q: "Bạn mong muốn lớp học Online như thế nào?",
      a: [
        "Xem qua các video và tài liệu, hoàn thành bài tập theo quy định",
        "Muốn lớp học tương tác trực tiếp, được trao đổi và thảo luận cùng Giảng viên và học viên",
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
    const h1 = document.querySelector("h1");
    let ID;
    h1 && (ID = h1.dataset.program);

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
    console.log(content);

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
    console.log(userAnswers);
    let matchedPrograms = [IDEAS_DATA.programmes["IDEAS01"]];
    let type = "high";

    if (userAnswers[4] === 0) {
      type = "stand";
      matchedPrograms = [
        IDEAS_DATA.programmes["IDEAS02"],
        IDEAS_DATA.programmes["IDEAS03"],
      ];
    }

    if (userAnswers[4] === 1 && userAnswers[0] === 0) {
      matchedPrograms = [
        IDEAS_DATA.programmes["IDEAS02"],
        IDEAS_DATA.programmes["IDEAS03"],
      ];
    }

    if (userAnswers[1] === 0 && userAnswers[0] === 0) {
      matchedPrograms = [IDEAS_DATA.programmes["IDEAS04"]];
    }

    if (
      userAnswers[0] === 0 &&
      userAnswers[1] === 1 &&
      userAnswers[2] === 1 &&
      userAnswers[3] === 0 &&
      userAnswers[4] === 1
    ) {
      matchedPrograms = [IDEAS_DATA.programmes["IDEAS03"]];
    }
    if (userAnswers[0] === 2) {
      type = "high";
      matchedPrograms = [IDEAS_DATA.programmes["IDEAS01"]];
    }

    testBackBtn.classList.add("disable");
    testInner.classList.add("show");
    test_result_wrapper.innerHTML = `
      <div class="test_loading">
        <p>🔄 Đang phân tích câu trả lời của bạn...</p>
      </div>
    `;

    setTimeout(() => {
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
                  <p>${program.name} ${type == "high" ? "" : "- Standard"}</p>
                  <span>${`${program.school} - ${program.country}`}</span>
                  <ul>
                    ${program.test[type]
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

  const form = document.querySelector(".ideas_form form");
  const submitBtn = document.querySelector(".ideas_form_submit");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    const ct = document.querySelector(".ideas_form_choose_text").textContent;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const degree = document.getElementById("degree").value.trim();
    const message = document.getElementById("text_area").value.trim();

    // Kiểm tra số điện thoại (chỉ chứa số, độ dài 9-12)
    const phoneRegex = /^[0-9]{9,12}$/;
    if (!phoneRegex.test(phone)) {
      renderAlert(
        "IDEAS Institute",
        `<p>Số điện thoại không hợp lệ! Vui lòng kiểm tra lại</p>`
      );
      return;
    }

    // Kiểm tra email hợp lệ
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      renderAlert(
        "IDEAS Institute",
        `<p>Email không hợp lệ! Vui lòng nhập đúng định dạng example@domain</p>`
      );
      return;
    }

    if (!message) {
      renderAlert("IDEAS Institute", `<p>Hãy cho IDEAS biết thêm nội dung</p>`);
      return;
    }

    if (!name) {
      renderAlert("IDEAS Institute", `<p>Vui lòng nhập tên của bạn</p>`);
      return;
    }

    if (!degree) {
      renderAlert(
        "IDEAS Institute",
        `<p>Vui lòng chọn bằng cấp hiện tại của bạn</p>`
      );
      return;
    }

    const history = localStorage.getItem("recentPages");
    let agent = navigator.userAgent;
    let user_info = `Device: ${agent}`;

    // Fetch IP, nếu lỗi thì vẫn tiếp tục submit form
    fetch("http://ip-api.com/json/")
      .then((response) => response.json())
      .then((data) => {
        user_info = `IP: ${data.query} | Country: ${data.country} | City: ${data.city} | ISP: ${data.isp} | Device: ${agent}`;
      })
      .catch((error) => {
        console.error("Lỗi khi lấy IP:", error);
      })
      .finally(() => {
        // Dù có lấy được IP hay không, vẫn tiếp tục submit form
        submitToGoogleForm(
          name,
          email,
          phone,
          degree,
          message,
          ct,
          history,
          user_info
        );
      });
  });

  function submitToGoogleForm(
    name,
    email,
    phone,
    degree,
    message,
    ct,
    history,
    user_info
  ) {
    submitBtn.textContent = "Đang gửi...";

    const formURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScBHl6dpxHpe-jC1xnJNn1rttuS772PMV55lVJNlGmhTIOj9g/formResponse";

    const formData = new FormData();
    formData.append("entry.1751148659", name); // Thay entry.xxx bằng đúng ID
    formData.append("entry.1873304847", email);
    formData.append("entry.1901052569", phone);
    formData.append("entry.533788886", degree);
    formData.append("entry.411126909", message);
    formData.append("entry.808554546", ct);
    formData.append("entry.955397374", history);
    formData.append("entry.864156184", user_info);

    fetch(formURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        const content = ` <i class="fa-solid fa-circle-check"></i>
            <span
              >Cảm ơn bạn đã quan tâm về ${ct}, tư vấn viên sẽ liên hệ cho bạn trong thời
              gian sớm nhất</span
            >`;
        renderAlert("Thành công", content);
        ideas_form.classList.remove("active");
        document.querySelector("form").reset();
        submitBtn.textContent = "Đăng ký tư vấn";
      })
      .catch(() => {
        submitBtn.textContent = "Đăng ký tư vấn";
        alert("Có lỗi xảy ra, vui lòng thử lại!");
      });
  }
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
const STORAGE_KEY = "recentPages";
const MAX_HISTORY = 5;

function savePageHistory() {
  let history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Thêm trang hiện tại vào đầu danh sách
  history.unshift(window.location.href);

  // Giữ tối đa 5 trang gần nhất
  history = history.slice(0, MAX_HISTORY);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function getPageHistory() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Lưu lịch sử khi trang load hoặc người dùng điều hướng
window.addEventListener("load", savePageHistory);
window.addEventListener("popstate", savePageHistory);

// Test: In ra lịch sử trang gần nhất
console.log("5 trang gần nhất:", getPageHistory());
