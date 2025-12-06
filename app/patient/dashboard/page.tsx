"use client"
import { Header } from "@/components/header"
import { AppointmentCard } from "@/components/appointment-card"
import { PrescriptionCard } from "@/components/prescription-card"
import { mockAppointments, mockPrescriptions, mockDoctors, mockMedicalRecords } from "@/lib/mock-data"
import { Calendar, AlertCircle, FileText, Heart } from "lucide-react"
import Link from "next/link"

export default function PatientDashboard() {
  const upcomingAppointments = mockAppointments.filter(
    (apt) => new Date(apt.dateTime) > new Date() && apt.status === "scheduled",
  )
  const pastAppointments = mockAppointments.filter((apt) => new Date(apt.dateTime) < new Date())

  const getDoctorInfo = (doctorId: string) => {
    return mockDoctors.find((doc) => doc.id === doctorId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header userRole="patient" userName="Alex Johnson" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Health Dashboard</h1>
          <p className="text-gray-600 text-lg">Welcome back! Here's your health overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-blue-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Upcoming Appointments</p>
                <p className="text-3xl font-bold text-gray-900">{upcomingAppointments.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-green-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Prescriptions</p>
                <p className="text-3xl font-bold text-gray-900">{mockPrescriptions.length}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-purple-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Medical Records</p>
                <p className="text-3xl font-bold text-gray-900">{mockMedicalRecords.length}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-red-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Health Status</p>
                <p className="text-3xl font-bold text-gray-900">Good</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h2>
                <Link href="/patient/appointments">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</span>
                </Link>
              </div>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <AppointmentCard key={apt.id} appointment={apt} doctor={getDoctorInfo(apt.doctorId)} />
                  ))}
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                  <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-gray-600">No upcoming appointments</p>
                  <Link href="/patient/book">
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                      Book One Now
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Prescriptions</h2>
              {mockPrescriptions.length > 0 ? (
                <div className="space-y-4">
                  {mockPrescriptions.map((presc) => (
                    <PrescriptionCard key={presc.id} prescription={presc} />
                  ))}
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-gray-600">No active prescriptions</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-blue-100 p-6 h-fit sticky top-20">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Health Profile</h3>

            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm font-medium">Blood Type</p>
                <p className="text-lg font-semibold text-gray-900">O+</p>
              </div>

              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm font-medium">Date of Birth</p>
                <p className="text-lg font-semibold text-gray-900">March 15, 1985</p>
              </div>

              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm font-medium">Allergies</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full">Penicillin</span>
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm font-medium mb-3">Medical History</p>
                <div className="space-y-2">
                  {["Hypertension", "Asthma"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full mt-6 border border-blue-300 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition">
              Edit Profile
            </button>
          </div>
        </div>

        {pastAppointments.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Appointments</h2>
            <div className="space-y-4">
              {pastAppointments.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} doctor={getDoctorInfo(apt.doctorId)} isPast={true} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
