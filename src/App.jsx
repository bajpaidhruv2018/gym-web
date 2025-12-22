import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity, Dumbbell, Timer } from 'lucide-react';
import bgImage from './assets/theme-bg.jpg';

const exercises = [
    { id: 1, title: 'Push Ups', duration: '15 mins', calories: '120 kcal', level: 'Beginner' },
    { id: 2, title: 'Bench Press', duration: '30 mins', calories: '250 kcal', level: 'Intermediate' },
    { id: 3, title: 'Squats', duration: '20 mins', calories: '180 kcal', level: 'Advanced' },
    { id: 4, title: 'Deadlifts', duration: '25 mins', calories: '300 kcal', level: 'Expert' },
    { id: 5, title: 'Pull Ups', duration: '15 mins', calories: '100 kcal', level: 'Intermediate' },
    { id: 6, title: 'Plank', duration: '10 mins', calories: '50 kcal', level: 'Beginner' },
];

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="min-h-screen text-white font-sans selection:bg-volt selection:text-black overflow-x-hidden relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-charcoal/80 z-0 pointer-events-none" />
            <div className="relative z-10">


                {/* Navbar with Glassmorphism */}
                <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                    <div className="container mx-auto px-6 flex justify-between items-center">
                        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-volt flex items-center justify-center">
                                <Activity className="w-5 h-5 text-black" />
                            </div>
                            <span>IRON<span className="text-volt">PULSE</span></span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {['Home', 'Workouts', 'Diet', 'Community'].map((item) => (
                                <a key={item} href="#" className="text-sm font-medium text-text-light hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-md border border-white/5">
                                Sign In
                            </button>
                            <button className="bg-volt hover:scale-105 text-black px-6 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                                Join Now
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">

                    {/* Abstract Background Glows */}
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-volt/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-volt text-xs font-bold tracking-widest uppercase mb-4">
                            Premium Fitness Experience
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                            FORGE YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt to-cyber">ULTIMATE BODY</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
                            Experience the future of fitness with AI-driven workouts, real-time analytics, and a community of elite athletes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <button className="group relative bg-volt text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center gap-2">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm">
                                View Pricing
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Section (Glassmorphism) */}
                <section className="px-6 pb-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Active Users', value: '50K+' },
                            { label: 'Workouts', value: '1M+' },
                            { label: 'Trainers', value: '100+' },
                            { label: 'Rating', value: '4.9/5' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-surface/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 text-center hover:bg-surface/80 transition-colors">
                                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-sm text-text-light uppercase tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Exercises */}
                <section className="py-20 px-6 bg-surface/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Workouts</h2>
                                <p className="text-text-light max-w-lg">Curated high-intensity sessions designed to push your limits.</p>
                            </div>
                            <a href="#" className="hidden md:flex items-center gap-2 text-volt font-semibold hover:text-white transition-colors">
                                View All <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {exercises.map((ex) => (
                                <div key={ex.id} className="group bg-surface rounded-3xl p-1 border border-white/5 hover:border-volt/50 transition-all duration-300 hover:-translate-y-1">
                                    <div className="bg-charcoal rounded-[20px] p-6 h-full flex flex-col relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Dumbbell className="w-24 h-24 text-white" />
                                        </div>

                                        <div className="mb-8 flex justify-between items-start">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider
                      ${ex.level === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                                                    ex.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                                                        'bg-red-500/10 text-red-400'}`}>
                                                {ex.level}
                                            </span>
                                            <button className="text-text-light hover:text-volt transition-colors">
                                                <Timer className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-volt transition-colors">{ex.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-text-light mt-auto">
                                            <span>{ex.duration}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                            <span>{ex.calories}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center md:hidden">
                            <a href="#" className="inline-flex items-center gap-2 text-volt font-semibold hover:text-white transition-colors">
                                View All <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-white/5 bg-black/50">
                    <div className="container mx-auto px-6 text-center text-text-light">
                        <p>&copy; 2024 IronPulse. Designed for elite aesthetics.</p>
                    </div>
                </footer>

            </div>
        </div>
    );
}

export default App;
