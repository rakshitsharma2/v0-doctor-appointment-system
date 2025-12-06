"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { AppointmentCard } from "@/components/appointment-card"
import { mockAppointments, mockDoctors } from "@/lib/mock-data"
import { Calendar, Search } from "lucide-react"
import Link from "next/link"

export default function PatientAppointments() {
  const [statusFilter, setStatusFilter] = useState<"all" | "scheduled" | "completed" | "cancelled">("all")
  const [searchTerm, setSearchTerm] = useState("")

  const getDoctorInfo = (doctorId: string) => {
    return mockDoctors.find((doc) => doc.id === doctorId)
  }

  const filteredAppointments = mockAppointments.filter((apt) => {
    const matchesStatus = statusFilter === "all" || apt.status === statusFilter
    const doctor = getDoctorInfo(apt.doctorId)
    const matchesSearch =
      searchTerm === "" ||
      doctor?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor?.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.reason.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header userRole="patient" userName="Alex Johnson" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Appointments</h1>
          <p className="text-gray-600 text-lg">Manage all your medical appointments</p>
        </div>

        <div className="bg-white rounded-lg border border-blue-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Link href="/booking">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition">
                Book New
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["all", "scheduled", "completed", "cancelled"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  statusFilter === status ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredAppointments.length > 0 ? (
          <div className="space-y-4">
            {filteredAppointments.map((apt) => (
              <AppointmentCard
                key={apt.id}
                appointment={apt}
                doctor={getDoctorInfo(apt.doctorId)}
                isPast={new Date(apt.dateTime) < new Date()}
              />
            ))}
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-12 text-center">
            <Calendar className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No appointments found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search filters or book a new appointment</p>
            <Link href="/booking">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg">
                Book an Appointment
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
