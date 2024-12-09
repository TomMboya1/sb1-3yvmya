import React from 'react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { partners } from '../data/partners';
import { HandshakeIcon } from 'lucide-react';

export function Partners() {
  return (
    <section id="partners" className="py-16 bg-white">
      <Container>
        <SectionTitle
          title="Our Partners"
          description="Working together with organizations that share our vision for an inclusive and sustainable future."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition group"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 p-8 rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            <HandshakeIcon className="h-8 w-8 text-purple-600" />
            <h3 className="text-2xl font-semibold text-purple-900">Become a Partner</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Join us in our mission to empower women and girls with disabilities. Together, we can create
            lasting change and build more inclusive communities.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Partner With Us
          </button>
        </div>
      </Container>
    </section>
  );
}