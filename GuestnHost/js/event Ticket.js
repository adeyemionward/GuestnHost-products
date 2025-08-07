// let father = document.querySelector(".father");
// let image = document.querySelector(".allimg");
// if (father) {
//   father.addEventListener("click", (e) => {
//     let namingElement = e.target.closest(".naming");
//     let othersElement = father.querySelectorAll(".naming");
//     let removeActive = () => {
//       for (let i = 0; i < othersElement.length; i++) {
//         if (namingElement !== othersElement[i]) {
//           othersElement[i].classList.remove("active");
//         }
//       }
//     };
//     if (namingElement) {
//       removeActive();
//       namingElement.classList.add("active");
//     }
//     if (namingElement.classList.contains("name")) {
//       image.src = "assets/guestsnhost_app1.png";
//     }
//     if (namingElement.classList.contains("name1")) {
//       image.src = "assets/guestsnhost_app2.png";
//     }
//     if (namingElement.classList.contains("name2")) {
//       image.src = "assets/guestsnhost_app3.png";
//     }
//     if (namingElement.classList.contains("name3")) {
//       image.src = "assets/guestsnhost_app4.png";
//     }
//   });
// }

// Faq;s

const faqs = [
  {
    question: "Can I sell tickets online and at the venue?",
    answer:
      "Yes. You can sell tickets before the event through a custom link, and also process ticket sales at the gate on the event day.",
  },
  {
    question: "Do I need special equipment to check in guests?",
    answer:
      "No. All you need is a phone or tablet. Each ticket comes with a QR code, which can be scanned for fast entry.",
  },
  {
    question: "Can I offer early bird or group discounts?",
    answer:
      "Absolutely! Create coupon codes and discounts tailored for early buyers, group purchases, or affiliate partners.",
  },
  {
    question: "How does the affiliate tracking tool work?",
    answer:
      "You can assign unique referral links to influencers, team members, or partners and track the number of ticket sales they generate.",
  },
  {
    question: "Can I collect donations for my event?",
    answer:
      "Yes. Especially helpful for non-profit or fundraising events — your ticket page can include a “donate” option.",
  },
  {
    question: "Is onsite check-in support included?",
    answer:
      "For large events, we provide free professional check-in support to ensure a smooth guest experience. Contact us to qualify.",
  },
  {
    question: "Can multiple people manage the same event?",
    answer:
      "Yes. Use our collaboration functionality to invite your team and assign roles and permissions.",
  },
  {
    question: "Do you offer discounts for large or nonprofit events?",
    answer:
      "Yes. We provide discounted pricing for large-scale events and registered nonprofit organizations. Reach out to learn more.",
  },
  {
    question: "Can I track attendance in real time?",
    answer:
      "Yes. Once guests begin checking in, your dashboard updates instantly with live attendance data.",
  },
  {
    question: "How long does it take to set up ticketing for an event?",
    answer:
      "Just a few minutes. Our platform is self-service and easy to use. You can be live and selling tickets today.",
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

// Maraque srool

const cardsData = [
  "● Webinars ",
  "● Concert ",
  "● Virtual Conferences ",
  "● Webinars ",
  "● Concerts ",
  "● Hybrid ",
  "● Masterclass ",
  "● Trade shows ",
  "● Webinars ",
  "● Concert ",
  "● Virtual Conferences ",
  "● Webinars ",
  "● Concerts ",
  "● Hybrid ",
  "● Masterclass ",
  "● Trade shows ",
];

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

const createCard = (card) => `
               <div class="transition-all max-sm:text-xl max-sm:font-medium text-[#a8a8a8] px-2 text-2xl font-bold duration-200  shrink-0">

                   ${card}
                   </div>
               </div>
           `;

const renderCards = (target) => {
  const doubled = [...cardsData, ...cardsData];
  doubled.forEach((card) =>
    target.insertAdjacentHTML("beforeend", createCard(card))
  );
};

renderCards(row1);
renderCards(row2);
