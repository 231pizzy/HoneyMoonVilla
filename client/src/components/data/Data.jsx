export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i className="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i className="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i className="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i className="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "../assets/img/obiora.jpeg",
    name: "papi pizzy",
    designation: "Chief Of Staff",
  },
  {
    image: "../assets/img/obiora.jpeg",
    name: "papi pizzy",
    designation: "Chief Of Staff",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];


export const contact = [
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "+234908141785",
  },
  // {
  //   icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
  //   title: "Technical",
  //   email: "tech@example.com",
  // },
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "honeymoonvillahotel@gmail.com",
  },
];
export const testimonial = [
  {
    description:
      "Absolutely loved my stay at the hotel! The staff were incredibly attentive and went above and beyond to ensure my comfort. The room was immaculate and beautifully furnished. Can't wait to come back!",
    name: "Jane",
    profession: "Profession",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "An exceptional experience from start to finish. The hotel exudes elegance and charm, and the attention to detail is remarkable. The amenities are top-notch, and the food at the restaurant was divine. Highly recommend this hotel to anyone looking for a memorable stay.",
    name: "pizzy ",
    profession: "Profession",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      "I can't say enough good things about this hotel. The service was impeccable, the rooms were spacious and luxurious, and the location was perfect. It truly exceeded all my expectations. Will definitely be returning on my next visit to the area.",
    name: "Dr Loui",
    profession: "Profession",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "₦35,000/night",
    name: "Junior Suit",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small classNmae="fa fa-star text-primary"></small>,
      <small classNmae="fa fa-star text-primary"></small>,
      <small classNmae="fa fa-star text-primary"></small>,
      <small classNmae="fa fa-star text-primary"></small>,
    ],
    description:
      "Experience sophistication and comfort in our Junior Suite, where modern elegance meets timeless charm. Perfect for those seeking a stylish retreat with all the essential amenities.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "₦45,000/night",
    name: "Executive Suite",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Indulge in unparalleled luxury and refinement in our Executive Suite. Designed for the discerning traveler, this spacious haven offers a seamless blend of sophistication, comfort, and personalized service.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "₦50,000/night",
    name: "Super Deluxe",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Elevate your stay to new heights of opulence in our Super Deluxe rooms. Immerse yourself in lavish comfort and unparalleled luxury, where every detail is meticulously curated to exceed your expectations",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];
