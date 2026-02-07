import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EstherAllure() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "" });

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Esther Allure</h1>
            <p className="text-lg mb-6">Professional beauty services by a certified beautician. On‑call services available.</p>
            <Button className="rounded-2xl">Book an Appointment</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-neutral-300 rounded-2xl" />
            <div className="h-40 bg-neutral-300 rounded-2xl" />
            <div className="h-40 bg-neutral-300 rounded-2xl" />
            <div className="h-40 bg-neutral-300 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Esther</h2>
          <p className="text-neutral-700 leading-relaxed">
            Esther is a certified beautician dedicated to enhancing natural beauty with precision and care.
            With professional training and years of experience, Esther Allure delivers high‑quality salon and
            on‑call beauty services tailored to each client.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Hair Styling", "Makeup", "On‑Call Beauty Services"].map((s) => (
              <Card key={s} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{s}</h3>
                  <p className="text-neutral-600">Professional service customized to your needs.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 px-6 bg-neutral-100">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2">Book an Appointment</h2>
          <p className="text-sm text-neutral-600 mb-6">Available Saturdays & Sundays, 1:00 PM – 8:00 PM (CST)</p>
          <div className="grid gap-4">
            <input placeholder="Full Name" className="p-3 rounded-xl border" onChange={(e)=>setForm({...form,name:e.target.value})} />
            <input placeholder="Phone Number" className="p-3 rounded-xl border" onChange={(e)=>setForm({...form,phone:e.target.value})} />
            <select className="p-3 rounded-xl border" onChange={(e)=>setForm({...form,service:e.target.value})}>
              <option>Select Service</option>
              <option>Hair Styling</option>
              <option>Makeup</option>
              <option>On‑Call Service</option>
            </select>
            <input type="date" className="p-3 rounded-xl border" onChange={(e)=>setForm({...form,date:e.target.value})} />
            <input type="time" className="p-3 rounded-xl border" onChange={(e)=>setForm({...form,time:e.target.value})} />
            <Button className="rounded-2xl">Request Appointment</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-neutral-900 text-neutral-300 text-center">
        <p>© {new Date().getFullYear()} Esther Allure. All rights reserved.</p>
      </footer>
    </div>
  );
}
