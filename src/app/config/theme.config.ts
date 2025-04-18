import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const customPreset = definePreset(Aura, {
  primitive: {
    green: {
      50: 'red',
      100: '#C6F2CC',
      200: '#A8EAB2',
      300: '#8BE29A',
      400: '#6DE682',
      500: '#4FE06B',
      600: '#3BBF5B',
      700: '#28A94C',
      800: '#199D41',
      900: '#0B9137',
      950: '#008D2D'
    },
    blue: {
      50: '#3F8CFF',
      100: '#3A81EB',
      200: '#1F6DE0'
    }
  },
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}'
    },
    success: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}'
    },

    formField: {
      paddingX: '18px',
      paddingY: '0.75rem',
      borderRadius: '14px',
      focusShadow: '0 0 0 0.2rem {primary.50}20',
      fontSize: '14px'
    },

    colorScheme: {
      light: {
        formField: {
          hoverBorderColor: '{primary.50}',
          focusBorderColor: '{primary.50}'
        }
      }
    }
    // inputText: {
    //   hoverBorderColor: '{primary.color}'
    // }
  }
});
