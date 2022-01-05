# Ciphering CLI Tool

CLI tool for encoding and decoding a text by 3 substitution ciphers:
- Caesar cipher
- Atbash cipher
- ROT-8 as variation of ROT-13

###Installation

You will need Node `>=14.17.0` and NPM installed locally.

Open the project
```
cd ciphering-cli-tool
```

Install dependencies
```
npm install
```
###Usage
CLI tool accept 3 options:
1. -c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
   - X is a cipher mark:
   - C is for Caesar cipher (with shift 1)
   - A is for Atbash cipher
   - R is for ROT-8 cipher
   - Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
   - 1 is for encoding
   - 0 is for decoding
```
"C1-C0-A-R1-R0-A-R0-R0-C1-A"
```
2. -i, --input: a path to input file
```
"./input.txt"
```
3. -o, --output: a path to output file
```
"./output.txt"
```

###Example of usage:
```
node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```