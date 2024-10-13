// Count lines in all javascript files in the current directory

$TotalLines = 0
Get-ChildItem -Filter *.js | ForEach-Object {
    $lines = (Get-Content $_.FullName | Measure-Object -Line).Lines
    $_.Name + ": " + $lines
    $TotalLines += $lines
}
"Total lines: " + $TotalLines