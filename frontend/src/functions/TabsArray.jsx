import Vector from "../images/Vector.jpg";
import Star from "../images/Star.jpg";

const specsLeft = [
  "Processor family",
  "Processor",
  "Memory",
  "Internal Storage",
  "Display",
  "Graphics",
  "Ports",
];

const specsRight = [
  "12th Generation Intel® Core™ i7 processor",
  "Intel® Core™ i7-1255U (up to 4.7 GHz with Intel® Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads)",
  "16 GB DDR4-3200 MHz RAM (1 x 16 GB)",
  "512 GB PCIe® NVMe™ SSD",
  `39.6 cm (15.6") diagonal, FHD (1920 x 1080), IPS, narrow bezel, anti-glare, 400 nits, 72% NTSC`,
  "Integrated",
  "3 SuperSpeed USB Type-A 5Gbps signaling rate (1 charging, 1 power); 1 SuperSpeed USB Type-C® 10Gbps signaling rate (USB Power Delivery, DisplayPort™ 2.1); 1 headphone/microphone combo; 1 AC power; 1 RJ-45; 1 HDMI 2.1b (HDMI cable sold separately.)",
];

const tabsArray = [
  {
    id: 1,
    title: "Specs",
    content: { left: specsLeft, right: specsRight },
  },
  {
    id: 2,
    title: "Reviews",
    content: [
      {
        imageSrc: Vector,
        author: "Great Value",
        imageSrc2: Star,
        comment: "WOWOWOWOWOWOWOWOWOWOWOWOWOW",
      },
      {
        imageSrc: Vector,
        author: "Great Value",
        imageSrc2: Star,
        comment: "WOWOWOWOWOWOWOWOWOWOWOWOWOW",
      },
      {
        imageSrc: Vector,
        author: "Great Value",
        imageSrc2: Star,
        comment: "WOWOWOWOWOWOWOWOWOWOWOWOWOW",
      },
      {
        imageSrc: Vector,
        author: "Great Value",
        imageSrc2: Star,
        comment: "WOWOWOWOWOWOWOWOWOWOWOWOWOW",
      },
    ],
  },
];

export default tabsArray;
