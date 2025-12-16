// lib/workshop-data.ts
export type Instructor = {
    name: string;
    role: string;
    bio: string;
    image: string;
};
export type Workshop = {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    description: string;
    capacity: string;
    status: "UPCOMING" | "COMPLETED";
    tags: string[];
    // --- NEW FIELDS ---
    longDescription: string;
    price: string; // e.g., "Free" or "500 BDT"
    instructors: Instructor[];
    agenda: {
        time: string;
        module: string;
        description: string;
    }[];
    prerequisites: string[];
};

export const WORKSHOP_DATA: Workshop[] = [
    {
        id: "WS-2025-01",
        title: "⚡RPM Presents: Blueprint – Robotics Mastery Series EPISODE 03 : FUNDAMENTALS OF ELECTRONICS ⚡",
        date: "December 18, 2025",
        time: "05:00 PM",
        location: "Room: TBA",
        image: "https://i.postimg.cc/Y2sQCNZX/gtfdg.jpg",
        description: "Ever wondered how simple circuits turn into smart machines? 🤖",
        capacity: "Limited",
        status: "UPCOMING",
        tags: [],
        price: "Free for Members",
        longDescription: "This workshop is your gateway into the world of electronics, the backbone of robotics, automation, and modern technology. From understanding core electronic components to seeing how they power real- world systems, this session is designed to ignite curiosity, strengthen fundamentals, and inspire innovation.",
        instructors: [{
            name: "Fardeen Khan",
            role: "President, ROBU",
            bio: "",
            image: "https://i.postimg.cc/vmBKft87/597430407-1590870648770715-335650276832286085-n.png"
        },
        {
            name: "Annur Hassan",
            role: "Sub Team Lead, BRACU Duburi | Secretary, RPM",
            bio: "",
            image: "https://i.postimg.cc/Dy4yd10F/597866778-1194030382169947-3394257322487437163-n.png"
        }
        ],
        prerequisites: [
            "Laptop (Optional)",

        ],
        agenda: [
            { time: "05:00 PM - 07:00 PM", module: "", description: "" },

        ]
    },
    // {
    //     id: "WS-2025-02",
    //     title: "PCB Design with Altium",
    //     date: "Nov 02, 2025",
    //     time: "2:00 PM - 6:00 PM",
    //     location: "Makers Lab",
    //     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    //     description: "Learn industry-standard PCB design techniques, from schematic capture to routing.",
    //     capacity: "25 Seats",
    //     status: "UPCOMING",
    //     tags: ["Hardware", "Altium", "Electronics"],
    //     price: "200 BDT (Kit fee)",
    //     longDescription: "A hands-on workshop covering the complete PCB design lifecycle. You will design a custom microcontroller breakout board, generate Gerber files, and learn about DFM (Design for Manufacturing) rules.",
    //     instructors: [{
    //         name: "Sarah Khan",
    //         role: "Hardware Lead",
    //         bio: "Designed the flight controller for the Sentinel Drone. Expert in high-speed signal routing.",
    //         image: "https://github.com/shadcn.png"
    //     },],
    //     prerequisites: ["Basic Circuit Theory", "Laptop with Altium Designer (Trial) installed"],
    //     agenda: [
    //         { time: "02:00 PM", module: "Schematic Capture", description: "Creating components and wiring diagrams." },
    //         { time: "03:30 PM", module: "PCB Layout", description: "Component placement and routing traces." },
    //         { time: "05:00 PM", module: "Manufacturing", description: "DRC checks and Gerber generation." }
    //     ]
    // },
    // {
    //     id: "WS-2024-05",
    //     title: "Intro to Computer Vision",
    //     date: "Aug 10, 2024",
    //     time: "11:00 AM",
    //     location: "UB2 Auditorium",
    //     image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2070&auto=format&fit=crop",
    //     description: "A beginner-friendly workshop covering OpenCV basics, image processing filters, and object detection using YOLO.",
    //     capacity: "50 Seats",
    //     status: "COMPLETED",
    //     tags: ["AI", "OpenCV", "Vision"],
    //     price: "Free",
    //     longDescription: "An introduction to the world of computer vision. We covered basic image manipulation, color filtering, and deployed a pre-trained YOLO model for real-time object detection.",
    //     instructors: [{
    //         name: "Rafid H.",
    //         role: "AI Researcher",
    //         bio: "Focuses on edge-ai optimization.",
    //         image: "https://github.com/shadcn.png"
    //     },],
    //     prerequisites: ["Python Basics"],
    //     agenda: []
    // },
    // {
    //     id: "WS-2024-03",
    //     title: "Microcontroller Interfacing",
    //     date: "May 20, 2024",
    //     time: "3:00 PM",
    //     location: "Electronics Lab",
    //     image: "https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&w=2070&auto=format&fit=crop",
    //     description: "Hands-on session with STM32 and Arduino. Learned about GPIO, I2C, SPI, and UART protocols.",
    //     capacity: "40 Seats",
    //     status: "COMPLETED",
    //     tags: ["Embedded", "C++", "STM32"],
    //     price: "Free",
    //     longDescription: "Deep dive into embedded protocols.",
    //     instructors: [{
    //         name: "John Doe",
    //         role: "Embedded Eng.",
    //         bio: "Firmware wizard.",
    //         image: "https://github.com/shadcn.png"
    //     },],
    //     prerequisites: ["C Programming"],
    //     agenda: []
    // },
];