document.addEventListener("DOMContentLoaded", () => {
  const ideas_follow_1 = document.querySelector(
    ".ideas_follow a:nth-of-type(1)"
  );
  const ideas_follow_2 = document.querySelector(
    ".ideas_follow a:nth-of-type(2)"
  );
  const ideas_follow_3 = document.querySelector(
    ".ideas_follow a:nth-of-type(3)"
  );
  const ideas_follow_4 = document.querySelector(
    ".ideas_follow a:nth-of-type(4)"
  );
  const year_count = document.querySelector(".year_count");
  year_count.textContent = IDEAS_DATA.year_count;
  const students_count = document.querySelector(".students_count");
  students_count.textContent = IDEAS_DATA.students_count;
  const teachers_count = document.querySelector(".teachers_count");
  teachers_count.textContent = IDEAS_DATA.teachers_count;
  const courses_count = document.querySelector(".courses_count");
  courses_count.textContent = IDEAS_DATA.courses_count;
  const students_count_quote = document.querySelector(".students_count_quote");
  students_count_quote.textContent =
    IDEAS_DATA.students_count - IDEAS_DATA.student_quote.length;
  ideas_follow_1.href = IDEAS_DATA.facebook_link;
  ideas_follow_2.href = IDEAS_DATA.youtube_link;
  ideas_follow_3.href = IDEAS_DATA.linkedin_link;
  ideas_follow_4.href = IDEAS_DATA.zalo_link;

  const historyInner = document.querySelector(".ideas_history_inner");
  if (historyInner && IDEAS_DATA.graduation_ceremony.length > 0) {
    IDEAS_DATA.graduation_ceremony.forEach((ceremony) => {
      const historyHTML = `
        <div class="ideas_history_item">
          <span class="ideas_history_time">${ceremony.time}</span>
          <img src="${ceremony.avatar}" alt="${ceremony.title} ${ceremony.name}">
          <div class="ideas_history_item_info">
            <p>${ceremony.title}</p>
            <p><i class="fa-solid fa-earth-oceania"></i> ${ceremony.school}</p>
            <p><i class="fa-solid fa-graduation-cap"></i> ${ceremony.name}</p>
            <p><i class="fa-solid fa-location-dot"></i> ${ceremony.location}</p>
            <a href="${ceremony.link}" target="_blank">
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      `;
      historyInner.innerHTML += historyHTML;
    });
  }
  // RENDER TỐT NGHIỆP

  const ideasFaqInner = document.querySelector(".ideas_faq_inner");
  ideasFaqInner.innerHTML = IDEAS_DATA.faq
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

  const schoolContainer = document.querySelector(".ideas_coop_box.school");

  if (schoolContainer && Object.keys(IDEAS_DATA.school).length > 0) {
    schoolContainer.innerHTML = ""; // Xóa nội dung cũ

    Object.entries(IDEAS_DATA.school).forEach(([name, school]) => {
      const schoolItem = document.createElement("a");
      schoolItem.classList.add("ideas_coop_item");
      schoolItem.href = school.link; // Gán link của trường

      const img = document.createElement("img");
      img.src = school.logo;
      img.alt = name;

      schoolItem.appendChild(img);
      schoolContainer.appendChild(schoolItem);
    });
  }

  const avatarContainer = document.querySelector(
    ".ideas_social_avatar_inner > div"
  );

  if (avatarContainer && IDEAS_DATA.student_quote.length > 0) {
    avatarContainer.innerHTML = ""; // Xóa nội dung cũ

    IDEAS_DATA.student_quote.forEach((student, index) => {
      const img = document.createElement("img");
      img.src = student.avatar;
      img.alt = student.name;

      // Nếu là 2 ảnh đầu tiên, thêm class "ideas_social_main_avt"
      if (index < 2) {
        img.classList.add("ideas_social_main_avt");
      }

      avatarContainer.appendChild(img);
    });
  }

  const quoteInner = document.querySelector(".ideas_quote_inner");

  if (quoteInner && IDEAS_DATA.student_quote.length > 0) {
    IDEAS_DATA.student_quote.forEach((quote) => {
      const quoteHTML = `
        <div class="ideas_quote_item">
          <div class="ideas_quote_info">
            <img src="${quote.avatar}" alt="${quote.name}">
            <div>
              <p>${quote.name}</p>
              <div class="ideas_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <span>${quote.title}</span>
            </div>
          </div>
          <div class="ideas_quote_detail">
            <i class="fa-solid fa-quote-left"></i> ${quote.content}
          </div>
        </div>
      `;
      quoteInner.innerHTML += quoteHTML;
    });
  }
  const coursesBox = document.querySelector(".ideas_courses_box");

  if (coursesBox) {
    Object.values(IDEAS_DATA.programmes).forEach((course) => {
      const courseHTML = `
      <div class="ideas_course">
        <img src="${course.avatar}" alt="${course.name}">
        <div class="ideas_course_info">
          <p>${course.name}</p>
          <div class="ideas_school">
            <a href="${IDEAS_DATA.school[course.school].link}" target="_blank">
              <img src="${IDEAS_DATA.school[course.school].small_logo}">
              <span>${course.school}</span>
            </a>
          </div>
          <ul class="ideas_course_detail">
            <li><i class="fa-solid fa-book"></i> ${course.subjects}</li>
            <li><i class="fa-solid fa-clock"></i> ${course.duration}</li>
            <li><i class="fa-solid fa-award"></i>  <b>${
              course.fee_course[0].price
            }</b></li>
          </ul>
          <div class="ideas_btns space_between">
            <a onclick='showform("${
              course.name
            }")' class="sign_course"><i class="fa-solid fa-headset"></i> Tư vấn</a>
            <a href="${
              course.link
            }" class="view_course"><i class="fa-solid fa-graduation-cap"></i> Chi tiết</a>
          </div>
        </div>
      </div>
    `;
      coursesBox.innerHTML += courseHTML;
    });
  }
  // document
  //   .querySelector(".ideas_form_submit")
  //   .addEventListener("click", function (event) {
  //     event.preventDefault();

  //     let name = document.querySelector("input:nth-of-type(1)").value.trim();
  //     let email = document.querySelector("input:nth-of-type(2)").value.trim();
  //     let phone = document.querySelector("input:nth-of-type(3)").value.trim();
  //     let degree = document.querySelector("select").value.trim();
  //     let message = document.querySelector("textarea").value.trim();

  //     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     let phoneRegex = /^[0-9]{9,11}$/;

  //     if (!name) {
  //       alert("Vui lòng nhập tên của bạn!");
  //       return;
  //     }
  //     if (!emailRegex.test(email)) {
  //       alert("Email không hợp lệ!");
  //       return;
  //     }
  //     if (!phoneRegex.test(phone)) {
  //       alert("Số điện thoại phải có 9-11 chữ số!");
  //       return;
  //     }
  //     if (!degree) {
  //       alert("Vui lòng chọn bằng cấp!");
  //       return;
  //     }
  //     if (!message) {
  //       alert("Vui lòng nhập chia sẻ về kinh nghiệm và nhu cầu!");
  //       return;
  //     }

  //     alert("Gửi thành công!");
  //     // Nếu muốn gửi form thật sự thì thay alert bằng:
  //     // document.querySelector("form").submit();
  //   });
});
