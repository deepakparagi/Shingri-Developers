"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MoveRight } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;

        const whatsappMessage = `*New High-Valued Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/918762891055?text=${whatsappMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <main className="bg-monte-white min-h-screen">
            <Header />

            <section className="pt-32 md:pt-48 pb-12 px-4 md:px-8 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                    <h1 className="text-6xl font-serif text-monte-black mb-8">Get in Touch</h1>
                    <p className="text-lg text-gray-600 mb-12 max-w-md">
                        Interested in our properties? Contact our sales team for a private consultation or visit our headquarters.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Office Address</h3>
                            <p className="text-xl font-serif text-monte-black">SHINGRI Developers</p>
                            <p className="text-lg text-monte-black">Tarnal Pete, Subhas Road,</p>
                            <p className="text-lg text-monte-black">Betageri-Gadag, 582102</p>
                            <p className="text-lg text-gray-500">Karnataka, India</p>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Phone</h3>
                            <a href="tel:+918762891055" className="text-lg text-monte-black hover:text-gray-600 transition-colors">+91 87628 91055</a>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Email</h3>
                            <a href="mailto:adityashingri7@gmail.com" className="text-lg text-monte-black hover:text-gray-600 transition-colors">adityashingri7@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 md:p-12 shadow-2xl shadow-gray-200">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-monte-black transition-colors bg-transparent text-monte-black placeholder:text-gray-400"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-monte-black transition-colors bg-transparent text-monte-black placeholder:text-gray-400"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-monte-black transition-colors bg-transparent text-monte-black placeholder:text-gray-400"
                                placeholder="+91"
                            />
                        </div>
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-monte-black transition-colors bg-transparent h-32 resize-none text-monte-black placeholder:text-gray-400"
                                placeholder="I am interested in..."
                            />
                        </div>
                        <button type="submit" className="bg-monte-black text-white py-4 px-8 flex items-center justify-between group mt-4 hover:bg-black/90 transition-colors">
                            <span>Send Message via WhatsApp</span>
                            <MoveRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://maps.google.com/maps?q=Tarnal%20Pete%2C%20Subhas%20Road%2C%20Betageri-Gadag%20582102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <Footer />
        </main>
    );
}
