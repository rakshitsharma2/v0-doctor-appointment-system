"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { DoctorCard } from "@/components/doctor-card"
import { mockDoctors } from "@/lib/mock-data"
import { Calendar, FileText, Users } from "lucide-react"

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<"patient" | "doctor" | null>(null)

  if (selectedRole === "patient") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Alex</h1>
            <p className="text-gray-600 text-lg">Find and book your next appointment</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (selectedRole === "doctor") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr. Sarah's Dashboard</h1>
            <p className="text-gray-600 text-lg">Manage your patients and appointments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg border border-blue-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Today's Appointments</p>
                  <p className="text-3xl font-bold text-gray-900">5</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-green-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Patients</p>
                  <p className="text-3xl font-bold text-gray-900">234</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-purple-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Prescriptions</p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-amber-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Rating</p>
                  <p className="text-3xl font-bold text-gray-900">4.8</p>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-5xl">⚕️</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">Your Health, Our Priority</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Connect with expert doctors, schedule appointments, and manage your health records all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Booking</h3>
            <p className="text-gray-600">Schedule appointments with your preferred doctors in just a few clicks</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Records</h3>
            <p className="text-gray-600">Keep all your health records and prescriptions organized and secure</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Connect with verified healthcare professionals in your area</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-blue-100 shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedRole("patient")}
              className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:shadow-xl transition-all rounded-xl p-8 text-white"
            >
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-2">I'm a Patient</h3>
              <p className="text-blue-100">Book appointments and manage your health</p>
            </button>

            <button
              onClick={() => setSelectedRole("doctor")}
              className="group bg-gradient-to-br from-green-600 to-green-700 hover:shadow-xl transition-all rounded-xl p-8 text-white"
            >
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-2">I'm a Doctor</h3>
              <p className="text-green-100">Manage patients and schedule appointments</p>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600 mb-1">50K+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600 mb-1">2K+</p>
            <p className="text-gray-600">Doctors</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-600 mb-1">100K+</p>
            <p className="text-gray-600">Appointments</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-600 mb-1">4.8★</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-blue-100 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">MediCare</h4>
              <p className="text-gray-600 text-sm">Making healthcare accessible to everyone</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Patients</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Find Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Book Appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    My Records
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Doctors</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Manage Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    My Patients
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 MediCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
