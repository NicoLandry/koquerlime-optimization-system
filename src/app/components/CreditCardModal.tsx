'use client';

import { useState, FormEvent } from 'react';

interface CreditCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreditCardModal({ isOpen, onClose }: CreditCardModalProps) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (field === 'cvv') {
      formattedValue = value.replace(/[^0-9]/g, '').substring(0, 4);
    }
    
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would normally process the payment
    alert('🎯 ENROLLMENT CONFIRMED! Welcome to Level I: Recognition. Your transformation journey begins immediately. You will receive your personalized optimization protocols within 24 hours. Prepare to unlock capabilities you never knew you possessed. The future belongs to the optimized.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideIn border border-yellow-400">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black p-10 text-center rounded-t-2xl">
          <h2 className="text-4xl font-serif font-bold mb-3">⚡ TRANSFORMATION ENROLLMENT ⚡</h2>
          <p className="text-xl font-serif">Secure your position in the Koquerlime methodology</p>
        </div>

        {/* Body */}
        <div className="p-10">
          {/* Enrollment Info */}
          <div className="text-center mb-10 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border-2 border-yellow-400">
            <h3 className="text-3xl font-serif text-yellow-400 mb-3">LEVEL I: RECOGNITION PROGRAM</h3>
            <div className="text-5xl font-bold text-yellow-400 mb-3">$997/month</div>
            <p className="text-gray-300 text-lg font-serif leading-relaxed">
              Complete transformation methodology including personal optimization protocols, advanced mental training, and direct access to certified Koquerlime instructors
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="cardNumber" className="block text-gray-300 font-bold mb-3 font-serif text-lg">
                Payment Authorization Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full p-5 border-2 border-gray-600 bg-gray-800 text-white rounded-xl text-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-200 outline-none font-serif"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-300 font-bold mb-3 font-serif text-lg">
                  Expiration
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full p-5 border-2 border-gray-600 bg-gray-800 text-white rounded-xl text-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-200 outline-none font-serif"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-300 font-bold mb-3 font-serif text-lg">
                  Security Code
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  placeholder="123"
                  maxLength={4}
                  className="w-full p-5 border-2 border-gray-600 bg-gray-800 text-white rounded-xl text-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-200 outline-none font-serif"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="cardName" className="block text-gray-300 font-bold mb-3 font-serif text-lg">
                Authorized Name
              </label>
              <input
                type="text"
                id="cardName"
                value={formData.cardName}
                onChange={(e) => handleInputChange('cardName', e.target.value)}
                placeholder="Your Full Name"
                className="w-full p-5 border-2 border-gray-600 bg-gray-800 text-white rounded-xl text-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-200 outline-none font-serif"
                required
              />
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-2xl font-serif text-yellow-400 mb-6 text-center font-bold">TRANSFORMATION GUARANTEES:</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "⚡ Immediate access to Level I protocols",
                  "🧠 Advanced mental optimization training",
                  "📊 Personal efficiency assessment and tracking",
                  "🎯 Direct instructor consultation sessions",
                  "💼 Professional optimization certification",
                  "🔬 Access to proprietary research and methodologies",
                  "🏆 Elite community membership privileges",
                  "📈 Guaranteed measurable results within 30 days"
                ].map((benefit, index) => (
                  <div key={index} className="text-gray-300 flex items-start font-serif">
                    <span className="mr-3 text-xl text-yellow-400">{benefit.split(' ')[0]}</span>
                    <span className="leading-relaxed">{benefit.substring(benefit.indexOf(' ') + 1)}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 italic font-serif text-center border-t border-gray-600 pt-4">
                *Results backed by documented case studies and performance metrics. Transformation methodology developed through years of research and testing with elite performers across multiple industries.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-6 px-8 text-2xl font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group font-serif"
            >
              <span className="relative z-10">⚡ SECURE MY TRANSFORMATION ⚡</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "🔒 Military-Grade Encryption",
              "🛡️ Certified Secure Processing",
              "✅ Koquerlime Verified Transaction"
            ].map((badge, index) => (
              <span key={index} className="bg-gray-800 text-yellow-400 px-5 py-3 rounded-full text-sm font-bold font-serif border border-yellow-400/30">
                {badge}
              </span>
            ))}
          </div>

          {/* Success Testimonial */}
          <div className="mt-10 p-8 bg-gradient-to-r from-blue-900/30 to-gray-800/50 rounded-2xl border-2 border-blue-400/30">
            <p className="text-center text-gray-300 font-serif text-lg leading-relaxed mb-4">
              &quot;Within 48 hours of starting Level I, I experienced a complete transformation in my mental clarity and decision-making capabilities. The Koquerlime methodology isn&apos;t just theory - it&apos;s a practical system that delivers measurable results. I now operate at a level of efficiency I never thought possible.&quot;
            </p>
            <p className="text-center text-sm text-blue-400 font-serif font-bold">
              - Marcus Chen, Level IV Master, Fortune 500 Executive
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800/50 transition-colors duration-200"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
} 