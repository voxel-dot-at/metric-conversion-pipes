# metric-conversion-pipes

Useful angular Unit conversion pipes

Inspired by https://github.com/vimalavinisha/angular2-metric-conversion-pipes, Angular 6 updated version

Supported TempConversions pipes- C-F, C-K, F-C, F-K, K-F, K-C
    C -> Celsius,
    F -> Fahrenheit ,
    K-> Kelvin
    Example: Celsius To Fahrenheit Conversion: {{temperature | TempConversions:'C-F'}}
Supported Mass/Weight pipes- G-KG, G-LB, G-OZ, KG-G, KG-LB, KG-OZ, LB-G, LB-KG, LB-OZ, OZ-G, OZ-KG,OZ-LB
    G -> Gram
    KG-> KiloGram
    LB -> Pound
    OZ -> Ounce
    Example: Weight Kg to LB Conversion: {{ mass| massConversions:'KG-LB':2}}
Supported LengthConversions pipes- FT-CM, FT-M, FT-IN, FT-MI, FT-YD, IN-FT, IN-M, IN-MI, IN-YD, IN-CM, CM-FT,CM-IN, CM-M, CM-YD, CM-MI, MM-IN, IN-MM, M-FT, M-IN, M-CM, MI-IN, MI-FT, MI-CM, YD-FT, YD-IN, YD-CM
    MM -> Milimeter
    CM -> Centimeter
    M -> Meter
    IN-> Inches
    FT -> Foot(Feet)
    MI -> Mile
    YD -> Yard
    Example: LengthConversions from CM to Inches: {{length | lengthConversions:'CM-IN'}


Removed from the original version are the decimal length and the unit name. The values input values and the output are both number. That way we can format the the value with the next pipe.