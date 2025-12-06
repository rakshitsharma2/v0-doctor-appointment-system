"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { DoctorCard } from "@/components/doctor-card"
import { mockDoctors } from "@/lib/mock-data"
import { Calendar, Clock, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const selectedDoctorId = searchParams.get("doctorId")
  const [step, setStep] = useState<"select" | "date" | "confirm">(selectedDoctorId ? "date" : "select")
  const [selectedDoctor, setSelectedDoctor] = useState(
    selectedDoctorId ? mockDoctors.find((d) => d.id === selectedDoctorId) : null,
  )
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [reason, setReason] = useState("")

  const handleSelectDoctor = (doctor: (typeof mockDoctors)[0]) => {
    setSelectedDoctor(doctor)
    setStep("date")
  }

  const handleBookAppointment = () => {
    setStep("confirm")
  }

  if (step === "confirm" && selectedDoctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header userRole="patient" userName="Alex Johnson" />

        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h1>
            <p className="text-gray-600">Your appointment has been successfully booked</p>
          </div>

          <div className="bg-white rounded-lg border border-green-100 p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Doctor</p>
                  <p className="text-lg font-bold text-gray-900">{selectedDoctor.name}</p>
                  <p className="text-sm text-blue-600">{selectedDoctor.specialty}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date
                  </p>
                  <p className="text-lg font-bold text-gray-900">{selectedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time
                  </p>
                  <p className="text-lg font-bold text-gray-900">{selectedTime}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 font-medium mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Reason for Visit
                </p>
                <p className="text-gray-900">{reason}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/patient/dashboard">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition">
                Go to Dashboard
              </button>
            </Link>
            <Link href="/booking">
              <button className="w-full border border-blue-300 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition">
                Book Another Appointment
              </button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header userRole="patient" userName="Alex Johnson" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
          <p className="text-gray-600 text-lg">Choose a doctor and select your preferred time</p>
        </div>

        {step === "select" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Doctor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  onClick={() => handleSelectDoctor(doctor)}
                  className="cursor-pointer transform transition-transform hover:scale-105"
                >
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>
        )}

        {step === "date" && selectedDoctor && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => {
                setStep("select")
                setSelectedDoctor(null)
              }}
              className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              ← Back to Doctors
            </button>

            <div className="bg-white rounded-lg border border-blue-100 p-8">
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">👨‍⚕️</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{selectedDoctor.name}</p>
                    <p className="text-blue-600 font-medium">{selectedDoctor.specialty}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Select Time</label>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedDoctor.availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-4 rounded-lg font-medium transition ${
                          selectedTime === slot
                            ? "bg-blue-600 text-white border border-blue-600"
                            : "bg-white border border-gray-300 text-gray-700 hover:border-blue-300"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Reason for Visit</label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="e.g., Regular checkup, Fever, Pain, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={4}
                  ></textarea>
                </div>

                <button
                  onClick={handleBookAppointment}
                  disabled={!selectedDate || !selectedTime || !reason}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
