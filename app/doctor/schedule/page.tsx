"use client"

import { Header } from "@/components/header"
import { mockDoctors } from "@/lib/mock-data"
import { Clock, Plus, Edit2, Trash2 } from "lucide-react"
import { useState } from "react"

export default function DoctorSchedule() {
  const doctor = mockDoctors[0]
  const [isAddingSlot, setIsAddingSlot] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header userRole="doctor" userName={doctor.name} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Schedule</h1>
          <p className="text-gray-600 text-lg">Manage your available appointment slots</p>
        </div>

        <div className="bg-white rounded-lg border border-blue-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Available Slots</h2>
            <button
              onClick={() => setIsAddingSlot(!isAddingSlot)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              <Plus className="w-5 h-5" />
              Add Slot
            </button>
          </div>

          {isAddingSlot && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="time"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  Add
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {doctor.availableSlots.map((slot) => (
              <div
                key={slot}
                className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900">{slot}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 p-2 hover:bg-blue-100 rounded transition text-blue-600">
                    <Edit2 className="w-4 h-4 mx-auto" />
                  </button>
                  <button className="flex-1 p-2 hover:bg-red-100 rounded transition text-red-600">
                    <Trash2 className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-green-100 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Schedule</h2>
          <div className="space-y-3">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
              <div
                key={day}
                className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <span className="font-semibold text-gray-900">{day}</span>
                <span className="text-gray-600">9:00 AM - 5:00 PM</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
