const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    dark3: '#8092AF',
    gray1: '#7D8797',
    gray2: '#E9E9E9',
    gray3: '#EDEEF0',
    blue1: '#0066CB',
    black: '#000000',
    black2: 'rgba(0,0,0, 0.5)',
    red1: '#E06379'
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    tertiary: mainColors.blue1,
    white: 'white',
    black: 'black',
    disable: mainColors.gray3,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.gray1,
        menuInacvtive: mainColors.dark2,
        menuActive: mainColors.green1,
        subTitle: mainColors.dark3
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: 'white'
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1,
        }
    },
    border: mainColors.gray2,
    cardLight: mainColors.green2,
    LoadingBacground: mainColors.black2,
    error: mainColors.red1
};
