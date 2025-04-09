'use client';

import { useState } from 'react';
import SolarRequestForm from '@/components/SolarRequestForm';

export default function RequestPage() {
  return (
    <div className="min-h-screen py-12 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkest">Request Solar Information</h1>
            <p className="text-lg text-neutral-dark">
              Why pay full price for electricity when the Nevada sun can power your home for free?
              Fill out the form below to learn how you can start saving with solar energy.
            </p>
          </div>
          
          <SolarRequestForm />
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-primary-desert">Why Henderson Homeowners Are Switching to Solar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-sun mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Stop Paying Full Price for Electricity
                </h3>
                <p className="text-neutral-dark mb-4">
                  With Nevada's abundant sunshine, your roof can generate free electricity for 25+ years. Why continue paying rising utility rates when you can produce your own power?
                </p>
                <p className="text-neutral-dark">
                  The average Henderson homeowner saves $1,200 annually after switching to solar, with many eliminating their electric bills entirely.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-sun mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Henderson's Perfect Solar Conditions
                </h3>
                <p className="text-neutral-dark mb-4">
                  Henderson receives over 300 days of sunshine per year, making it one of the best locations in the country for solar energy production.
                </p>
                <p className="text-neutral-dark">
                  Our desert climate means your solar panels will operate at peak efficiency, maximizing your energy production and savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
