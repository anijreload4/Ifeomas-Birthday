import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PinEntry() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin })
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/garden';
      } else {
        setError(data.message || 'Invalid PIN');
      }
    } catch (error) {
      setError('Server error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-8 rounded-lg bg-white/10 backdrop-blur-md"
    >
      <h2 className="text-3xl font-cursive text-center text-white mb-6">
        Welcome to Ifeoma's Garden
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="password"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter PIN"
            className="w-full px-4 py-2 text-center text-xl rounded-lg border-2 border-white/20 bg-white/10 text-white focus:border-coral focus:outline-none"
            required
          />
        </div>
        
        {error && (
          <p className="text-coral text-center">{error}</p>
        )}
        
        <button
          type="submit"
          disabled={isLoading || pin.length !== 4}
          className="w-full py-2 bg-coral/80 hover:bg-coral text-white rounded-lg transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Verifying...' : 'Enter Garden'}
        </button>
      </form>
    </motion.div>
  );
}