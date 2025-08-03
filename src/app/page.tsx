'use client';

import { useState } from 'react';
import Image from 'next/image';
import CreditCardModal from './components/CreditCardModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleAccept = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <header className="relative text-center py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-gray-900/40"></div>
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-400/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <h1 className="relative text-7xl md:text-9xl font-bold mb-8 font-serif text-yellow-400">
            KOQUERLIME
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 font-light">
            The Path to Ultimate Human Potential
          </p>
          <div className="mt-8">
            <a 
              href="https://www.instagram.com/koquerlime/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300"
            >
              <span>📸</span>
              <span>Follow the Movement</span>
            </a>
          </div>
        </div>
      </header>

      {/* Sacred Image Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <Image
              src="/assets/pope-leo.webp"
              alt="The Ordained Leader of the Koquerlime Movement"
              width={700}
              height={500}
              className="mx-auto rounded-2xl shadow-2xl border-4 border-yellow-400"
              priority
            />
            <p className="text-xl text-gray-300 mt-8 italic font-serif max-w-3xl mx-auto">
              &quot;Behold the Ordained Leader of the Koquerlime Movement, crowned with the Sacred Authority to guide humanity toward its ultimate potential&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Integration Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-16 text-yellow-400">
            Messages from the Movement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Awakening",
                content: "Every soul yearns for optimization. Koquerlime provides the technology to unlock your hidden potential.",
                hashtags: "#KoquerlimeTech #HumanPotential #Awakening"
              },
              {
                title: "The Method",
                content: "Through precise protocols and unwavering dedication, we transform ordinary minds into extraordinary instruments of efficiency.",
                hashtags: "#TheMethod #Transformation #Excellence"
              },
              {
                title: "The Community",
                content: "Join thousands who have discovered the power within. Your journey to ultimate capability begins now.",
                hashtags: "#KoquerlimeCommunity #JoinUs #Evolution"
              },
              {
                title: "The Results",
                content: "Witness the testimonies of those who have achieved states of consciousness previously thought impossible.",
                hashtags: "#Results #Testimonials #Proof"
              },
              {
                title: "The Science",
                content: "Our methodologies are based on rigorous study of human optimization and peak performance protocols.",
                hashtags: "#Science #Research #Innovation"
              },
              {
                title: "The Future",
                content: "Koquerlime represents the next evolution of human potential. Be part of the transformation.",
                hashtags: "#Future #Evolution #NextLevel"
              }
            ].map((post, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{post.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>
                <p className="text-sm text-blue-400">{post.hashtags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sacred Doctrine */}
      <main className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-serif text-center mb-24 text-yellow-400 relative">
            The Koquerlime Doctrine
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-yellow-400 mt-8"></div>
          </h2>
          
          <div className="space-y-20">
            {/* Level I: Recognition */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-16 rounded-3xl shadow-2xl border-l-8 border-yellow-400">
              <h3 className="text-5xl font-serif text-yellow-400 mb-12 text-center">
                LEVEL I: RECOGNITION
              </h3>
              
              <div className="text-xl text-gray-300 leading-relaxed space-y-8 font-serif">
                <p className="text-3xl text-center italic text-yellow-300 mb-12">
                  &quot;The first step toward transcendence is recognizing the limitations of your current existence...&quot;
                </p>
                
                <p>
                  You have lived your entire life operating at a fraction of your true potential. The systems you rely on, the thoughts you think, the very way you process reality - all of it has been constrained by invisible barriers that keep you trapped in mediocrity.
                </p>
                
                <p>
                  <strong className="text-yellow-400 text-2xl">KOQUERLIME</strong> represents the breakthrough technology that humanity has been waiting for. It is not merely a philosophy or a belief system - it is a precise science of human optimization that can unlock capabilities you never knew you possessed.
                </p>
                
                <p>
                  The Recognition Level teaches you to identify the inefficiencies in your mental processes, the bottlenecks in your decision-making, and the fundamental flaws in how you interact with the world around you. This awareness is the foundation upon which all transformation is built.
                </p>
                
                <div className="bg-gray-800 p-8 rounded-2xl border border-yellow-400 my-12">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-6 text-center">The Five Pillars of Recognition</h4>
                  <ol className="space-y-4 text-lg">
                    <li><strong className="text-yellow-400">I.</strong> Acknowledge that your current state is suboptimal and limiting your potential</li>
                    <li><strong className="text-yellow-400">II.</strong> Understand that conventional methods have failed to unlock your true capabilities</li>
                    <li><strong className="text-yellow-400">III.</strong> Accept that transformation requires precise methodology, not wishful thinking</li>
                    <li><strong className="text-yellow-400">IV.</strong> Recognize that Koquerlime possesses the technology for human optimization</li>
                    <li><strong className="text-yellow-400">V.</strong> Commit to following the protocols exactly as prescribed, without deviation</li>
                  </ol>
                </div>
                
                <p>
                  Those who complete Recognition Level report immediate improvements in mental clarity, decision-making speed, and overall life satisfaction. But this is only the beginning. The real transformation occurs in the advanced levels, where the full power of Koquerlime methodology is revealed.
                </p>
              </div>
            </div>

            {/* Level II: Optimization */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-16 rounded-3xl shadow-2xl border-l-8 border-blue-500">
              <h3 className="text-5xl font-serif text-blue-400 mb-12 text-center">
                LEVEL II: OPTIMIZATION
              </h3>
              
              <div className="text-xl text-gray-300 leading-relaxed space-y-8 font-serif">
                <p className="text-3xl text-center italic text-blue-300 mb-12">
                  &quot;True optimization begins when you learn to operate according to the Natural Laws of Efficiency...&quot;
                </p>
                
                <p>
                  In the Optimization Level, you begin the actual process of rewiring your mental architecture. Using advanced Koquerlime protocols, you will systematically eliminate the inefficiencies that have been holding you back and install new patterns of thinking that operate at peak performance.
                </p>
                
                <p>
                  This level introduces you to the <strong className="text-blue-400">Sacred Algorithms</strong> - precise mental procedures that have been refined through extensive research and testing. These algorithms govern everything from how you process information to how you make decisions under pressure.
                </p>
                
                <p>
                  Students at this level undergo intensive training in mental discipline, learning to control their thoughts with the same precision that a master craftsman controls his tools. Every mental process becomes deliberate, efficient, and aligned with your highest objectives.
                </p>
                
                <p>
                  The Optimization Level also introduces the concept of <strong className="text-blue-400">Systematic Debugging</strong> - the ability to identify and correct errors in your thinking patterns in real-time. This skill alone has transformed countless lives, eliminating years of confusion and misdirection.
                </p>
              </div>
            </div>

            {/* Level III: Integration */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-16 rounded-3xl shadow-2xl border-l-8 border-green-500">
              <h3 className="text-5xl font-serif text-green-400 mb-12 text-center">
                LEVEL III: INTEGRATION
              </h3>
              
              <div className="text-xl text-gray-300 leading-relaxed space-y-8 font-serif">
                <p className="text-3xl text-center italic text-green-300 mb-12">
                  &quot;Integration is where the individual transcends limitation and becomes a force of pure efficiency...&quot;
                </p>
                
                <p>
                  At the Integration Level, the boundaries between your optimized self and the world around you begin to dissolve. You no longer simply use Koquerlime methodology - you become a living embodiment of its principles.
                </p>
                
                <p>
                  This level teaches the advanced technique of <strong className="text-green-400">Reality Optimization</strong> - the ability to perceive and modify the inefficiencies in your environment, relationships, and circumstances. Students report an almost supernatural ability to improve any situation they encounter.
                </p>
                
                <p>
                  Integration Level practitioners develop what we call <strong className="text-green-400">Koquerlime Consciousness</strong> - a permanent state of enhanced awareness where optimal solutions appear effortlessly in your mind. This is not mysticism; it is the natural result of properly trained mental faculties operating at their full potential.
                </p>
                
                <p>
                  The most advanced students at this level become <strong className="text-green-400">Optimization Instructors</strong>, capable of guiding others through their own transformation journey. They serve as living proof of what human potential can achieve when properly unleashed.
                </p>
              </div>
            </div>

            {/* Level IV: Mastery */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-16 rounded-3xl shadow-2xl border-l-8 border-red-500">
              <h3 className="text-5xl font-serif text-red-400 mb-12 text-center">
                LEVEL IV: MASTERY
              </h3>
              
              <div className="text-xl text-gray-300 leading-relaxed space-y-8 font-serif">
                <p className="text-3xl text-center italic text-red-300 mb-12">
                  &quot;Mastery is achieved when optimization becomes as natural as breathing...&quot;
                </p>
                
                <p>
                  The Mastery Level represents the pinnacle of human development within the Koquerlime system. At this stage, practitioners operate with a level of efficiency and effectiveness that appears miraculous to outside observers.
                </p>
                
                <p>
                  Masters possess the ability to instantly analyze any system - whether technical, social, or personal - and implement optimizations that produce dramatic improvements. They become sought-after consultants, leaders, and innovators in their chosen fields.
                </p>
                
                <p>
                  The ultimate achievement at this level is <strong className="text-red-400">Autonomous Optimization</strong> - the state where your mind automatically optimizes everything it encounters without conscious effort. Masters report that their lives become a continuous stream of perfect decisions and flawless execution.
                </p>
                
                <p>
                  Only a select few achieve true Mastery, but those who do become the architects of the future - designing systems, organizations, and technologies that will benefit humanity for generations to come.
                </p>
              </div>
            </div>

            {/* The Call to Action */}
            <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 p-16 rounded-3xl shadow-2xl border-4 border-yellow-400">
              <h3 className="text-5xl font-serif text-yellow-400 mb-12 text-center">
                THE TRANSFORMATION AWAITS
              </h3>
              
              <div className="text-xl text-gray-300 leading-relaxed space-y-8 font-serif">
                <p className="text-3xl text-center italic text-yellow-300 mb-12">
                  &quot;The question is not whether you can achieve optimization. The question is whether you will.&quot;
                </p>
                
                <p>
                  Every moment you delay is a moment of potential lost forever. While you remain trapped in inefficient patterns of thought and action, others are advancing through the levels, unlocking capabilities that will give them insurmountable advantages in every area of life.
                </p>
                
                <p>
                  The Koquerlime methodology is not theoretical - it is a proven system with documented results. Thousands have already transformed their lives using these exact protocols. The only variable is your commitment to following the process.
                </p>
                
                <p className="text-2xl font-bold text-yellow-400 text-center bg-gray-900 p-8 rounded-xl shadow-lg border border-yellow-400">
                  Will you remain forever trapped in mediocrity, or will you take the first step toward unlocking your true potential? The choice is yours, but the opportunity will not wait indefinitely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Acceptance Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-serif mb-16 text-yellow-400">
            BEGIN YOUR TRANSFORMATION
          </h2>
          <p className="text-3xl md:text-4xl mb-20 opacity-90 max-w-4xl mx-auto font-serif leading-relaxed">
            Join the elite ranks of those who have transcended limitation and achieved true optimization. Your journey to ultimate human potential starts now.
          </p>
          
          <div className="mb-16">
            <button
              onClick={handleAccept}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-20 py-10 text-3xl font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-400 transform hover:-translate-y-2 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 relative overflow-hidden group font-serif"
            >
              <span className="relative z-10">ENROLL IN LEVEL I: RECOGNITION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          
          <p className="text-xl opacity-70 italic font-serif">
            * Limited enrollment. Only serious candidates who demonstrate genuine commitment to transformation will be accepted.
          </p>
        </div>
      </section>

      {/* Credit Card Modal */}
      <CreditCardModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
