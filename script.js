document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelectorAll(".faq-item");
  e.forEach((t) => {
    const a = t.querySelector(".faq-question"),
      c = t.querySelector(".faq-answer"),
      o = t.querySelector(".faq-icon");
    a.addEventListener("click", function () {
      const a = t.classList.contains("active");
      e.forEach((e) => {
        e.classList.remove("active"),
          (e.querySelector(".faq-answer").style.maxHeight = null),
          (e.querySelector(".faq-icon").style.transform = "rotate(0deg)");
      }),
        a || (t.classList.add("active"), (c.style.maxHeight = c.scrollHeight + "px"), (o.style.transform = "rotate(180deg)"));
    });
  });
});
