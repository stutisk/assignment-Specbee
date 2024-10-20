const speakers = [
  {
    name: "Raj Shamani",
    title: "Entrepreneur & Speaker",
    company: "Shamani Industries",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729427956/aba2mzjiolcsaqrd7rfm.jpg",
    bio: "Raj Shamani is a young entrepreneur and motivational speaker. He shares insights on entrepreneurship and digital marketing, inspiring many to pursue their passions.",
    twitterUrl: "https://twitter.com/rajshamani",
    linkedinUrl: "https://www.linkedin.com/in/rajshamani/",
  },
  {
    name: "Ranveer Allahbadia",
    title: "Content Creator ",
    company: "BeerBiceps",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729427956/q5jnpmvnqggc8lktjya8.jpg",
    bio: "Ranveer Allahbadia is a popular content creator known for his engaging podcasts and motivational talks. He focuses on personal development and entrepreneurship.",
    twitterUrl: "https://twitter.com/RanveerAllabadia",
    linkedinUrl: "https://www.linkedin.com/in/ranveer-allahbadia/",
  },
  {
    name: "Gary Vaynerchuk",
    title: "Entrepreneur & Author",
    company: "VaynerMedia",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428316/ehfrubjokimmqa1r07a9.jpg",
    bio: "Gary Vaynerchuk is a serial entrepreneur and a leading voice in digital marketing. He shares valuable insights on building businesses and personal brands.",
    twitterUrl: "https://twitter.com/garyvee",
    linkedinUrl: "https://www.linkedin.com/in/garyvaynerchuk/",
  },
  {
    name: "Sandeep Maheshwari",
    title: "Motivational Speaker",
    company: "ImagesBazaar",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/od1knbsygnmhaz4sfntl.jpg",
    bio: "Sandeep Maheshwari is known for his impactful speeches aimed at inspiring youth. He shares his journey and practical tips for success.",
    twitterUrl: "https://twitter.com/sandeepmarsh",
    linkedinUrl: "https://www.linkedin.com/in/sandeep-maheshwari/",
  },
  {
    name: "Niharika NM",
    title: "Content Creator & Influencer",
    company: "Niharika NM",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/x5v1uvvwsw677bafszhx.jpg",
    bio: "Niharika NM is a talented content creator known for her relatable and humorous videos. She engages her audience with her unique storytelling style.",
    twitterUrl: "https://twitter.com/niharikanm",
    linkedinUrl: "https://www.linkedin.com/in/niharikanm/",
  },
  {
    name: "Radhakrishna K",
    title: "Digital Marketing Strategist",
    company: "Radhakrishna Digital",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/fesz5lpyv3o2qvrfxne6.jpg",
    bio: "Radhakrishna K is a digital marketing strategist who helps businesses enhance their online presence. He focuses on driving results through effective marketing strategies.",
    twitterUrl: "https://twitter.com/radhakrishna",
    linkedinUrl: "https://www.linkedin.com/in/radhakrishna/",
  },
  {
    name: "Sanjay Gupta",
    title: "Business Coach & Author",
    company: "Gupta Consulting",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428748/drzuaneb2qk147ghyis2.jpg",
    bio: "Sanjay Gupta is a seasoned business coach and author. He empowers individuals and businesses to achieve their goals through strategic guidance.",
    twitterUrl: "https://twitter.com/sanjaygupta",
    linkedinUrl: "https://www.linkedin.com/in/sanjaygupta/",
  },
  {
    name: "Neha Narkhede",
    title: "Co-Founder & CTO",
    company: "Confluent",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428630/rceuyzujvvktqpybrahp.jpg",
    bio: "Neha Narkhede is a tech entrepreneur and co-founder of Confluent, focusing on real-time data streaming and innovative data solutions.",
    twitterUrl: "https://twitter.com/neha_narkhede",
    linkedinUrl: "https://www.linkedin.com/in/nehanarkhede/",
  },
  {
    name: "Naval Ravikant",
    title: "Entrepreneur & Investor",
    company: "AngelList",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428630/wnjmoo1tot1p7gobappf.jpg",
    bio: "Naval Ravikant is a successful entrepreneur and angel investor. He shares profound insights on startups, investing, and personal growth.",
    twitterUrl: "https://twitter.com/naval",
    linkedinUrl: "https://www.linkedin.com/in/navalr/",
  },
  {
    name: "Simran Sethi",
    title: "Author & Educator",
    company: "University of Kansas",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1729428317/atibe4isnjqtivhotzxt.jpg",
    bio: "Simran Sethi is an author and educator who promotes sustainability. She focuses on environmental awareness and responsible living.",
    twitterUrl: "https://twitter.com/simran_sethi",
    linkedinUrl: "https://www.linkedin.com/in/simransethi/",
  },
];

let currentIndex = 0;
const cardsToShow = 4;
const cardWidth = 285;

const renderCards = () => {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  speakers.forEach((speaker, index) => {
    const card = `
        <div class="card bg-white mx-0 rounded-lg shadow-md p-6 flex flex-col items-center" data-index="${index}">
          <img src="${speaker.image}" alt="${speaker.name}" class="w-40 h-40 rounded-full">
          <h2 class="text-xl font-semibold mt-4">${speaker.name}</h2>
          <p class="font-bold mt-5">${speaker.title}</p>
          <p class="text-gray-400">${speaker.company}</p>
        </div>
      `;
    container.innerHTML += card;
  });

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.getAttribute("data-index");
      showSpeakerDetails(index);
    });
  });

  updateButtonStates(); // Check button states after rendering cards
};

const showSpeakerDetails = (index) => {
  const speaker = speakers[index];
  document.getElementById("speaker-image").src = speaker.image;
  document.getElementById("speaker-name").innerText = speaker.name;
  document.getElementById("speaker-title").innerText = speaker.title;
  document.getElementById("speaker-company").innerText = speaker.company;
  document.getElementById("speaker-bio").innerText = speaker.bio;
  document.getElementById("speaker-linkedin").href = speaker.linkedinUrl;
  document.getElementById("speaker-twitter").href = speaker.twitterUrl;

  document.getElementById("speaker-details").classList.remove("hidden");
};

const moveSlider = (direction) => {
  const container = document.getElementById("cards-container");
  const totalCards = speakers.length;
  const maxIndex = totalCards - cardsToShow;

  if (direction === "next") {
    currentIndex = Math.min(currentIndex + cardsToShow, maxIndex);
  } else {
    currentIndex = Math.max(currentIndex - cardsToShow, 0);
  }

  container.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;
  
  updateButtonStates(); 
};

const updateButtonStates = () => {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const maxIndex = speakers.length - cardsToShow;

  
  if (currentIndex === 0) {
    prevButton.disabled = true;
    prevButton.classList.add('opacity-50', 'cursor-not-allowed'); 
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove('opacity-50', 'cursor-not-allowed');
  }

  if (currentIndex >= maxIndex) {
    nextButton.disabled = true;
    nextButton.classList.add('opacity-50', 'cursor-not-allowed'); 
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove('opacity-50', 'cursor-not-allowed');
  }
};

document
  .getElementById("prev-button")
  .addEventListener("click", () => moveSlider("prev"));
document
  .getElementById("next-button")
  .addEventListener("click", () => moveSlider("next"));

document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("speaker-details").classList.add("hidden");
});

renderCards();