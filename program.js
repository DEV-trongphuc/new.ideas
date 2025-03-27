document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const program_avatar = document.querySelector(".program_avatar");
  const program_school = document.querySelector(".program_school");
  const program_tagline = document.querySelector(".program_tagline");
  const program_description = document.querySelector(".program_description");
  const ideas_highlight = document.querySelector("#ideas_highlight");
  const ID = h1.dataset.program;
  const PROGRAM = IDEAS_DATA.programmes[ID];
  h1.textContent = PROGRAM.name;
  program_avatar.src = IDEAS_DATA.school[PROGRAM.school].small_logo;
  program_school.textContent = PROGRAM.school;
  program_tagline.textContent = PROGRAM.tagline;
  program_description.textContent = PROGRAM.description;
  ideas_highlight.innerHTML = `
   <div class="ideas_require_title" >
            <i class="fa-solid fa-globe"></i>
            <p>
              <span>Hình thức</span>
              <span>${PROGRAM.highlight[0]}</span>
            </p>
          </div>
          <div class="ideas_require_title">
            <i class="fa-solid fa-graduation-cap"></i>
            <p>
              <span>Bằng cấp</span>
           <span>${PROGRAM.highlight[1]}</span>
            </p>
          </div>
          <div class="ideas_require_title">
            <i class="fa-solid fa-clock"></i>
            <p>
              <span>Thời gian học với trường</span>
             <span>${PROGRAM.highlight[2]}</span>
            </p>
          </div>
          <div class="ideas_require_title">
            <i class="fa-solid fa-briefcase"></i>
            <p>
              <span>Hỗ trợ IDEAS - Việt Nam</span>
           <span>${PROGRAM.highlight[3]}</span>
            </p>
          </div>
  
  
  
  `;
  const ideas_program_fee = document.querySelector(".ideas_program_fee");
  ideas_program_fee.innerHTML = ""; // Xóa nội dung cũ

  PROGRAM.fee_course.forEach((course) => {
    const div = document.createElement("div");
    div.className = "ideas_program_fee_item";
    div.innerHTML = `
    <img src="./icon_coner.png">
    <div>
      <div class="ideas_program_fee_head">
        <img src="${course.icon}">
        <h3>${course.name}</h3>
        <h4>${course.price}</h4>
      </div>
      <ul>
        ${course.benefits
          .map(
            (benefit) =>
              `<li><i class="fa-solid fa-circle-check"></i> ${benefit}</li>`
          )
          .join("")}
      </ul>
    </div>
    <div class="ideas_program_fee_btns">
      <a class="main_btn"><i class="fa-solid fa-comment-dots"></i> Tư vấn</a>
    </div>
  `;
    ideas_program_fee.appendChild(div);
  });
  const swiperWrapper = document.getElementById("swiperWrapper");
  PROGRAM.listImgs.forEach((imgSrc) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Image";
    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
  });
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    observer: true,
    observeParents: true,
    breakpoints: {
      1099: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
  function updateSwiperSlides() {
    if (window.innerWidth <= 1099) {
      swiper.params.slidesPerView = 2;
    } else {
      swiper.params.slidesPerView = 5;
    }
    swiper.update(); // Cập nhật lại Swiper
  }

  window.addEventListener("resize", updateSwiperSlides);
  updateSwiperSlides(); // Gọi 1 lần lúc đầu để setup đúng

  const view_tailieu = document.querySelector("#view_tailieu");
  const ideas_program_detail_info_lanhsu = document.querySelector(
    ".ideas_program_detail_info_lanhsu"
  );
  const view_thanhtoan = document.querySelector("#view_thanhtoan");
  const ideas_program_number_subjects = document.querySelector(
    ".ideas_program_number_subjects"
  );
  ideas_program_number_subjects.innerHTML = PROGRAM.subjects;

  const ideas_degree = document.querySelector(".ideas_degree");
  ideas_degree.src = PROGRAM.degree.front;

  view_tailieu.addEventListener("click", () => {
    const listItems = PROGRAM.require
      .map((item) => `<li><i class="fa-solid fa-check"></i> ${item}</li>`)
      .join("");

    const content = `
      <img src="http://127.0.0.1:5500/icon1.png"/>
      <p><b>Chuẩn bị các tài liệu dạng file mềm</b></p>
      <ul>
        ${listItems}
      </ul>
    `;

    renderAlert("Hồ sơ đầu vào EMBA UMEF", content);
  });
  function renderDemographic() {
    const jobsContainer = document.getElementById("ideas_demographic_jobs");
    const agesContainer = document.getElementById("ideas_demographic_ages");

    if (!jobsContainer || !agesContainer) return;

    jobsContainer.innerHTML = PROGRAM.demographic.jobs
      .map(
        (job) => `
      <li>
        <p>
          <span>${job.jobname}</span>
          <span>${job.percent}%</span>
        </p>
        <p>
          <span style="width: ${job.percent}%;"></span>
        </p>
      </li>
    `
      )
      .join("");

    agesContainer.innerHTML = PROGRAM.demographic.ages
      .map(
        (age) => `
      <li>
        <p>
          <span>${age.jobname}</span>
          <span>${age.percent}%</span>
        </p>
        <p>
          <span style="width: ${age.percent}%;"></span>
        </p>
      </li>
    `
      )
      .join("");
  }

  // Gọi hàm để render
  const container = document.querySelector(".ideas_imgs_logo.kiemdinh");
  container.innerHTML = ""; // Xóa nội dung cũ (nếu cần)

  PROGRAM.accreditation.forEach((item) => {
    container.innerHTML += `
      <a href="${item.link}">
        <img src="${item.logo}" alt="${item.name}">
      </a>
    `;
  });

  renderDemographic();
  [ideas_program_detail_info_lanhsu, ideas_degree].forEach((element) => {
    element.addEventListener("click", () => {
      const content = `
        <div>
          <span><b>Mặt trước bằng tốt nghiệp</b></span>
          <img src="${PROGRAM.degree.front}" />
          <span><b>Mặt sau bằng tốt nghiệp</b></span>
          <img src="${PROGRAM.degree.back}" />
        </div>       
      `;
      renderMedia("Chứng nhận hợp pháp hoá lãnh sự", content);
    });
  });

  view_thanhtoan.addEventListener("click", () => {
    const content = `
      <img src="http://127.0.0.1:5500/icon2.png"/>
        <p><b>Thanh toán một lần hoặc chia thành hai lần</b></p>
      <ul>
        <li><b>Hình thức thanh toán</b></li>
        <li><i class="fa-solid fa-check"></i> Thanh toán trực tiếp tại Viện IDEAS</li>
        <li><i class="fa-solid fa-check"></i> Chuyển khoản trực tuyến qua thông tin số tài khoản được cung cấp trong hợp đồng tư vấn hoặc qua đường link Payoo. </li>
        <li><i class="fa-solid fa-check"></i> Viện IDEAS cung cấp phiếu thu hộ học phí (Khi thanh toán trực tiếp hoặc cà thẻ trực tiếp) hoặc email xác nhận đóng học phí mà học viên đã đóng sau khoảng 01 ngày làm việc. Trường hợp học viên đóng phí vào ngày nghỉ cuối tuần, nghỉ lễ, email xác nhận đóng phí sẽ được Viện thực hiện vào ngày làm việc liền kề sau ngày nghỉ. Khoản phí thu hộ không thể xuất hóa đơn VAT theo quy định của Nhà nước Việt Nam.</li>
        </ul>
      `;
    renderAlert("Thanh toán học phí EMBA UMEF", content);
  });

  const ideasFaqInner = document.querySelector(".ideas_faq_inner");
  ideasFaqInner.innerHTML = PROGRAM.faq
    .map(
      (item, index) => `
     <div class="ideas_faq_item ${index === 0 ? "active" : ""}">
      <p>
        <span>${item.q}</span>
        <span><i class="fa-solid fa-angle-down"></i></span>
      </p>
      <span>${item.a}</span>
    </div>
  `
    )
    .join("");

  const faqItems = document.querySelectorAll(".ideas_faq_item");

  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Bỏ active của tất cả item trước khi bật cái được click
      faqItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });
  const subjectList = document.querySelector(".ideas_program_subject_item");

  subjectList.addEventListener("click", function (event) {
    // Kiểm tra xem phần tử được click có phải là p:first-child của li hay không
    if (
      event.target.tagName === "P" &&
      event.target.parentElement.tagName === "LI" &&
      event.target === event.target.parentElement.querySelector("p:first-child")
    ) {
      event.target.parentElement.classList.toggle("active");
    }
  });

  function renderSubjects() {
    const container = document.querySelector(".ideas_program_subject_item");
    if (!container) return;

    container.innerHTML = ""; // Xóa nội dung cũ trước khi render

    PROGRAM.this_subjects.forEach((subject) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <p>
        <span>
          <i class="fa-solid fa-file"></i> ${subject.name}
        </span>
        <i class="fa-solid fa-chevron-down"></i>
      </p>
    
      <p>
        <span>${subject.description || "Mô tả đang cập nhật..."}</span>
       <span class="ideas_subject_btns">
        ${
          subject.link
            ? `<a target="_blank" href="${subject.link}">
                <i class="fa-solid fa-circle-play"></i> Xem video
               </a>`
            : `<a class="disable">
                <i class="fa-solid fa-circle-play"></i> Xem video
               </a>`
        }
         ${
           subject.credit
             ? `<a>
         <i class="fa-solid fa-certificate"></i> ${subject.credit} tín chỉ
       </a>`
             : ""
         } 
       
       </span>
      </p>
    `;
      container.appendChild(li);
    });
  }

  // Gọi hàm để render
  renderSubjects();
});
