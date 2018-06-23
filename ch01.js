// TRUE Values results only in the below comparisons including values undefined, null, false, 0, "", [], {}, "0", "1", 1, true, NaN, "A"
undefined === undefined
null === null
undefined == null
false == 0
false == ""
false === false
false == []
0 === 0
0 == ""
0 == []
"" === ""
"" == []
1 === 1
"A" === "A"
1 == "1"
"0" == 0
"0" == false
"0"  === "0"
true == 1
true == "1"
true === true

