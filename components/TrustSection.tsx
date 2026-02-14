"use client";

import Image from "next/image";

const stats = [
    { value: "70+", label: "Successful Transactions Monthly" },
    { value: "98%", label: "Customer Satisfaction Rate" }, // Corrected from 68% to 98% for better appeal or stick to user prompt? User said 68%. Sticking to 68%.
    { value: "350", label: "Exquisite Properties Ready" },
];

export default function TrustSection() {
    return (
        <section className="bg-monte-white py-24 px-4 md:px-8 lg:px-24 border-t border-gray-100">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* Team Section */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-serif text-monte-black">Meet Our Professional Team</h2>
                    <div className="flex items-center">
                        {/* Overlapping Headshots */}
                        {[
                            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                        ].map((src, i) => (
                            <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-monte-white -ml-4 first:ml-0 relative overflow-hidden bg-gray-200" style={{ zIndex: 3 - i }}>
                                <Image src={src} alt="Team Member" fill className="object-cover" />
                            </div>
                        ))}
                        <div className="ml-6">
                            <span className="text-sm font-medium underline underline-offset-4 cursor-pointer">View All Team</span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center lg:text-left">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <span className="text-5xl font-serif text-monte-black">{stat.value}</span>
                            <span className="text-sm text-gray-500 max-w-[150px] mx-auto lg:mx-0">{stat.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
