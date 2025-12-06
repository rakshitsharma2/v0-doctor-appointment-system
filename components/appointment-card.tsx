"use client"

import { Calendar, Clock, FileText } from "lucide-react"
import type { Appointment, Doctor } from "@/lib/types"

interface AppointmentCardProps {
  appointment: Appointment
  doctor?: Doctor
  isPast?: boolean
}

export function AppointmentCard({ appointment, doctor, isPast }: AppointmentCardProps) {
  const statusColors = {
    scheduled: "bg-blue-50 text-blue-700 border-blue-200",
    completed: "bg-green-50 text-green-700 border-green-200",
    cancelled: "bg-red-50 text-red-700 border-red-200",
    "no-show": "bg-gray-50 text-gray-700 border-gray-200",
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="bg-white rounded-lg border border-blue-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{doctor?.name || "Dr. Name"}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[appointment.status]}`}>
              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
            </span>
          </div>
          <p className="text-blue-600 text-sm font-medium">{doctor?.specialty || "Specialty"}</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 text-gray-700">
          <Calendar className="w-5 h-5 text-blue-500" />
          <span className="font-medium">{formatDate(appointment.dateTime)}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Clock className="w-5 h-5 text-blue-500" />
          <span className="font-medium">
            {formatTime(appointment.dateTime)} • {appointment.duration} mins
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <FileText className="w-5 h-5 text-blue-500" />
          <span className="font-medium">{appointment.reason}</span>
        </div>
      </div>

      {appointment.notes && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-gray-700">
          <p className="font-medium text-gray-900 mb-1">Notes:</p>
          <p>{appointment.notes}</p>
        </div>
      )}

      {!isPast && appointment.status === "scheduled" && (
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
            Reschedule
          </button>
          <button className="flex-1 border border-red-300 text-red-600 hover:bg-red-50 font-medium py-2 px-4 rounded-lg transition">
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
