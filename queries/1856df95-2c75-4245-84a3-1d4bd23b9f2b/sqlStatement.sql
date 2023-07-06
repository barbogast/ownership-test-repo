select 
(select sum(value) from aaa where country = 'belgium') as belgium,
(select sum(value) from aaa where country = 'greece') as greece,
(select sum(value) from aaa where country = 'us') as us,
(select sum(value) from aaa where country = 'uk') as uk