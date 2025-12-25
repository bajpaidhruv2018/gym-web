import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity, Dumbbell, Timer, Flame, Users, Trophy, Brain, Target, Zap, ChevronRight, Lock, Mail } from 'lucide-react';


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
    const [signInOpen, setSignInOpen] = useState(false);
    const [joinOpen, setJoinOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        // Unicorn Studio Script
        if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: false };
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
            script.onload = () => {
                if (window.UnicornStudio && window.UnicornStudio.init) {
                    window.UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                }
            };
            document.body.appendChild(script);
        } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-white font-sans selection:bg-volt selection:text-black overflow-x-hidden relative">
            <div
                data-us-project="P62j6bBGPhoGxnjklkNv"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
            />
            <div className="absolute inset-0 bg-charcoal/80 z-0 pointer-events-none fixed" />
            <div className="relative z-10">


                {/* Navbar with Glassmorphism */}
                <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
                    <nav className={`
                        relative flex items-center justify-between px-2 py-2 rounded-full transition-all duration-300
                        ${scrolled
                            ? 'w-[90%] md:w-[80%] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(204,255,0,0.1)]'
                            : 'w-[95%] md:w-[85%] bg-transparent border border-transparent'}
                    `}>
                        {/* Logo */}
                        <div className="pl-4 flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full bg-volt flex items-center justify-center shadow-[0_0_10px_rgba(204,255,0,0.5)]`}>
                                <Activity className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-white">IRON<span className="text-volt">PULSE</span></span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1 bg-black/20 rounded-full px-2 py-1 backdrop-blur-md border border-white/5">
                            {['Home', 'Workouts', 'Diet', 'Community'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                    onClick={(e) => {
                                        if (item === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="relative px-4 py-2 text-sm font-medium text-text-light hover:text-white transition-colors group"
                                >
                                    {item}
                                    <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-volt -translate-x-1/2 transition-all duration-300 group-hover:w-1/2 shadow-[0_0_8px_#ccff00]"></span>
                                </a>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="hidden md:flex items-center gap-3 pr-2">
                            <button onClick={() => setSignInOpen(true)} className="text-white/80 hover:text-white px-4 py-2 text-sm font-semibold transition-all hover:bg-white/5 rounded-full border border-transparent hover:border-white/10">
                                Sign In
                            </button>
                            <button onClick={() => setJoinOpen(true)} className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-white/10">
                                Join Now
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden text-white p-2 rounded-full hover:bg-white/10 mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </nav>

                    {/* Mobile Menu Dropdown */}
                    <div className={`
                        absolute top-full mt-2 w-[90%] bg-charcoal/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 origin-top
                        ${mobileMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible h-0'}
                    `}>
                        <div className="flex flex-col p-6 gap-4 items-center">
                            {['Home', 'Workouts', 'Diet', 'Community'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/80 hover:text-volt transition-colors">
                                    {item}
                                </a>
                            ))}
                            <div className="w-full h-px bg-white/10 my-2"></div>
                            <button onClick={() => { setSignInOpen(true); setMobileMenuOpen(false); }} className="w-full text-white py-3 rounded-lg hover:bg-white/5 font-semibold">
                                Sign In
                            </button>
                            <button onClick={() => { setJoinOpen(true); setMobileMenuOpen(false); }} className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-lg font-bold shadow-lg">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>

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
                            <span className="text-white">ULTIMATE BODY</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
                            Experience the future of fitness with AI-driven workouts, real-time analytics, and a community of elite athletes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <a href="#pricing" className="group relative bg-volt text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center gap-2">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#pricing" className="px-8 py-4 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm">
                                View Pricing
                            </a>
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

                {/* Workouts Section */}
                <section id="workouts" className="py-20 px-6">
                    <div className="container mx-auto max-w-7xl">
                        {/* Smart Workouts Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Smart Workouts</h2>
                            <p className="text-text-light max-w-2xl mx-auto">AI-curated training paths designed to maximize your potential.</p>
                        </div>

                        {/* Smart Workout Categories */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: 'Strength Training', icon: Dumbbell, desc: 'Build raw power with compound lifts.', color: 'text-volt' },
                                { title: 'Fat Loss', icon: Flame, desc: 'High-intensity intervals to burn calories.', color: 'text-orange-500' },
                                { title: 'Muscle Building', icon: Trophy, desc: 'Hypertrophy focused splits for mass.', color: 'text-blue-500' }
                            ].map((plan, i) => (
                                <div key={i} className="group relative bg-surface/50 border border-white/5 rounded-2xl p-8 hover:bg-surface/80 transition-all hover:-translate-y-2">
                                    <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 ${plan.color}`}>
                                        <plan.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                    <p className="text-text-light mb-6">{plan.desc}</p>
                                    <button className="text-sm font-bold text-white group-hover:text-volt transition-colors flex items-center gap-2">
                                        View Plan <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Trending Workouts (Existing) */}
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Trending Sessions</h3>
                                <p className="text-text-light">Community favorites this week.</p>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-volt font-semibold hover:text-white transition-colors">
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
                    </div>
                </section>

                {/* Diet Section */}
                <section id="diet" className="py-20 px-6 bg-surface/30">
                    <div className="container mx-auto max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Fuel Your Performance</h2>
                                <p className="text-text-light max-w-lg">Nutrition plans adapted to your metabolic rate and goals.</p>
                            </div>
                            <span className="text-sm text-text-light/50">*Personalized features coming soon</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Vegetarian Muscle', icon: Activity, desc: 'Plant-based gains without compromise.' },
                                { title: 'High-Protein Plans', icon: Zap, desc: 'Optimized macros for maximum recovery.' },
                                { title: 'AI Meal Suggestions', icon: Brain, desc: 'Daily recipes based on your fridge.' }
                            ].map((plan, i) => (
                                <div key={i} className="bg-charcoal/50 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                                    <plan.icon className="w-8 h-8 text-volt mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                                    <p className="text-sm text-text-light">{plan.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Section */}
                <section id="community" className="py-20 px-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-transparent pointer-events-none" />
                    <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Train Together.<br />Win Together.</h2>
                            <p className="text-text-light text-lg max-w-xl">Join a global community of elite athletes. Participate in challenges, climb leaderboards, and get coached by the best.</p>
                            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                                <div><h4 className="text-3xl font-bold text-white">12k+</h4><p className="text-sm text-text-light">Members</p></div>
                                <div><h4 className="text-3xl font-bold text-white">300+</h4><p className="text-sm text-text-light">Trainers</p></div>
                                <div><h4 className="text-3xl font-bold text-volt">95%</h4><p className="text-sm text-text-light">Success Rate</p></div>
                            </div>
                            <button className="bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2 border border-white/5">
                                Join Community <Users className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="bg-gradient-to-br from-charcoal to-black p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                                <div className="absolute -top-4 -right-4 bg-volt w-40 h-40 rounded-full blur-[80px] opacity-10" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <Trophy className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">Weekly Leaderboard</h4>
                                            <p className="text-xs text-text-light">Top performers this week</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {['Sarah J.', 'Mike T.', 'Alex R.'].map((name, i) => (
                                            <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                                                <div className="flex items-center gap-3">
                                                    <span className={`font-bold w-6 text-center ${i === 0 ? 'text-yellow-400' : 'text-white/50'}`}>{i + 1}</span>
                                                    <span className="font-medium">{name}</span>
                                                </div>
                                                <span className="text-volt font-mono">{2450 - (i * 150)} pts</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 px-6 bg-black/40">
                    <div className="container mx-auto max-w-5xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
                        <p className="text-text-light mb-16">No hidden fees. Cancel anytime.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Free Tier */}
                            <div className="bg-surface/30 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                                <div className="text-4xl font-bold text-white mb-6">$0 <span className="text-lg text-text-light font-normal">/month</span></div>
                                <ul className="space-y-4 mb-8">
                                    {['Access to 50+ workouts', 'Basic progress tracking', 'Community support'].map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-text-light">
                                            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"><ChevronRight className="w-3 h-3" /></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">Start Free</button>
                            </div>

                            {/* Pro Tier */}
                            <div className="relative bg-gradient-to-b from-charcoal to-black p-1 rounded-3xl">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-volt text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
                                <div className="bg-surface p-8 rounded-[22px] h-full text-left relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-volt/10 rounded-full blur-[40px] pointer-events-none"></div>
                                    <h3 className="text-xl font-bold text-white mb-2">Pro Athlete</h3>
                                    <div className="text-4xl font-bold text-white mb-6">$29 <span className="text-lg text-text-light font-normal">/month</span></div>
                                    <ul className="space-y-4 mb-8">
                                        {['Unlimited AI workouts', 'Advanced analytics & insights', 'Personalized meal plans', 'Priority coach support'].map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-white">
                                                <div className="w-5 h-5 rounded-full bg-volt flex items-center justify-center"><ChevronRight className="w-3 h-3 text-black" /></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={() => setJoinOpen(true)} className="w-full py-3 rounded-full bg-volt text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.3)]">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-white/5 bg-black/50">
                    <div className="container mx-auto px-6 text-center text-text-light">
                        <p>&copy; 2024 IronPulse. Designed for elite aesthetics.</p>
                    </div>
                </footer>

                {/* Sign In Modal */}
                {signInOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSignInOpen(false)} />
                        <div className="relative bg-charcoal border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <button onClick={() => setSignInOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                            <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-text-light mb-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-volt transition-colors" placeholder="athlete@ironpulse.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-light mb-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
                                        <input type="password" className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-volt transition-colors" placeholder="••••••••" />
                                    </div>
                                </div>
                                <button className="w-full bg-volt text-black font-bold py-3 rounded-lg hover:bg-volt/90 transition-colors shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                                    Sign In
                                </button>
                                <p className="text-center text-sm text-text-light">Demo Mode: Authentication coming soon.</p>
                            </form>
                        </div>
                    </div>
                )}

                {/* Join Now Modal */}
                {joinOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setJoinOpen(false)} />
                        <div className="relative bg-charcoal border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                            <button onClick={() => setJoinOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                            <div className="text-center mb-8">
                                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 mb-4 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                    <Activity className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold">Join IronPulse</h2>
                                <p className="text-text-light mt-2">Start your premium fitness journey today.</p>
                            </div>
                            <div className="space-y-4 mb-8">
                                {[
                                    'AI-driven personalized workouts',
                                    'Smart nutrition & diet planning',
                                    'Elite community access',
                                    'Real-time performance tracking'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-volt/10 flex items-center justify-center">
                                            <ChevronRight className="w-4 h-4 text-volt" />
                                        </div>
                                        <span className="text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold py-3 rounded-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                                Get Started
                            </button>
                            <p className="text-center text-xs text-text-light mt-4">No credit card required for demo.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
