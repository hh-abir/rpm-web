// lib/project-data.ts

export type ProjectStatus = "DEPLOYED" | "PROTOTYPE" | "RESEARCH" | "DECOMMISSIONED";

export type Project = {
    id: string;
    title: string;
    codename: string; // e.g. "PROJECT_SENTINEL"
    description: string;
    longDescription: string;
    category: "AERIAL" | "GROUND" | "MARINE" | "SOFTWARE";
    status: ProjectStatus;
    progress: number; // 0 to 100
    image: string;
    techStack: string[];
    teamLead: string;
    specs: {
        label: string;
        value: string;
    }[];
};

export const PROJECT_DATA: Project[] = [
    {
        id: "PRJ-001",
        title: "Sentinel Autonomous Drone",
        codename: "SKY_EYE_V4",
        category: "AERIAL",
        status: "DEPLOYED",
        progress: 100,
        image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2000&auto=format&fit=crop",
        description: "Long-range surveillance drone with thermal imaging and real-time target tracking capabilities.",
        longDescription: "The Sentinel V4 is our flagship aerial platform. Designed for distinct terrain monitoring, it utilizes a custom PX4 flight stack modified for redundant fail-safes. The onboard Jetson Nano processes 4K video streams in real-time for object detection.",
        techStack: ["ROS 2", "OpenCV", "PX4", "Python", "C++"],
        teamLead: "Adnan Sami",
        specs: [
            { label: "Flight Time", value: "45 Mins" },
            { label: "Range", value: "5 KM" },
            { label: "Payload", value: "2.5 KG" },
        ]
    },
    {
        id: "PRJ-002",
        title: "Aurora Mars Rover",
        codename: "RED_DUST_MK2",
        category: "GROUND",
        status: "PROTOTYPE",
        progress: 75,
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop",
        description: "Six-wheeled distinct terrain rover featuring rocker-bogie suspension and soil analysis drill.",
        longDescription: "Built for the University Rover Challenge, Aurora Mk2 focuses on autonomous traversal. It uses visual SLAM for mapping and a 6-DOF arm for equipment servicing tasks. The chassis is CNC-milled aluminum for weight optimization.",
        techStack: ["SolidWorks", "ROS Navigation", "Arduino", "LoRa"],
        teamLead: "Sarah Khan",
        specs: [
            { label: "Speed", value: "2.5 m/s" },
            { label: "Suspension", value: "Rocker-Bogie" },
            { label: "Comms", value: "900MHz LoRa" },
        ]
    },
    {
        id: "PRJ-003",
        title: "Neural Vision Library",
        codename: "CORTEX_LIB",
        category: "SOFTWARE",
        status: "RESEARCH",
        progress: 40,
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop",
        description: "Optimized computer vision middleware for low-power edge devices.",
        longDescription: "Cortex is a lightweight wrapper around OpenCV designed to offload matrix operations to the NPU of embedded boards like the ESP32-S3 and K210. It enables 30fps face detection on <$10 hardware.",
        techStack: ["TensorFlow Lite", "C", "Assembly"],
        teamLead: "Rafid H.",
        specs: [
            { label: "Architecture", value: "RISC-V" },
            { label: "Footprint", value: "256 KB" },
            { label: "License", value: "MIT Open Source" },
        ]
    },
    {
        id: "PRJ-004",
        title: "Nautilus AUV",
        codename: "DEEP_BLUE",
        category: "MARINE",
        status: "DECOMMISSIONED",
        progress: 100,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        description: "Autonomous Underwater Vehicle for pipe inspection and hull analysis.",
        longDescription: "Nautilus was our first foray into marine robotics. It successfully mapped the university pool floor using sonar. Retired in 2023 to make way for the Leviathan class.",
        techStack: ["Blue Robotics", "Raspberry Pi", "Sonar"],
        teamLead: "Ex-Member",
        specs: [
            { label: "Depth Rating", value: "50m" },
            { label: "Thrusters", value: "6x T200" },
        ]
    },
];