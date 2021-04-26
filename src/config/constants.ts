export const APP_TITLE = 'Pixel Art Generator';

export const configKeys = {
  ITEM_WIDTH: 'itemWidth',
  COLUMNS: 'columns',
  MARGIN_BETWEEN: 'marginBetween',
  ROWS: 'rows',
  COLOR: 'color',
  NAME: 'name',
  FOLDER: 'folder'
};

export const routes = {
  HOME: '/',
  LOGIN: '/login',
  ART: (folderId: string, artId: string): string => `/folder/${folderId}/art/${artId}`,
  NEW_ART: '/art/new',
};

export const colors = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  GREY: '#CCCCCC'
};

export const DEFAULT_RADIUS = 5;
