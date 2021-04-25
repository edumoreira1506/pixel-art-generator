export const APP_TITLE = 'Pixel Art Generator';

export const configKeys = {
  ITEM_WIDTH: 'itemWidth',
  COLUMNS: 'columns',
  MARGIN_BETWEEN: 'marginBetween',
  ROWS: 'rows',
  COLOR: 'color'
};

export const routes = {
  HOME: '/',
  LOGIN: '/login',
  ART: (artId: string): string => `/art/${artId}`
};

export const colors = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  GREY: '#CCCCCC'
};

export const DEFAULT_RADIUS = 5;
