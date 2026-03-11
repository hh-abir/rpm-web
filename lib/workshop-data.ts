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
    title: "PCB Design with Altium",
    date: "Nov 02, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Makers Lab",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    description:
      "Learn industry-standard PCB design techniques, from schematic capture to routing.",
    capacity: "25 Seats",
    status: "UPCOMING",
    tags: ["Hardware", "Altium", "Electronics"],
    price: "200 BDT (Kit fee)",
    longDescription:
      "A hands-on workshop covering the complete PCB design lifecycle. You will design a custom microcontroller breakout board, generate Gerber files, and learn about DFM (Design for Manufacturing) rules.",
    instructors: [
      {
        name: "Sarah Khan",
        role: "Hardware Lead",
        bio: "Designed the flight controller for the Sentinel Drone. Expert in high-speed signal routing.",
        image: "https://github.com/shadcn.png",
      },
    ],
    prerequisites: [
      "Basic Circuit Theory",
      "Laptop with Altium Designer (Trial) installed",
    ],
    agenda: [
      {
        time: "02:00 PM",
        module: "Schematic Capture",
        description: "Creating components and wiring diagrams.",
      },
      {
        time: "03:30 PM",
        module: "PCB Layout",
        description: "Component placement and routing traces.",
      },
      {
        time: "05:00 PM",
        module: "Manufacturing",
        description: "DRC checks and Gerber generation.",
      },
    ],
  },
  {
    id: "WS-2025-02",
    title: "IoT Systems with ESP32",
    date: "Nov 15, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Electronics Lab",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
    description:
      "Build cloud-connected smart devices using the ESP32 microcontroller and MQTT.",
    capacity: "30 Seats",
    status: "UPCOMING",
    tags: ["IoT", "ESP32", "Cloud"],
    price: "500 BDT",
    longDescription:
      "Step into the Internet of Things. You will learn how to read environmental sensor data and securely publish it to a cloud dashboard using Wi-Fi and MQTT protocols.",
    instructors: [
      {
        name: "Tariq Rahman",
        role: "IoT Architect",
        bio: "Specializes in low-power wide-area networks (LPWAN) and smart city infrastructure.",
        image: "https://i.pravatar.cc/150?u=tariq",
      },
    ],
    prerequisites: ["Basic C/C++ knowledge", "Arduino IDE installed"],
    agenda: [
      {
        time: "10:00 AM",
        module: "ESP32 Basics",
        description: "Setting up the toolchain and connecting to Wi-Fi.",
      },
      {
        time: "11:30 AM",
        module: "Sensor Integration",
        description: "Reading data from DHT22 and PIR sensors.",
      },
      {
        time: "01:30 PM",
        module: "Cloud Dashboards",
        description: "Visualizing data in real-time using an MQTT broker.",
      },
    ],
  },
  {
    id: "WS-2025-04",
    title: "Autonomous Rover Fundamentals",
    date: "Dec 05, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Robotics Bay",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    description:
      "Program a 4-wheel rover to navigate obstacles using ROS2 and LIDAR.",
    capacity: "15 Teams",
    status: "UPCOMING",
    tags: ["Robotics", "C++", "ROS2"],
    price: "1500 BDT (Team Entry)",
    longDescription:
      "A deep dive into the Robot Operating System (ROS). Participants will work in teams of two to calibrate sensors, implement PID controllers, and achieve basic autonomous navigation in a mapped environment.",
    instructors: [
      {
        name: "Dr. Chen Wei",
        role: "Robotics Researcher",
        bio: "PhD in Autonomous Systems. Leading contributor to open-source SLAM algorithms.",
        image: "https://i.pravatar.cc/150?u=chen",
      },
    ],
    prerequisites: ["Intermediate C++ or Python", "Linux Terminal basics"],
    agenda: [
      {
        time: "09:00 AM",
        module: "Hardware Assembly",
        description: "Interfacing motor drivers with the ESP32/Jetson Nano.",
      },
      {
        time: "12:00 PM",
        module: "Sensor Fusion",
        description: "Processing Ultrasonic and LIDAR data streams.",
      },
      {
        time: "03:00 PM",
        module: "Final Challenge",
        description:
          "Time-trial navigation through an unknown obstacle course.",
      },
    ],
  },
  {
    id: "WS-2025-08",
    title: "Building RAG AI Applications",
    date: "Dec 20, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual (Discord)",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    description:
      "Connect LLMs to your own proprietary data using Retrieval Augmented Generation.",
    capacity: "100 Seats",
    status: "UPCOMING",
    tags: ["AI", "Python", "LLM"],
    price: "Free",
    longDescription:
      "Learn to overcome LLM hallucinations. We will cover vector databases (Pinecone), embedding models, and LangChain integration to build a chatbot that actually knows your documents.",
    instructors: [
      {
        name: "Jamie V.",
        role: "AI Solutions Architect",
        bio: "Specializes in deploying private GPT instances for enterprise clients.",
        image: "https://i.pravatar.cc/150?u=jamie",
      },
    ],
    prerequisites: ["Python programming", "Basic understanding of APIs"],
    agenda: [
      {
        time: "02:00 PM",
        module: "Vector Embeddings",
        description: "Translating text into mathematical coordinates.",
      },
      {
        time: "03:30 PM",
        module: "Data Ingestion",
        description: "PDF parsing and chunking strategies.",
      },
      {
        time: "05:00 PM",
        module: "Deployment",
        description: "Hosting your RAG app using Streamlit.",
      },
    ],
  },
  {
    id: "WS-2024-05",
    title: "Intro to Computer Vision",
    date: "Aug 10, 2024",
    time: "11:00 AM",
    location: "UB2 Auditorium",
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2070&auto=format&fit=crop",
    description:
      "A beginner-friendly workshop covering OpenCV basics, image processing filters, and object detection using YOLO.",
    capacity: "50 Seats",
    status: "COMPLETED",
    tags: ["AI", "OpenCV", "Vision"],
    price: "Free",
    longDescription:
      "An introduction to the world of computer vision. We covered basic image manipulation, color filtering, and deployed a pre-trained YOLO model for real-time object detection.",
    instructors: [
      {
        name: "Rafid H.",
        role: "AI Researcher",
        bio: "Focuses on edge-ai optimization.",
        image: "https://github.com/shadcn.png",
      },
    ],
    prerequisites: ["Python Basics"],
    agenda: [],
  },
  {
    id: "WS-2024-03",
    title: "Microcontroller Interfacing",
    date: "May 20, 2024",
    time: "3:00 PM",
    location: "Electronics Lab",
    image:
      "https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Hands-on session with STM32 and Arduino. Learned about GPIO, I2C, SPI, and UART protocols.",
    capacity: "40 Seats",
    status: "COMPLETED",
    tags: ["Embedded", "C++", "STM32"],
    price: "Free",
    longDescription: "Deep dive into embedded protocols.",
    instructors: [
      {
        name: "John Doe",
        role: "Embedded Eng.",
        bio: "Firmware wizard.",
        image: "https://github.com/shadcn.png",
      },
    ],
    prerequisites: ["C Programming"],
    agenda: [],
  },
];
