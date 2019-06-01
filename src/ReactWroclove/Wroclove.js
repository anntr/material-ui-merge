import React from "react";
import PropTypes from "prop-types";

export default function Wroclove(props) {
  return (
    <button style={style} onClick={props.onClick}>
      {`Merge ❤️ ${props.city}`}
    </button>
  );
}

const style = {
 width: '100%',
  minWidth: 260,
 height: 90,
 backgroundColor: 'pink',
  fontSize: '26px',
  borderRadius: '6px',
  padding: 16,
}

Wroclove.propTypes = {
  onClick: PropTypes.func,
  city: PropTypes.oneOf(['Wrocław', 'Gdańsk', 'Poznań', 'Warszawa', 'Kraków'])
}
