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
};

export const WORKSHOP_DATA: Workshop[] = [
    {
        id: "WS-2025-01",
        title: "Advanced Autonomous Navigation",
        date: "Oct 15, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "UB20405 - Robotics Lab",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        description: "Deep dive into SLAM algorithms and path planning for rover systems using ROS 2. Prerequisites: Python & Basic Linux.",
        capacity: "30 Seats",
        status: "UPCOMING",
        tags: ["ROS 2", "SLAM", "Python"],
    },
    {
        id: "WS-2025-02",
        title: "PCB Design with Altium",
        date: "Nov 02, 2025",
        time: "2:00 PM - 6:00 PM",
        location: "Makers Lab",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        description: "Learn industry-standard PCB design techniques, from schematic capture to routing and manufacturing file generation.",
        capacity: "25 Seats",
        status: "UPCOMING",
        tags: ["Hardware", "Altium", "Electronics"],
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
    },
];