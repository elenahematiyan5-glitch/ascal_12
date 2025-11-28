import React from 'react';

export const BrainIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00bfff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0080ff', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M100 40 C120 40 140 50 150 70 C160 90 160 110 150 130 C140 150 120 160 100 160 C80 160 60 150 50 130 C40 110 40 90 50 70 C60 50 80 40 100 40 Z" fill="none" stroke="url(#brainGradient)" strokeWidth="3" />
    <circle cx="80" cy="70" r="8" fill="#00bfff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="70" r="8" fill="#00bfff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="70" cy="100" r="8" fill="#0080ff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="0.6s" repeatCount="indefinite" />
    </circle>
    <circle cx="130" cy="100" r="8" fill="#0080ff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="0.9s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="130" r="8" fill="#00bfff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1.2s" repeatCount="indefinite" />
    </circle>
    <line x1="80" y1="70" x2="120" y2="70" stroke="#00bfff" strokeWidth="2" opacity="0.5" />
    <line x1="80" y1="70" x2="70" y2="100" stroke="#00bfff" strokeWidth="2" opacity="0.5" />
    <line x1="120" y1="70" x2="130" y2="100" stroke="#00bfff" strokeWidth="2" opacity="0.5" />
    <line x1="70" y1="100" x2="100" y2="130" stroke="#0080ff" strokeWidth="2" opacity="0.5" />
    <line x1="130" y1="100" x2="100" y2="130" stroke="#0080ff" strokeWidth="2" opacity="0.5" />
  </svg>
);

export const BrainTumorIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="35" fill="none" stroke="#00bfff" strokeWidth="2" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="#00bfff" strokeWidth="2" opacity="0.5" />
    <circle cx="55" cy="45" r="8" fill="#ff6b6b" opacity="0.8" />
    <path d="M30 50 Q50 30 70 50" fill="none" stroke="#00bfff" strokeWidth="1.5" />
    <path d="M30 55 Q50 75 70 55" fill="none" stroke="#00bfff" strokeWidth="1.5" />
  </svg>
);

export const LungCancerIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M40 30 Q35 40 35 50 L35 70 Q35 80 45 85 L50 87" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <path d="M60 30 Q65 40 65 50 L65 70 Q65 80 55 85 L50 87" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <ellipse cx="40" cy="45" rx="8" ry="12" fill="#00bfff" opacity="0.3" />
    <ellipse cx="60" cy="45" rx="8" ry="12" fill="#00bfff" opacity="0.3" />
    <circle cx="45" cy="50" r="5" fill="#ff6b6b" opacity="0.8" />
  </svg>
);

export const BitcoinIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="35" fill="none" stroke="#00bfff" strokeWidth="3" />
    <path d="M45 30 L45 70 M55 30 L55 70" stroke="#00bfff" strokeWidth="2" />
    <path d="M40 40 L60 40 Q65 40 65 45 Q65 50 60 50 L40 50 M40 50 L62 50 Q68 50 68 56 Q68 62 62 62 L40 62" fill="none" stroke="#00bfff" strokeWidth="2.5" />
  </svg>
);

export const DiabetesIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="30" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <path d="M50 30 L50 50 L65 50" stroke="#00bfff" strokeWidth="3" strokeLinecap="round" />
    <circle cx="35" cy="35" r="3" fill="#ff6b6b" />
    <circle cx="65" cy="35" r="3" fill="#ff6b6b" />
    <circle cx="35" cy="65" r="3" fill="#ff6b6b" />
    <circle cx="65" cy="65" r="3" fill="#ff6b6b" />
  </svg>
);

export const PsychologistIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="40" r="20" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <path d="M35 60 Q50 75 65 60" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <circle cx="43" cy="38" r="3" fill="#00bfff" />
    <circle cx="57" cy="38" r="3" fill="#00bfff" />
    <path d="M40 48 Q50 52 60 48" fill="none" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 30 Q25 25 25 20 M70 30 Q75 25 75 20" stroke="#00bfff" strokeWidth="2" opacity="0.6" />
  </svg>
);

export const WebDesignIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="20" width="80" height="60" rx="5" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <line x1="10" y1="32" x2="90" y2="32" stroke="#00bfff" strokeWidth="2.5" />
    <circle cx="18" cy="26" r="2" fill="#00bfff" />
    <circle cx="25" cy="26" r="2" fill="#00bfff" />
    <circle cx="32" cy="26" r="2" fill="#00bfff" />
    <rect x="20" y="42" width="25" height="25" fill="#00bfff" opacity="0.3" />
    <line x1="52" y1="45" x2="80" y2="45" stroke="#00bfff" strokeWidth="2" />
    <line x1="52" y1="52" x2="75" y2="52" stroke="#00bfff" strokeWidth="2" />
    <line x1="52" y1="59" x2="80" y2="59" stroke="#00bfff" strokeWidth="2" />
  </svg>
);

