export interface ICustomeButtonProps {
  icon?: string;
  mode?:
    | 'text'
    | 'outlined'
    | 'contained'
    | 'elevated'
    | 'contained-tonal'
    | undefined;
  buttonColor?: string;
  buttonStyle?: any;
  disabled?: boolean;
  loading?: boolean;
  loadingStyle?: any;
  rippleColor?: string;
  onPress?: (item?: any) => void;
  onLongPress?: (item?: any) => void;

  title?: string;
  textStyle?: any;
  textColor?: string;
}
