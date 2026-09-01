# 🛡️ Travel Safety Score Algorithm

The YatraSecure Safety Index $S$ is computed using a multi-factor weighted equation:

$$S = w_1 C_r + w_2 V_m + w_3 E_c + w_4 W_a + w_5 G_f$$

Where:
- $C_r$ (30%): City Safety & Crime Risk Index.
- $V_m$ (25%): Percentage of ID-verified group members.
- $E_c$ (20%): Emergency contacts registered for active travelers.
- $W_a$ (15%): Real-time weather and climate advisory status.
- $G_f$ (10%): Safe zone geofencing proximity score.

Safety ratings:
- **85 - 100**: 🟢 Excellent Safety (Verified, low risk)
- **70 - 84**: 🟡 Moderate Safety (Standard precautions)
- **< 70**: 🔴 Caution Advised (High alert / severe weather)
