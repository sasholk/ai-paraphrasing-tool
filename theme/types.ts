import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    form: Palette['primary'];
  }
  interface PaletteOptions {
    form?: PaletteOptions['primary'];
  }
}
