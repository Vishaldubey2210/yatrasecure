# 🤖 AI Booking Agents Architecture

YatraSecure features autonomous travel booking agents powered by Groq LLMs and structured Python agents (`booking_agents.py`).

## Workflow
1. **User Intent Parser**: Extracts destination, budget, dates, and accommodation preferences.
2. **Flight & Rail Searcher**: Searches for optimal travel routes minimizing transit duration.
3. **Safety Validator**: Filters accommodations with safety ratings >= 85%.
4. **Budget Optimizer**: Allocates budget across stay, food, activities, and emergency buffer.
5. **Confirmation & Itinerary Sync**: Automatically populates the trip calendar and checklist.
