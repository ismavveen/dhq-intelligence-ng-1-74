
import React from 'react';
import ThreatAnalyticsSection from '../components/ThreatAnalyticsSection';
import ChartsSection from '../components/ChartsSection';
import { BarChart3 } from 'lucide-react';

const Charts = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="mb-10 animate-fade-in-up">
        <div className="flex items-center space-x-4">
          <BarChart3 className="h-8 w-8 text-cyan-400" />
          <div>
            <h1 className="text-4xl font-bold text-white mb-3 dhq-heading tracking-tight">
              Real-Time Threat Analytics & Intelligence
            </h1>
            <p className="text-gray-300 text-xl dhq-body font-medium">
              Statistical Threat Analysis Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Threat Analytics Section */}
      <div className="animate-fade-in-up">
        <ThreatAnalyticsSection />
      </div>

      {/* Real-Time Charts Section */}
      <div className="animate-fade-in-up">
        <ChartsSection />
      </div>
    </div>
  );
};

export default Charts;
