import { ThemeConfig } from 'antd';

export const THEME_COLORS = {
  PRIMARY_COLOR: '#2F2B39',
  GRAY_COLOR: '#989898',
  DARK_PRIMARY_COLOR: '#121017',
  DARK_GRAY_COLOR: '#1C1C1C',
  INPUT_GRAY_COLOR: '#373737',
  INPUT_PLACEHOLDER_GRAY_COLOR: '#D8D8D8',
  WHITE_COLOR: '#FFFFFF',
  TRANSPARENT_COLOR: 'transparent',
};

export const THEME_PADDINGS = {
  PAGE_PADDING: 150,
};

export const THEME_BORDER_RADIUS = {
  GENERAL: 20,
};

export const theme = (roundBorders: boolean) =>
  ({
    token: {
      fontFamily: 'Poppins, sans-serif',
      colorPrimary: THEME_COLORS.PRIMARY_COLOR,
      colorBgBase: THEME_COLORS.DARK_PRIMARY_COLOR,
      colorText: THEME_COLORS.GRAY_COLOR,
      colorTextPlaceholder: THEME_COLORS.INPUT_PLACEHOLDER_GRAY_COLOR,
      colorBorder: THEME_COLORS.INPUT_GRAY_COLOR,
      colorBorderSecondary: THEME_COLORS.DARK_GRAY_COLOR,
      fontSize: 16,
      borderRadius: roundBorders ? 20 : 0,
    },
    components: {
      Typography: {
        titleMarginTop: 0,
        fontSizeHeading1: 40,
        fontSizeHeading2: 36,
        fontSizeHeading3: 32,
        fontSizeHeading4: 24,
        fontSizeHeading5: 18,
        fontSizeHeading6: 16,
        colorPrimary: THEME_COLORS.PRIMARY_COLOR,
        colorText: THEME_COLORS.GRAY_COLOR,
      },
      Form: {
        itemMarginBottom: 8,
        verticalLabelPadding: 4,
        colorTextLabel: THEME_COLORS.GRAY_COLOR,
      },
      Layout: {
        bodyBg: THEME_COLORS.DARK_PRIMARY_COLOR,
        headerBg: THEME_COLORS.DARK_GRAY_COLOR,
        headerPadding: 0,
      },
      Button: {
        boxShadow: 'none !important',
        borderRadius: 50,
        colorBgContainer: THEME_COLORS.PRIMARY_COLOR,
        colorText: THEME_COLORS.WHITE_COLOR,
        colorBgTextHover: THEME_COLORS.GRAY_COLOR,
      },
      Input: {
        colorBgContainer: THEME_COLORS.INPUT_GRAY_COLOR,
        colorText: THEME_COLORS.WHITE_COLOR,
        colorTextPlaceholder: THEME_COLORS.INPUT_PLACEHOLDER_GRAY_COLOR,
        borderRadius: 20,
        colorBorder: THEME_COLORS.DARK_GRAY_COLOR,
      },
      Dropdown: {
        algorithm: true,
        borderRadius: 20,
        colorBgContainer: THEME_COLORS.DARK_GRAY_COLOR,
        colorText: THEME_COLORS.WHITE_COLOR,
      },
      Card: {
        borderRadiusLG: 20,
        colorBgContainer: THEME_COLORS.DARK_GRAY_COLOR,
      },
      Modal: {
        borderRadiusLG: 20,
        colorBgContainer: THEME_COLORS.DARK_GRAY_COLOR,
      },
      Select: {
        borderRadius: 20,
        colorBgContainer: THEME_COLORS.INPUT_GRAY_COLOR,
        colorText: THEME_COLORS.WHITE_COLOR,
      },
      Table: {
        borderRadius: 20,
        colorBgContainer: THEME_COLORS.DARK_GRAY_COLOR,
        colorText: THEME_COLORS.WHITE_COLOR,
      },
    },
  }) as ThemeConfig;
