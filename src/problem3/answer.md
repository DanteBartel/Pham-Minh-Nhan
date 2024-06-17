## List out the computational inefficiencies and anti-patterns found in the problem code block

1. The `WalletBalance` interface is missing `blockchain` attribute. Also, implement `FormattedWalletBalance` as extends of `WalletBalance`.
2. When using `useMemo` for `sortedBalances`, `prices` is not used so we need to remove it to prevent unessesary computation.
3. When using `map` to create `rows`, we must use `formattedBalances` instead of `sortedBalances`
4. When using `filter` on `balances`, `lhsPriority` needed to change into `balancePriority`. Also, the right filtering condition is `balance.amount > 0` because we only want to use wallet that has position amount of money.
5. Adding `return 0;` to consider `rightPriority` = `rightPriority` when sorting.