import './button.styles.scss'

const BUTTON_CLASS_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType,  ...otherProps}) => {
    return (
        <button {...otherProps} className={`${BUTTON_CLASS_TYPES[buttonType]} button-container`}>
            {children}
        </button>
    )
}

export default Button;