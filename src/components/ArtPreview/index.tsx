import React, { ReactElement, useMemo } from 'react';

import { ArtType } from '../../@types/art';
import { colors } from '../../config/constants';
import { getArtInfo } from '../../utils/art';
import Board from '../Board';

import { StyledPreview, StyledTitle, StyledName, StyledContainer, StyledColors, StyledColor } from './styles';

export default function ArtPreview({ name, itemWidth, items, marginBetween, id }: ArtType): ReactElement {
  const art = useMemo(() => ({ name, itemWidth, items, marginBetween, id }), [name, itemWidth, items, marginBetween, id]);
  const artInfo = useMemo(() => getArtInfo(art), [art]);

  return (
    <StyledContainer>
      <StyledTitle>
        <StyledName>{name}</StyledName>
      </StyledTitle>
      <StyledPreview>
        <Board
          items={items}
          margin={marginBetween}
          size={itemWidth}
          color={colors.BLACK}
        />
      </StyledPreview>
      <StyledColors>
        {Object.entries(artInfo?.colors ?? {}).map(([color, colorAmount]) => (
          <StyledColor color={color} key={`${color}-${colorAmount}`}>
            {colorAmount}
          </StyledColor>
        ))}
      </StyledColors>
    </StyledContainer>
  );
}
