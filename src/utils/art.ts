import { ArtType } from '../@types/art';

type ColorInfoType = Record<string, number>;

type ArtInfoType = {
  colors: ColorInfoType;
}

const getColorInfo = (art: ArtType): ColorInfoType => art.items.reduce((colorInfo: ColorInfoType, artRow: Array<string>): ColorInfoType => {
  const colorsRowInfo = artRow.reduce((rowInfo: ColorInfoType, currentColor: string): ColorInfoType => {
    const currentColorInfo = rowInfo[currentColor];
    const alreadyHasColor = Boolean(currentColorInfo);

    if (alreadyHasColor) {
      return {
        ...rowInfo,
        [currentColor]: currentColorInfo + 1
      };
    } 
    return {
      ...rowInfo,
      [currentColor]: 1
    };
  }, {});
  const newColorInfo = { ...colorInfo };

  Object.entries(colorsRowInfo).forEach(([color, amount]) => {
    const currentColorInfo = newColorInfo[color];
    const alreadyHasColor = Boolean(currentColorInfo);

    if (alreadyHasColor) {
      newColorInfo[color] = currentColorInfo + amount;
    } else {
      newColorInfo[color] = amount;
    }
  });

  return newColorInfo;
}, {});

export const getArtInfo = (art: ArtType): ArtInfoType => ({
  colors: getColorInfo(art)
});

export const createItems = (rows: number, columns: number): Array<Array<string>> => Array(rows).fill(Array(columns).fill('black'));
