// Faq;s

const faqs = [
  {
    question: "Can I customize the website to match my event theme?",
    answer:
      "Yes! You can choose from multiple templates and upload your own cover image, photos, and videos to match your event’s style.",
  },
  {
    question: "Is there a limit to how many guests can view the website?",
    answer: "Nope — your event website supports unlimited visitors.",
  },
  {
    question: "Can I upload a brochure, program or Order of Service?",
    answer:
      "Absolutely. You can host documents such as programs, brochures, or even memorial tributes directly on your site.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all. Our system is beginner-friendly. You can build your event site in minutes, or request full setup from our team.",
  },
  {
    question: "Is there a way for guests to RSVP through the site?",
    answer:
      "Yes! You can integrate RSVP directly into your event website and track responses easily.",
  },
  {
    question: "Can I share the event website offline?",
    answer:
      "Yes. Each event website comes with a QR code you can print on flyers, banners, or invitations.",
  },
  {
    question: "Is the website mobile-friendly?",
    answer: "100% —",
  },
];

const container = document.getElementById("faqContainer");
container.className = "w-full";

faqs.forEach((faq, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "border-b border-[#Fff] py-4 cursor-pointer w-full";

  const header = document.createElement("div");
  header.className = "flex items-center justify-between";
  header.innerHTML = `
          <h3 class="text-base text-black  font-medium">${faq.question}</h3>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-all duration-500 ease-in-out icon">
              <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      `;

  const answer = document.createElement("p");
  answer.className =
    "text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md opacity-0 max-h-0 -translate-y-2 pt-0 answer";
  answer.textContent = faq.answer;

  wrapper.appendChild(header);
  wrapper.appendChild(answer);
  container.appendChild(wrapper);

  header.addEventListener("click", () => {
    const allAnswers = document.querySelectorAll(".answer");
    const allIcons = document.querySelectorAll(".icon");

    allAnswers.forEach((el, i) => {
      if (i === index) {
        const isOpen = el.classList.contains("opacity-100");
        el.classList.toggle("opacity-100", !isOpen);
        el.classList.toggle("max-h-[300px]", !isOpen);
        el.classList.toggle("translate-y-0", !isOpen);
        el.classList.toggle("pt-4", !isOpen);
        el.classList.toggle("opacity-0", isOpen);
        el.classList.toggle("max-h-0", isOpen);
        el.classList.toggle("-translate-y-2", isOpen);

        allIcons[i].classList.toggle("rotate-180", !isOpen);
      } else {
        el.classList.remove(
          "opacity-100",
          "max-h-[300px]",
          "translate-y-0",
          "pt-4"
        );
        el.classList.add("opacity-0", "max-h-0", "-translate-y-2");
        allIcons[i].classList.remove("rotate-180");
      }
    });
  });
});

// 
