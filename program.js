document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
  });
  const view_tailieu = document.querySelector("#view_tailieu");
  const ideas_program_detail_info_lanhsu = document.querySelector(
    ".ideas_program_detail_info_lanhsu"
  );
  const view_thanhtoan = document.querySelector("#view_thanhtoan");
  const ideas_alert = document.querySelector(".ideas_alert");
  const ideas_media_popup = document.querySelector(".ideas_media_popup");
  const ideas_alert_close = document.querySelectorAll(".ideas_alert_close");
  ideas_alert_close.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".ideas_alert").forEach((alert) => {
        ideas_alert.classList.remove("active");
        ideas_media_popup.classList.remove("active");
      });
    });
  });
  const ideas_alert_title = document.querySelector(".ideas_alert h3");
  const ideas_media_popup_title = document.querySelector(
    ".ideas_media_popup h3"
  );
  const ideas_alert_content = document.querySelector(".ideas_alert_content");
  const ideas_media_content = document.querySelector(".ideas_media_content");
  view_tailieu.addEventListener("click", () => {
    ideas_alert.classList.add("active");

    const listItems = IDEAS_DATA.require
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

    jobsContainer.innerHTML = IDEAS_DATA.demographic.jobs
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

    agesContainer.innerHTML = IDEAS_DATA.demographic.ages
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
  renderDemographic();
  ideas_program_detail_info_lanhsu.addEventListener("click", () => {
    ideas_media_popup.classList.add("active");
    const content = `
  <div>
      <img src="https://ideas.edu.vn/wp-content/uploads/2024/10/Quan-Tang-Vi-Diploma-1_page-0002.jpg"/>
      <img src="https://ideas.edu.vn/wp-content/uploads/2025/03/UMEF-EMBA-Degree-2025.png"/>

    </div>       
      `;
    renderMedia("Chứng nhận hợp pháp hoá lãnh sự", content);
  });

  view_thanhtoan.addEventListener("click", () => {
    ideas_alert.classList.add("active");
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
  function renderAlert(title, content) {
    ideas_alert_title.textContent = title;
    ideas_alert_content.innerHTML = content;
  }
  function renderMedia(title, content) {
    ideas_media_popup_title.textContent = title;
    ideas_media_content.innerHTML = content;
  }
  const ideasFaqInner = document.querySelector(".ideas_faq_inner");
  ideasFaqInner.innerHTML = IDEAS_DATA.faq
    .map(
      (item, index) => `
    <div class="ideas_faq_item ${index === 0 ? "active" : ""}">
      <p>
        <span>${item.q}</span>
        <span><i class="fa-solid fa-plus"></i></span>
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

    IDEAS_DATA.this_subjects.forEach((subject) => {
      const li = document.createElement("li");
      const linkClass = subject.link ? "" : "disable";
      li.innerHTML = `
      <p>
        <span>
          <i class="fa-solid fa-file"></i> ${subject.name}
        </span>
        <i class="fa-solid fa-chevron-down"></i>
      </p>
      <p>
        <span>${subject.description || "Mô tả đang cập nhật..."}</span>
        <a target="_blank" class="${linkClass}" href="${subject.link || "#"}">
          <i class="fa-solid fa-circle-play"></i> Xem video
        </a>
      </p>
    `;
      container.appendChild(li);
    });
  }

  // Gọi hàm để render
  renderSubjects();
});
