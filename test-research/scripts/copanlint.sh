#!/bin/sh

ERROR_MESSAGE="Invalid component, please use Copan http://copan.loft.technology/"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

declare -a arr=(
    Backdrop
    BottomNavigation
    Button
    IconButton
    Checkbox
    Chip
    CircularProgress
    Container
    Dialog
    Heading
    LinearProgress
    Link
    Menu
    Paragraph
    Radio
    Select
    Slider
    Snackbar
    Switch
    Tabs
    Tag
    Text
    TextField
    Tooltip
    Typography
    Sheets
)

for component in "${arr[@]}"
do
    count="$( grep -sn " $component" $(git ls-files -m) | grep '@material' | wc -l )"
    if [[ $count -gt 0 ]]; then
        echo "${RED}Invalid component $component, please use Copan http://copan.loft.technology/${NC}"
        grep -sn "$component" $(git ls-files -m) | grep '@material'
        exit 1
        break
    fi
done

echo "${GREEN}Copan usage looks nice. You rock! :)${NC}"