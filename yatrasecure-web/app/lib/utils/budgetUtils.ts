export function calculateDailyAllowance(totalBudget: number, days: number, bufferPercent: number = 15): {
  dailyAllowance: number;
  emergencyBuffer: number;
  availableSpend: number;
} {
  const emergencyBuffer = (totalBudget * bufferPercent) / 100;
  const availableSpend = totalBudget - emergencyBuffer;
  const dailyAllowance = Math.floor(availableSpend / Math.max(1, days));

  return {
    dailyAllowance,
    emergencyBuffer,
    availableSpend,
  };
}
