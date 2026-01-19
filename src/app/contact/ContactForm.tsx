'use client';

import { useState, FormEvent } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        {submitStatus.type && (
          <div
            className={`p-4 rounded-md ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
            placeholder="Your organization"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
            placeholder="Your phone number"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
            placeholder="Your message"
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div>
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Request Demo'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
