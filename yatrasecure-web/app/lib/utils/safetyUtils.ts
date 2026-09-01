export function getSafetyScoreBadge(score: number): {
  label: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
} {
  if (score >= 85) {
    return {
      label: 'Excellent Safety',
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-500/10',
      borderClass: 'border-emerald-500/30',
    };
  }
  if (score >= 70) {
    return {
      label: 'Good Safety',
      colorClass: 'text-teal-400',
      bgClass: 'bg-teal-500/10',
      borderClass: 'border-teal-500/30',
    };
  }
  if (score >= 50) {
    return {
      label: 'Moderate Safety',
      colorClass: 'text-amber-400',
      bgClass: 'bg-amber-500/10',
      borderClass: 'border-amber-500/30',
    };
  }
  return {
    label: 'High Caution',
    colorClass: 'text-rose-400',
    bgClass: 'bg-rose-500/10',
    borderClass: 'border-rose-500/30',
  };
}
