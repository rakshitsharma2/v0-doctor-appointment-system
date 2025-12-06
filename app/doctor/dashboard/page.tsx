"use client"

import { Header } from "@/components/header"
import { mockAppointments, mockDoctors, mockPatient } from "@/lib/mock-data"
import { Calendar, Users, CheckCircle, AlertCircle } from "lucide-react"

export default function DoctorDashboard() {
  const doctorId = "doc1"
  const doctor = mockDoctors.find((d) => d.id === doctorId)
  const doctorAppointments = mockAppointments.filter((apt) => apt.doctorId === doctorId)

  const todayAppointments = doctorAppointments.filter((apt) => {
    const aptDate = new Date(apt.dateTime).toDateString()
    const today = new Date().toDateString()
    return aptDate === today
  })

  const upcomingAppointments = doctorAppointments.filter(
    (apt) => new Date(apt.dateTime) > new Date() && apt.status === "scheduled",
  )

  const completedAppointments = doctorAppointments.filter((apt) => apt.status === "completed")

  if (!doctor) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header userRole="doctor" userName={doctor.name} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {doctor.name.split(" ")[1]}</h1>
          <p className="text-gray-600 text-lg">Here's your medical practice overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-blue-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Today's Appointments</p>
                <p className="text-3xl font-bold text-gray-900">{todayAppointments.length}</p>
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
                <p className="text-3xl font-bold text-gray-900">{doctor.totalPatients}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-purple-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-gray-900">{completedAppointments.length}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-amber-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Rating</p>
                <p className="text-3xl font-bold text-gray-900">{doctor.rating}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Schedule</h2>
              {todayAppointments.length > 0 ? (
                <div className="space-y-3">
                  {todayAppointments.map((apt) => (
                    <div key={apt.id} className="bg-white rounded-lg border border-blue-100 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {new Date(apt.dateTime).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}{" "}
                            - {apt.reason}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {mockPatient.name} • {apt.duration} mins
                          </p>
                        </div>
                        <button className="px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100 transition">
                          Start
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                  <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-gray-600">No appointments scheduled for today</p>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-3">
                  {upcomingAppointments.slice(0, 5).map((apt) => (
                    <div key={apt.id} className="bg-white rounded-lg border border-green-100 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {new Date(apt.dateTime).toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}{" "}
                            at{" "}
                            {new Date(apt.dateTime).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">{mockPatient.name}</p>
                          <p className="text-sm text-gray-600">{apt.reason}</p>
                        </div>
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                          Scheduled
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-gray-600">No upcoming appointments</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-blue-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Practice Stats</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-gray-600 text-sm font-medium">Specialty</p>
                  <p className="text-lg font-semibold text-gray-900">{doctor.specialty}</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-gray-600 text-sm font-medium">Years Experience</p>
                  <p className="text-lg font-semibold text-gray-900">{doctor.yearsExperience} years</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-gray-600 text-sm font-medium">License</p>
                  <p className="text-lg font-semibold text-gray-900">{doctor.licenseNumber}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Available Slots</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {doctor.availableSlots.map((slot) => (
                      <span key={slot} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
              Edit Schedule
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
