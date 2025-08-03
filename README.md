# Tea Journal

Welcome to my tea journal. This repository stores information and tasting notes for teas I have bought and tried.  
Each tea has its own markdown file under `teas/`, organized by tea type. Images are stored in `images/`, also organized by type.

### Handy Links:
- More details on this journal can be found [here](/About.md).
- My equipment can be found [here](/Equipment.md).
- The Brew Log can be viewed [here](/BrewLog.md).
- Vendors and their information can be found [here](/Vendors.md).

## Folder Structure
- `README.md` – Index of teas and general information.
- `teas/` – Contains subfolders by tea type, each with markdown files for teas.
- `images/` – Contains subfolders by tea type, with images for teas.

## How to Add a New Tea
1. Go to the folder under `teas/` that matches the tea type (e.g., `teas/green/`).
2. Create a new markdown file named `YEAR-tea-name.md` (e.g., `2023-ichiban-sencha.md`).
3. Add details using the [template](teas/TEMPLATE.md).
4. Place any pictures (processed with this [script](images/ImageConversion.jsx)) in the matching folder under `images/` (e.g., `images/green/2023-ichiban-sencha`) and link them using `![Alt Text](../../images/type/teaName/filename.jpg)`.
5. Add a new row to the table below linking to the notes file.
6. Append session to the [Brew Log](/BrewLog.md).
7. Update (or add) the [Vendor](/Vendors.md) information.

## Tea Index

| Tea Name          | Type  | Style  | Vendor                           | Season | Origin   | [Rating](/About.md#my-rating-scale) | Last Update |Notes File                                 |
|-------------------|-------|--------|----------------------------------|--------|----------|-------------------------------------|-------------|--------------------------------------------|
| Ichiban Sencha    | Green | Sencha | [Yamatoen](/Vendors.md#yamatoen) | 2023   | Nara, JP | 7/10                                | 03/08/2025  | [Notes](teas/green/2023-ichiban-sencha.md) |

