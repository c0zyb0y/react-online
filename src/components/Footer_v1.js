import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({title, website, address, zipcode, isOpen}) => {

    // const {title, website, address, zipcode} = props;

    // const nickName = "PooH"
    return (
        <div>
            <h3 style={styles.title}> {title} &copy; {new Date().getFullYear()}</h3>
            <p style={{color:'green', fontSize: 18}}>{website} {address} {zipcode} {isOpen.toString()}</p>
        </div>
    )
}


const styles = {
    title : {
        color :'red'
    }
}

Footer.propTypes = {
    title : PropTypes.string,
    website : PropTypes.string,
    address : PropTypes.string,
    zipcode : PropTypes.number,
    isOpen : PropTypes.bool 
};

export default Footer