export const TemplateIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="15" y="15" width="70" height="70" rx="5" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <line x1="15" y1="30" x2="85" y2="30" stroke="#00bfff" strokeWidth="2" />
    <line x1="50" y1="30" x2="50" y2="85" stroke="#00bfff" strokeWidth="2" />
    <rect x="22" y="38" width="20" height="15" fill="#00bfff" opacity="0.3" />
    <rect x="58" y="38" width="20" height="15" fill="#00bfff" opacity="0.3" />
    <rect x="22" y="60" width="20" height="15" fill="#00bfff" opacity="0.3" />
    <rect x="58" y="60" width="20" height="15" fill="#00bfff" opacity="0.3" />
  </svg>
);

export const OfficeIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="20" y="25" width="60" height="50" rx="3" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <line x1="30" y1="35" x2="70" y2="35" stroke="#00bfff" strokeWidth="2" />
    <line x1="30" y1="45" x2="70" y2="45" stroke="#00bfff" strokeWidth="2" />
    <line x1="30" y1="55" x2="70" y2="55" stroke="#00bfff" strokeWidth="2" />
    <line x1="30" y1="65" x2="55" y2="65" stroke="#00bfff" strokeWidth="2" />
    <circle cx="25" cy="35" r="2" fill="#00bfff" />
    <circle cx="25" cy="45" r="2" fill="#00bfff" />
    <circle cx="25" cy="55" r="2" fill="#00bfff" />
  </svg>
);

export const RobotIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="30" y="35" width="40" height="40" rx="5" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <circle cx="42" cy="50" r="5" fill="#00bfff" opacity="0.6" />
    <circle cx="58" cy="50" r="5" fill="#00bfff" opacity="0.6" />
    <line x1="38" y1="63" x2="62" y2="63" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" />
    <rect x="45" y="20" width="10" height="15" fill="none" stroke="#00bfff" strokeWidth="2" />
    <circle cx="50" cy="17" r="4" fill="#00bfff" />
    <line x1="25" y1="50" x2="30" y2="50" stroke="#00bfff" strokeWidth="2.5" />
    <line x1="70" y1="50" x2="75" y2="50" stroke="#00bfff" strokeWidth="2.5" />
  </svg>
);

export const MedicalIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="50" r="30" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <rect x="42" y="35" width="16" height="30" fill="#00bfff" opacity="0.6" />
    <rect x="35" y="42" width="30" height="16" fill="#00bfff" opacity="0.6" />
  </svg>
);

export const AIModelIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="30" cy="50" r="8" fill="none" stroke="#00bfff" strokeWidth="2" />
    <circle cx="50" cy="30" r="8" fill="none" stroke="#00bfff" strokeWidth="2" />
    <circle cx="50" cy="70" r="8" fill="none" stroke="#00bfff" strokeWidth="2" />
    <circle cx="70" cy="50" r="8" fill="none" stroke="#00bfff" strokeWidth="2" />
    <line x1="35" y1="46" x2="45" y2="35" stroke="#00bfff" strokeWidth="2" />
    <line x1="35" y1="54" x2="45" y2="65" stroke="#00bfff" strokeWidth="2" />
    <line x1="55" y1="35" x2="65" y2="46" stroke="#00bfff" strokeWidth="2" />
    <line x1="55" y1="65" x2="65" y2="54" stroke="#00bfff" strokeWidth="2" />
    <circle cx="50" cy="50" r="5" fill="#00bfff" />
  </svg>
);

export const GraphicDesignIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="25" y="25" width="50" height="50" rx="3" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <circle cx="40" cy="43" r="7" fill="#00bfff" opacity="0.6" />
    <polygon points="25,75 45,55 60,65 75,45 75,75" fill="#00bfff" opacity="0.4" />
    <line x1="30" y1="30" x2="70" y2="70" stroke="#00bfff" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

export const SmartSystemIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="30" y="30" width="40" height="40" rx="5" fill="none" stroke="#00bfff" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="12" fill="none" stroke="#00bfff" strokeWidth="2" />
    <line x1="50" y1="15" x2="50" y2="28" stroke="#00bfff" strokeWidth="2" />
    <line x1="50" y1="72" x2="50" y2="85" stroke="#00bfff" strokeWidth="2" />
    <line x1="15" y1="50" x2="28" y2="50" stroke="#00bfff" strokeWidth="2" />
    <line x1="72" y1="50" x2="85" y2="50" stroke="#00bfff" strokeWidth="2" />
    <circle cx="50" cy="50" r="4" fill="#00bfff" />
  </svg>
);
