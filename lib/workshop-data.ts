// lib/workshop-data.ts

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
    instructor: {
        name: string;
        role: string;
        bio: string;
        image: string; // URL
    };
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
        title: "Advanced Autonomous Navigation",
        date: "Oct 15, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "UB20405 - Robotics Lab",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        description: "Deep dive into SLAM algorithms and path planning for rover systems using ROS 2.",
        capacity: "30 Seats",
        status: "UPCOMING",
        tags: ["ROS 2", "SLAM", "Python"],
        price: "Free for Members",
        longDescription: "This intensive full-day module focuses on the theoretical and practical implementation of Simultaneous Localization and Mapping (SLAM). Participants will work with Lidar data to build maps of the UB2 corridor and implement A* path planning algorithms on a TurtleBot 4.",
        instructor: {
            name: "Adnan Sami",
            role: "Lead Research Engineer",
            bio: "Specializes in autonomous rover navigation. Published 2 papers in IEEE regarding visual odometry.",
            image: "https://github.com/shadcn.png"
        },
        prerequisites: [
            "Proficiency in Python",
            "Basic understanding of Linux/Bash",
            "Laptop with Ubuntu 22.04 (Dual boot or VM)"
        ],
        agenda: [
            { time: "10:00 AM", module: "Module 01: Setup", description: "ROS 2 Humble installation check and environment configuration." },
            { time: "11:30 AM", module: "Module 02: Lidar Theory", description: "Understanding point clouds and transformation frames (TF2)." },
            { time: "01:00 PM", module: "Lunch Break", description: "Networking and refreshments." },
            { time: "02:00 PM", module: "Module 03: SLAM", description: "Running GMapping and Cartographer." },
            { time: "03:30 PM", module: "Module 04: Challenge", description: "Autonomous navigation through an obstacle course." }
        ]
    },
    // ... (Add similar detailed fields to other workshops)
    {
        id: "WS-2025-02",
        title: "PCB Design with Altium",
        date: "Nov 02, 2025",
        time: "2:00 PM - 6:00 PM",
        location: "Makers Lab",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        description: "Learn industry-standard PCB design techniques, from schematic capture to routing.",
        capacity: "25 Seats",
        status: "UPCOMING",
        tags: ["Hardware", "Altium", "Electronics"],
        price: "200 BDT (Kit fee)",
        longDescription: "A hands-on workshop covering the complete PCB design lifecycle. You will design a custom microcontroller breakout board, generate Gerber files, and learn about DFM (Design for Manufacturing) rules.",
        instructor: {
            name: "Sarah Khan",
            role: "Hardware Lead",
            bio: "Designed the flight controller for the Sentinel Drone. Expert in high-speed signal routing.",
            image: "https://github.com/shadcn.png"
        },
        prerequisites: ["Basic Circuit Theory", "Laptop with Altium Designer (Trial) installed"],
        agenda: [
            { time: "02:00 PM", module: "Schematic Capture", description: "Creating components and wiring diagrams." },
            { time: "03:30 PM", module: "PCB Layout", description: "Component placement and routing traces." },
            { time: "05:00 PM", module: "Manufacturing", description: "DRC checks and Gerber generation." }
        ]
    },
    {
        id: "WS-2024-05",
        title: "Intro to Computer Vision",
        date: "Aug 10, 2024",
        time: "11:00 AM",
        location: "UB2 Auditorium",
        image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2070&auto=format&fit=crop",
        description: "A beginner-friendly workshop covering OpenCV basics, image processing filters, and object detection using YOLO.",
        capacity: "50 Seats",
        status: "COMPLETED",
        tags: ["AI", "OpenCV", "Vision"],
        price: "Free",
        longDescription: "An introduction to the world of computer vision. We covered basic image manipulation, color filtering, and deployed a pre-trained YOLO model for real-time object detection.",
        instructor: {
            name: "Rafid H.",
            role: "AI Researcher",
            bio: "Focuses on edge-ai optimization.",
            image: "https://github.com/shadcn.png"
        },
        prerequisites: ["Python Basics"],
        agenda: []
    },
    {
        id: "WS-2024-03",
        title: "Microcontroller Interfacing",
        date: "May 20, 2024",
        time: "3:00 PM",
        location: "Electronics Lab",
        image: "https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&w=2070&auto=format&fit=crop",
        description: "Hands-on session with STM32 and Arduino. Learned about GPIO, I2C, SPI, and UART protocols.",
        capacity: "40 Seats",
        status: "COMPLETED",
        tags: ["Embedded", "C++", "STM32"],
        price: "Free",
        longDescription: "Deep dive into embedded protocols.",
        instructor: {
            name: "John Doe",
            role: "Embedded Eng.",
            bio: "Firmware wizard.",
            image: "https://github.com/shadcn.png"
        },
        prerequisites: ["C Programming"],
        agenda: []
    },
];