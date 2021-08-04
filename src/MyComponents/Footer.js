import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "35vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center py-2 ">
                Copyright &copy; Todo-List.com
            </p>
        </footer>
    )
}
