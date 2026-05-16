---
dg-home: 
dg-publish: true
---
Parallel connection -> components placed next to each other in parallel + ends are connected like ladder.
- known as *parallel circuit*

###### Current
>[!important]
>In parallel circuit, total current flowing through into or out of the parallel branches is equal to the sum of the individual currents in each parallel branch
>$I = I_1 + I_2$
###### Potential Difference
- across each branch must be same as electromotive force of the cell
- this is because cells are directly connected to the components. 
>[!important]
>In parallel circuit, the p.d. across the parallel branches is the same. 
>$V_\mathcal{E} = V_1 = V_2$

___
Since $I = I_1 + I_2$:
$I = \frac{V_1}{R_1} + \frac{V_2}{R_2}$
$I = V_\mathcal{E} (\frac{1}{R_1} + \frac{1}{R_2})$
$\frac{I}{V_\mathcal{E}}$ = $\frac{1}{R_1} + \frac{1}{R_2}$

We can define effective resistance $R_e$ such that $\frac{I}{V_{\mathcal{E}}}$ = $\frac{1}{R_e}$ = $\frac{1}{R_1} + \frac{1}{R_2}$

Reciprocal of effective resistance is the sum of the reciprocal of the individual resistances. 
simplifying the equation further:
$\frac{1}{R_e} = \frac{R_1 + R_2}{R_1R_2}$
$R_e = \frac{R_1R_2}{R_1 + R_2}$

in special case where $R_1 = R_2 = R$ -> applying above formula will give $R_2 = \frac{R}{2}$
Addition -> current in each branch of the parallel circuit is $\frac{I}{2}$
- this is intuitive -> since we can expect that half current will flow in one branch and other half in other branch

In general if there are n number of parallel connections -> then main current I is the sum of the individual currents flowing in the diff. branches.
$I = I_1 + I_2 + .... I_n$

voltage across these n number of branches are the same, that is
$V_\mathcal{E} = V_1 = V_2 = V_n$

By combining this information:
$I = \frac{V_1}{R_1} + \frac{V_2}{R_2} +…. + \frac{V_n}{R_n}$
$I = V_\mathcal{E} (\frac{1}{R_1} + \frac{1}{R_2} +…+ \frac{1}{R_n})$
$\frac{I}{V_\mathcal{E}} = \frac{1}{R_1} + \frac{1}{R_2}+…+ \frac{1}{R_n}$

>[!formulae]
>The effective resistance $R_e$ such that $R_e =\frac{V_\mathcal{E}}{I}$ becomes:
>$\frac{1}{R_e} = \frac{1}{R_1} + \frac{1}{R_2}+…+ \frac{1}{R_n}$

REVISE, add your tag

In other words -> effective resistance of all the resistors connected in parallel can be represented by. single resistor $R_e$ such that $R_e$ can be found using equation above

>[!important]
>In parallel circuit, the reciprocal of the effective resistance of resistors $\frac{1}{R_e}$ is equal to the sum of the reciprocal of the individual resistances. 

___
