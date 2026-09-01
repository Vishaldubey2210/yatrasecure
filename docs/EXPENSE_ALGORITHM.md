# 💳 Debt Simplification Algorithm

When multiple members in a group trip pay for varied shared expenses, a naive settlement requires $O(N^2)$ transactions.

YatraSecure implements an optimal **Graph Reduction Debt Simplification Algorithm**:
1. Calculate the net balance for each participant:
   $$\text{Net Balance}_i = \text{Total Paid}_i - \text{Total Share}_i$$
2. Separate participants into **Creditors** (net $> 0$) and **Debtors** (net $< 0$).
3. Greedily match the largest debtor with the largest creditor:
   $$\text{Amount} = \min(|\text{debt}|, \text{credit})$$
4. Reduce transactions from $O(N^2)$ to at most $N-1$ optimal transfers.
