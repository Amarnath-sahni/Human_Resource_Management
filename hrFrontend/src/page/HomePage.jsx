import React from "react";
import { Search, Plane } from "lucide-react";
import Navbar from "../router/Navbar";
import {
  FiPlus
} from "react-icons/fi";

const employees = [
  {
    id: 1,
    name: "John Carter",
    role: "Frontend Developer",
    department: "Engineering",
    image: "https://i.pravatar.cc/150?img=1",
    status: "present",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "UI/UX Designer",
    department: "Design",
    image: "https://i.pravatar.cc/150?img=5",
    status: "leave",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Backend Developer",
    department: "Engineering",
    image: "https://i.pravatar.cc/150?img=8",
    status: "absent",
  },
  {
    id: 4,
    name: "Sophia Brown",
    role: "HR Manager",
    department: "Human Resources",
    image: "https://i.pravatar.cc/150?img=9",
    status: "present",
  },
  {
    id: 5,
    name: "Daniel Smith",
    role: "QA Engineer",
    department: "Testing",
    image: "https://i.pravatar.cc/150?img=12",
    status: "present",
  },
  {
    id: 6,
    name: "Olivia Davis",
    role: "Project Manager",
    department: "Management",
    image: "https://i.pravatar.cc/150?img=15",
    status: "leave",
  },
  {
    id: 7,
    name: "John Carter",
    role: "Frontend Developer",
    department: "Engineering",
    image: "https://i.pravatar.cc/150?img=1",
    status: "present",
  },
  {
    id: 8,
    name: "Emma Watson",
    role: "UI/UX Designer",
    department: "Design",
    image: "https://i.pravatar.cc/150?img=5",
    status: "leave",
  },
  {
    id: 9,
    name: "Michael Lee",
    role: "Backend Developer",
    department: "Engineering",
    image: "https://i.pravatar.cc/150?img=8",
    status: "absent",
  },
];

const StatusIcon = ({ status }) => {
  if (status == "present") {
    return (
      <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
    );
  }

  if (status == "leave") {
    return <Plane size={16} className="text-sky-400" />;
  }

  return (
    <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-10 py-8 pt-22">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Navbar/>

        <div className="flex items-center justify-between mb-8">

          <div>
             <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-lg text-white">
            <FiPlus />
            New
          </button>
          </div>

          <div className="relative w-80">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />

            <input
              type="text"
              placeholder="Search employee..."
              className="w-full bg-[#1b1b1b] border border-gray-700 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-violet-500 transition"
            />

          </div>

        </div>

        {/* Employee Grid */}

        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {employees.map((employee) => (

            <div
              key={employee.id}
              className="relative bg-[#181818] border border-[#2b2b2b] rounded-xl p-6 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >

              {/* Status */}

              <div className="absolute right-5 top-5">
                <StatusIcon status={employee.status} />
              </div>

              {/* Profile */}

              <div className="flex items-center gap-8">

                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-25 h-25 rounded-lg border border-gray-700 object-cover"
                />

                <div>

                  <h2 className="text-lg font-semibold">
                    {employee.name}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    {employee.role}
                  </p>

                  <p className="text-violet-400 text-sm mt-2">
                    {employee.department}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}