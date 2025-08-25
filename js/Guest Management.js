// Faq;s

const faqs = [
  {
    question: "Do I need to download an app to use Guestsnhost?",
    answer:
      "No. Guestsnhost is completely web-based and works seamlessly across mobile and desktop devices. No downloads required. can I use your platform for? ",
  },
  {
    question: "Can I customize my invitation design?",
    answer:
      "Absolutely! You can upload your own custom invitation design or choose from our free editable templates to match your event theme.",
  },
  {
    question: "What delivery channels are supported?",
    answer:
      "We support multi-channel delivery — Email, SMS, WhatsApp — so your invitations reach your guests where they’re most active.",
  },
  {
    question: "Can I track RSVPs and guest attendance in real time?",
    answer:
      "Yes. Our dashboard gives you real-time insights into RSVPs, check-ins, and overall attendance. You’ll know exactly who’s coming and who’s already at the venue.",
  },
  {
    question: "How does barcode or ID validation work at the event?",
    answer:
      "Each guest receives a unique QR code or barcode. At the event, you or your team can scan and validate guests using a phone or tablet — no special hardware needed.",
  },
  {
    question: "Can I collaborate with my team on the same event?",
    answer:
      "Yes. You can invite your team members, assign roles, and give different access rights so everyone can contribute without stepping on each other’s toes.",
  },
  {
    question: "Is there a limit to the number of guests I can upload?",
    answer:
      "Not at all. You can upload your guest list using our spreadsheet import tool — no limit on the number of guests per event.",
  },
  {
    question: "Do you offer support for onsite check-in?",
    answer:
      "Yes. We offer professional onsite guest check-in services, including barcode validation, attendance tracking, and seating coordination. Contact us for custom pricing.",
  },
  {
    question: "Can I segment my guest list?",
    answer:
      "Yes. You can categorize guests (e.g., VIPs, Sponsors, Media) and assign different seating or access rights as needed.",
  },
  {
    question: "What’s the cost of using Guestsnhost?",
    answer:
      "Our platform has flexible pricing depending on your event size and feature needs. Contact us for custom QR code placement for printed Invitations ",
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

